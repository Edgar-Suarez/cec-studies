import type { Question } from '../../../../src/lib/types'

export type RuleComplexity = 'simple' | 'complex'

export interface RuleChunk {
  ruleNumber: string
  ruleTitle: string
  ruleText: string
  hasTable: boolean
  hasExceptions: boolean
  hasSubsections: boolean
  heuristicComplexity: RuleComplexity
  prevRuleNumber?: string
  nextRuleNumber?: string
  section: string
  sectionTitle: string
}

export interface GeneratedQuestion {
  question: string
  options: [string, string, string, string]
  correctAnswer: 0 | 1 | 2 | 3
  explanation: string
  ruleReference: string
  ruleComplexity: RuleComplexity
  tags: string[]
}

export interface ValidatedQuestion extends GeneratedQuestion {
  ruleNumber: string
}

export interface PipelineConfig {
  section: string
  pdfPath: string
  outputPath: string
  errorsPath: string
  model: string
  overwrite: boolean
  dryRun: boolean
  verbose: boolean
  ruleFilter?: { from: string; to: string }
}

export interface RuleProcessingResult {
  ruleNumber: string
  questions: ValidatedQuestion[]
  error?: {
    type: string
    message: string
    attempts: number
    rawResponse?: string
  }
}

export interface CostSnapshot {
  inputTokens: number
  cachedInputTokens: number
  cacheCreationTokens: number
  outputTokens: number
  totalUsd: number
}

export type { Question }
