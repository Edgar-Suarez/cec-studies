import { z } from 'zod'
import type {
  GeneratedQuestion,
  RuleChunk,
  ValidatedQuestion,
  RuleProcessingResult,
  CostSnapshot,
} from './types'
import { analyzeRule, type LlmAnalyzeOptions } from './llm-analyze'
import type Anthropic from '@anthropic-ai/sdk'

export const QuestionSchema = z.object({
  question: z.string().min(10).max(500),
  options: z.array(z.string().min(1).max(300)).length(4),
  correctAnswer: z.number().int().min(0).max(3),
  explanation: z.string().min(20).max(2000),
  ruleReference: z
    .string()
    .regex(/^Rule \d+-\d+$/, 'ruleReference must match pattern "Rule X-YYY"'),
  ruleComplexity: z.enum(['simple', 'complex']),
  tags: z.array(z.string().min(1).max(50).regex(/^[a-z0-9-]+$/)).min(2).max(5),
})

export const QuestionsPayloadSchema = z.object({
  questions: z.array(QuestionSchema).min(1).max(3),
})

export class ValidationError extends Error {
  constructor(
    public readonly reason: string,
    public readonly details?: unknown,
  ) {
    super(reason)
    this.name = 'ValidationError'
  }
}

function crossValidate(
  q: GeneratedQuestion,
  chunk: RuleChunk,
): { ok: true } | { ok: false; reason: string } {
  const expectedRef = `Rule ${chunk.ruleNumber}`
  if (q.ruleReference !== expectedRef) {
    return {
      ok: false,
      reason: `ruleReference mismatch: got "${q.ruleReference}", expected "${expectedRef}"`,
    }
  }
  if (!q.explanation.includes(expectedRef)) {
    return {
      ok: false,
      reason: `explanation must literally cite "${expectedRef}" — current explanation does not contain it`,
    }
  }
  const lowerOpts = q.options.map((o) => o.toLowerCase().trim())
  if (new Set(lowerOpts).size !== lowerOpts.length) {
    return { ok: false, reason: 'options contain duplicates (case-insensitive, trimmed)' }
  }
  const requiredTag = `rule-${chunk.ruleNumber.toLowerCase()}`
  if (!q.tags.includes(requiredTag)) {
    return {
      ok: false,
      reason: `tags must include "${requiredTag}" — got [${q.tags.join(', ')}]`,
    }
  }
  return { ok: true }
}

export function validateBatch(
  rawQuestions: unknown,
  chunk: RuleChunk,
): { questions: ValidatedQuestion[]; errors: string[] } {
  const parsed = QuestionsPayloadSchema.safeParse(rawQuestions)
  if (!parsed.success) {
    return {
      questions: [],
      errors: [`Zod schema validation failed: ${parsed.error.message}`],
    }
  }

  const errors: string[] = []
  const validated: ValidatedQuestion[] = []

  for (let i = 0; i < parsed.data.questions.length; i++) {
    const q = parsed.data.questions[i]
    if (q.question.trim().toUpperCase().startsWith('SKIP:')) {
      errors.push(`question ${i + 1}: SKIP marker — ${q.question}`)
      continue
    }
    const cross = crossValidate(q, chunk)
    if (!cross.ok) {
      errors.push(`question ${i + 1}: ${cross.reason}`)
      continue
    }
    validated.push({ ...(q as GeneratedQuestion), ruleNumber: chunk.ruleNumber })
  }

  return { questions: validated, errors }
}

export interface AnalyzeWithRetryOptions extends LlmAnalyzeOptions {
  maxRetries?: number
}

export async function analyzeAndValidate(
  client: Anthropic,
  chunk: RuleChunk,
  options: AnalyzeWithRetryOptions,
): Promise<RuleProcessingResult & { usage: CostSnapshot }> {
  const maxRetries = options.maxRetries ?? 2
  let accumulatedUsage: CostSnapshot = {
    inputTokens: 0,
    cachedInputTokens: 0,
    cacheCreationTokens: 0,
    outputTokens: 0,
    totalUsd: 0,
  }
  let lastErrors: string[] = []
  let lastRaw: unknown = undefined

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const retryFeedback =
      attempt === 0
        ? undefined
        : `Previous attempt produced these validation errors. Fix them and return again:\n${lastErrors.map((e) => `- ${e}`).join('\n')}`

    const { questions, usage, stopReason } = await analyzeRule(
      client,
      chunk,
      options,
      retryFeedback,
    )
    accumulatedUsage = accumulate(accumulatedUsage, usage)
    lastRaw = questions

    const { questions: validated, errors } = validateBatch({ questions }, chunk)
    if (validated.length > 0 && errors.length === 0) {
      return {
        ruleNumber: chunk.ruleNumber,
        questions: validated,
        usage: accumulatedUsage,
      }
    }
    if (validated.length > 0 && errors.length > 0) {
      // Partial success: take the valid ones, log the invalid ones.
      return {
        ruleNumber: chunk.ruleNumber,
        questions: validated,
        usage: accumulatedUsage,
        error: {
          type: 'partial_validation',
          message: `${errors.length} of ${questions.length} questions failed validation`,
          attempts: attempt + 1,
          rawResponse: JSON.stringify(questions).slice(0, 500),
        },
      }
    }
    lastErrors = errors.length > 0 ? errors : [`LLM returned empty. stop_reason=${stopReason}`]
  }

  return {
    ruleNumber: chunk.ruleNumber,
    questions: [],
    usage: accumulatedUsage,
    error: {
      type: 'validation_exhausted',
      message: `All ${maxRetries + 1} attempts failed validation`,
      attempts: maxRetries + 1,
      rawResponse: JSON.stringify(lastRaw).slice(0, 500),
    },
  }
}

function accumulate(a: CostSnapshot, b: CostSnapshot): CostSnapshot {
  return {
    inputTokens: a.inputTokens + b.inputTokens,
    cachedInputTokens: a.cachedInputTokens + b.cachedInputTokens,
    cacheCreationTokens: a.cacheCreationTokens + b.cacheCreationTokens,
    outputTokens: a.outputTokens + b.outputTokens,
    totalUsd: a.totalUsd + b.totalUsd,
  }
}
