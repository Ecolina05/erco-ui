import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputOTPProps {
  length?: number
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  disabled?: boolean
  className?: string
  slotClassName?: string
}

function sanitizeDigits(input: string, maxLength: number) {
  return input.replace(/\D/g, "").slice(0, maxLength)
}

function InputOTP({
  length = 6,
  value: valueProp,
  defaultValue = "",
  onChange,
  disabled,
  className,
  slotClassName,
}: InputOTPProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue)
  const value = valueProp ?? uncontrolledValue
  const sanitizedValue = sanitizeDigits(value, length)
  const slots = Array.from({ length }, (_, index) => sanitizedValue[index] ?? "")
  const inputRefs = React.useRef<Array<HTMLInputElement | null>>([])

  function updateValue(next: string) {
    const sanitized = sanitizeDigits(next, length)
    if (valueProp === undefined) {
      setUncontrolledValue(sanitized)
    }
    onChange?.(sanitized)
  }

  function focusSlot(index: number) {
    const target = inputRefs.current[index]
    target?.focus()
    target?.select()
  }

  function handleSlotChange(index: number, nextChar: string) {
    const sanitized = sanitizeDigits(nextChar, 1)
    const next =
      sanitizedValue.slice(0, index) +
      sanitized +
      sanitizedValue.slice(index + 1)
    updateValue(next)

    if (sanitized && index < length - 1) {
      focusSlot(index + 1)
    }
  }

  function handleKeyDown(
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Backspace") {
      if (!slots[index] && index > 0) {
        event.preventDefault()
        updateValue(sanitizedValue.slice(0, index - 1) + sanitizedValue.slice(index))
        focusSlot(index - 1)
      }
    }

    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault()
      focusSlot(index - 1)
    }

    if (event.key === "ArrowRight" && index < length - 1) {
      event.preventDefault()
      focusSlot(index + 1)
    }
  }

  function handlePaste(event: React.ClipboardEvent<HTMLInputElement>) {
    event.preventDefault()
    const pasted = sanitizeDigits(event.clipboardData.getData("text"), length)
    updateValue(pasted)
    focusSlot(Math.min(pasted.length, length - 1))
  }

  return (
    <div
      className={cn(
        "inline-flex overflow-hidden rounded-2xl border border-input bg-transparent shadow-sm",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(node) => {
            inputRefs.current[index] = node
          }}
          type="text"
          inputMode="numeric"
          autoComplete={index === 0 ? "one-time-code" : "off"}
          maxLength={1}
          disabled={disabled}
          value={slots[index]}
          aria-label={`Digit ${index + 1}`}
          onChange={(event) => handleSlotChange(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={handlePaste}
          onFocus={(event) => event.currentTarget.select()}
          className={cn(
            "size-9 border-0 bg-transparent text-center text-xs text-foreground transition-shadow focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
            index > 0 && "border-l border-input",
            slotClassName
          )}
        />
      ))}
    </div>
  )
}

InputOTP.displayName = "InputOTP"

export { InputOTP }
