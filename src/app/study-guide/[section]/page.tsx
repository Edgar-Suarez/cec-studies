import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  STUDY_GUIDE_SECTIONS_META,
  isValidStudyGuideSectionId,
  type StudyGuideSectionId,
} from '../../../data/studyGuide'
import { loadStudyGuideSection } from '../../../data/studyGuide-loader'
import { questions } from '../../../data/questions'
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
        <h1 className="text-2xl font-bold text-white">Study Guide</h1>
        <p className="text-gray-400 text-sm mt-1">
          Learn each CEC section with clear explanations, real scenarios, and exam key points
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <SectionSidebar currentSectionId={section as StudyGuideSectionId} />

        <main className="flex-1 min-w-0">
          <div className="space-y-4">
            {/* Section header */}
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl px-5 py-4">
              <h2 className="text-xl font-bold text-white">{guide.title}</h2>
              <p className="text-gray-400 text-sm mt-1">{guide.description}</p>
              <div className="flex gap-4 mt-3 flex-wrap">
                <span className="text-xs text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full">
                  {guide.subsections.length} topics
                </span>
                <span className="text-xs text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full">
                  {sectionQuestionCount} quiz questions
                </span>
                <Link
                  href="/quiz"
                  className="text-xs text-yellow-400 bg-yellow-500/10 px-2.5 py-1 rounded-full hover:bg-yellow-500/20 transition-colors"
                >
                  Practice this section →
                </Link>
              </div>
            </div>

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
