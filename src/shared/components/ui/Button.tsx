import { ButtonHTMLAttributes, forwardRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'
type Tone = 'success' | 'warning' | 'danger' | 'info'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  /**
   * Optional color tone that overrides the variant's default color family.
   * Useful for sets of buttons that share shape (variant) but differ in
   * meaning (e.g. SM-2 rating buttons: same `variant="primary"`, different
   * `tone` per rating). `tone` does not apply when `variant="danger"`
   * (variant="danger" is itself a tone shortcut and ignores this prop).
   */
  tone?: Tone
}

const base = [
  'inline-flex items-center justify-center gap-2',
  'font-sans font-medium',
  'rounded-md',
  'transition-colors duration-75',
  'focus-visible:outline-none focus-visible:shadow-focus',
  'disabled:cursor-not-allowed disabled:opacity-50',
  'select-none',
].join(' ')

// Pre-resolved [variant × tone] table. Verbose by design — Tailwind's
// content scanner needs literal class names; computed strings (e.g.
// `bg-${tone}`) won't be picked up at build time.
type Slot = `${Variant}_${Tone | 'none'}`

const styles: Record<Slot, string> = {
  primary_none: 'bg-accent text-accent-contrast hover:bg-accent-hover',
  primary_success: 'bg-success text-accent-contrast hover:opacity-90',
  primary_warning: 'bg-warning text-accent-contrast hover:opacity-90',
  primary_danger: 'bg-danger text-accent-contrast hover:opacity-90',
  primary_info: 'bg-accent text-accent-contrast hover:bg-accent-hover',

  secondary_none: 'bg-surface-elevated text-primary border border-subtle hover:bg-surface-elevated-2',
  secondary_success: 'bg-surface-elevated text-success border border-success hover:bg-surface-elevated-2',
  secondary_warning: 'bg-surface-elevated text-warning border border-warning hover:bg-surface-elevated-2',
  secondary_danger: 'bg-surface-elevated text-danger border border-danger hover:bg-surface-elevated-2',
  secondary_info: 'bg-surface-elevated text-accent border border-accent hover:bg-surface-elevated-2',

  ghost_none: 'bg-transparent text-primary hover:bg-surface-elevated',
  ghost_success: 'bg-transparent text-success hover:bg-surface-elevated',
  ghost_warning: 'bg-transparent text-warning hover:bg-surface-elevated',
  ghost_danger: 'bg-transparent text-danger hover:bg-surface-elevated',
  ghost_info: 'bg-transparent text-accent hover:bg-surface-elevated',

  // variant="danger" is a hardcoded shortcut — tone is ignored.
  danger_none: 'bg-danger text-accent-contrast hover:opacity-90',
  danger_success: 'bg-danger text-accent-contrast hover:opacity-90',
  danger_warning: 'bg-danger text-accent-contrast hover:opacity-90',
  danger_danger: 'bg-danger text-accent-contrast hover:opacity-90',
  danger_info: 'bg-danger text-accent-contrast hover:opacity-90',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-3 text-sm',   // 40dp
  md: 'h-12 px-4 text-base', // 48dp — glove-friendly default
  lg: 'h-14 px-6 text-lg',   // 56dp — primary action
}

function cx(...parts: Array<string | false | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', loading = false, tone, disabled, className, children, ...rest },
  ref,
) {
  const slot: Slot = `${variant}_${tone ?? 'none'}`
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      data-loading={loading || undefined}
      className={cx(base, styles[slot], sizes[size], className)}
      {...rest}
    >
      {loading ? <Spinner /> : null}
      <span className={loading ? 'opacity-60' : undefined}>{children}</span>
    </button>
  )
})

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
      <path
        d="M22 12a10 10 0 0 1-10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}
