'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { questions, allSections } from '../../data/questions'
import type { Question } from '../../lib/types'
import { loadProgress, updateFlashcardSM2, getDueFlashcards } from '../../lib/storage'

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
  { rating: 1 as const, label: 'Again', desc: 'Forgot completely', color: 'bg-red-600 hover:bg-red-500', textColor: 'text-red-400' },
  { rating: 2 as const, label: 'Hard', desc: 'Difficult to recall', color: 'bg-orange-600 hover:bg-orange-500', textColor: 'text-orange-400' },
  { rating: 3 as const, label: 'Good', desc: 'Recalled with effort', color: 'bg-blue-600 hover:bg-blue-500', textColor: 'text-blue-400' },
  { rating: 4 as const, label: 'Easy', desc: 'Recalled instantly', color: 'bg-green-600 hover:bg-green-500', textColor: 'text-green-400' },
]

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
  const progress = deck.length > 0 ? ((currentIndex) / deck.length) * 100 : 0

  const progress2 = loadProgress()

  // SETUP
  if (isSetup) {
    return (
      <div className="p-4 md:p-8 max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-white">Flashcards</h1>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-purple-400">{dueCount}</div>
            <div className="text-purple-300/70 text-xs">Due Today</div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-blue-400">
              {Object.keys(progress2.flashcardProgress).length}
            </div>
            <div className="text-blue-300/70 text-xs">Cards Seen</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-gray-300">{questions.length}</div>
            <div className="text-gray-500 text-xs">Total Cards</div>
          </div>
        </div>

        {/* Mode selection */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 mb-5">
          <h2 className="text-white font-semibold mb-3">Study Mode</h2>
          <div className="space-y-2">
            {([
              { id: 'due', label: 'Due for Review', desc: `${dueCount} cards scheduled`, icon: '🗓' },
              { id: 'all', label: 'All Cards', desc: `${questions.length} cards`, icon: '📚' },
              { id: 'section', label: 'By Section', desc: 'Choose a specific section', icon: '📁' },
            ] as const).map((m) => (
              <button
                key={m.id}
                onClick={() => setViewMode(m.id)}
                className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center gap-3 ${
                  viewMode === m.id
                    ? 'bg-purple-600/20 border-purple-500 text-white'
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500'
                }`}
              >
                <span className="text-xl">{m.icon}</span>
                <div>
                  <div className="font-medium text-sm">{m.label}</div>
                  <div className="text-xs opacity-70">{m.desc}</div>
                </div>
              </button>
            ))}
          </div>

          {viewMode === 'section' && (
            <div className="mt-3">
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-purple-500"
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
          )}
        </div>

        <button
          onClick={() => startSession(viewMode)}
          disabled={viewMode === 'due' && dueCount === 0}
          className="w-full bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all"
        >
          {viewMode === 'due' && dueCount === 0
            ? 'No cards due — try "All Cards"'
            : `Start Studying (${buildDeck(viewMode).length} cards)`}
        </button>

        {/* SM-2 explanation */}
        <div className="mt-4 bg-gray-900 border border-gray-700 rounded-xl p-4">
          <h3 className="text-gray-300 font-medium text-sm mb-2">How Spaced Repetition Works</h3>
          <p className="text-gray-500 text-xs leading-relaxed">
            Rate each card with Again, Hard, Good, or Easy. Cards you find difficult
            are shown more frequently; easy cards are spaced further apart using the
            SM-2 algorithm. This optimizes your study time and improves long-term retention.
          </p>
          <div className="grid grid-cols-4 gap-1 mt-3">
            {RATING_CONFIG.map((r) => (
              <div key={r.rating} className="text-center">
                <div className={`text-xs font-bold ${r.textColor}`}>{r.label}</div>
                <div className="text-gray-600 text-xs">{r.rating === 1 ? 'Soon' : r.rating === 2 ? '~1d' : r.rating === 3 ? '~3d' : '~7d+'}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // DONE SCREEN
  if (isDone) {
    const accuracy = sessionStats.seen > 0 ? Math.round((sessionStats.correct / sessionStats.seen) * 100) : 0
    return (
      <div className="p-4 md:p-8 max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-4">{accuracy >= 80 ? '🎉' : '💪'}</div>
        <h1 className="text-3xl font-bold text-white mb-2">Session Complete!</h1>
        <div className={`text-5xl font-bold mb-2 ${accuracy >= 80 ? 'text-green-400' : accuracy >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
          {accuracy}%
        </div>
        <div className="text-gray-400 mb-6">
          {sessionStats.correct} correct out of {sessionStats.seen} cards
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3">
            <div className="text-2xl font-bold text-green-400">{sessionStats.correct}</div>
            <div className="text-green-300/70 text-xs">Correct (Good + Easy)</div>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3">
            <div className="text-2xl font-bold text-red-400">{sessionStats.seen - sessionStats.correct}</div>
            <div className="text-red-300/70 text-xs">Needs Review</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => startSession(viewMode)}
            className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-xl"
          >
            Study Again
          </button>
          <button
            onClick={() => setIsSetup(true)}
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-xl"
          >
            Change Mode
          </button>
        </div>
        <Link href="/" className="block text-gray-400 hover:text-gray-300 mt-4 text-sm">
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
        <button onClick={() => setIsSetup(true)} className="text-gray-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1">
          <div className="flex justify-between text-sm text-gray-400 mb-1.5">
            <span>{currentIndex + 1} of {deck.length}</span>
            <span>{sessionStats.seen} rated · {sessionStats.correct} correct</span>
          </div>
          <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Card */}
      <div
        className="relative bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden mb-4 cursor-pointer min-h-64"
        onClick={() => setCardState((s) => s === 'front' ? 'back' : 'front')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setCardState((s) => s === 'front' ? 'back' : 'front')}
      >
        {/* Card header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-800">
          <div>
            <div className="text-blue-400 text-xs font-medium">
              Section {currentCard.section}
            </div>
            <div className="text-gray-400 text-xs">{currentCard.sectionTitle}</div>
          </div>
          <div className="flex items-center gap-2">
            {cardAccuracy !== null && (
              <span className="text-xs text-gray-500">
                {fp.correct}/{fp.seen} ({cardAccuracy}%)
              </span>
            )}
            <span className={`text-xs px-2 py-0.5 rounded-full border ${
              cardState === 'front'
                ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                : 'bg-purple-500/20 text-purple-300 border-purple-500/40'
            }`}>
              {cardState === 'front' ? 'Question' : 'Answer'}
            </span>
          </div>
        </div>

        {/* Card content */}
        <div className="p-5">
          {cardState === 'front' ? (
            <div>
              <p className="text-white text-base md:text-lg font-medium leading-relaxed mb-4">
                {currentCard.question}
              </p>
              <div className="space-y-2">
                {currentCard.options.map((opt, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-gray-500 text-sm">
                    <span className="w-5 h-5 shrink-0 rounded bg-gray-800 flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span>{opt}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-gray-600 text-sm">
                Tap to reveal answer
              </div>
            </div>
          ) : (
            <div>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                {currentCard.question}
              </p>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 mb-4">
                <div className="text-green-400 text-xs font-medium mb-1">Correct Answer</div>
                <div className="text-green-300 font-semibold">
                  {currentCard.options[currentCard.correctAnswer]}
                </div>
              </div>
              <div className="text-gray-300 text-sm leading-relaxed">
                {currentCard.explanation}
              </div>
              {currentCard.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {currentCard.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Rating buttons - only shown on back */}
      {cardState === 'back' ? (
        <div>
          <div className="text-center text-gray-500 text-xs mb-2">How well did you know this?</div>
          <div className="grid grid-cols-4 gap-2">
            {RATING_CONFIG.map((r) => (
              <button
                key={r.rating}
                onClick={() => handleRating(r.rating)}
                className={`${r.color} text-white font-semibold py-3 rounded-xl transition-all flex flex-col items-center`}
              >
                <span className="text-sm font-bold">{r.label}</span>
                <span className="text-xs opacity-75">{r.rating}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setCardState('back')}
          className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-xl transition-all"
        >
          Show Answer
        </button>
      )}
    </div>
  )
}
