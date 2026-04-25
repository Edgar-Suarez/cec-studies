'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { questions, allSections } from '../../data/questions'
import type { Question, QuizSession } from '../../lib/types'
import { saveSession, updateWeakSection, loadProgress } from '../../lib/storage'
import Link from 'next/link'
import { Badge, Button, Card, Progress } from '@/shared/components/ui'

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

const DIFFICULTY_VARIANT: Record<Question['difficulty'], 'success' | 'warning' | 'danger'> = {
  easy: 'success',
  medium: 'warning',
  hard: 'danger',
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
    [state, showExplanation, currentIndex, quizQuestions],
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
    const score = quizQuestions.filter((q) => answers[q.id] === q.correctAnswer).length

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

  const currentQuestion = quizQuestions[currentIndex]

  const finalScore = quizQuestions.filter((q) => answers[q.id] === q.correctAnswer).length
  const finalPct =
    quizQuestions.length > 0 ? Math.round((finalScore / quizQuestions.length) * 100) : 0

  // SETUP SCREEN
  if (state === 'setup') {
    return (
      <div className="p-4 md:p-8 max-w-3xl mx-auto">
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
          <h1 className="text-2xl font-display font-bold text-primary">Quiz Setup</h1>
        </div>

        {/* Mode selector */}
        <Card elevation="elev-1" padding="lg" className="mb-5">
          <h2 className="text-primary font-display font-semibold mb-3">Quiz Mode</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {(
              [
                { id: 'practice', label: 'Practice', desc: 'All questions, see explanations immediately', icon: '📚' },
                { id: 'exam', label: 'Exam Mode', desc: '60 questions, timed, review at end', icon: '⏱' },
                { id: 'weakness', label: 'Weakness Focus', desc: 'Focus on your weakest sections', icon: '🎯' },
              ] as const
            ).map((m) => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`text-left p-4 rounded-md border transition-colors duration-75 ${
                  mode === m.id
                    ? 'bg-surface-elevated-2 border-accent text-primary'
                    : 'bg-surface-elevated border-subtle text-secondary hover:border-strong'
                }`}
              >
                <div className="text-2xl mb-2" aria-hidden="true">{m.icon}</div>
                <div className="font-semibold text-sm mb-1">{m.label}</div>
                <div className="text-xs text-muted">{m.desc}</div>
              </button>
            ))}
          </div>
        </Card>

        {/* Section filter */}
        <Card elevation="elev-1" padding="lg" className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-primary font-display font-semibold">Sections</h2>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedSections(new Set(allSections))}
              >
                All
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setSelectedSections(new Set())}>
                None
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {allSections.map((section) => {
              const count = questions.filter((q) => q.section === section).length
              const sampleQ = questions.find((q) => q.section === section)
              const isSelected = selectedSections.has(section)
              return (
                <button
                  key={section}
                  onClick={() => {
                    const next = new Set(selectedSections)
                    if (next.has(section)) next.delete(section)
                    else next.add(section)
                    setSelectedSections(next)
                  }}
                  className={`text-left px-3 py-2 rounded-md border text-xs transition-colors duration-75 ${
                    isSelected
                      ? 'bg-surface-elevated-2 border-accent text-accent'
                      : 'bg-surface-elevated border-subtle text-secondary hover:border-strong'
                  }`}
                >
                  <div className="font-medium truncate">
                    {sampleQ?.sectionTitle ?? section}
                  </div>
                  <div className="text-muted text-xs mt-0.5 font-mono">
                    {count} questions
                  </div>
                </button>
              )
            })}
          </div>
        </Card>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="text-secondary text-sm">
            <span className="font-mono">
              {questions.filter((q) => selectedSections.has(q.section)).length}
            </span>{' '}
            questions available
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={startQuiz}
            disabled={selectedSections.size === 0}
          >
            Start Quiz →
          </Button>
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
        return 'bg-surface-elevated border-subtle text-primary hover:border-accent hover:bg-surface-elevated-2 cursor-pointer'
      }
      if (idx === currentQuestion.correctAnswer) {
        return 'bg-surface-elevated-2 border-success text-success'
      }
      if (idx === selectedAnswer && isWrong) {
        return 'bg-surface-elevated-2 border-danger text-danger'
      }
      return 'bg-surface-elevated border-subtle text-muted'
    }

    return (
      <div className="p-4 md:p-8 max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          {!reviewMode ? (
            <button
              onClick={() => {
                if (confirm('End quiz? Progress will be saved.')) finishQuiz()
              }}
              className="text-secondary hover:text-primary transition-colors duration-75"
              aria-label="End quiz"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : null}
          <div className="flex-1">
            <div className="flex justify-between text-sm text-secondary mb-1.5 font-mono">
              <span>
                Question {currentIndex + 1} of {quizQuestions.length}
              </span>
              {mode === 'exam' ? (
                <span className="text-accent">{formatTime(timeElapsed)}</span>
              ) : null}
            </div>
            <Progress value={currentIndex} max={quizQuestions.length} size="sm" />
          </div>
        </div>

        {/* Question card */}
        <Card elevation="elev-1" padding="lg" className="mb-4">
          <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
            <div>
              <div className="text-accent text-xs font-mono font-medium mb-1">
                Section {currentQuestion.section} — {currentQuestion.sectionTitle}
              </div>
              <Badge variant={DIFFICULTY_VARIANT[currentQuestion.difficulty]}>
                {currentQuestion.difficulty}
              </Badge>
            </div>
            <div className="text-muted text-xs shrink-0 font-mono">
              Press 1-4 to answer
            </div>
          </div>
          <p className="text-primary text-base md:text-lg font-medium leading-relaxed">
            {currentQuestion.question}
          </p>
        </Card>

        {/* Options */}
        <div className="space-y-2.5 mb-4">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={selectedAnswer !== null}
              className={`w-full text-left p-4 rounded-md border transition-colors duration-75 font-medium flex items-start gap-3 ${optionStyle(idx)}`}
            >
              <span className="shrink-0 w-7 h-7 rounded-sm bg-surface-elevated-2 flex items-center justify-center text-sm font-mono font-bold text-secondary">
                {idx + 1}
              </span>
              <span className="text-sm leading-relaxed">{option}</span>
              {selectedAnswer !== null && idx === currentQuestion.correctAnswer ? (
                <span className="ml-auto text-success shrink-0">✓</span>
              ) : null}
              {selectedAnswer === idx && isWrong ? (
                <span className="ml-auto text-danger shrink-0">✗</span>
              ) : null}
            </button>
          ))}
        </div>

        {/* Explanation */}
        {showExplanation ? (
          <div
            className={`rounded-md border p-4 mb-4 bg-surface-elevated-2 ${
              isCorrect ? 'border-success' : 'border-danger'
            }`}
          >
            <div
              className={`font-mono font-semibold uppercase tracking-wide text-xs mb-2 flex items-center gap-2 ${
                isCorrect ? 'text-success' : 'text-danger'
              }`}
            >
              {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
            </div>
            <p className="text-primary text-sm leading-relaxed">
              {currentQuestion.explanation}
            </p>
            {currentQuestion.tags.length > 0 ? (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {currentQuestion.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}

        {/* Next button */}
        {showExplanation ? (
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={
              reviewMode
                ? () => {
                    if (currentIndex + 1 >= quizQuestions.length) {
                      setState('done')
                    } else {
                      setCurrentIndex((i) => i + 1)
                      setSelectedAnswer(answers[quizQuestions[currentIndex + 1]?.id] ?? null)
                      setShowExplanation(true)
                    }
                  }
                : nextQuestion
            }
          >
            {currentIndex + 1 >= quizQuestions.length
              ? reviewMode
                ? 'Finish Review'
                : 'See Results'
              : 'Next Question →'}
          </Button>
        ) : null}
      </div>
    )
  }

  // DONE SCREEN
  if (state === 'done') {
    const wrongQuestions = quizQuestions.filter((q) => answers[q.id] !== q.correctAnswer)
    const accuracyTone =
      finalPct >= 80 ? 'text-success' : finalPct >= 60 ? 'text-warning' : 'text-danger'

    return (
      <div className="p-4 md:p-8 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4" aria-hidden="true">
            {finalPct >= 80 ? '🎉' : finalPct >= 60 ? '💪' : '📚'}
          </div>
          <h1 className="text-3xl font-display font-bold text-primary mb-2">Quiz Complete!</h1>
          <div className={`text-5xl font-mono font-bold mb-2 ${accuracyTone}`}>{finalPct}%</div>
          <div className="text-secondary">
            <span className="font-mono">{finalScore}</span> correct out of{' '}
            <span className="font-mono">{quizQuestions.length}</span> questions
          </div>
          <div className="text-muted text-sm mt-1 font-mono">Time: {formatTime(timeElapsed)}</div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card elevation="elev-1" padding="md" className="text-center">
            <div className="text-2xl font-mono font-bold text-success">{finalScore}</div>
            <div className="text-secondary text-xs">Correct</div>
          </Card>
          <Card elevation="elev-1" padding="md" className="text-center">
            <div className="text-2xl font-mono font-bold text-danger">
              {quizQuestions.length - finalScore}
            </div>
            <div className="text-secondary text-xs">Incorrect</div>
          </Card>
          <Card elevation="elev-1" padding="md" className="text-center">
            <div className="text-2xl font-mono font-bold text-accent">
              {formatTime(timeElapsed)}
            </div>
            <div className="text-secondary text-xs">Time</div>
          </Card>
        </div>

        {wrongQuestions.length > 0 ? (
          <Card elevation="elev-1" padding="md" className="mb-5">
            <h2 className="text-primary font-display font-semibold mb-3">
              Missed Questions ({wrongQuestions.length})
            </h2>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {wrongQuestions.map((q) => (
                <div key={q.id} className="flex items-start gap-2 text-sm">
                  <span className="text-danger shrink-0">✗</span>
                  <div>
                    <div className="text-primary leading-tight">
                      {q.question.slice(0, 80)}...
                    </div>
                    <div className="text-muted text-xs">
                      {q.sectionTitle} · Correct: {q.options[q.correctAnswer]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ) : null}

        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              setState('setup')
              setQuizQuestions([])
            }}
          >
            New Quiz
          </Button>
          {wrongQuestions.length > 0 ? (
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                setQuizQuestions(wrongQuestions)
                setCurrentIndex(0)
                setSelectedAnswer(
                  wrongQuestions[0] ? answers[wrongQuestions[0].id] ?? null : null,
                )
                setShowExplanation(true)
                setReviewMode(true)
                setState('quiz')
              }}
            >
              Review Wrong Answers
            </Button>
          ) : null}
        </div>

        <Link
          href="/"
          className="block text-center text-secondary hover:text-primary mt-4 text-sm transition-colors duration-75"
        >
          ← Back to Dashboard
        </Link>
      </div>
    )
  }

  return null
}
