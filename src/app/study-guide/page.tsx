import { redirect } from 'next/navigation'
import { STUDY_GUIDE_SECTIONS_META } from '../../data/studyGuide'

/**
 * /study-guide root.
 *
 * Redirects to the first available section (Section 2) so that
 * the URL always carries the section id and Next can statically
 * cache the per-section pages.
 */
export default function StudyGuideRedirectPage() {
  const first = STUDY_GUIDE_SECTIONS_META[0]
  redirect(`/study-guide/${first.id}`)
}
