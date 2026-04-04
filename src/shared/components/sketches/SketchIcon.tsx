'use client'

import { useEffect, useRef } from 'react'
import rough from 'roughjs'
import type { LucideIcon } from 'lucide-react'

interface SketchIconProps {
  icon: LucideIcon
  color?: string
  fillColor?: string
  size?: number
  className?: string
}

export default function SketchIcon({
  icon: Icon,
  color = '#64748b',
  fillColor,
  size = 40,
  className = '',
}: SketchIconProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pad = 8
  const total = size + pad * 2

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = total * dpr
    canvas.height = total * dpr
    canvas.style.width = `${total}px`
    canvas.style.height = `${total}px`

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    const rc = rough.canvas(canvas)

    // Irregular background circle — pencil-colored fill
    rc.circle(total / 2, total / 2, total - 4, {
      stroke: color,
      strokeWidth: 1.2,
      roughness: 2.5,
      bowing: 2,
      fill: fillColor ?? `${color}18`,
      fillStyle: 'cross-hatch',
      fillWeight: 0.5,
      hachureAngle: 40,
      hachureGap: 4,
    })
  }, [color, fillColor, total])

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: total, height: total }}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ width: total, height: total }} />
      <Icon size={size * 0.55} strokeWidth={1.5} className="relative z-10" style={{ color }} />
    </div>
  )
}
