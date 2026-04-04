'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import rough from 'roughjs'

interface SketchBlobProps {
  children: ReactNode
  color?: string
  fillColor?: string
  width?: number
  height?: number
  className?: string
}

export default function SketchBlob({
  children,
  color = '#333',
  fillColor = 'rgba(253,251,247,0.9)',
  width = 120,
  height = 80,
  className = '',
}: SketchBlobProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    const pad = 6
    const cw = width + pad * 2
    const ch = height + pad * 2
    canvas.width = cw * dpr
    canvas.height = ch * dpr
    canvas.style.width = `${cw}px`
    canvas.style.height = `${ch}px`

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    const rc = rough.canvas(canvas)

    rc.ellipse(cw / 2, ch / 2, width, height, {
      stroke: color,
      strokeWidth: 1.8,
      roughness: 2.5,
      bowing: 2,
      fill: fillColor,
      fillStyle: 'solid',
    })

    setReady(true)
  }, [color, fillColor, width, height])

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: width + 12, height: height + 12 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ width: width + 12, height: height + 12 }}
      />
      <div
        className="relative z-10 text-center font-hand text-slate-800 px-3 py-1"
        style={{ opacity: ready ? 1 : 0, transition: 'opacity 250ms ease-in', maxWidth: width - 16 }}
      >
        {children}
      </div>
    </div>
  )
}
