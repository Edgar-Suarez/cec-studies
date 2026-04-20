import Anthropic from '@anthropic-ai/sdk'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { GeneratedQuestion, RuleChunk, CostSnapshot } from './types'

const SYSTEM_PROMPT = readFileSync(
  join(__dirname, '..', 'prompts', 'system.md'),
  'utf8',
)

const TOOL_SCHEMA = JSON.parse(
  readFileSync(join(__dirname, '..', 'prompts', 'schema.json'), 'utf8'),
) as {
  name: string
  description: string
  input_schema: Record<string, unknown>
}

const PRICING: Record<string, { inputPerMTok: number; outputPerMTok: number }> = {
  'claude-sonnet-4-6': { inputPerMTok: 3, outputPerMTok: 15 },
  'claude-opus-4-7': { inputPerMTok: 5, outputPerMTok: 25 },
  'claude-opus-4-6': { inputPerMTok: 5, outputPerMTok: 25 },
  'claude-haiku-4-5': { inputPerMTok: 1, outputPerMTok: 5 },
}

function priceFor(model: string): { inputPerMTok: number; outputPerMTok: number } {
  return PRICING[model] ?? PRICING['claude-sonnet-4-6']
}

export interface LlmAnalyzeOptions {
  model: string
  maxTokens?: number
  temperature?: number
}

export interface LlmAnalyzeResult {
  questions: GeneratedQuestion[]
  usage: CostSnapshot
  stopReason: string | null
}

function buildUserMessage(chunk: RuleChunk, retryFeedback?: string): string {
  const parts = [
    `ruleNumber: ${chunk.ruleNumber}`,
    `ruleTitle: ${chunk.ruleTitle}`,
    `section: ${chunk.section} (${chunk.sectionTitle})`,
    `complexity: ${chunk.heuristicComplexity}`,
    `hasTable: ${chunk.hasTable}`,
    `hasExceptions: ${chunk.hasExceptions}`,
    `hasSubsections: ${chunk.hasSubsections}`,
  ]
  if (chunk.prevRuleNumber) parts.push(`previousRule: ${chunk.prevRuleNumber}`)
  if (chunk.nextRuleNumber) parts.push(`nextRule: ${chunk.nextRuleNumber}`)
  parts.push('', '--- RULE TEXT (authoritative — do not use outside knowledge) ---', chunk.ruleText)
  parts.push('', 'Call the generate_questions tool now.')
  if (retryFeedback) {
    parts.push('', '--- RETRY FEEDBACK (previous attempt failed validation) ---', retryFeedback)
  }
  return parts.join('\n')
}

function computeCost(
  usage: Anthropic.Messages.Usage,
  model: string,
): number {
  const p = priceFor(model)
  const freshInput = usage.input_tokens * p.inputPerMTok
  const cacheWrite = (usage.cache_creation_input_tokens ?? 0) * p.inputPerMTok * 1.25
  const cacheRead = (usage.cache_read_input_tokens ?? 0) * p.inputPerMTok * 0.1
  const output = usage.output_tokens * p.outputPerMTok
  return (freshInput + cacheWrite + cacheRead + output) / 1_000_000
}

function extractToolInput(message: Anthropic.Messages.Message): unknown {
  const toolBlock = message.content.find(
    (b): b is Anthropic.Messages.ToolUseBlock => b.type === 'tool_use',
  )
  if (!toolBlock) {
    throw new Error(
      `LLM did not call the generate_questions tool. stop_reason=${message.stop_reason}. ` +
        `Content types: ${message.content.map((b) => b.type).join(',')}`,
    )
  }
  return toolBlock.input
}

export async function analyzeRule(
  client: Anthropic,
  chunk: RuleChunk,
  options: LlmAnalyzeOptions,
  retryFeedback?: string,
): Promise<LlmAnalyzeResult> {
  const response = await client.messages.create({
    model: options.model,
    max_tokens: options.maxTokens ?? 2048,
    temperature: options.temperature ?? 0.2,
    system: [
      {
        type: 'text',
        text: SYSTEM_PROMPT,
        cache_control: { type: 'ephemeral' },
      },
    ],
    tools: [
      {
        name: TOOL_SCHEMA.name,
        description: TOOL_SCHEMA.description,
        input_schema: TOOL_SCHEMA.input_schema as Anthropic.Messages.Tool.InputSchema,
      },
    ],
    tool_choice: { type: 'tool', name: TOOL_SCHEMA.name },
    messages: [{ role: 'user', content: buildUserMessage(chunk, retryFeedback) }],
  })

  const toolInput = extractToolInput(response) as { questions?: GeneratedQuestion[] }
  const questions = Array.isArray(toolInput.questions) ? toolInput.questions : []

  const usage: CostSnapshot = {
    inputTokens: response.usage.input_tokens,
    cachedInputTokens: response.usage.cache_read_input_tokens ?? 0,
    cacheCreationTokens: response.usage.cache_creation_input_tokens ?? 0,
    outputTokens: response.usage.output_tokens,
    totalUsd: computeCost(response.usage, options.model),
  }

  return {
    questions,
    usage,
    stopReason: response.stop_reason,
  }
}

export function createClient(): Anthropic {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error(
      'ANTHROPIC_API_KEY not set. Add it to .env.local and ensure the process loads it (e.g., `npx tsx -r dotenv/config ...` or export before running).',
    )
  }
  return new Anthropic({ apiKey })
}

export { SYSTEM_PROMPT, TOOL_SCHEMA }
