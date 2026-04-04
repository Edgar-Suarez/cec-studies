'use client'

import { useEffect, useRef } from 'react'
import rough from 'roughjs'

type Posture = 'working' | 'thinking' | 'pointing' | 'celebrating' | 'standing'

interface SketchCharacterProps {
  posture?: Posture
  color?: string
  size?: number
  className?: string
}

function drawHead(rc: ReturnType<typeof rough.canvas>, cx: number, cy: number, color: string) {
  rc.circle(cx, cy, 20, { stroke: color, strokeWidth: 1.5, roughness: 2, fill: 'rgba(253,251,247,0.8)', fillStyle: 'solid' })
  // Eyes
  rc.circle(cx - 4, cy - 2, 2.5, { stroke: color, strokeWidth: 1, roughness: 1, fill: color, fillStyle: 'solid' })
  rc.circle(cx + 4, cy - 2, 2.5, { stroke: color, strokeWidth: 1, roughness: 1, fill: color, fillStyle: 'solid' })
}

const postures: Record<Posture, (rc: ReturnType<typeof rough.canvas>, color: string) => void> = {
  standing(rc, color) {
    const opts = { stroke: color, strokeWidth: 1.5, roughness: 2 }
    drawHead(rc, 40, 16, color)
    // Body
    rc.line(40, 26, 40, 55, opts)
    // Arms down
    rc.line(40, 35, 28, 48, opts)
    rc.line(40, 35, 52, 48, opts)
    // Legs
    rc.line(40, 55, 30, 75, opts)
    rc.line(40, 55, 50, 75, opts)
  },

  working(rc, color) {
    const opts = { stroke: color, strokeWidth: 1.5, roughness: 2 }
    drawHead(rc, 40, 16, color)
    // Body slightly leaned
    rc.line(40, 26, 42, 55, opts)
    // Arms forward (holding something)
    rc.line(42, 35, 56, 30, opts)
    rc.line(56, 30, 62, 36, opts)
    rc.line(42, 35, 56, 42, opts)
    rc.line(56, 42, 62, 36, opts)
    // Tool in hand
    rc.line(62, 36, 68, 22, { ...opts, roughness: 1.5 })
    // Legs
    rc.line(42, 55, 32, 75, opts)
    rc.line(42, 55, 52, 75, opts)
  },

  thinking(rc, color) {
    const opts = { stroke: color, strokeWidth: 1.5, roughness: 2 }
    drawHead(rc, 40, 16, color)
    // Body
    rc.line(40, 26, 40, 55, opts)
    // One arm on chin
    rc.line(40, 35, 30, 42, opts)
    rc.line(30, 42, 36, 22, opts)
    // Other arm down
    rc.line(40, 35, 52, 48, opts)
    // Legs
    rc.line(40, 55, 30, 75, opts)
    rc.line(40, 55, 50, 75, opts)
    // Thought bubbles
    rc.circle(54, 8, 4, { stroke: color, strokeWidth: 1, roughness: 2 })
    rc.circle(60, 2, 3, { stroke: color, strokeWidth: 1, roughness: 2 })
    rc.circle(65, -2, 2, { stroke: color, strokeWidth: 1, roughness: 1.5 })
  },

  pointing(rc, color) {
    const opts = { stroke: color, strokeWidth: 1.5, roughness: 2 }
    drawHead(rc, 40, 16, color)
    // Body
    rc.line(40, 26, 40, 55, opts)
    // Pointing arm extended right
    rc.line(40, 35, 58, 28, opts)
    rc.line(58, 28, 72, 24, opts)
    // Finger tip
    rc.line(72, 24, 76, 22, { ...opts, strokeWidth: 2 })
    // Other arm on hip
    rc.line(40, 35, 28, 42, opts)
    rc.line(28, 42, 32, 50, opts)
    // Legs
    rc.line(40, 55, 30, 75, opts)
    rc.line(40, 55, 50, 75, opts)
  },

  celebrating(rc, color) {
    const opts = { stroke: color, strokeWidth: 1.5, roughness: 2 }
    drawHead(rc, 40, 16, color)
    // Smile
    rc.arc(40, 18, 8, 8, 0.2, Math.PI - 0.2, false, { stroke: color, strokeWidth: 1, roughness: 1.5 })
    // Body
    rc.line(40, 26, 40, 55, opts)
    // Arms up!
    rc.line(40, 35, 24, 18, opts)
    rc.line(40, 35, 56, 18, opts)
    // Sparkles near hands
    rc.line(20, 12, 22, 8, { stroke: color, strokeWidth: 1, roughness: 1 })
    rc.line(18, 14, 14, 13, { stroke: color, strokeWidth: 1, roughness: 1 })
    rc.line(60, 12, 58, 8, { stroke: color, strokeWidth: 1, roughness: 1 })
    rc.line(62, 14, 66, 13, { stroke: color, strokeWidth: 1, roughness: 1 })
    // Legs apart
    rc.line(40, 55, 28, 75, opts)
    rc.line(40, 55, 52, 75, opts)
  },
}

export default function SketchCharacter({
  posture = 'standing',
  color = '#64748b',
  size = 80,
  className = '',
}: SketchCharacterProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    const rc = rough.canvas(canvas)
    postures[posture](rc, color)
  }, [posture, color, size])

  return <canvas ref={canvasRef} className={className} style={{ width: size, height: size }} />
}
