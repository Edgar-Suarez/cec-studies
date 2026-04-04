'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import rough from 'roughjs'

interface SketchBubbleProps {
  children: ReactNode
  color?: string
  tail?: 'left' | 'right' | 'bottom' | 'top' | 'none'
  className?: string
}

export default function SketchBubble({
  children,
  color = '#3b82f6',
  tail = 'bottom',
  className = '',
}: SketchBubbleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const draw = () => {
      const rect = container.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      if (w === 0 || h === 0) return

      const dpr = window.devicePixelRatio || 1
      const extra = 20
      canvas.width = (w + extra * 2) * dpr
      canvas.height = (h + extra * 2) * dpr
      canvas.style.width = `${w + extra * 2}px`
      canvas.style.height = `${h + extra * 2}px`
      canvas.style.left = `${-extra}px`
      canvas.style.top = `${-extra}px`

      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.scale(dpr, dpr)

      const rc = rough.canvas(canvas)

      // Bubble body
      const bx = extra
      const by = extra
      const bw = w
      const bh = h
      rc.rectangle(bx, by, bw, bh, {
        stroke: color,
        strokeWidth: 1.5,
        roughness: 2.5,
        bowing: 2,
        fill: 'rgba(253,251,247,0.95)',
        fillStyle: 'solid',
      })

      // Tail
      if (tail !== 'none') {
        const pts: [number, number][] = []
        if (tail === 'bottom') {
          const cx = bx + bw * 0.35
          pts.push([cx, by + bh], [cx + 12, by + bh + 16], [cx + 20, by + bh])
        } else if (tail === 'top') {
          const cx = bx + bw * 0.35
          pts.push([cx, by], [cx + 12, by - 16], [cx + 20, by])
        } else if (tail === 'left') {
          const cy = by + bh * 0.4
          pts.push([bx, cy], [bx - 16, cy + 8], [bx, cy + 18])
        } else if (tail === 'right') {
          const cy = by + bh * 0.4
          pts.push([bx + bw, cy], [bx + bw + 16, cy + 8], [bx + bw, cy + 18])
        }
        if (pts.length === 3) {
          rc.polygon(pts, {
            stroke: color,
            strokeWidth: 1.5,
            roughness: 2,
            fill: 'rgba(253,251,247,0.95)',
            fillStyle: 'solid',
          })
          // Cover the shared edge between bubble and tail
          ctx.save()
          ctx.fillStyle = '#fdfbf7'
          if (tail === 'bottom') ctx.fillRect(pts[0][0] + 2, pts[0][1] - 2, pts[2][0] - pts[0][0] - 4, 4)
          if (tail === 'top') ctx.fillRect(pts[0][0] + 2, pts[0][1] - 2, pts[2][0] - pts[0][0] - 4, 4)
          if (tail === 'left') ctx.fillRect(pts[0][0] - 2, pts[0][1] + 2, 4, pts[2][1] - pts[0][1] - 4)
          if (tail === 'right') ctx.fillRect(pts[0][0] - 2, pts[0][1] + 2, 4, pts[2][1] - pts[0][1] - 4)
          ctx.restore()
        }
      }

      setReady(true)
    }

    const timer = setTimeout(draw, 60)
    return () => clearTimeout(timer)
  }, [color, tail])

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
      style={{ margin: tail !== 'none' ? 20 : 0 }}
    >
      <canvas ref={canvasRef} className="absolute pointer-events-none" />
      <div
        className="relative z-10 px-4 py-3 font-hand text-slate-800"
        style={{ opacity: ready ? 1 : 0, transition: 'opacity 300ms ease-in' }}
      >
        {children}
      </div>
    </div>
  )
}
