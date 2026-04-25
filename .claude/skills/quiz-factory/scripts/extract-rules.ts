import { spawnSync } from 'node:child_process'
import { existsSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import type { RuleChunk, RuleComplexity } from './types'
import { SECTION_TITLES } from '../../../../src/data/quizzes/section-titles'

export function resolvePdfPath(section: string, pdfDir?: string): string {
  const dir = pdfDir ?? findFuentesDir()
  const files = readdirSync(dir)
  const pattern = new RegExp(`^Section\\s*${section}\\s*-?\\s*Canadian Electrical Code\\.pdf$`, 'i')
  const match = files.find((f) => pattern.test(f))
  if (!match) {
    const available = files.filter((f) => f.endsWith('.pdf')).join(', ')
    throw new Error(
      `No PDF found for section ${section} in ${dir}.\nAvailable PDFs: ${available || '(none)'}`,
    )
  }
  return join(dir, match)
}

function findFuentesDir(): string {
  let cwd = process.cwd()
  for (let i = 0; i < 6; i++) {
    const candidate = join(cwd, 'fuentes')
    if (existsSync(candidate)) return resolve(candidate)
    const parent = resolve(cwd, '..')
    if (parent === cwd) break
    cwd = parent
  }
  throw new Error(
    'Could not locate `fuentes/` directory walking up from CWD. Pass --pdf-dir <path> explicitly.',
  )
}

export function runPdftotext(pdfPath: string): string {
  const result = spawnSync('pdftotext', ['-layout', '-nopgbrk', pdfPath, '-'], {
    encoding: 'utf8',
    maxBuffer: 50 * 1024 * 1024,
  })
  if (result.error) {
    if ((result.error as NodeJS.ErrnoException).code === 'ENOENT') {
      throw new Error(
        'pdftotext not found in PATH. Install poppler:\n' +
          '  macOS:  brew install poppler\n' +
          '  Linux:  sudo apt-get install poppler-utils',
      )
    }
    throw result.error
  }
  if (result.status !== 0) {
    throw new Error(
      `pdftotext exited with code ${result.status}.\nstderr: ${result.stderr?.toString() ?? '(empty)'}`,
    )
  }
  return result.stdout
}

const GARBAGE_PATTERNS: RegExp[] = [
  /^Copyright\b/i,
  /^Document provided by\b/i,
  /^No reproduction\b/i,
  /^Not for Resale\b/i,
  /^Licensee=/,
  /^\s*©\s*\d{4}/,
  /^January\s+\d{4}\b.*©/,
  /^Section\s+\d+\s*$/,
  /^CSA C22\.\d/,
  /^[\s`\-,'"]{15,}$/,
]

function cleanText(raw: string): string {
  return raw
    .split('\n')
    .map((line) => line.trimEnd())
    .filter((line) => {
      const trimmed = line.trim()
      if (!trimmed) return true
      if (GARBAGE_PATTERNS.some((re) => re.test(trimmed))) return false
      const alphaNumRatio =
        (trimmed.match(/[a-zA-Z0-9]/g)?.length ?? 0) / trimmed.length
      return alphaNumRatio > 0.35
    })
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
}

const RULE_LINE_RE = /^(\d{1,3}-\d{1,4})(?!\s*\()\s+(.+?)\s*$/

export function chunkRules(
  cleaned: string,
  section: string,
  sectionTitle: string,
): RuleChunk[] {
  const lines = cleaned.split('\n')
  const chunks: Array<{ num: string; title: string; body: string[]; startLine: number }> = []
  let current: { num: string; title: string; body: string[]; startLine: number } | null = null
  const sectionPrefix = `${section}-`

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()
    const match = trimmed.match(RULE_LINE_RE)
    if (match && match[1].startsWith(sectionPrefix)) {
      if (current) chunks.push(current)
      current = { num: match[1], title: match[2].trim(), body: [], startLine: i }
    } else if (current) {
      current.body.push(line)
    }
  }
  if (current) chunks.push(current)

  return chunks.map((c, idx) => {
    const prev = idx > 0 ? chunks[idx - 1].num : undefined
    const next = idx < chunks.length - 1 ? chunks[idx + 1].num : undefined
    const fullText = `${c.num} ${c.title}\n${c.body.join('\n').trim()}`
    return buildRuleChunk({
      ruleNumber: c.num,
      ruleTitle: c.title,
      ruleText: fullText,
      prevRuleNumber: prev,
      nextRuleNumber: next,
      section,
      sectionTitle,
    })
  })
}

function buildRuleChunk(partial: {
  ruleNumber: string
  ruleTitle: string
  ruleText: string
  prevRuleNumber?: string
  nextRuleNumber?: string
  section: string
  sectionTitle: string
}): RuleChunk {
  const { ruleText } = partial
  const hasTable = /\bTabl(?:e|a)\s+\d+[A-Z]?\b/i.test(ruleText)
  const hasExceptions = /\bExcept(?:ion|ing)\b/i.test(ruleText)
  const hasSubsections = /(?:^|\n)\s*[a-z]\)\s/.test(ruleText) || /(?:^|\n)\s*\d+\)\s/.test(ruleText)
  const flagsTrue = [hasTable, hasExceptions, hasSubsections].filter(Boolean).length
  const heuristicComplexity: RuleComplexity = flagsTrue >= 1 ? 'complex' : 'simple'

  return {
    ...partial,
    hasTable,
    hasExceptions,
    hasSubsections,
    heuristicComplexity,
  }
}

export function extractRules(section: string, pdfPath?: string): RuleChunk[] {
  const path = pdfPath ?? resolvePdfPath(section)
  if (!existsSync(path)) {
    throw new Error(`PDF not found at ${path}`)
  }
  const sectionTitle = SECTION_TITLES[section]
  if (!sectionTitle) {
    throw new Error(
      `Unknown section "${section}". Known sections: ${Object.keys(SECTION_TITLES).join(', ')}`,
    )
  }
  const raw = runPdftotext(path)
  const cleaned = cleanText(raw)
  const chunks = chunkRules(cleaned, section, sectionTitle)
  if (chunks.length === 0) {
    const preview = cleaned.slice(0, 500)
    throw new Error(
      `No rules extracted from ${path}. Regex pattern may not match this PDF variant.\nFirst 500 chars of cleaned text:\n${preview}`,
    )
  }
  return chunks
}
