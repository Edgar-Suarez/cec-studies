import type { StudyGuideSubsection } from '../../../lib/types'
import { Card } from '@/shared/components/ui'
import { SubsectionTabs } from './subsection-tabs'

interface SubsectionCardProps {
  subsection: StudyGuideSubsection
}

/**
 * Server Component shell for one subsection. Renders the static header
 * (title + rule range) as plain HTML, then mounts the
 * `<SubsectionTabs>` client island for the interactive content.
 */
export function SubsectionCard({ subsection }: SubsectionCardProps) {
  return (
    <Card elevation="elev-1" padding="none" className="overflow-hidden">
      <header className="px-5 py-4 border-b border-subtle">
        <h3 className="text-lg font-display font-bold text-primary">{subsection.title}</h3>
        <span className="text-xs text-accent font-mono mt-1 inline-block">
          {subsection.rules}
        </span>
      </header>

      <SubsectionTabs subsection={subsection} />
    </Card>
  )
}
