import type { StudyGuideSection } from '../lib/types'

/**
 * Dynamically loads a single study guide section by id.
 *
 * IMPORTANT: We use a switch with literal `import()` paths so that
 * Turbopack/Webpack can statically analyze each branch and emit
 * a separate chunk per section. NEVER replace this with a template
 * literal like `import(\`./studyGuide-section${id}.ts\`)` — that
 * would force the bundler to include every section file in one chunk,
 * defeating the entire point of this refactor.
 *
 * Note: filenames are zero-padded (`studyGuide-section02.ts`) but
 * exports are NOT (`section2Guide`). Don't "fix" this — it's the
 * existing convention in the data files.
 */
export async function loadStudyGuideSection(
  id: string
): Promise<StudyGuideSection | null> {
  switch (id) {
    case '2':
      return (await import('./studyGuide-section02')).section2Guide
    case '4':
      return (await import('./studyGuide-section04')).section4Guide
    case '6':
      return (await import('./studyGuide-section06')).section6Guide
    case '8':
      return (await import('./studyGuide-section08')).section8Guide
    case '10':
      return (await import('./studyGuide-section10')).section10Guide
    case '12':
      return (await import('./studyGuide-section12')).section12Guide
    case '14':
      return (await import('./studyGuide-section14')).section14Guide
    case '16':
      return (await import('./studyGuide-section16')).section16Guide
    case '18':
      return (await import('./studyGuide-section18')).section18Guide
    case '20':
      return (await import('./studyGuide-section20')).section20Guide
    case '22':
      return (await import('./studyGuide-section22')).section22Guide
    case '24':
      return (await import('./studyGuide-section24')).section24Guide
    case '26':
      return (await import('./studyGuide-section26')).section26Guide
    case '28':
      return (await import('./studyGuide-section28')).section28Guide
    default:
      return null
  }
}
