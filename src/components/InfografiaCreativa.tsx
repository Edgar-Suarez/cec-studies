'use client'

import { useEffect, useRef } from 'react'
import type { InfoCard } from '../lib/types'
import rough from 'roughjs'
import SketchIllustrationBox from '../shared/components/SketchIllustrationBox'
import {
  FileText,
  Search,
  DollarSign,
  ClipboardCheck,
  PenLine,
  Zap,
  Tag,
  Shield,
  AlertTriangle,
  Lock,
  Ruler,
  Box,
  Cable,
  Thermometer,
  BoltIcon,
  Palette,
  CircuitBoard,
  Sun,
  Flame,
  Magnet,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type IllustrationType = 'document' | 'coin' | 'sign'

const ICON_MAP: Record<string, LucideIcon> = {
  permit: FileText,
  inspect: Search,
  fee: DollarSign,
  post: ClipboardCheck,
  write: PenLine,
  power: Zap,
  label: Tag,
  shield: Shield,
  warning: AlertTriangle,
  lock: Lock,
  ruler: Ruler,
  box: Box,
  wire: Cable,
  thermometer: Thermometer,
  bolt: BoltIcon,
  palette: Palette,
  neutral: CircuitBoard,
  sun: Sun,
  fire: Flame,
  magnet: Magnet,
}

const ILLUSTRATION_MAP: Record<string, IllustrationType> = {
  permit: 'document',
  inspect: 'document',
  post: 'sign',
  write: 'document',
  fee: 'coin',
  power: 'sign',
  label: 'sign',
  shield: 'sign',
  warning: 'sign',
  lock: 'sign',
  ruler: 'sign',
  box: 'sign',
  wire: 'document',
  thermometer: 'sign',
  bolt: 'sign',
  palette: 'sign',
  neutral: 'document',
  sun: 'sign',
  fire: 'sign',
  magnet: 'sign',
}

const COLOR_HEX: Record<string, string> = {
  sky: '#0ea5e9',
  rose: '#f43f5e',
  amber: '#f59e0b',
  emerald: '#10b981',
  violet: '#8b5cf6',
  slate: '#64748b',
}

function SketchyArrow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    canvas.width = 32 * dpr
    canvas.height = 48 * dpr
    canvas.style.width = '32px'
    canvas.style.height = '48px'
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    const rc = rough.canvas(canvas)
    rc.line(4, 24, 22, 24, { stroke: '#94a3b8', strokeWidth: 1.5, roughness: 1.5 })
    rc.line(16, 17, 24, 24, { stroke: '#94a3b8', strokeWidth: 1.5, roughness: 1.2 })
    rc.line(16, 31, 24, 24, { stroke: '#94a3b8', strokeWidth: 1.5, roughness: 1.2 })
  }, [])

  return <canvas ref={canvasRef} className="flex-shrink-0 mx-1" style={{ width: 32, height: 48 }} />
}

function StepNumber({ index, color }: { index: number; color: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    const size = 28
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    const rc = rough.canvas(canvas)
    rc.circle(size / 2, size / 2, size - 4, {
      stroke: color,
      strokeWidth: 1.5,
      roughness: 2,
      fill: 'rgba(255,255,255,0.9)',
      fillStyle: 'solid',
    })

    ctx.font = "bold 14px 'Caveat', cursive"
    ctx.fillStyle = color
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(String(index + 1), size / 2, size / 2 + 1)
  }, [index, color])

  return (
    <canvas
      ref={canvasRef}
      className="absolute -top-3 -left-3 z-20"
      style={{ width: 28, height: 28 }}
    />
  )
}

export default function InfografiaCreativa({ cards }: { cards: InfoCard[] }) {
  if (!cards || cards.length === 0) return null

  return (
    <div
      className="mb-5 rounded-2xl bg-amber-50/30 border border-amber-200/40 shadow-sm px-5 py-6 overflow-x-auto"
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23d4a574\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M5 0h1L0 5v1zM6 5v1H5z\'/%3E%3C/g%3E%3C/svg%3E")',
      }}
    >
      <div className="flex gap-4 min-w-max items-stretch">
        {cards.map((card, i) => {
          const color = card.color ?? 'sky'
          const hex = COLOR_HEX[color] ?? COLOR_HEX.sky
          const lucideIcon = ICON_MAP[card.icon] ?? BoltIcon
          const illustration = ILLUSTRATION_MAP[card.icon] ?? 'document'

          return (
            <div key={i} className="flex items-center">
              <div className="relative min-w-[150px]">
                <StepNumber index={i} color={hex} />
                <SketchIllustrationBox
                  title={card.title}
                  subtitle={card.note}
                  icon={lucideIcon}
                  illustrationType={illustration}
                  color={hex}
                />
              </div>
              {i < cards.length - 1 && <SketchyArrow />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
