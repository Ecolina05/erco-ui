import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  labelClassName?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
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
          id={inputId}
          ref={ref}
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />
        <span
          aria-hidden
          className={cn(
            "flex size-4 shrink-0 items-center justify-center rounded-lg border border-input bg-background shadow-sm transition-colors",
            "peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground",
            "peer-checked:[&_svg]:opacity-100",
            "peer-focus-visible:outline-none peer-focus-visible:ring-1 peer-focus-visible:ring-ring",
            "peer-disabled:cursor-not-allowed"
          )}
        >
          <Check className="size-3 opacity-0 transition-opacity" strokeWidth={3} />
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
Checkbox.displayName = "Checkbox"

export { Checkbox }
