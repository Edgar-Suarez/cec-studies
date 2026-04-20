import { InputHTMLAttributes, forwardRef, useId } from 'react'

type State = 'default' | 'error' | 'success' | 'disabled'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled'> {
  label?: string
  hint?: string
  error?: string
  unit?: string
  mono?: boolean
  state?: State
}

const stateStyles: Record<State, string> = {
  default: 'border-subtle focus-within:border-strong',
  error: 'border-danger',
  success: 'border-success',
  disabled: 'border-subtle opacity-60 cursor-not-allowed',
}

function cx(...parts: Array<string | false | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, unit, mono, state, type = 'text', className, id, ...rest },
  ref,
) {
  const autoId = useId()
  const inputId = id ?? autoId
  const resolvedState: State = error ? 'error' : state ?? 'default'
  const isNumber = type === 'number'
  const useMono = mono ?? isNumber

  return (
    <div className="flex flex-col gap-1">
      {label ? (
        <label htmlFor={inputId} className="text-sm font-medium text-secondary">
          {label}
        </label>
      ) : null}

      <div
        className={cx(
          'flex items-center h-12 rounded-md border bg-surface-base',
          'transition-colors duration-75',
          stateStyles[resolvedState],
          className,
        )}
      >
        <input
          ref={ref}
          id={inputId}
          type={type}
          disabled={resolvedState === 'disabled'}
          aria-invalid={resolvedState === 'error' || undefined}
          aria-describedby={error ? `${inputId}-err` : hint ? `${inputId}-hint` : undefined}
          className={cx(
            'flex-1 h-full px-3 bg-transparent text-primary placeholder:text-muted',
            'outline-none',
            useMono && 'font-mono',
          )}
          {...rest}
        />
        {unit ? (
          <span className="pr-3 text-sm font-mono text-muted select-none">{unit}</span>
        ) : null}
      </div>

      {error ? (
        <p id={`${inputId}-err`} className="text-xs text-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={`${inputId}-hint`} className="text-xs text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  )
})
