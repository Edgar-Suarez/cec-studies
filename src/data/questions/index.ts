import type { Question } from '../../lib/types'
import { section2Questions } from './section-02'

export const questions: Question[] = [
  ...section2Questions,
]

export const questionsBySection = questions.reduce<Record<string, Question[]>>(
  (acc, q) => {
    if (!acc[q.section]) acc[q.section] = []
    acc[q.section].push(q)
    return acc
  },
  {}
)

export const allSections = [...new Set(questions.map((q) => q.section))]
