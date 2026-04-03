'use client'

import { useEffect, useRef } from 'react'
import type { SketchData } from '../lib/types'
import rough from 'roughjs'

const COLORS: Record<string, { fill: string; stroke: string }> = {
  blue:    { fill: 'rgba(59,130,246,0.15)', stroke: '#3b82f6' },
  green:   { fill: 'rgba(16,185,129,0.15)', stroke: '#10b981' },
  red:     { fill: 'rgba(239,68,68,0.15)',   stroke: '#ef4444' },
  yellow:  { fill: 'rgba(245,158,11,0.15)',  stroke: '#f59e0b' },
  purple:  { fill: 'rgba(139,92,246,0.15)',  stroke: '#8b5cf6' },
  default: { fill: 'rgba(100,116,139,0.12)', stroke: '#64748b' },
}

function getColor(name?: string) {
  return COLORS[name ?? 'default'] ?? COLORS.default
}

export default function SketchRenderer({ data }: { data: SketchData }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const w = data.width ?? 700
  const h = data.height ?? 400

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // HiDPI support
    const dpr = window.devicePixelRatio || 1
    canvas.width = w * dpr
    canvas.height = h * dpr
    ctx.scale(dpr, dpr)
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`

    ctx.clearRect(0, 0, w, h)

    const rc = rough.canvas(canvas)

    // Draw edges first (behind nodes)
    for (const edge of data.edges) {
      const from = data.nodes.find((n) => n.id === edge.from)
      const to = data.nodes.find((n) => n.id === edge.to)
      if (!from || !to) continue

      const fx = from.x + from.w / 2
      const fy = from.y + from.h / 2
      const tx = to.x + to.w / 2
      const ty = to.y + to.h / 2

      rc.line(fx, fy, tx, ty, {
        stroke: '#64748b',
        strokeWidth: 1.5,
        roughness: 1.2,
      })

      // Arrowhead
      const angle = Math.atan2(ty - fy, tx - fx)
      const arrowLen = 10
      const arrowX = tx - (to.w / 2) * Math.cos(angle)
      const arrowY = ty - (to.h / 2) * Math.sin(angle)
      ctx.save()
      ctx.strokeStyle = '#64748b'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(arrowX, arrowY)
      ctx.lineTo(
        arrowX - arrowLen * Math.cos(angle - Math.PI / 6),
        arrowY - arrowLen * Math.sin(angle - Math.PI / 6)
      )
      ctx.moveTo(arrowX, arrowY)
      ctx.lineTo(
        arrowX - arrowLen * Math.cos(angle + Math.PI / 6),
        arrowY - arrowLen * Math.sin(angle + Math.PI / 6)
      )
      ctx.stroke()
      ctx.restore()

      // Edge label
      if (edge.label) {
        const mx = (fx + tx) / 2
        const my = (fy + ty) / 2
        ctx.save()
        ctx.font = '11px Inter, system-ui, sans-serif'
        ctx.fillStyle = '#94a3b8'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        const lw = ctx.measureText(edge.label).width + 8
        ctx.fillStyle = '#0f172a'
        ctx.fillRect(mx - lw / 2, my - 8, lw, 16)
        ctx.fillStyle = '#94a3b8'
        ctx.fillText(edge.label, mx, my)
        ctx.restore()
      }
    }

    // Draw nodes
    for (const node of data.nodes) {
      const c = getColor(node.color)
      const shape = node.type ?? 'rect'

      if (shape === 'ellipse') {
        rc.ellipse(node.x + node.w / 2, node.y + node.h / 2, node.w, node.h, {
          fill: c.fill,
          stroke: c.stroke,
          strokeWidth: 1.5,
          roughness: 1.5,
          fillStyle: 'solid',
        })
      } else if (shape === 'diamond') {
        const cx = node.x + node.w / 2
        const cy = node.y + node.h / 2
        const hw = node.w / 2
        const hh = node.h / 2
        rc.polygon(
          [[cx, cy - hh], [cx + hw, cy], [cx, cy + hh], [cx - hw, cy]],
          {
            fill: c.fill,
            stroke: c.stroke,
            strokeWidth: 1.5,
            roughness: 1.5,
            fillStyle: 'solid',
          }
        )
      } else {
        rc.rectangle(node.x, node.y, node.w, node.h, {
          fill: c.fill,
          stroke: c.stroke,
          strokeWidth: 1.5,
          roughness: 1.5,
          fillStyle: 'solid',
        })
      }

      // Label
      ctx.save()
      ctx.font = '12px Inter, system-ui, sans-serif'
      ctx.fillStyle = '#e2e8f0'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      const lines = node.label.split('\n')
      const lineHeight = 15
      const startY = node.y + node.h / 2 - ((lines.length - 1) * lineHeight) / 2
      for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], node.x + node.w / 2, startY + i * lineHeight)
      }
      ctx.restore()
    }
  }, [data, w, h])

  return (
    <div className="my-4 rounded-xl border border-purple-500/20 bg-gradient-to-br from-slate-900 to-slate-800 p-4 overflow-x-auto">
      <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        Hand-drawn Sketch
      </div>
      <div className="flex justify-center">
        <canvas
          ref={canvasRef}
          style={{ width: w, height: h }}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  )
}
