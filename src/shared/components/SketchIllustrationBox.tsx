'use client'

import type { LucideIcon } from 'lucide-react'
import SketchBox from './SketchBox'

type IllustrationType = 'document' | 'coin' | 'sign'

interface SketchIllustrationBoxProps {
  title: string
  subtitle?: string
  icon: LucideIcon
  illustrationType: IllustrationType
  color?: string
}

const illustrations: Record<IllustrationType, React.ReactNode> = {
  document: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 6h14l8 8v26a2 2 0 01-2 2H14a2 2 0 01-2-2V8a2 2 0 012-2z" />
      <path d="M28 6v8h8" />
      <path d="M18 20h12M18 26h12M18 32h8" />
      <circle cx="34" cy="36" r="5" strokeDasharray="3 2" />
      <path d="M32.5 36l1 1 2.5-2.5" />
    </svg>
  ),
  coin: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="24" cy="26" rx="14" ry="14" />
      <ellipse cx="24" cy="22" rx="14" ry="14" strokeDasharray="4 3" />
      <path d="M24 16v12" />
      <path d="M20 19c0-1.5 1.5-2.5 4-2.5s4 1 4 2.5-1.5 2-4 2.5-4 1.5-4 3 1.5 2.5 4 2.5 4-1 4-2.5" />
    </svg>
  ),
  sign: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 8h22l5 7-5 7H10V8z" />
      <path d="M10 8v34" />
      <path d="M16 14h10M16 18h6" />
      <path d="M8 42h4" strokeDasharray="2 2" />
    </svg>
  ),
}

export default function SketchIllustrationBox({
  title,
  subtitle,
  icon: Icon,
  illustrationType,
  color = '#3b82f6',
}: SketchIllustrationBoxProps) {
  return (
    <SketchBox type="box" color={color} padding={12} strokeWidth={1.5}>
      <span className="flex flex-col items-center text-center gap-2 px-2 py-1" style={{ color }}>
        <Icon size={22} strokeWidth={1.5} />
        <span className="font-hand text-lg font-bold leading-tight text-gray-800">
          {title}
        </span>
        <span style={{ color }} className="opacity-60">
          {illustrations[illustrationType]}
        </span>
        {subtitle && (
          <span className="font-hand text-sm text-gray-500 leading-snug">
            {subtitle}
          </span>
        )}
      </span>
    </SketchBox>
  )
}
