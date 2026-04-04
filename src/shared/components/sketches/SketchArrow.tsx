'use client'

import { useEffect, useRef } from 'react'
import rough from 'roughjs'

interface SketchArrowProps {
  from: { x: number; y: number }
  to: { x: number; y: number }
  curve?: number
  color?: string
  strokeWidth?: number
  width?: number
  height?: number
  className?: string
}

export default function SketchArrow({
  from,
  to,
  curve = 30,
  color = '#d4856a',
  strokeWidth = 2.5,
  width = 200,
  height = 100,
  className = '',
}: SketchArrowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    const rc = rough.canvas(canvas)

    // Quadratic bezier control point
    const cx = (from.x + to.x) / 2
    const cy = Math.min(from.y, to.y) - curve

    // Draw the curve as segments
    const steps = 16
    for (let i = 0; i < steps; i++) {
      const t0 = i / steps
      const t1 = (i + 1) / steps

      const x0 = (1 - t0) * (1 - t0) * from.x + 2 * (1 - t0) * t0 * cx + t0 * t0 * to.x
      const y0 = (1 - t0) * (1 - t0) * from.y + 2 * (1 - t0) * t0 * cy + t0 * t0 * to.y
      const x1 = (1 - t1) * (1 - t1) * from.x + 2 * (1 - t1) * t1 * cx + t1 * t1 * to.x
      const y1 = (1 - t1) * (1 - t1) * from.y + 2 * (1 - t1) * t1 * cy + t1 * t1 * to.y

      rc.line(x0, y0, x1, y1, {
        stroke: color,
        strokeWidth,
        roughness: i === 0 ? 1.5 : 0.4,
      })
    }

    // Arrowhead — thick and visible
    const t = (steps - 1) / steps
    const prevX = (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * cx + t * t * to.x
    const prevY = (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * cy + t * t * to.y
    const angle = Math.atan2(to.y - prevY, to.x - prevX)
    const headLen = 14

    rc.line(
      to.x, to.y,
      to.x - headLen * Math.cos(angle - Math.PI / 5),
      to.y - headLen * Math.sin(angle - Math.PI / 5),
      { stroke: color, strokeWidth: strokeWidth + 0.5, roughness: 1.2 }
    )
    rc.line(
      to.x, to.y,
      to.x - headLen * Math.cos(angle + Math.PI / 5),
      to.y - headLen * Math.sin(angle + Math.PI / 5),
      { stroke: color, strokeWidth: strokeWidth + 0.5, roughness: 1.2 }
    )
  }, [from, to, curve, color, strokeWidth, width, height])

  return <canvas ref={canvasRef} className={className} style={{ width, height }} />
}
