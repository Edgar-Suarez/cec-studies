import Link from 'next/link'
import {
  STUDY_GUIDE_SECTIONS_META,
  type StudyGuideSectionId,
} from '../../../data/studyGuide'
import { questions, allSections } from '../../../data/questions'

interface SectionSidebarProps {
  currentSectionId: StudyGuideSectionId
}

/**
 * Server Component. Renders the list of available study guide sections
 * (from STUDY_GUIDE_SECTIONS_META — does NOT import any section data file)
 * plus the "coming soon" entries (sections that have questions but no
 * study guide yet).
 *
 * The active section is highlighted; clicking another section navigates
 * via Next.js Link to /study-guide/{id}.
 */
export function SectionSidebar({ currentSectionId }: SectionSidebarProps) {
  // Per-section question counts (cheap: just filtering an in-memory array).
  const questionCountBySection = questions.reduce<Record<string, number>>(
    (acc, q) => {
      acc[q.section] = (acc[q.section] || 0) + 1
      return acc
    },
    {}
  )

  // "Coming soon": sections that have questions but aren't in the study guide.
  const studyGuideIds = new Set<string>(STUDY_GUIDE_SECTIONS_META.map((s) => s.id))
  const comingSoon = allSections.filter((id) => !studyGuideIds.has(id))

  return (
    <aside className="lg:w-72 shrink-0">
      <div className="text-xs text-muted uppercase tracking-wider font-semibold mb-3 font-mono">
        CEC Sections
      </div>

      <nav className="space-y-2">
        {STUDY_GUIDE_SECTIONS_META.map((s) => {
          const isActive = s.id === currentSectionId
          const questionCount = questionCountBySection[s.id] ?? 0

          return (
            <Link
              key={s.id}
              href={`/study-guide/${s.id}`}
              className={`block w-full text-left px-4 py-3 rounded-lg border transition-colors duration-75 ${
                isActive
                  ? 'bg-surface-elevated-2 border-accent text-accent'
                  : 'bg-surface-elevated border-subtle text-primary hover:border-strong hover:bg-surface-elevated-2'
              }`}
            >
              <div className="font-semibold text-sm">{s.title}</div>
              <div className="text-xs text-muted mt-1 font-mono">
                {s.topicCount} topics · {questionCount} questions
              </div>
            </Link>
          )
        })}

        {comingSoon.map((id) => {
          const sample = questions.find((q) => q.section === id)
          return (
            <div
              key={id}
              className="w-full text-left px-4 py-3 rounded-lg border border-subtle text-muted opacity-60"
            >
              <div className="font-semibold text-sm">
                Section {id} — {sample?.sectionTitle ?? 'Coming Soon'}
              </div>
              <div className="text-xs mt-1">Study guide pending</div>
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
