import * as React from "react"

import { cn } from "@/lib/utils"

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  labelClassName?: string
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, labelClassName, children, id, disabled, ...props }, ref) => {
    const generatedId = React.useId()
    const inputId = id ?? generatedId

    return (
      <label
        htmlFor={inputId}
        className={cn(
          "inline-flex cursor-pointer items-center gap-2 leading-none",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
      >
        <input
          type="checkbox"
          role="switch"
          id={inputId}
          ref={ref}
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />
        <span
          aria-hidden
          className={cn(
            "relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-input bg-muted shadow-sm transition-colors",
            "peer-checked:border-primary peer-checked:bg-primary peer-checked:[&_span]:translate-x-4",
            "peer-focus-visible:outline-none peer-focus-visible:ring-1 peer-focus-visible:ring-ring",
            "peer-disabled:cursor-not-allowed"
          )}
        >
          <span className="pointer-events-none block size-4 translate-x-0.5 rounded-full bg-background shadow-sm transition-transform" />
        </span>
        {children ? (
          <span className={cn("text-sm font-normal", labelClassName)}>
            {children}
          </span>
        ) : null}
      </label>
    )
  }
)
Switch.displayName = "Switch"

export { Switch }
