export interface Question {
  id: string
  section: string
  sectionTitle: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  tags: string[]
}

export interface QuizSession {
  id: string
  date: string
  questions: string[]
  answers: Record<string, number>
  score: number
  totalQuestions: number
  timeSpent: number
  mode: 'practice' | 'exam' | 'weakness'
}

export interface FlashcardProgress {
  questionId: string
  seen: number
  correct: number
  incorrect: number
  lastSeen: string
  nextReview: string
  interval: number
  ease: number
}

export interface WeaknessData {
  section: string
  sectionTitle: string
  totalAttempts: number
  correctAttempts: number
  accuracy: number
}

export interface SketchNode {
  id: string
  x: number
  y: number
  w: number
  h: number
  label: string
  color?: string
  type?: 'rect' | 'ellipse' | 'diamond'
}

export interface SketchEdge {
  from: string
  to: string
  label?: string
}

export interface SketchData {
  nodes: SketchNode[]
  edges: SketchEdge[]
  width?: number
  height?: number
}

export interface InfoCard {
  icon: string
  title: string
  note: string
  color?: 'sky' | 'rose' | 'amber' | 'emerald' | 'violet' | 'slate'
}

export interface StudyGuideSubsection {
  id: string
  title: string
  rules: string
  explanation: string
  fieldScenario: string
  keyPoints: string[]
  diagramaMermaid: string
  sketchData?: SketchData
  infoCards?: InfoCard[]
}

export interface StudyGuideSection {
  section: string
  title: string
  description: string
  subsections: StudyGuideSubsection[]
}

export interface UserProgress {
  totalQuestionsAnswered: number
  totalCorrect: number
  examHistory: QuizSession[]
  flashcardProgress: Record<string, FlashcardProgress>
  weakSections: Record<string, { correct: number; total: number; title: string }>
  lastStudied: string
  streak: number
}
