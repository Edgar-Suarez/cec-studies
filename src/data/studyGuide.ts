/**
 * Static metadata for the Study Guide sections.
 *
 * This file MUST NOT import any `studyGuide-section*.ts` file.
 * The whole point of the refactor is that the sidebar / route table
 * can be built from this constant alone (a few KB), and each section's
 * heavy data is only loaded on demand by `studyGuide-loader.ts`.
 *
 * To add a new section: add an entry here AND a switch case in
 * `studyGuide-loader.ts`. Both files are the single source of truth.
 *
 * `topicCount` is the number of subsections in each section, used by
 * the sidebar to display "{topicCount} topics" without having to load
 * the section file. If you add/remove subsections in any
 * `studyGuide-section*.ts`, update the matching count below. The
 * counts can be regenerated with:
 *   grep -c "^    id:" src/data/studyGuide-section*.ts
 */

export const STUDY_GUIDE_SECTIONS_META = [
  { id: '2', title: 'Section 2 — General Rules', topicCount: 9 },
  { id: '4', title: 'Section 4 — Conductors', topicCount: 12 },
  { id: '6', title: 'Section 6 — Services and Service Equipment', topicCount: 12 },
  { id: '8', title: 'Section 8 — Circuit Loading and Demand Factors', topicCount: 12 },
  { id: '10', title: 'Section 10 — Grounding and Bonding', topicCount: 12 },
  { id: '12', title: 'Section 12 — Wiring Methods', topicCount: 14 },
  { id: '14', title: 'Section 14 — Protection and Control', topicCount: 10 },
  { id: '16', title: 'Section 16 — Class 1 and Class 2 Circuits', topicCount: 15 },
  { id: '18', title: 'Section 18 — Hazardous Locations', topicCount: 10 },
  {
    id: '20',
    title:
      'Section 20 — Flammable Liquid and Gasoline Dispensing, Service Stations, Garages, Bulk Storage Plants, Finishing Processes, and Aircraft Hangars',
    topicCount: 12,
  },
  {
    id: '22',
    title:
      'Section 22 — Locations in Which Corrosive Liquids, Vapours, or Excessive Moisture Are Likely to Be Present',
    topicCount: 10,
  },
  { id: '24', title: 'Section 24 — Patient Care Areas', topicCount: 8 },
  { id: '26', title: 'Section 26 — Installation of Electrical Equipment', topicCount: 18 },
  { id: '28', title: 'Section 28 — Motors and Generators', topicCount: 11 },
] as const

export type StudyGuideSectionId = (typeof STUDY_GUIDE_SECTIONS_META)[number]['id']

export const STUDY_GUIDE_SECTION_IDS: readonly string[] =
  STUDY_GUIDE_SECTIONS_META.map((s) => s.id)

export function isValidStudyGuideSectionId(id: string): id is StudyGuideSectionId {
  return STUDY_GUIDE_SECTION_IDS.includes(id)
}
