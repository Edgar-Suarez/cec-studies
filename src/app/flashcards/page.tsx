'use client'

import { useState } from 'react'
import Link from 'next/link'
import { questions, allSections } from '../../data/questions'
import type { Question } from '../../lib/types'
import { loadProgress, updateFlashcardSM2, getDueFlashcards } from '../../lib/storage'
import { Badge, Button, Card, Progress } from '@/shared/components/ui'

type FlashcardState = 'front' | 'back'
type ViewMode = 'due' | 'all' | 'section'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const RATING_CONFIG = [
  { rating: 1 as const, label: 'Again', desc: 'Forgot completely', tone: 'danger' as const, eta: 'Soon' },
  { rating: 2 as const, label: 'Hard', desc: 'Difficult to recall', tone: 'warning' as const, eta: '~1d' },
  { rating: 3 as const, label: 'Good', desc: 'Recalled with effort', tone: 'info' as const, eta: '~3d' },
  { rating: 4 as const, label: 'Easy', desc: 'Recalled instantly', tone: 'success' as const, eta: '~7d+' },
]

const TONE_TEXT: Record<'danger' | 'warning' | 'info' | 'success', string> = {
  danger: 'text-danger',
  warning: 'text-warning',
  info: 'text-accent',
  success: 'text-success',
}

export default function FlashcardsPage() {
  const [cardState, setCardState] = useState<FlashcardState>('front')
  const [deck, setDeck] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [viewMode, setViewMode] = useState<ViewMode>('due')
  const [selectedSection, setSelectedSection] = useState<string>(allSections[0] ?? '')
  const [sessionStats, setSessionStats] = useState({ seen: 0, correct: 0 })
  const [isSetup, setIsSetup] = useState(true)
  const [isDone, setIsDone] = useState(false)

  const dueIds = getDueFlashcards(questions.map((q) => q.id))
  const dueCount = dueIds.length

  function buildDeck(mode: ViewMode): Question[] {
    if (mode === 'due') {
      return shuffle(questions.filter((q) => dueIds.includes(q.id)))
    }
    if (mode === 'section') {
      return shuffle(questions.filter((q) => q.section === selectedSection))
    }
    return shuffle(questions)
  }

  function startSession(mode: ViewMode) {
    const d = buildDeck(mode)
    if (d.length === 0) return
    setDeck(d)
    setCurrentIndex(0)
    setCardState('front')
    setSessionStats({ seen: 0, correct: 0 })
    setIsSetup(false)
    setIsDone(false)
  }

  function handleRating(rating: 1 | 2 | 3 | 4) {
    const q = deck[currentIndex]
    if (!q) return
    const correct = rating >= 3
    updateFlashcardSM2(q.id, rating)
    setSessionStats((s) => ({
      seen: s.seen + 1,
      correct: s.correct + (correct ? 1 : 0),
    }))

    if (currentIndex + 1 >= deck.length) {
      setIsDone(true)
    } else {
      setCurrentIndex((i) => i + 1)
      setCardState('front')
    }
  }

  const currentCard = deck[currentIndex]
  const progress2 = loadProgress()

  // SETUP
  if (isSetup) {
    return (
      <div className="p-4 md:p-8 max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Link
            href="/"
            className="text-secondary hover:text-primary transition-colors duration-75"
            aria-label="Back to dashboard"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-2xl font-display font-bold text-primary">Flashcards</h1>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card elevation="elev-1" padding="md" className="text-center">
            <div className="text-2xl font-mono font-bold text-accent">{dueCount}</div>
            <div className="text-secondary text-xs">Due Today</div>
          </Card>
          <Card elevation="elev-1" padding="md" className="text-center">
            <div className="text-2xl font-mono font-bold text-primary">
              {Object.keys(progress2.flashcardProgress).length}
            </div>
            <div className="text-secondary text-xs">Cards Seen</div>
          </Card>
          <Card elevation="elev-1" padding="md" className="text-center">
            <div className="text-2xl font-mono font-bold text-primary">{questions.length}</div>
            <div className="text-secondary text-xs">Total Cards</div>
          </Card>
        </div>

        {/* Mode selection */}
        <Card elevation="elev-1" padding="lg" className="mb-5">
          <h2 className="text-primary font-display font-semibold mb-3">Study Mode</h2>
          <div className="space-y-2">
            {(
              [
                { id: 'due', label: 'Due for Review', desc: `${dueCount} cards scheduled`, icon: '🗓' },
                { id: 'all', label: 'All Cards', desc: `${questions.length} cards`, icon: '📚' },
                { id: 'section', label: 'By Section', desc: 'Choose a specific section', icon: '📁' },
              ] as const
            ).map((m) => (
              <button
                key={m.id}
                onClick={() => setViewMode(m.id)}
                className={`w-full text-left px-4 py-3 rounded-md border transition-colors duration-75 flex items-center gap-3 ${
                  viewMode === m.id
                    ? 'bg-surface-elevated-2 border-accent text-primary'
                    : 'bg-surface-elevated border-subtle text-secondary hover:border-strong'
                }`}
              >
                <span className="text-xl" aria-hidden="true">{m.icon}</span>
                <div>
                  <div className="font-medium text-sm">{m.label}</div>
                  <div className="text-xs text-muted">{m.desc}</div>
                </div>
              </button>
            ))}
          </div>

          {viewMode === 'section' ? (
            <div className="mt-3">
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="w-full h-12 bg-surface-base border border-subtle text-primary rounded-md px-3 text-base outline-none focus:border-strong transition-colors duration-75"
              >
                {allSections.map((s) => {
                  const sample = questions.find((q) => q.section === s)
                  return (
                    <option key={s} value={s}>
                      {sample?.sectionTitle ?? s}
                    </option>
                  )
                })}
              </select>
            </div>
          ) : null}
        </Card>

        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={() => startSession(viewMode)}
          disabled={viewMode === 'due' && dueCount === 0}
        >
          {viewMode === 'due' && dueCount === 0
            ? 'No cards due — try "All Cards"'
            : `Start Studying (${buildDeck(viewMode).length} cards)`}
        </Button>

        {/* SM-2 explanation */}
        <Card elevation="elev-1" padding="md" className="mt-4">
          <h3 className="text-primary font-display font-medium text-sm mb-2">
            How Spaced Repetition Works
          </h3>
          <p className="text-secondary text-xs leading-relaxed">
            Rate each card with Again, Hard, Good, or Easy. Cards you find difficult
            are shown more frequently; easy cards are spaced further apart using the
            SM-2 algorithm. This optimizes your study time and improves long-term retention.
          </p>
          <div className="grid grid-cols-4 gap-1 mt-3">
            {RATING_CONFIG.map((r) => (
              <div key={r.rating} className="text-center">
                <div className={`text-xs font-mono font-bold ${TONE_TEXT[r.tone]}`}>
                  {r.label}
                </div>
                <div className="text-muted text-xs font-mono">{r.eta}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    )
  }

  // DONE SCREEN
  if (isDone) {
    const accuracy = sessionStats.seen > 0 ? Math.round((sessionStats.correct / sessionStats.seen) * 100) : 0
    const accuracyTone =
      accuracy >= 80 ? 'text-success' : accuracy >= 60 ? 'text-warning' : 'text-danger'
    return (
      <div className="p-4 md:p-8 max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-4" aria-hidden="true">{accuracy >= 80 ? '🎉' : '💪'}</div>
        <h1 className="text-3xl font-display font-bold text-primary mb-2">Session Complete!</h1>
        <div className={`text-5xl font-mono font-bold mb-2 ${accuracyTone}`}>{accuracy}%</div>
        <div className="text-secondary mb-6">
          <span className="font-mono">{sessionStats.correct}</span> correct out of{' '}
          <span className="font-mono">{sessionStats.seen}</span> cards
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card elevation="elev-1" padding="md">
            <div className="text-2xl font-mono font-bold text-success">{sessionStats.correct}</div>
            <div className="text-secondary text-xs">Correct (Good + Easy)</div>
          </Card>
          <Card elevation="elev-1" padding="md">
            <div className="text-2xl font-mono font-bold text-danger">
              {sessionStats.seen - sessionStats.correct}
            </div>
            <div className="text-secondary text-xs">Needs Review</div>
          </Card>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="primary" size="lg" onClick={() => startSession(viewMode)}>
            Study Again
          </Button>
          <Button variant="secondary" size="lg" onClick={() => setIsSetup(true)}>
            Change Mode
          </Button>
        </div>
        <Link
          href="/"
          className="block text-secondary hover:text-primary mt-4 text-sm transition-colors duration-75"
        >
          ← Dashboard
        </Link>
      </div>
    )
  }

  // FLASHCARD
  if (!currentCard) return null

  const fp = progress2.flashcardProgress[currentCard.id]
  const cardAccuracy = fp && fp.seen > 0 ? Math.round((fp.correct / fp.seen) * 100) : null

  return (
    <div className="p-4 md:p-8 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => setIsSetup(true)}
          className="text-secondary hover:text-primary transition-colors duration-75"
          aria-label="Back to setup"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1">
          <div className="flex justify-between text-sm text-secondary mb-1.5 font-mono">
            <span>
              {currentIndex + 1} of {deck.length}
            </span>
            <span>
              {sessionStats.seen} rated · {sessionStats.correct} correct
            </span>
          </div>
          <Progress value={currentIndex} max={deck.length} size="sm" />
        </div>
      </div>

      {/* Card — click toggles front/back. (No CSS 3D flip in the original;
          preserving the existing state-swap UX.) */}
      <Card
        elevation="elev-1"
        padding="none"
        interactive
        className="mb-4 min-h-64 overflow-hidden transition-opacity duration-150"
        onClick={() => setCardState((s) => (s === 'front' ? 'back' : 'front'))}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setCardState((s) => (s === 'front' ? 'back' : 'front'))
          }
        }}
      >
        {/* Card header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-subtle">
          <div>
            <div className="text-accent text-xs font-mono font-medium">
              Section {currentCard.section}
            </div>
            <div className="text-secondary text-xs">{currentCard.sectionTitle}</div>
          </div>
          <div className="flex items-center gap-2">
            {cardAccuracy !== null ? (
              <span className="text-xs text-muted font-mono">
                {fp.correct}/{fp.seen} ({cardAccuracy}%)
              </span>
            ) : null}
            <Badge variant={cardState === 'front' ? 'info' : 'default'}>
              {cardState === 'front' ? 'Question' : 'Answer'}
            </Badge>
          </div>
        </div>

        {/* Card content */}
        <div className="p-5">
          {cardState === 'front' ? (
            <div>
              <p className="text-primary text-base md:text-lg font-medium leading-relaxed mb-4">
                {currentCard.question}
              </p>
              <div className="space-y-2">
                {currentCard.options.map((opt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-secondary text-sm"
                  >
                    <span className="w-5 h-5 shrink-0 rounded-sm bg-surface-elevated-2 flex items-center justify-center text-xs font-mono font-bold">
                      {idx + 1}
                    </span>
                    <span>{opt}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-muted text-sm">
                Tap to reveal answer
              </div>
            </div>
          ) : (
            <div>
              <p className="text-secondary text-sm mb-3 leading-relaxed">
                {currentCard.question}
              </p>
              <div className="bg-surface-elevated-2 border border-success rounded-md p-3 mb-4">
                <div className="text-success text-xs font-mono font-medium mb-1 uppercase tracking-wide">
                  Correct Answer
                </div>
                <div className="text-primary font-semibold">
                  {currentCard.options[currentCard.correctAnswer]}
                </div>
              </div>
              <div className="text-primary text-sm leading-relaxed">
                {currentCard.explanation}
              </div>
              {currentCard.tags.length > 0 ? (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {currentCard.tags.map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </Card>

      {/* Rating buttons (back) or Show Answer (front) */}
      {cardState === 'back' ? (
        <div>
          <div className="text-center text-muted text-xs mb-2">
            How well did you know this?
          </div>
          <div className="grid grid-cols-4 gap-2">
            {RATING_CONFIG.map((r) => (
              <Button
                key={r.rating}
                variant="primary"
                tone={r.tone}
                size="lg"
                onClick={() => handleRating(r.rating)}
                className="flex-col"
              >
                <span className="text-sm font-bold">{r.label}</span>
                <span className="text-xs opacity-75 font-mono">{r.rating}</span>
              </Button>
            ))}
          </div>
        </div>
      ) : (
        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={() => setCardState('back')}
        >
          Show Answer
        </Button>
      )}
    </div>
  )
}
