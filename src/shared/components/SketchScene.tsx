'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import rough from 'roughjs'

interface SketchSceneProps {
  children: ReactNode
  title?: string
  titleColor?: string
  className?: string
}

function PaperBorder({ color = '#c4a882' }: { color?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dims, setDims] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const parent = canvas.parentElement
    if (!parent) return

    const w = parent.offsetWidth
    const h = parent.offsetHeight
    setDims({ w, h })

    const dpr = window.devicePixelRatio || 1
    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    const rc = rough.canvas(canvas)
    rc.rectangle(4, 4, w - 8, h - 8, {
      stroke: color,
      strokeWidth: 1.5,
      roughness: 3,
      bowing: 2,
      fill: 'transparent',
      fillStyle: 'solid',
    })
  }, [color])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ width: dims.w || '100%', height: dims.h || '100%' }}
    />
  )
}

function SketchTitle({ text, color = '#1e293b' }: { text: string; color?: string }) {
  const ref = useRef<HTMLHeadingElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const heading = ref.current
    const canvas = canvasRef.current
    if (!heading || !canvas) return

    const timer = setTimeout(() => {
      const rect = heading.getBoundingClientRect()
      const w = rect.width + 24
      const h = 6
      const dpr = window.devicePixelRatio || 1
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`

      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.scale(dpr, dpr)

      const rc = rough.canvas(canvas)
      rc.line(0, 3, w, 3, {
        stroke: color,
        strokeWidth: 2.5,
        roughness: 2,
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [text, color])

  return (
    <div className="flex flex-col items-center mb-6">
      <h2
        ref={ref}
        className="font-hand text-3xl font-bold tracking-tight"
        style={{ color }}
      >
        {text}
      </h2>
      <canvas ref={canvasRef} className="mt-0.5" />
    </div>
  )
}

export default function SketchScene({
  children,
  title,
  titleColor = '#1e293b',
  className = '',
}: SketchSceneProps) {
  return (
    <div
      className={`relative font-hand p-8 md:p-10 ${className}`}
      style={{ background: '#fdfbf7' }}
    >
      <PaperBorder />
      <div className="relative z-10">
        {title && <SketchTitle text={title} color={titleColor} />}
        {children}
      </div>
    </div>
  )
}
