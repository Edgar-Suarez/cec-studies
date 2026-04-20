import { extractRules } from '../scripts/extract-rules'

const rules = extractRules('2')
console.log(`Section 2: ${rules.length} rules extracted`)
console.log('First 5:')
rules.slice(0, 5).forEach((r) => {
  console.log(`  ${r.ruleNumber} — ${r.ruleTitle.slice(0, 60)}`)
  console.log(`    complexity=${r.heuristicComplexity} hasTable=${r.hasTable} hasExc=${r.hasExceptions} hasSub=${r.hasSubsections} bodyLen=${r.ruleText.length}`)
})
console.log('\nLast 3:')
rules.slice(-3).forEach((r) => console.log(`  ${r.ruleNumber} — ${r.ruleTitle.slice(0, 60)}`))
console.log('\nRule numbers count by prefix:')
const groups: Record<string, number> = {}
rules.forEach((r) => {
  const hundred = Math.floor(parseInt(r.ruleNumber.split('-')[1]) / 100) * 100
  const key = `2-${hundred.toString().padStart(3, '0')}`
  groups[key] = (groups[key] ?? 0) + 1
})
console.log(groups)
console.log('\nComplexity breakdown:')
console.log(`  simple: ${rules.filter((r) => r.heuristicComplexity === 'simple').length}`)
console.log(`  complex: ${rules.filter((r) => r.heuristicComplexity === 'complex').length}`)
