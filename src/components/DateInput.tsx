import * as React from "react"

import { Input, type InputProps } from "@/components/Input"
import { Label } from "@/components/Typography"
import { cn } from "@/lib/utils"

const DATE_MASK_MAX_DIGITS = 8

function extractDateDigits(value: string) {
  return value.replace(/\D/g, "").slice(0, DATE_MASK_MAX_DIGITS)
}

/** Formats digits as DD/MM/YYYY — slashes are fixed once day/month digits exist. */
export function formatDateMask(value: string) {
  const digits = extractDateDigits(value)

  if (digits.length === 0) {
    return ""
  }

  if (digits.length <= 2) {
    return digits
  }

  if (digits.length <= 4) {
    return `${digits.slice(0, 2)}/${digits.slice(2)}`
  }

  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`
}

export interface DateInputProps
  extends Omit<InputProps, "type" | "value" | "defaultValue" | "onChange"> {
  label?: string
  labelClassName?: string
  wrapperClassName?: string
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      label = "Date",
      labelClassName,
      wrapperClassName,
      className,
      placeholder = "dd/mm/aaaa",
      id,
      value: valueProp,
      defaultValue = "",
      onValueChange,
      onChange,
      onKeyDown,
      onPaste,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const inputId = id ?? generatedId
    const [uncontrolledValue, setUncontrolledValue] = React.useState(() =>
      formatDateMask(defaultValue)
    )
    const maskedValue = formatDateMask(valueProp ?? uncontrolledValue)

    function commitValue(nextMasked: string) {
      if (valueProp === undefined) {
        setUncontrolledValue(nextMasked)
      }
      onValueChange?.(nextMasked)
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      const nextMasked = formatDateMask(event.target.value)
      commitValue(nextMasked)

      onChange?.({
        ...event,
        target: { ...event.target, value: nextMasked },
        currentTarget: { ...event.currentTarget, value: nextMasked },
      })
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
      if (event.key === "Backspace") {
        const digits = extractDateDigits(maskedValue)
        if (digits.length > 0) {
          event.preventDefault()
          const nextMasked = formatDateMask(digits.slice(0, -1))
          commitValue(nextMasked)
          onChange?.({
            ...event,
            target: { ...event.currentTarget, value: nextMasked },
            currentTarget: { ...event.currentTarget, value: nextMasked },
          } as React.ChangeEvent<HTMLInputElement>)
        }
      }

      onKeyDown?.(event)
    }

    function handlePaste(event: React.ClipboardEvent<HTMLInputElement>) {
      event.preventDefault()
      const nextMasked = formatDateMask(event.clipboardData.getData("text"))
      commitValue(nextMasked)
      onChange?.({
        ...event,
        target: { ...event.currentTarget, value: nextMasked },
        currentTarget: { ...event.currentTarget, value: nextMasked },
      } as React.ChangeEvent<HTMLInputElement>)
      onPaste?.(event)
    }

    return (
      <div className={cn("space-y-2", wrapperClassName)}>
        <Label htmlFor={inputId} className={labelClassName}>
          {label}
        </Label>
        <Input
          ref={ref}
          id={inputId}
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder={placeholder}
          value={maskedValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          className={className}
          {...props}
        />
      </div>
    )
  }
)
DateInput.displayName = "DateInput"

export { DateInput }
