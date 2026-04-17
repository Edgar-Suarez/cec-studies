import type { StudyGuideSubsection } from '../../../lib/types'
import { SubsectionTabs } from './subsection-tabs'

interface SubsectionCardProps {
  subsection: StudyGuideSubsection
}

/**
 * Server Component shell for one subsection. Renders the static header
 * (title + rule range) as plain HTML, then mounts the
 * `<SubsectionTabs>` client island for the interactive content.
 *
 * Note: passing the entire subsection object to a client island is
 * fine — every field is plain JSON-serializable (strings, numbers,
 * arrays, plain objects). React will serialize it across the
 * server/client boundary automatically.
 */
export function SubsectionCard({ subsection }: SubsectionCardProps) {
  return (
    <article className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
      <header className="px-5 py-4 border-b border-gray-700">
        <h3 className="text-lg font-bold text-white">{subsection.title}</h3>
        <span className="text-xs text-blue-400 font-mono mt-1 inline-block">
          {subsection.rules}
        </span>
      </header>

      <SubsectionTabs subsection={subsection} />
    </article>
  )
}
