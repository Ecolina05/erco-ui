import * as React from "react"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

type DatePickerContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  selected?: Date
  onSelect: (date: Date) => void
  viewDate: Date
  setViewDate: (date: Date) => void
  triggerId: string
  contentId: string
  disabled?: boolean
}

const DatePickerContext = React.createContext<DatePickerContextValue | null>(null)

function useDatePickerContext() {
  const context = React.useContext(DatePickerContext)
  if (!context) {
    throw new Error("DatePicker components must be used within DatePicker")
  }
  return context
}

const weekdayLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function buildCalendarDays(viewDate: Date) {
  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const firstDay = new Date(year, month, 1)
  const startOffset = firstDay.getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()

  const cells: Array<{ date: Date; inMonth: boolean }> = []

  for (let index = 0; index < 42; index += 1) {
    const dayIndex = index - startOffset + 1
    if (dayIndex <= 0) {
      cells.push({
        date: new Date(year, month - 1, daysInPrevMonth + dayIndex),
        inMonth: false,
      })
    } else if (dayIndex > daysInMonth) {
      cells.push({
        date: new Date(year, month + 1, dayIndex - daysInMonth),
        inMonth: false,
      })
    } else {
      cells.push({
        date: new Date(year, month, dayIndex),
        inMonth: true,
      })
    }
  }

  return cells
}

export interface DatePickerProps {
  value?: Date
  defaultValue?: Date
  onValueChange?: (date: Date | undefined) => void
  disabled?: boolean
  children: React.ReactNode
}

function DatePicker({
  value: valueProp,
  defaultValue,
  onValueChange,
  disabled,
  children,
}: DatePickerProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState<Date | undefined>(
    defaultValue
  )
  const [open, setOpen] = React.useState(false)
  const [viewDate, setViewDate] = React.useState(valueProp ?? defaultValue ?? new Date())
  const triggerId = React.useId()
  const contentId = React.useId()
  const selected = valueProp ?? uncontrolledValue

  React.useEffect(() => {
    if (selected) {
      setViewDate(selected)
    }
  }, [selected])

  function onSelect(date: Date) {
    if (valueProp === undefined) {
      setUncontrolledValue(date)
    }
    onValueChange?.(date)
    setOpen(false)
  }

  React.useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node
      const root = document
        .getElementById(triggerId)
        ?.closest("[data-date-picker-root]")
      if (root && !root.contains(target)) {
        setOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handlePointerDown)
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [open, triggerId])

  return (
    <DatePickerContext.Provider
      value={{
        open,
        setOpen,
        selected,
        onSelect,
        viewDate,
        setViewDate,
        triggerId,
        contentId,
        disabled,
      }}
    >
      <div className="relative inline-block w-full max-w-xs" data-date-picker-root>
        {children}
      </div>
    </DatePickerContext.Provider>
  )
}

export interface DatePickerTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder?: string
}

const DatePickerTrigger = React.forwardRef<
  HTMLButtonElement,
  DatePickerTriggerProps
>(({ className, placeholder = "Pick a date", onClick, ...props }, ref) => {
  const { open, setOpen, selected, triggerId, contentId, disabled } =
    useDatePickerContext()

  const label = selected
    ? selected.toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : placeholder

  return (
    <button
      ref={ref}
      type="button"
      id={triggerId}
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-controls={contentId}
      disabled={disabled}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) {
          setOpen(!open)
        }
      }}
      className={cn(
        "flex h-9 w-full cursor-pointer items-center justify-between gap-2 rounded-2xl border border-input bg-transparent px-4 py-2 text-xs shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        !selected && "text-muted-foreground",
        selected && "text-foreground",
        className
      )}
      {...props}
    >
      <span className="truncate text-left">{label}</span>
      <Calendar size={16} aria-hidden className="shrink-0 text-muted-foreground" />
    </button>
  )
})
DatePickerTrigger.displayName = "DatePickerTrigger"

export interface DatePickerContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

function DatePickerContent({ className, ...props }: DatePickerContentProps) {
  const { open, contentId, triggerId, viewDate, setViewDate, selected, onSelect } =
    useDatePickerContext()

  if (!open) {
    return null
  }

  const monthLabel = viewDate.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  })
  const days = buildCalendarDays(viewDate)

  function shiftMonth(offset: number) {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1))
  }

  return (
    <div
      id={contentId}
      role="dialog"
      aria-labelledby={triggerId}
      className={cn(
        "absolute z-50 mt-1 w-full min-w-[280px] rounded-2xl border border-border bg-popover p-3 text-popover-foreground shadow-md",
        className
      )}
      {...props}
    >
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous month"
          onClick={() => shiftMonth(-1)}
          className="inline-flex size-8 cursor-pointer items-center justify-center rounded-xl text-foreground transition-colors hover:bg-accent"
        >
          <ChevronLeft size={16} aria-hidden />
        </button>
        <span className="text-xs font-semibold">{monthLabel}</span>
        <button
          type="button"
          aria-label="Next month"
          onClick={() => shiftMonth(1)}
          className="inline-flex size-8 cursor-pointer items-center justify-center rounded-xl text-foreground transition-colors hover:bg-accent"
        >
          <ChevronRight size={16} aria-hidden />
        </button>
      </div>

      <div className="mb-1 grid grid-cols-7 gap-1">
        {weekdayLabels.map((day) => (
          <span
            key={day}
            className="py-1 text-center text-xs font-medium text-muted-foreground"
          >
            {day}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map(({ date, inMonth }) => {
          const isSelected = selected ? isSameDay(date, selected) : false

          return (
            <button
              key={date.toISOString()}
              type="button"
              onClick={() => onSelect(date)}
              className={cn(
                "inline-flex size-8 cursor-pointer items-center justify-center rounded-full text-xs transition-colors",
                inMonth ? "text-foreground" : "text-muted-foreground/60",
                isSelected
                  ? "bg-primary text-primary-foreground hover:bg-primary"
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { DatePicker, DatePickerTrigger, DatePickerContent }
