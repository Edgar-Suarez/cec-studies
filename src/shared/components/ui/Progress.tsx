import { HTMLAttributes, forwardRef } from 'react'

type Size = 'sm' | 'md'
type Tone = 'default' | 'success' | 'warning' | 'danger'

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  size?: Size
  label?: string
  tone?: Tone
}

const sizes: Record<Size, string> = {
  sm: 'h-1.5',
  md: 'h-2.5',
}

const tones: Record<Tone, string> = {
  default: 'bg-accent',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
}

function cx(...parts: Array<string | false | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

function clampPct(value: number, max: number): number {
  if (!Number.isFinite(value) || !Number.isFinite(max) || max <= 0) return 0
  return Math.max(0, Math.min(100, (value / max) * 100))
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(function Progress(
  { value, max = 100, size = 'md', label, tone = 'default', className, ...rest },
  ref,
) {
  const pct = clampPct(value, max)
  return (
    <div ref={ref} className={cx('flex flex-col gap-1', className)} {...rest}>
      {label ? (
        <div className="flex justify-between items-baseline text-xs">
          <span className="text-secondary">{label}</span>
          <span className="text-muted font-mono">
            {Math.round(value)}/{max}
          </span>
        </div>
      ) : null}
      <div
        role="progressbar"
        aria-valuenow={Math.round(value)}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cx(
          'w-full bg-surface-elevated-2 rounded-pill overflow-hidden',
          sizes[size],
        )}
      >
        <div
          className={cx('h-full rounded-pill transition-[width] duration-300', tones[tone])}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
})
