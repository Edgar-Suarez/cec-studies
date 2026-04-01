'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { loadProgress, getWeaknesses, getDueFlashcards } from '../lib/storage'
import type { UserProgress, WeaknessData, QuizSession } from '../lib/types'
import { questions } from '../data/questions'

function StatCard({
  label,
  value,
  sub,
  color = 'blue',
}: {
  label: string
  value: string | number
  sub?: string
  color?: 'blue' | 'green' | 'yellow' | 'purple'
}) {
  const colorMap = {
    blue: 'from-blue-600/20 to-blue-500/10 border-blue-500/30 text-blue-400',
    green: 'from-green-600/20 to-green-500/10 border-green-500/30 text-green-400',
    yellow: 'from-yellow-600/20 to-yellow-500/10 border-yellow-500/30 text-yellow-400',
    purple: 'from-purple-600/20 to-purple-500/10 border-purple-500/30 text-purple-400',
  }

  return (
    <div
      className={`bg-gradient-to-br ${colorMap[color]} border rounded-xl p-4 flex flex-col gap-1`}
    >
      <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">
        {label}
      </span>
      <span className={`text-3xl font-bold ${colorMap[color].split(' ').pop()}`}>
        {value}
      </span>
      {sub && <span className="text-gray-500 text-xs">{sub}</span>}
    </div>
  )
}

function AccuracyBar({ accuracy, section }: { accuracy: number; section: string }) {
  const color =
    accuracy < 40 ? 'bg-red-500' : accuracy < 70 ? 'bg-yellow-500' : 'bg-green-500'

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 bg-gray-800 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${accuracy}%` }}
        />
      </div>
      <span className="text-gray-400 text-sm w-10 text-right">{accuracy}%</span>
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
          <h1 className="text-2xl md:text-3xl font-bold text-white">CEC Study Trainer</h1>
          <p className="text-gray-400 text-sm mt-1">Canadian Electrical Code — Exam Preparation</p>
        </div>
        <div className="flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-xl px-3 py-2">
          <span className="text-orange-400 text-lg">🔥</span>
          <div>
            <div className="text-orange-400 font-bold text-lg leading-none">
              {progress?.streak ?? 0}
            </div>
            <div className="text-orange-300/70 text-xs">day streak</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatCard
          label="Questions Answered"
          value={progress?.totalQuestionsAnswered ?? 0}
          sub="total attempts"
          color="blue"
        />
        <StatCard
          label="Overall Accuracy"
          value={`${accuracy}%`}
          sub={`${progress?.totalCorrect ?? 0} correct`}
          color="green"
        />
        <StatCard
          label="Study Streak"
          value={`${progress?.streak ?? 0}d`}
          sub="consecutive days"
          color="yellow"
        />
        <StatCard
          label="Cards Due Today"
          value={dueCount}
          sub={`of ${questions.length} total`}
          color="purple"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Weakness Chart */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span className="text-red-400">⚠</span> Weakest Sections
          </h2>
          {weaknesses.length === 0 ? (
            <div className="text-gray-500 text-sm text-center py-8">
              Answer at least 3 questions per section to see weakness data.
            </div>
          ) : (
            <div className="space-y-3">
              {weaknesses.slice(0, 6).map((w) => (
                <div key={w.section}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300 truncate pr-2">{w.sectionTitle}</span>
                    <span className="text-gray-500 shrink-0">
                      {w.correctAttempts}/{w.totalAttempts}
                    </span>
                  </div>
                  <AccuracyBar accuracy={w.accuracy} section={w.section} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Sessions */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span className="text-blue-400">📋</span> Recent Sessions
          </h2>
          {recentSessions.length === 0 ? (
            <div className="text-gray-500 text-sm text-center py-8">
              No quiz sessions yet. Start your first quiz!
            </div>
          ) : (
            <div className="space-y-2">
              {recentSessions.map((session) => {
                const pct = Math.round((session.score / session.totalQuestions) * 100)
                const badgeColor =
                  pct >= 80
                    ? 'bg-green-500/20 text-green-400'
                    : pct >= 60
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-red-500/20 text-red-400'
                return (
                  <div
                    key={session.id}
                    className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2.5"
                  >
                    <div>
                      <div className="text-gray-300 text-sm capitalize font-medium">
                        {session.mode} mode
                      </div>
                      <div className="text-gray-500 text-xs">
                        {formatDate(session.date)} · {formatTime(session.timeSpent)}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">
                        {session.score}/{session.totalQuestions}
                      </span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeColor}`}>
                        {pct}%
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
        <Link
          href="/quiz"
          className="flex items-center gap-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl p-4 font-semibold transition-all hover:scale-[1.02]"
        >
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-xl">
            📝
          </div>
          <div>
            <div className="font-semibold">Start Quiz</div>
            <div className="text-blue-200 text-xs">Practice or Exam mode</div>
          </div>
        </Link>
        <Link
          href="/flashcards"
          className="flex items-center gap-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl p-4 font-semibold transition-all hover:scale-[1.02]"
        >
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-xl">
            🃏
          </div>
          <div>
            <div className="font-semibold">Review Flashcards</div>
            <div className="text-purple-200 text-xs">{dueCount} due today</div>
          </div>
        </Link>
        <Link
          href="/calculators"
          className="flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white rounded-xl p-4 font-semibold transition-all hover:scale-[1.02]"
        >
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-xl">
            🔢
          </div>
          <div>
            <div className="font-semibold">CEC Calculators</div>
            <div className="text-green-200 text-xs">Demand, VD, Motors</div>
          </div>
        </Link>
      </div>

      {/* Progress Overview */}
      <div className="mt-6 bg-gray-900 border border-gray-700 rounded-xl p-5">
        <h2 className="text-white font-semibold mb-4">Question Bank Coverage</h2>
        <div className="flex flex-wrap gap-2">
          {[
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
          ].map((item) => (
            <div
              key={item.label}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-xs text-gray-300"
            >
              {item.label} · <span className="text-blue-400 font-semibold">{item.count}q</span>
            </div>
          ))}
        </div>
        <div className="mt-3 text-gray-500 text-xs">
          Total: 120 questions across all major CEC sections
        </div>
      </div>
    </div>
  )
}
