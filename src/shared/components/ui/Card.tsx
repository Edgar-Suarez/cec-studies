import { HTMLAttributes, forwardRef } from 'react'

type Elevation = 'elev-1' | 'elev-2'
type Padding = 'none' | 'sm' | 'md' | 'lg'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: Elevation
  padding?: Padding
  interactive?: boolean
}

const elevations: Record<Elevation, string> = {
  'elev-1': 'bg-surface-elevated shadow-elev-1',
  'elev-2': 'bg-surface-elevated-2 shadow-elev-2',
}

const paddings: Record<Padding, string> = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
}

function cx(...parts: Array<string | false | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { elevation = 'elev-1', padding = 'md', interactive = false, className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cx(
        'rounded-lg border border-subtle',
        elevations[elevation],
        paddings[padding],
        interactive && 'cursor-pointer transition-colors duration-75 hover:bg-surface-elevated-2',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
})
