'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { loadProgress, getWeaknesses, getDueFlashcards } from '../lib/storage'
import type { UserProgress, WeaknessData, QuizSession } from '../lib/types'
import { questions } from '../data/questions'
import { Card } from '@/shared/components/ui'

function AccuracyBar({ accuracy }: { accuracy: number }) {
  const fill =
    accuracy < 40 ? 'bg-danger' : accuracy < 70 ? 'bg-warning' : 'bg-success'

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 bg-surface-elevated-2 rounded-pill h-2 overflow-hidden">
        <div
          className={`h-full rounded-pill transition-all duration-500 ${fill}`}
          style={{ width: `${accuracy}%` }}
        />
      </div>
      <span className="text-secondary text-sm w-10 text-right font-mono">{accuracy}%</span>
    </div>
  )
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}m ${s}s`
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('en-CA', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return dateStr
  }
}

type StatCardContent = {
  label: string
  value: string | number
  sub?: string
}

function StatCardContent({ label, value, sub }: StatCardContent) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-secondary text-xs font-medium uppercase tracking-wider">
        {label}
      </span>
      <span className="text-4xl font-mono text-primary">{value}</span>
      {sub ? <span className="text-muted text-xs">{sub}</span> : null}
    </div>
  )
}

const quickActions: Array<{
  href: string
  emoji: string
  title: string
  subtitle: (args: { dueCount: number }) => string
}> = [
  {
    href: '/quiz',
    emoji: '📝',
    title: 'Start Quiz',
    subtitle: () => 'Practice or Exam mode',
  },
  {
    href: '/flashcards',
    emoji: '🃏',
    title: 'Review Flashcards',
    subtitle: ({ dueCount }) => `${dueCount} due today`,
  },
  {
    href: '/calculators',
    emoji: '🔢',
    title: 'CEC Calculators',
    subtitle: () => 'Demand, VD, Motors',
  },
]

const coverageSections: Array<{ label: string; count: number }> = [
  { label: 'Section 0 (Definitions)', count: 8 },
  { label: 'Section 4 (Conductors)', count: 10 },
  { label: 'Section 6 (Services)', count: 10 },
  { label: 'Section 8 (Ampacity)', count: 20 },
  { label: 'Section 10 (Grounding)', count: 10 },
  { label: 'Section 12 (Wiring)', count: 8 },
  { label: 'Section 14 (Protection)', count: 10 },
  { label: 'Section 26 (Equipment)', count: 8 },
  { label: 'Section 28 (Motors)', count: 16 },
  { label: 'CEC Tables', count: 12 },
  { label: "Ohm's Law & Power", count: 8 },
]

export default function Dashboard() {
  const [progress, setProgress] = useState<UserProgress | null>(null)
  const [weaknesses, setWeaknesses] = useState<WeaknessData[]>([])
  const [dueCount, setDueCount] = useState(0)

  useEffect(() => {
    const p = loadProgress()
    setProgress(p)
    setWeaknesses(getWeaknesses())
    setDueCount(getDueFlashcards(questions.map((q) => q.id)).length)
  }, [])

  const accuracy =
    progress && progress.totalQuestionsAnswered > 0
      ? Math.round((progress.totalCorrect / progress.totalQuestionsAnswered) * 100)
      : 0

  const recentSessions: QuizSession[] = progress?.examHistory?.slice(0, 5) ?? []

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-4xl font-display font-bold text-primary">
            CEC Study Trainer
          </h1>
          <p className="text-secondary text-sm mt-1">
            Canadian Electrical Code — Exam Preparation
          </p>
        </div>
        <Card elevation="elev-1" padding="sm" className="flex items-center gap-2">
          <span className="text-warning text-lg" aria-hidden="true">
            🔥
          </span>
          <div>
            <div className="text-warning font-mono font-bold text-lg leading-none">
              {progress?.streak ?? 0}
            </div>
            <div className="text-muted text-xs">day streak</div>
          </div>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <Card elevation="elev-1" padding="md">
          <StatCardContent
            label="Questions Answered"
            value={progress?.totalQuestionsAnswered ?? 0}
            sub="total attempts"
          />
        </Card>
        <Card elevation="elev-1" padding="md">
          <StatCardContent
            label="Overall Accuracy"
            value={`${accuracy}%`}
            sub={`${progress?.totalCorrect ?? 0} correct`}
          />
        </Card>
        <Card elevation="elev-1" padding="md">
          <StatCardContent
            label="Study Streak"
            value={`${progress?.streak ?? 0}d`}
            sub="consecutive days"
          />
        </Card>
        <Card elevation="elev-1" padding="md">
          <StatCardContent
            label="Cards Due Today"
            value={dueCount}
            sub={`of ${questions.length} total`}
          />
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Weakness Chart */}
        <Card elevation="elev-1" padding="lg">
          <h2 className="text-primary font-display font-semibold mb-4 flex items-center gap-2">
            <span className="text-danger" aria-hidden="true">
              ⚠
            </span>{' '}
            Weakest Sections
          </h2>
          {weaknesses.length === 0 ? (
            <div className="text-muted text-sm text-center py-8">
              Answer at least 3 questions per section to see weakness data.
            </div>
          ) : (
            <div className="space-y-3">
              {weaknesses.slice(0, 6).map((w) => (
                <div key={w.section}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-primary truncate pr-2">{w.sectionTitle}</span>
                    <span className="text-muted shrink-0 font-mono">
                      {w.correctAttempts}/{w.totalAttempts}
                    </span>
                  </div>
                  <AccuracyBar accuracy={w.accuracy} />
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Recent Sessions */}
        <Card elevation="elev-1" padding="lg">
          <h2 className="text-primary font-display font-semibold mb-4 flex items-center gap-2">
            <span className="text-accent" aria-hidden="true">
              📋
            </span>{' '}
            Recent Sessions
          </h2>
          {recentSessions.length === 0 ? (
            <div className="text-muted text-sm text-center py-8">
              No quiz sessions yet. Start your first quiz!
            </div>
          ) : (
            <div className="space-y-2">
              {recentSessions.map((session) => {
                const pct = Math.round((session.score / session.totalQuestions) * 100)
                const pctTone =
                  pct >= 80 ? 'text-success' : pct >= 60 ? 'text-warning' : 'text-danger'
                return (
                  <div
                    key={session.id}
                    className="flex items-center justify-between bg-surface-elevated-2 rounded-md px-3 py-2.5"
                  >
                    <div>
                      <div className="text-primary text-sm capitalize font-medium">
                        {session.mode} mode
                      </div>
                      <div className="text-muted text-xs">
                        {formatDate(session.date)} · {formatTime(session.timeSpent)}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-secondary text-sm font-mono">
                        {session.score}/{session.totalQuestions}
                      </span>
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded-pill bg-surface-elevated ${pctTone}`}
                      >
                        {pct}%
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
        {quickActions.map((action) => (
          <Link key={action.href} href={action.href} className="block">
            <Card
              elevation="elev-1"
              padding="md"
              interactive
              className="flex items-center gap-4 h-full"
            >
              <div
                className="w-10 h-10 bg-surface-elevated-2 rounded-md flex items-center justify-center text-xl shrink-0"
                aria-hidden="true"
              >
                {action.emoji}
              </div>
              <div>
                <div className="font-display font-semibold text-primary">{action.title}</div>
                <div className="text-secondary text-xs">{action.subtitle({ dueCount })}</div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Progress Overview */}
      <Card elevation="elev-1" padding="lg" className="mt-6">
        <h2 className="text-primary font-display font-semibold mb-4">
          Question Bank Coverage
        </h2>
        <div className="flex flex-wrap gap-2">
          {coverageSections.map((item) => (
            <div
              key={item.label}
              className="bg-surface-elevated-2 border border-subtle rounded-md px-3 py-1.5 text-xs text-primary"
            >
              {item.label} ·{' '}
              <span className="text-accent font-mono font-semibold">{item.count}q</span>
            </div>
          ))}
        </div>
        <div className="mt-3 text-muted text-xs">
          Total: <span className="font-mono">120</span> questions across all major CEC sections
        </div>
      </Card>
    </div>
  )
}
