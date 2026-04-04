'use client'

import { useEffect, useRef } from 'react'
import rough from 'roughjs'

interface Point {
  x: number
  y: number
}

interface SketchPathProps {
  points: Point[]
  color?: string
  strokeWidth?: number
  width: number
  height: number
  showArrow?: boolean
  className?: string
}

export default function SketchPath({
  points,
  color = '#d4856a',
  strokeWidth = 3,
  width,
  height,
  showArrow = true,
  className = '',
}: SketchPathProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || points.length < 2) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    const rc = rough.canvas(canvas)

    // Draw catmull-rom-like curve through all points using segments
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[Math.max(i - 1, 0)]
      const p1 = points[i]
      const p2 = points[i + 1]
      const p3 = points[Math.min(i + 2, points.length - 1)]

      const steps = 12
      for (let s = 0; s < steps; s++) {
        const t0 = s / steps
        const t1 = (s + 1) / steps

        const x0 = catmull(t0, p0.x, p1.x, p2.x, p3.x)
        const y0 = catmull(t0, p0.y, p1.y, p2.y, p3.y)
        const x1 = catmull(t1, p0.x, p1.x, p2.x, p3.x)
        const y1 = catmull(t1, p0.y, p1.y, p2.y, p3.y)

        rc.line(x0, y0, x1, y1, {
          stroke: color,
          strokeWidth,
          roughness: s === 0 && i === 0 ? 1.5 : 0.3,
        })
      }
    }

    // Arrowhead at the end
    if (showArrow && points.length >= 2) {
      const last = points[points.length - 1]
      const prev = points[points.length - 2]

      // Get direction from the last segment
      const n = points.length
      const p0 = points[Math.max(n - 3, 0)]
      const p1 = points[n - 2]
      const p2 = points[n - 1]
      const p3 = p2

      const t = 0.95
      const px = catmull(t, p0.x, p1.x, p2.x, p3.x)
      const py = catmull(t, p0.y, p1.y, p2.y, p3.y)

      const angle = Math.atan2(last.y - py, last.x - px)
      const headLen = 14

      rc.line(
        last.x, last.y,
        last.x - headLen * Math.cos(angle - Math.PI / 5),
        last.y - headLen * Math.sin(angle - Math.PI / 5),
        { stroke: color, strokeWidth: strokeWidth + 0.5, roughness: 1.2 }
      )
      rc.line(
        last.x, last.y,
        last.x - headLen * Math.cos(angle + Math.PI / 5),
        last.y - headLen * Math.sin(angle + Math.PI / 5),
        { stroke: color, strokeWidth: strokeWidth + 0.5, roughness: 1.2 }
      )
    }
  }, [points, color, strokeWidth, width, height, showArrow])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ width, height }}
    />
  )
}

// Catmull-Rom interpolation
function catmull(t: number, p0: number, p1: number, p2: number, p3: number): number {
  const t2 = t * t
  const t3 = t2 * t
  return (
    0.5 *
    (2 * p1 +
      (-p0 + p2) * t +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
      (-p0 + 3 * p1 - 3 * p2 + p3) * t3)
  )
}
