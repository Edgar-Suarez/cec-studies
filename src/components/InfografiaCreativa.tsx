'use client'

import { useEffect, useRef } from 'react'
import type { InfoCard } from '../lib/types'
import type { ReactNode } from 'react'
import rough from 'roughjs'

const ICONS: Record<string, ReactNode> = {
  permit: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="20" height="24" rx="3" />
      <path d="M11 10h10M11 14h10M11 18h6" />
      <circle cx="22" cy="22" r="4" fill="none" />
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
      <circle cx="16" cy="21" r="2" fill="none" />
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
      <circle cx="14" cy="16" r="4" fill="none" />
      <path d="M18 16h6" />
      <circle cx="28" cy="16" r="2" fill="none" />
      <circle cx="4" cy="16" r="2" fill="none" />
    </svg>
  ),
  thermometer: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4a3 3 0 00-3 3v12a5 5 0 106 0V7a3 3 0 00-3-3z" />
      <path d="M16 22v-8" />
      <circle cx="16" cy="22" r="2" fill="none" />
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
      <circle cx="12" cy="11" r="2" />
      <circle cx="20" cy="11" r="2" />
      <circle cx="10" cy="18" r="2" />
      <circle cx="22" cy="17" r="2" />
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
  sky:     { fill: 'rgba(186,230,253,0.35)', stroke: '#0ea5e9', icon: 'text-sky-600',     accent: '#0284c7' },
  rose:    { fill: 'rgba(254,205,211,0.35)', stroke: '#f43f5e', icon: 'text-rose-600',    accent: '#e11d48' },
  amber:   { fill: 'rgba(253,230,138,0.35)', stroke: '#f59e0b', icon: 'text-amber-600',   accent: '#d97706' },
  emerald: { fill: 'rgba(167,243,208,0.35)', stroke: '#10b981', icon: 'text-emerald-600', accent: '#059669' },
  violet:  { fill: 'rgba(221,214,254,0.35)', stroke: '#8b5cf6', icon: 'text-violet-600',  accent: '#7c3aed' },
  slate:   { fill: 'rgba(226,232,240,0.35)', stroke: '#64748b', icon: 'text-slate-600',   accent: '#475569' },
}

function RoughBorder({ color, children }: { color: keyof typeof COLOR_MAP; children: ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const c = COLOR_MAP[color]

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const rect = container.getBoundingClientRect()
    const w = rect.width
    const h = rect.height
    const dpr = window.devicePixelRatio || 1

    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    const rc = rough.canvas(canvas)

    // Paper-like background
    rc.rectangle(2, 2, w - 4, h - 4, {
      fill: c.fill,
      stroke: c.stroke,
      strokeWidth: 1.5,
      roughness: 2,
      fillStyle: 'solid',
      bowing: 1.5,
    })
  }, [c])

  return (
    <div ref={containerRef} className="relative min-w-[160px] flex-1">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 p-4">
        {children}
      </div>
    </div>
  )
}

function Card({ card, index }: { card: InfoCard; index: number }) {
  const color = card.color ?? 'sky'
  const c = COLOR_MAP[color]
  const iconEl = ICONS[card.icon] ?? ICONS.bolt

  return (
    <RoughBorder color={color}>
      {/* Step number — hand-drawn circle */}
      <span
        className="absolute -top-3 -left-2 w-7 h-7 flex items-center justify-center rounded-full bg-white text-sm z-20 shadow-sm"
        style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, color: c.accent, border: `1.5px solid ${c.stroke}` }}
      >
        {index + 1}
      </span>

      {/* Icon — linear, no fill */}
      <div className={`w-9 h-9 ${c.icon} mb-2 opacity-80`}>
        {iconEl}
      </div>

      {/* Title — handwritten */}
      <h4
        className="text-base font-bold text-gray-800 leading-tight mb-1"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        {card.title}
      </h4>

      {/* Note — handwritten smaller */}
      <p
        className="text-sm text-gray-500 leading-snug"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        {card.note}
      </p>
    </RoughBorder>
  )
}

function SketchyArrow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    canvas.width = 28 * dpr
    canvas.height = 40 * dpr
    canvas.style.width = '28px'
    canvas.style.height = '40px'
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    const rc = rough.canvas(canvas)
    rc.line(4, 20, 20, 20, { stroke: '#94a3b8', strokeWidth: 1.5, roughness: 1.5 })
    rc.line(15, 14, 22, 20, { stroke: '#94a3b8', strokeWidth: 1.5, roughness: 1.2 })
    rc.line(15, 26, 22, 20, { stroke: '#94a3b8', strokeWidth: 1.5, roughness: 1.2 })
  }, [])

  return <canvas ref={canvasRef} className="flex-shrink-0 mx-0.5" style={{ width: 28, height: 40 }} />
}

export default function InfografiaCreativa({ cards }: { cards: InfoCard[] }) {
  if (!cards || cards.length === 0) return null

  return (
    <div className="mb-5 rounded-2xl bg-amber-50/30 border border-amber-200/40 shadow-sm p-5 overflow-x-auto"
      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23d4a574\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M5 0h1L0 5v1zM6 5v1H5z\'/%3E%3C/g%3E%3C/svg%3E")' }}
    >
      <div className="flex gap-3 min-w-max items-stretch">
        {cards.map((card, i) => (
          <div key={i} className="flex items-center">
            <Card card={card} index={i} />
            {i < cards.length - 1 && <SketchyArrow />}
          </div>
        ))}
      </div>
    </div>
  )
}
