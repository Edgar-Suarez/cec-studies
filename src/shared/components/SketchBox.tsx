'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
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
  animationDuration = 1000,
}: SketchBoxProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<ReturnType<typeof annotate> | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Small delay to ensure DOM is painted before rough-notation measures
    const timer = setTimeout(() => {
      annotationRef.current = annotate(el, {
        type,
        color,
        multiline,
        strokeWidth,
        padding,
        animate,
        animationDuration,
      })

      annotationRef.current.show()
      setVisible(true)
    }, 50)

    return () => {
      clearTimeout(timer)
      annotationRef.current?.remove()
    }
  }, [type, color, multiline, strokeWidth, padding, animate, animationDuration])

  return (
    <span
      ref={ref}
      className="inline-block font-hand"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 300ms ease-in',
      }}
    >
      {children}
    </span>
  )
}
