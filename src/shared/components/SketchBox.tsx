'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { annotate } from 'rough-notation'
import type { RoughAnnotationType } from 'rough-notation/lib/model'

interface SketchBoxProps {
  children: ReactNode
  type?: RoughAnnotationType
  color?: string
  multiline?: boolean
  strokeWidth?: number
  padding?: number | [number, number] | [number, number, number, number]
  animate?: boolean
  animationDuration?: number
}

export default function SketchBox({
  children,
  type = 'box',
  color = '#3b82f6',
  multiline = true,
  strokeWidth = 2,
  padding = 8,
  animate = true,
  animationDuration = 600,
}: SketchBoxProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<ReturnType<typeof annotate> | null>(null)

  useEffect(() => {
    if (!ref.current) return

    annotationRef.current = annotate(ref.current, {
      type,
      color,
      multiline,
      strokeWidth,
      padding,
      animate,
      animationDuration,
    })

    annotationRef.current.show()

    return () => {
      annotationRef.current?.remove()
    }
  }, [type, color, multiline, strokeWidth, padding, animate, animationDuration])

  return (
    <span ref={ref} className="font-hand">
      {children}
    </span>
  )
}
