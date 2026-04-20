import type { Question } from '../../lib/types'
import { section2QuizQuestions } from './section-02'

export const generatedQuestions: Question[] = [...section2QuizQuestions]

export const generatedQuestionsBySection = generatedQuestions.reduce<Record<string, Question[]>>(
  (acc, q) => {
    if (!acc[q.section]) acc[q.section] = []
    acc[q.section].push(q)
    return acc
  },
  {},
)

export const generatedSections = [...new Set(generatedQuestions.map((q) => q.section))]
