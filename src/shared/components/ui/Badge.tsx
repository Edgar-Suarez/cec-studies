import { HTMLAttributes, forwardRef } from 'react'

type Variant = 'default' | 'success' | 'warning' | 'danger' | 'info'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant
}

const variants: Record<Variant, string> = {
  default: 'bg-surface-elevated-2 text-secondary border-subtle',
  success: 'bg-surface-elevated-2 text-success border-success',
  warning: 'bg-surface-elevated-2 text-warning border-warning',
  danger: 'bg-surface-elevated-2 text-danger border-danger',
  info: 'bg-surface-elevated-2 text-accent border-accent',
}

function cx(...parts: Array<string | false | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { variant = 'default', className, children, ...rest },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cx(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-pill border text-xs font-medium font-mono uppercase tracking-wide',
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  )
})
