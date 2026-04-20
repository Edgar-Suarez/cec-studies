import { ButtonHTMLAttributes, forwardRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
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

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-contrast hover:bg-accent-hover',
  secondary: 'bg-surface-elevated text-primary border border-subtle hover:bg-surface-elevated-2',
  ghost: 'bg-transparent text-primary hover:bg-surface-elevated',
  danger: 'bg-danger text-accent-contrast hover:opacity-90',
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
  { variant = 'primary', size = 'md', loading = false, disabled, className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      data-loading={loading || undefined}
      className={cx(base, variants[variant], sizes[size], className)}
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
