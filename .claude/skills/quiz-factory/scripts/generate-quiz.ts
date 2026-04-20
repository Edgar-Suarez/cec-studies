import { parseArgs } from 'node:util'
import { readFileSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { extractRules, resolvePdfPath } from './extract-rules'
import { analyzeAndValidate } from './validate'
import { createClient } from './llm-analyze'
import { CostTracker } from './cost-tracker'
import {
  writeOutput,
  defaultOutputPath,
  defaultErrorsPath,
  type WriteOutputReport,
} from './write-output'
import { SECTION_TITLES } from '../../../../src/data/questions/section-titles'
import type { RuleChunk, RuleProcessingResult } from './types'
import Anthropic from '@anthropic-ai/sdk'

const ALL_SECTIONS = ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28']
const DEFAULT_MODEL = 'claude-sonnet-4-6'
const USAGE = `
quiz-factory — Generate CEC quizzes from PDFs

USAGE:
  npx tsx .claude/skills/quiz-factory/scripts/generate-quiz.ts [options]

OPTIONS:
  --section N           Section number (e.g. 2, 4, 12). Required unless --all.
  --all                 Process all approved sections (${ALL_SECTIONS.join(', ')}).
  --overwrite           Regenerate from scratch (default: append-safe).
  --dry-run             Extract + LLM analyze without writing output.
  --model <id>          Claude model id (default: ${DEFAULT_MODEL}).
  --verbose             Log per-rule progress.
  --rule-filter A-B..C-D  Only process rules in range (e.g. 12-100..12-200).
  --pdf-dir <path>      Override PDF directory (default: auto-detect fuentes/).
  --quizzes-dir <path>  Output directory (default: src/data/quizzes).
  --help                Show this message.

EXAMPLES:
  # Generate Section 2 (calibration)
  npx tsx .claude/skills/quiz-factory/scripts/generate-quiz.ts --section 2 --verbose

  # Dry-run Section 12
  npx tsx .claude/skills/quiz-factory/scripts/generate-quiz.ts --section 12 --dry-run
`.trim()

interface ParsedArgs {
  section?: string
  all: boolean
  overwrite: boolean
  dryRun: boolean
  model: string
  verbose: boolean
  ruleFilter?: { from: string; to: string }
  pdfDir?: string
  quizzesDir: string
  help: boolean
}

function parseCliArgs(): ParsedArgs {
  const { values } = parseArgs({
    options: {
      section: { type: 'string' },
      all: { type: 'boolean', default: false },
      overwrite: { type: 'boolean', default: false },
      'dry-run': { type: 'boolean', default: false },
      model: { type: 'string', default: DEFAULT_MODEL },
      verbose: { type: 'boolean', default: false },
      'rule-filter': { type: 'string' },
      'pdf-dir': { type: 'string' },
      'quizzes-dir': { type: 'string' },
      help: { type: 'boolean', default: false },
    },
    strict: true,
  })

  let ruleFilter: { from: string; to: string } | undefined
  if (values['rule-filter']) {
    const m = values['rule-filter'].match(/^(\d+-\d+)\.\.(\d+-\d+)$/)
    if (!m) {
      console.error(`Invalid --rule-filter "${values['rule-filter']}". Format: A-B..C-D (e.g. 12-100..12-200).`)
      process.exit(1)
    }
    ruleFilter = { from: m[1], to: m[2] }
  }

  return {
    section: values.section,
    all: values.all ?? false,
    overwrite: values.overwrite ?? false,
    dryRun: values['dry-run'] ?? false,
    model: values.model ?? DEFAULT_MODEL,
    verbose: values.verbose ?? false,
    ruleFilter,
    pdfDir: values['pdf-dir'],
    quizzesDir: values['quizzes-dir']
      ? resolve(values['quizzes-dir'])
      : resolve(process.cwd(), 'src/data/quizzes'),
    help: values.help ?? false,
  }
}

function loadEnvLocal(): void {
  for (const candidate of ['.env.local', '.env']) {
    if (!existsSync(candidate)) continue
    const content = readFileSync(candidate, 'utf8')
    for (const line of content.split('\n')) {
      const t = line.trim()
      if (!t || t.startsWith('#')) continue
      const eq = t.indexOf('=')
      if (eq < 0) continue
      const key = t.slice(0, eq).trim()
      let value = t.slice(eq + 1).trim()
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1)
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1)
      if (!process.env[key]) process.env[key] = value
    }
  }
}

function inRange(ruleNumber: string, filter: { from: string; to: string }): boolean {
  const toNum = (s: string): number => {
    const [a, b] = s.split('-').map(Number)
    return a * 10000 + b
  }
  const n = toNum(ruleNumber)
  return n >= toNum(filter.from) && n <= toNum(filter.to)
}

async function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms))
}

async function withBackoff<T>(
  fn: () => Promise<T>,
  ruleNumber: string,
  maxAttempts = 5,
): Promise<T> {
  let lastErr: unknown
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (err) {
      lastErr = err
      const status = err instanceof Anthropic.APIError ? err.status : undefined
      const retryable =
        err instanceof Anthropic.RateLimitError ||
        err instanceof Anthropic.InternalServerError ||
        (status != null && status >= 500)
      if (!retryable || attempt === maxAttempts) break
      const delay = Math.min(1000 * 2 ** (attempt - 1), 16000)
      console.warn(
        `  [${ruleNumber}] API error (status=${status ?? '?'}), retry ${attempt}/${maxAttempts - 1} after ${delay}ms`,
      )
      await sleep(delay)
    }
  }
  throw lastErr
}

async function processSection(
  client: Anthropic,
  section: string,
  args: ParsedArgs,
  tracker: CostTracker,
): Promise<{ report: WriteOutputReport | null; totalRules: number; successRules: number }> {
  if (!SECTION_TITLES[section]) {
    throw new Error(`Section ${section} not in approved list: ${ALL_SECTIONS.join(', ')}`)
  }
  if (section === '30') {
    throw new Error('Section 30 is excluded — PDF is corrupted. See memory/project/section-30-blocker.md.')
  }

  console.log(`\n▲ Section ${section} — ${SECTION_TITLES[section]}`)
  const pdfPath = resolvePdfPath(section, args.pdfDir)
  console.log(`  PDF: ${pdfPath}`)

  let chunks: RuleChunk[]
  try {
    chunks = extractRules(section, pdfPath)
  } catch (err) {
    console.error(`  ✗ Extraction failed: ${err instanceof Error ? err.message : String(err)}`)
    throw err
  }

  if (args.ruleFilter) {
    chunks = chunks.filter((c) => inRange(c.ruleNumber, args.ruleFilter!))
    console.log(`  Rules after --rule-filter: ${chunks.length}`)
  } else {
    console.log(`  Rules extracted: ${chunks.length}`)
  }

  if (chunks.length === 0) {
    console.warn('  ! No rules to process.')
    return { report: null, totalRules: 0, successRules: 0 }
  }

  const results: RuleProcessingResult[] = []
  let success = 0

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i]
    const prefix = `  [${i + 1}/${chunks.length}] ${chunk.ruleNumber}`
    try {
      const r = await withBackoff(
        () => analyzeAndValidate(client, chunk, { model: args.model, maxRetries: 2 }),
        chunk.ruleNumber,
      )
      tracker.add(r.usage)
      results.push(r)
      if (r.questions.length > 0) success++
      if (args.verbose) {
        const status = r.error ? `err=${r.error.type}` : 'ok'
        console.log(
          `${prefix} ${status}, q=${r.questions.length}, $${r.usage.totalUsd.toFixed(4)}`,
        )
      } else if ((i + 1) % 10 === 0 || i === chunks.length - 1) {
        console.log(
          `${prefix} (running total: ${success}/${i + 1} rules, $${tracker.current.totalUsd.toFixed(2)})`,
        )
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.error(`${prefix} ✗ ${msg}`)
      results.push({
        ruleNumber: chunk.ruleNumber,
        questions: [],
        error: {
          type: 'api_exhausted',
          message: msg,
          attempts: 5,
        },
      })
    }
  }

  if (args.dryRun) {
    console.log(`  [dry-run] Skipping file write. ${success}/${chunks.length} rules would produce questions.`)
    return { report: null, totalRules: chunks.length, successRules: success }
  }

  const report = writeOutput({
    section,
    outputPath: defaultOutputPath(section, args.quizzesDir),
    errorsPath: defaultErrorsPath(section, args.quizzesDir),
    results,
    overwrite: args.overwrite,
  })

  console.log(`  ✔ Written: ${report.written} new questions, ${report.skipped} skipped (already present), ${report.errors} errors`)
  console.log(`    Output: ${report.outputPath}`)
  console.log(`    Total questions in file: ${report.finalQuestionCount}`)
  if (report.errorsPath) console.log(`    Errors log: ${report.errorsPath}`)

  return { report, totalRules: chunks.length, successRules: success }
}

async function main(): Promise<void> {
  loadEnvLocal()
  const args = parseCliArgs()

  if (args.help) {
    console.log(USAGE)
    process.exit(0)
  }

  if (!args.section && !args.all) {
    console.error('Error: --section <N> or --all is required.\n')
    console.error(USAGE)
    process.exit(1)
  }

  const sectionsToProcess = args.all
    ? ALL_SECTIONS
    : args.section
      ? [args.section]
      : []

  console.log(`quiz-factory | model=${args.model} | mode=${args.dryRun ? 'dry-run' : args.overwrite ? 'overwrite' : 'append-safe'}`)
  console.log(`Sections to process: ${sectionsToProcess.join(', ')}`)

  const client = createClient()
  const tracker = new CostTracker()
  const startedAt = Date.now()

  let overallSuccess = 0
  let overallTotal = 0
  const errors: string[] = []

  for (const section of sectionsToProcess) {
    try {
      const { totalRules, successRules } = await processSection(client, section, args, tracker)
      overallSuccess += successRules
      overallTotal += totalRules
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      errors.push(`Section ${section}: ${msg}`)
      console.error(`✗ Section ${section} failed: ${msg}`)
    }
  }

  const elapsedSec = ((Date.now() - startedAt) / 1000).toFixed(1)

  console.log('\n─── SUMMARY ───')
  console.log(`Sections processed: ${sectionsToProcess.length}`)
  console.log(`Rules successful:   ${overallSuccess}/${overallTotal}`)
  console.log(`Time elapsed:       ${elapsedSec}s`)
  console.log('Usage:')
  console.log(tracker.format())
  if (errors.length > 0) {
    console.log('\nSection-level errors:')
    for (const e of errors) console.log(`  - ${e}`)
    process.exit(2)
  }
}

main().catch((err) => {
  const status = err instanceof Anthropic.APIError ? err.status : undefined
  if (err instanceof Anthropic.AuthenticationError) {
    console.error('Authentication error (401). Check ANTHROPIC_API_KEY in .env.local.')
    process.exit(4)
  }
  console.error(`\nFatal error${status ? ` (status=${status})` : ''}: ${err instanceof Error ? err.message : String(err)}`)
  process.exit(1)
})
