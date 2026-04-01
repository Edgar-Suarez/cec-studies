import type { UserProgress, QuizSession, FlashcardProgress, WeaknessData } from './types'

const STORAGE_KEY = 'cec-study-progress'

export function getDefaultProgress(): UserProgress {
  return {
    totalQuestionsAnswered: 0,
    totalCorrect: 0,
    examHistory: [],
    flashcardProgress: {},
    weakSections: {},
    lastStudied: new Date().toISOString(),
    streak: 0,
  }
}

export function loadProgress(): UserProgress {
  if (typeof window === 'undefined') return getDefaultProgress()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return getDefaultProgress()
    const parsed = JSON.parse(raw) as UserProgress
    return { ...getDefaultProgress(), ...parsed }
  } catch {
    return getDefaultProgress()
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {
    // ignore storage errors
  }
}

export function saveSession(session: QuizSession): void {
  const progress = loadProgress()

  progress.examHistory = [session, ...progress.examHistory].slice(0, 50)
  progress.totalQuestionsAnswered += session.totalQuestions
  progress.totalCorrect += session.score
  progress.lastStudied = new Date().toISOString()

  // Update streak
  const today = new Date().toDateString()
  const lastStudied = new Date(progress.lastStudied).toDateString()
  if (lastStudied !== today) {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    if (new Date(progress.lastStudied).toDateString() === yesterday.toDateString()) {
      progress.streak += 1
    } else {
      progress.streak = 1
    }
  }

  saveProgress(progress)
}

export function updateFlashcard(questionId: string, correct: boolean): void {
  const progress = loadProgress()

  const existing: FlashcardProgress = progress.flashcardProgress[questionId] ?? {
    questionId,
    seen: 0,
    correct: 0,
    incorrect: 0,
    lastSeen: new Date().toISOString(),
    nextReview: new Date().toISOString(),
    interval: 1,
    ease: 2.5,
  }

  existing.seen += 1
  existing.lastSeen = new Date().toISOString()

  if (correct) {
    existing.correct += 1
    // SM-2: increase interval
    existing.interval = Math.round(existing.interval * existing.ease)
    existing.ease = Math.min(existing.ease + 0.1, 3.0)
  } else {
    existing.incorrect += 1
    // Reset interval on failure
    existing.interval = 1
    existing.ease = Math.max(existing.ease - 0.2, 1.3)
  }

  const nextDate = new Date()
  nextDate.setDate(nextDate.getDate() + existing.interval)
  existing.nextReview = nextDate.toISOString()

  progress.flashcardProgress[questionId] = existing
  saveProgress(progress)
}

export function updateFlashcardSM2(questionId: string, rating: 1 | 2 | 3 | 4): void {
  const progress = loadProgress()

  const existing: FlashcardProgress = progress.flashcardProgress[questionId] ?? {
    questionId,
    seen: 0,
    correct: 0,
    incorrect: 0,
    lastSeen: new Date().toISOString(),
    nextReview: new Date().toISOString(),
    interval: 1,
    ease: 2.5,
  }

  existing.seen += 1
  existing.lastSeen = new Date().toISOString()

  // SM-2 algorithm
  if (rating < 3) {
    existing.incorrect += 1
    existing.interval = 1
    existing.ease = Math.max(existing.ease - 0.3, 1.3)
  } else {
    existing.correct += 1
    if (existing.seen === 1) {
      existing.interval = 1
    } else if (existing.seen === 2) {
      existing.interval = 6
    } else {
      existing.interval = Math.round(existing.interval * existing.ease)
    }
    // Adjust ease based on rating
    existing.ease = Math.max(
      1.3,
      existing.ease + (0.1 - (4 - rating) * 0.08)
    )
  }

  const nextDate = new Date()
  nextDate.setDate(nextDate.getDate() + existing.interval)
  existing.nextReview = nextDate.toISOString()

  progress.flashcardProgress[questionId] = existing
  saveProgress(progress)
}

export function updateWeakSection(
  section: string,
  sectionTitle: string,
  correct: boolean
): void {
  const progress = loadProgress()
  if (!progress.weakSections[section]) {
    progress.weakSections[section] = { correct: 0, total: 0, title: sectionTitle }
  }
  progress.weakSections[section].total += 1
  if (correct) progress.weakSections[section].correct += 1
  progress.weakSections[section].title = sectionTitle
  saveProgress(progress)
}

export function getWeaknesses(): WeaknessData[] {
  const progress = loadProgress()
  const weaknesses: WeaknessData[] = Object.entries(progress.weakSections)
    .filter(([, data]) => data.total >= 3)
    .map(([section, data]) => ({
      section,
      sectionTitle: data.title ?? section,
      totalAttempts: data.total,
      correctAttempts: data.correct,
      accuracy: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
    }))
    .sort((a, b) => a.accuracy - b.accuracy)

  return weaknesses
}

export function getDueFlashcards(questionIds: string[]): string[] {
  const progress = loadProgress()
  const now = new Date()

  return questionIds.filter((id) => {
    const fp = progress.flashcardProgress[id]
    if (!fp) return true // never seen = due
    return new Date(fp.nextReview) <= now
  })
}

export function clearProgress(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
}
