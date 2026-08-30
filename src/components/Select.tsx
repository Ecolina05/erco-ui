import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

type SelectContextValue = {
  value?: string
  onValueChange: (value: string) => void
  open: boolean
  setOpen: (open: boolean) => void
  disabled?: boolean
  triggerId: string
  contentId: string
}

const SelectContext = React.createContext<SelectContextValue | null>(null)

function useSelectContext() {
  const context = React.useContext(SelectContext)
  if (!context) {
    throw new Error("Select components must be used within Select")
  }
  return context
}

export interface SelectProps {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  children: React.ReactNode
}

function Select({
  value: valueProp,
  defaultValue,
  onValueChange,
  disabled,
  children,
}: SelectProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue)
  const [open, setOpen] = React.useState(false)
  const triggerId = React.useId()
  const contentId = React.useId()
  const value = valueProp ?? uncontrolledValue

  function handleValueChange(nextValue: string) {
    if (valueProp === undefined) {
      setUncontrolledValue(nextValue)
    }
    onValueChange?.(nextValue)
    setOpen(false)
  }

  React.useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node
      const root = document.getElementById(triggerId)?.closest("[data-select-root]")
      if (root && !root.contains(target)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handlePointerDown)
    }

    return () => document.removeEventListener("mousedown", handlePointerDown)
  }, [open, triggerId])

  return (
    <SelectContext.Provider
      value={{
        value,
        onValueChange: handleValueChange,
        open,
        setOpen,
        disabled,
        triggerId,
        contentId,
      }}
    >
      <div className="relative" data-select-root>
        {children}
      </div>
    </SelectContext.Provider>
  )
}

export interface SelectTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen, disabled, triggerId, contentId } = useSelectContext()

    return (
      <button
        ref={ref}
        type="button"
        id={triggerId}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={contentId}
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className={cn(
          "flex h-9 w-full items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown
          size={16}
          aria-hidden
          className={cn(
            "shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
    )
  }
)
SelectTrigger.displayName = "SelectTrigger"

export interface SelectValueProps {
  placeholder?: string
  className?: string
}

function SelectValue({ placeholder, className }: SelectValueProps) {
  const { value } = useSelectContext()

  return (
    <span
      className={cn(
        "truncate text-left",
        !value && "text-muted-foreground",
        className
      )}
    >
      {value ?? placeholder}
    </span>
  )
}

export interface SelectContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

function SelectContent({ className, children, ...props }: SelectContentProps) {
  const { open, contentId, triggerId } = useSelectContext()

  if (!open) {
    return null
  }

  return (
    <div
      id={contentId}
      role="listbox"
      aria-labelledby={triggerId}
      className={cn(
        "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface SelectItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

function SelectItem({
  className,
  value,
  children,
  ...props
}: SelectItemProps) {
  const { value: selectedValue, onValueChange } = useSelectContext()
  const isSelected = selectedValue === value

  return (
    <button
      type="button"
      role="option"
      aria-selected={isSelected}
      onClick={() => onValueChange(value)}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        isSelected && "bg-accent text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
      {isSelected ? (
        <Check size={16} aria-hidden className="absolute right-2 text-foreground" />
      ) : null}
    </button>
  )
}

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
}
