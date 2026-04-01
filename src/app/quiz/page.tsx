'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { questions, allSections } from '../../data/questions'
import type { Question, QuizSession } from '../../lib/types'
import { saveSession, updateWeakSection, loadProgress } from '../../lib/storage'
import Link from 'next/link'

type QuizMode = 'practice' | 'exam' | 'weakness'
type QuizState = 'setup' | 'quiz' | 'review' | 'done'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

function DifficultyBadge({ difficulty }: { difficulty: Question['difficulty'] }) {
  const map = {
    easy: 'bg-green-500/20 text-green-400 border-green-500/30',
    medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    hard: 'bg-red-500/20 text-red-400 border-red-500/30',
  }
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${map[difficulty]}`}>
      {difficulty}
    </span>
  )
}

export default function QuizPage() {
  const [state, setState] = useState<QuizState>('setup')
  const [mode, setMode] = useState<QuizMode>('practice')
  const [selectedSections, setSelectedSections] = useState<Set<string>>(new Set(allSections))
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [reviewMode, setReviewMode] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Timer
  useEffect(() => {
    if (state === 'quiz') {
      timerRef.current = setInterval(() => {
        setTimeElapsed((t) => t + 1)
      }, 1000)
    } else {
      if (timerRef.current) clearInterval(timerRef.current)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [state])

  // Keyboard shortcuts
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (state !== 'quiz') return
      if (['1', '2', '3', '4'].includes(e.key) && !showExplanation) {
        const idx = parseInt(e.key) - 1
        if (idx < (quizQuestions[currentIndex]?.options.length ?? 0)) {
          handleAnswer(idx)
        }
      }
      if ((e.key === 'Enter' || e.key === ' ') && showExplanation) {
        e.preventDefault()
        nextQuestion()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state, showExplanation, currentIndex, quizQuestions]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  function getQuizQuestions(): Question[] {
    let pool = questions.filter((q) => selectedSections.has(q.section))

    if (mode === 'weakness') {
      const progress = loadProgress()
      const weakSections = Object.entries(progress.weakSections)
        .filter(([, data]) => data.total >= 1 && data.correct / data.total < 0.7)
        .map(([section]) => section)

      if (weakSections.length > 0) {
        const weak = pool.filter((q) => weakSections.includes(q.section))
        if (weak.length > 0) pool = weak
      }
    }

    if (mode === 'exam') {
      return shuffle(pool).slice(0, 60)
    }

    return shuffle(pool)
  }

  function startQuiz() {
    const qs = getQuizQuestions()
    if (qs.length === 0) return
    setQuizQuestions(qs)
    setCurrentIndex(0)
    setAnswers({})
    setSelectedAnswer(null)
    setShowExplanation(false)
    setTimeElapsed(0)
    setReviewMode(false)
    setState('quiz')
  }

  function handleAnswer(idx: number) {
    if (selectedAnswer !== null) return
    const q = quizQuestions[currentIndex]
    setSelectedAnswer(idx)
    setShowExplanation(true)
    const newAnswers = { ...answers, [q.id]: idx }
    setAnswers(newAnswers)
    updateWeakSection(q.section, q.sectionTitle, idx === q.correctAnswer)
  }

  function nextQuestion() {
    if (currentIndex + 1 >= quizQuestions.length) {
      finishQuiz()
      return
    }
    setCurrentIndex((i) => i + 1)
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  function finishQuiz() {
    const score = quizQuestions.filter(
      (q) => answers[q.id] === q.correctAnswer
    ).length

    const session: QuizSession = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      questions: quizQuestions.map((q) => q.id),
      answers,
      score,
      totalQuestions: quizQuestions.length,
      timeSpent: timeElapsed,
      mode,
    }
    saveSession(session)
    setState('done')
  }

  function startReview() {
    setCurrentIndex(0)
    setReviewMode(true)
    setState('quiz')
  }

  const currentQuestion = quizQuestions[currentIndex]
  const progress = quizQuestions.length > 0 ? (currentIndex / quizQuestions.length) * 100 : 0

  const finalScore = quizQuestions.filter((q) => answers[q.id] === q.correctAnswer).length
  const finalPct =
    quizQuestions.length > 0 ? Math.round((finalScore / quizQuestions.length) * 100) : 0

  // SETUP SCREEN
  if (state === 'setup') {
    return (
      <div className="p-4 md:p-8 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-white">Quiz Setup</h1>
        </div>

        {/* Mode selector */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 mb-5">
          <h2 className="text-white font-semibold mb-3">Quiz Mode</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {(
              [
                {
                  id: 'practice',
                  label: 'Practice',
                  desc: 'All questions, see explanations immediately',
                  icon: '📚',
                },
                {
                  id: 'exam',
                  label: 'Exam Mode',
                  desc: '60 questions, timed, review at end',
                  icon: '⏱',
                },
                {
                  id: 'weakness',
                  label: 'Weakness Focus',
                  desc: 'Focus on your weakest sections',
                  icon: '🎯',
                },
              ] as const
            ).map((m) => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  mode === m.id
                    ? 'bg-blue-600/20 border-blue-500 text-white'
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500'
                }`}
              >
                <div className="text-2xl mb-2">{m.icon}</div>
                <div className="font-semibold text-sm mb-1">{m.label}</div>
                <div className="text-xs opacity-70">{m.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Section filter */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 mb-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-white font-semibold">Sections</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedSections(new Set(allSections))}
                className="text-xs text-blue-400 hover:text-blue-300"
              >
                All
              </button>
              <span className="text-gray-600">·</span>
              <button
                onClick={() => setSelectedSections(new Set())}
                className="text-xs text-gray-400 hover:text-gray-300"
              >
                None
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {allSections.map((section) => {
              const count = questions.filter((q) => q.section === section).length
              const sampleQ = questions.find((q) => q.section === section)
              return (
                <button
                  key={section}
                  onClick={() => {
                    const next = new Set(selectedSections)
                    if (next.has(section)) {
                      next.delete(section)
                    } else {
                      next.add(section)
                    }
                    setSelectedSections(next)
                  }}
                  className={`text-left px-3 py-2 rounded-lg border text-xs transition-all ${
                    selectedSections.has(section)
                      ? 'bg-blue-600/20 border-blue-500/60 text-blue-300'
                      : 'bg-gray-800 border-gray-700 text-gray-500 hover:border-gray-500'
                  }`}
                >
                  <div className="font-medium truncate">{sampleQ?.sectionTitle ?? section}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{count} questions</div>
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-gray-400 text-sm">
            {questions.filter((q) => selectedSections.has(q.section)).length} questions available
          </div>
          <button
            onClick={startQuiz}
            disabled={selectedSections.size === 0}
            className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-[1.02]"
          >
            Start Quiz →
          </button>
        </div>
      </div>
    )
  }

  // QUIZ SCREEN
  if (state === 'quiz' && currentQuestion) {
    const isCorrect = selectedAnswer !== null && selectedAnswer === currentQuestion.correctAnswer
    const isWrong = selectedAnswer !== null && selectedAnswer !== currentQuestion.correctAnswer

    const optionStyle = (idx: number) => {
      if (selectedAnswer === null) {
        return 'bg-gray-800 border-gray-700 text-gray-200 hover:border-blue-500 hover:bg-blue-600/10 cursor-pointer'
      }
      if (idx === currentQuestion.correctAnswer) {
        return 'bg-green-500/20 border-green-500 text-green-300'
      }
      if (idx === selectedAnswer && isWrong) {
        return 'bg-red-500/20 border-red-500 text-red-300'
      }
      return 'bg-gray-800/50 border-gray-700 text-gray-500'
    }

    return (
      <div className="p-4 md:p-8 max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          {!reviewMode && (
            <button
              onClick={() => {
                if (confirm('End quiz? Progress will be saved.')) {
                  finishQuiz()
                }
              }}
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <div className="flex-1">
            <div className="flex justify-between text-sm text-gray-400 mb-1.5">
              <span>
                Question {currentIndex + 1} of {quizQuestions.length}
              </span>
              {mode === 'exam' && (
                <span className="font-mono text-blue-400">{formatTime(timeElapsed)}</span>
              )}
            </div>
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Question card */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 mb-4">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="text-blue-400 text-xs font-medium mb-1">
                Section {currentQuestion.section} — {currentQuestion.sectionTitle}
              </div>
              <DifficultyBadge difficulty={currentQuestion.difficulty} />
            </div>
            <div className="text-gray-500 text-xs shrink-0">
              Press 1-4 to answer
            </div>
          </div>
          <p className="text-white text-base md:text-lg font-medium leading-relaxed">
            {currentQuestion.question}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-2.5 mb-4">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={selectedAnswer !== null}
              className={`w-full text-left p-4 rounded-xl border transition-all font-medium flex items-start gap-3 ${optionStyle(idx)}`}
            >
              <span className="shrink-0 w-7 h-7 rounded-lg bg-gray-700/50 flex items-center justify-center text-sm font-bold text-gray-300">
                {idx + 1}
              </span>
              <span className="text-sm leading-relaxed">{option}</span>
              {selectedAnswer !== null && idx === currentQuestion.correctAnswer && (
                <span className="ml-auto text-green-400 shrink-0">✓</span>
              )}
              {selectedAnswer === idx && isWrong && (
                <span className="ml-auto text-red-400 shrink-0">✗</span>
              )}
            </button>
          ))}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div
            className={`rounded-xl border p-4 mb-4 ${
              isCorrect
                ? 'bg-green-500/10 border-green-500/30'
                : 'bg-red-500/10 border-red-500/30'
            }`}
          >
            <div
              className={`font-semibold mb-2 flex items-center gap-2 ${
                isCorrect ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {currentQuestion.explanation}
            </p>
            {currentQuestion.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {currentQuestion.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-700 text-gray-400 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Next button */}
        {showExplanation && (
          <button
            onClick={reviewMode ? () => {
              if (currentIndex + 1 >= quizQuestions.length) {
                setState('done')
              } else {
                setCurrentIndex((i) => i + 1)
                setSelectedAnswer(answers[quizQuestions[currentIndex + 1]?.id] ?? null)
                setShowExplanation(true)
              }
            } : nextQuestion}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all"
          >
            {currentIndex + 1 >= quizQuestions.length
              ? reviewMode ? 'Finish Review' : 'See Results'
              : 'Next Question →'}
          </button>
        )}
      </div>
    )
  }

  // DONE SCREEN
  if (state === 'done') {
    const wrongQuestions = quizQuestions.filter(
      (q) => answers[q.id] !== q.correctAnswer
    )

    return (
      <div className="p-4 md:p-8 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">
            {finalPct >= 80 ? '🎉' : finalPct >= 60 ? '💪' : '📚'}
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Quiz Complete!</h1>
          <div
            className={`text-5xl font-bold mb-2 ${
              finalPct >= 80
                ? 'text-green-400'
                : finalPct >= 60
                ? 'text-yellow-400'
                : 'text-red-400'
            }`}
          >
            {finalPct}%
          </div>
          <div className="text-gray-400">
            {finalScore} correct out of {quizQuestions.length} questions
          </div>
          <div className="text-gray-500 text-sm mt-1">Time: {formatTime(timeElapsed)}</div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-green-400">{finalScore}</div>
            <div className="text-green-300/70 text-xs">Correct</div>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-red-400">{quizQuestions.length - finalScore}</div>
            <div className="text-red-300/70 text-xs">Incorrect</div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-blue-400">{formatTime(timeElapsed)}</div>
            <div className="text-blue-300/70 text-xs">Time</div>
          </div>
        </div>

        {wrongQuestions.length > 0 && (
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 mb-5">
            <h2 className="text-white font-semibold mb-3">
              Missed Questions ({wrongQuestions.length})
            </h2>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {wrongQuestions.map((q) => (
                <div key={q.id} className="flex items-start gap-2 text-sm">
                  <span className="text-red-400 shrink-0">✗</span>
                  <div>
                    <div className="text-gray-300 leading-tight">{q.question.slice(0, 80)}...</div>
                    <div className="text-gray-500 text-xs">
                      {q.sectionTitle} · Correct: {q.options[q.correctAnswer]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              setState('setup')
              setQuizQuestions([])
            }}
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-xl transition-all"
          >
            New Quiz
          </button>
          {wrongQuestions.length > 0 && (
            <button
              onClick={() => {
                setQuizQuestions(wrongQuestions)
                setCurrentIndex(0)
                setSelectedAnswer(wrongQuestions[0] ? answers[wrongQuestions[0].id] ?? null : null)
                setShowExplanation(true)
                setReviewMode(true)
                setState('quiz')
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all"
            >
              Review Wrong Answers
            </button>
          )}
        </div>

        <Link
          href="/"
          className="block text-center text-gray-400 hover:text-gray-300 mt-4 text-sm"
        >
          ← Back to Dashboard
        </Link>
      </div>
    )
  }

  return null
}
