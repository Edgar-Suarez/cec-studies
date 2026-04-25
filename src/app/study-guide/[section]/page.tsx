import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  STUDY_GUIDE_SECTIONS_META,
  isValidStudyGuideSectionId,
  type StudyGuideSectionId,
} from '../../../data/studyGuide'
import { loadStudyGuideSection } from '../../../data/studyGuide-loader'
import { questions } from '../../../data/questions'
import { Badge, Card } from '@/shared/components/ui'
import { SectionSidebar } from '../_components/section-sidebar'
import { SubsectionCard } from '../_components/subsection-card'

interface PageProps {
  params: Promise<{ section: string }>
}

/**
 * Pre-render every available section as a static page at build time.
 * Each route gets its own bundle that only includes the matching
 * `studyGuide-section*.ts` data file (thanks to literal `import()` in
 * `studyGuide-loader.ts`).
 */
export function generateStaticParams() {
  return STUDY_GUIDE_SECTIONS_META.map((s) => ({ section: s.id }))
}

export default async function StudyGuideSectionPage({ params }: PageProps) {
  const { section } = await params

  if (!isValidStudyGuideSectionId(section)) {
    notFound()
  }

  const guide = await loadStudyGuideSection(section)
  if (!guide) {
    notFound()
  }

  const sectionQuestionCount = questions.filter((q) => q.section === section).length

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-display font-bold text-primary">Study Guide</h1>
        <p className="text-secondary text-sm mt-1">
          Learn each CEC section with clear explanations, real scenarios, and exam key points
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <SectionSidebar currentSectionId={section as StudyGuideSectionId} />

        <main className="flex-1 min-w-0">
          <div className="space-y-4">
            {/* Section header */}
            <Card elevation="elev-1" padding="md">
              <h2 className="text-xl font-display font-bold text-primary">{guide.title}</h2>
              <p className="text-secondary text-sm mt-1">{guide.description}</p>
              <div className="flex gap-2 mt-3 flex-wrap items-center">
                <Badge variant="info">{guide.subsections.length} topics</Badge>
                <Badge variant="success">
                  <span className="font-mono">{sectionQuestionCount}</span> quiz questions
                </Badge>
                <Link
                  href="/quiz"
                  className="text-xs font-mono uppercase tracking-wide text-warning hover:text-primary transition-colors duration-75"
                >
                  Practice this section →
                </Link>
              </div>
            </Card>

            {/* Subsection cards (server-rendered HTML, no client JS for content) */}
            {guide.subsections.map((sub) => (
              <SubsectionCard key={sub.id} subsection={sub} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
