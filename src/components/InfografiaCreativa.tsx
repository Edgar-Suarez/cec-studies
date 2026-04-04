'use client'

import type { InfoCard } from '../lib/types'
import type { ReactNode } from 'react'

const ICONS: Record<string, ReactNode> = {
  permit: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="20" height="24" rx="3" />
      <path d="M11 10h10M11 14h10M11 18h6" />
      <circle cx="22" cy="22" r="4" fill="currentColor" opacity="0.15" />
      <path d="M20.5 22l1 1 2-2" />
    </svg>
  ),
  inspect: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="8" />
      <path d="M20 20l6 6" />
      <path d="M11 14h6M14 11v6" />
    </svg>
  ),
  fee: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="11" />
      <path d="M16 9v14M12 12.5c0-1.5 1.5-2.5 4-2.5s4 1 4 2.5-1.5 2.5-4 3-4 1.5-4 3 1.5 2.5 4 2.5 4-1 4-2.5" />
    </svg>
  ),
  post: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="6" width="16" height="20" rx="2" />
      <path d="M12 11h8M12 15h8" />
      <path d="M14 22l2 2 4-4" />
    </svg>
  ),
  write: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 5l5 5-14 14H6v-5L20 5z" />
      <path d="M17 8l5 5" />
    </svg>
  ),
  power: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 3v10l-4 6h14l-4-6V3" />
      <path d="M10 25h12M13 25v4M19 25v4" />
    </svg>
  ),
  label: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8h18l6 8-6 8H4V8z" />
      <circle cx="10" cy="16" r="2" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3L5 8v7c0 7.5 4.7 14.5 11 17 6.3-2.5 11-9.5 11-17V8L16 3z" />
      <path d="M12 16l3 3 5-6" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4L3 28h26L16 4z" />
      <path d="M16 12v8M16 23v1" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="14" width="18" height="14" rx="3" />
      <path d="M11 14V10a5 5 0 0110 0v4" />
      <circle cx="16" cy="21" r="2" />
    </svg>
  ),
  ruler: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="10" width="28" height="12" rx="2" />
      <path d="M7 10v5M12 10v7M17 10v5M22 10v7M27 10v5" />
    </svg>
  ),
  box: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10l12-6 12 6v12l-12 6-12-6V10z" />
      <path d="M4 10l12 6 12-6M16 16v12" />
    </svg>
  ),
  wire: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 16h6" />
      <circle cx="14" cy="16" r="4" />
      <path d="M18 16h6" />
      <circle cx="28" cy="16" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="4" cy="16" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  thermometer: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4a3 3 0 00-3 3v12a5 5 0 106 0V7a3 3 0 00-3-3z" />
      <path d="M16 22v-8" />
      <circle cx="16" cy="22" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 3L8 18h7l-1 11 10-15h-7l1-11z" />
    </svg>
  ),
  palette: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="12" />
      <circle cx="12" cy="11" r="2" fill="#ef4444" stroke="none" />
      <circle cx="20" cy="11" r="2" fill="#3b82f6" stroke="none" />
      <circle cx="10" cy="18" r="2" fill="#22c55e" stroke="none" />
      <circle cx="22" cy="17" r="2" fill="#000" stroke="none" />
    </svg>
  ),
  neutral: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8h20v16H6z" />
      <path d="M16 8v16" strokeDasharray="3 2" />
      <path d="M10 14h4M18 14h4M10 18h4M18 18h4" />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="5" />
      <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.8 7.8l2.8 2.8M21.4 21.4l2.8 2.8M24.2 7.8l-2.8 2.8M10.6 21.4l-2.8 2.8" />
    </svg>
  ),
  fire: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3c0 5-6 8-6 14a6 6 0 0012 0c0-6-6-9-6-14z" />
      <path d="M16 14c0 3-3 4-3 7a3 3 0 006 0c0-3-3-4-3-7z" />
    </svg>
  ),
  magnet: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4v12a8 8 0 0016 0V4" />
      <path d="M8 4h4v5H8zM20 4h4v5h-4z" />
    </svg>
  ),
}

const COLOR_MAP = {
  sky:     { bg: 'bg-sky-50',     border: 'border-sky-200',     icon: 'text-sky-500',     accent: 'text-sky-600' },
  rose:    { bg: 'bg-rose-50',    border: 'border-rose-200',    icon: 'text-rose-500',    accent: 'text-rose-600' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',   icon: 'text-amber-500',   accent: 'text-amber-600' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'text-emerald-500', accent: 'text-emerald-600' },
  violet:  { bg: 'bg-violet-50',  border: 'border-violet-200',  icon: 'text-violet-500',  accent: 'text-violet-600' },
  slate:   { bg: 'bg-slate-50',   border: 'border-slate-200',   icon: 'text-slate-500',   accent: 'text-slate-600' },
}

function Card({ card, index }: { card: InfoCard; index: number }) {
  const c = COLOR_MAP[card.color ?? 'sky']
  const iconEl = ICONS[card.icon] ?? ICONS.bolt

  return (
    <div className={`group relative ${c.bg} ${c.border} border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow min-w-[160px] flex-1`}>
      {/* Step number */}
      <span className={`absolute -top-2.5 -left-2 text-xs font-bold ${c.accent} bg-white border ${c.border} rounded-full w-6 h-6 flex items-center justify-center shadow-sm`}>
        {index + 1}
      </span>

      {/* Icon */}
      <div className={`w-10 h-10 ${c.icon} mb-3`}>
        {iconEl}
      </div>

      {/* Title */}
      <h4 className="text-sm font-bold text-gray-800 leading-tight mb-2">
        {card.title}
      </h4>

      {/* Handwritten note */}
      <p className="text-xs text-gray-500 leading-relaxed italic" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
        {card.note}
      </p>
    </div>
  )
}

export default function InfografiaCreativa({ cards }: { cards: InfoCard[] }) {
  if (!cards || cards.length === 0) return null

  return (
    <div className="mb-5 rounded-2xl bg-white/95 border border-gray-100 shadow-sm p-5 overflow-x-auto">
      <div className="flex gap-3 min-w-max">
        {cards.map((card, i) => (
          <div key={i} className="flex items-center">
            <Card card={card} index={i} />
            {i < cards.length - 1 && (
              <div className="flex-shrink-0 mx-1.5 text-gray-300">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M7 4l6 6-6 6" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
