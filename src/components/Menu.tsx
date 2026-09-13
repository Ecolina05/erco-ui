import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

type MenuContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  triggerId: string
  contentId: string
}

const MenuContext = React.createContext<MenuContextValue | null>(null)

function useMenuContext() {
  const context = React.useContext(MenuContext)
  if (!context) {
    throw new Error("Menu components must be used within Menu")
  }
  return context
}

export interface MenuProps {
  children: React.ReactNode
}

function Menu({ children }: MenuProps) {
  const [open, setOpen] = React.useState(false)
  const triggerId = React.useId()
  const contentId = React.useId()

  React.useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node
      const root = document
        .getElementById(triggerId)
        ?.closest("[data-menu-root]")
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
    <MenuContext.Provider value={{ open, setOpen, triggerId, contentId }}>
      <div className="relative inline-block text-left" data-menu-root>
        {children}
      </div>
    </MenuContext.Provider>
  )
}

export interface MenuTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const MenuTrigger = React.forwardRef<HTMLButtonElement, MenuTriggerProps>(
  ({ className, children, onClick, ...props }, ref) => {
    const { open, setOpen, triggerId, contentId } = useMenuContext()

    return (
      <button
        ref={ref}
        type="button"
        id={triggerId}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={(event) => {
          onClick?.(event)
          if (!event.defaultPrevented) {
            setOpen(!open)
          }
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
MenuTrigger.displayName = "MenuTrigger"

export interface MenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "end"
}

function MenuContent({
  className,
  align = "start",
  children,
  ...props
}: MenuContentProps) {
  const { open, contentId, triggerId } = useMenuContext()

  if (!open) {
    return null
  }

  return (
    <div
      id={contentId}
      role="menu"
      aria-labelledby={triggerId}
      className={cn(
        "absolute z-50 mt-1 min-w-[10rem] overflow-hidden rounded-2xl border border-border bg-popover p-1.5 text-popover-foreground shadow-md",
        align === "end" ? "right-0" : "left-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const menuItemVariants = cva(
  "relative flex w-full cursor-pointer select-none items-center gap-2 rounded-xl px-2 py-1.5 text-xs font-medium outline-none transition-colors focus-visible:bg-accent focus-visible:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "text-foreground hover:bg-accent hover:text-accent-foreground",
        destructive:
          "text-destructive hover:bg-destructive/10 hover:text-destructive focus-visible:bg-destructive/10 focus-visible:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface MenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof menuItemVariants> {}

const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ className, variant, children, onClick, ...props }, ref) => {
    const { setOpen } = useMenuContext()

    return (
      <button
        ref={ref}
        type="button"
        role="menuitem"
        className={cn(menuItemVariants({ variant }), className)}
        onClick={(event) => {
          onClick?.(event)
          if (!event.defaultPrevented) {
            setOpen(false)
          }
        }}
        {...props}
      >
        {children}
      </button>
    )
  }
)
MenuItem.displayName = "MenuItem"

export interface MenuSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

function MenuSeparator({ className, ...props }: MenuSeparatorProps) {
  return (
    <div
      role="separator"
      className={cn("-mx-1.5 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

export interface MenuShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

function MenuShortcut({ className, ...props }: MenuShortcutProps) {
  return (
    <span
      className={cn("ml-auto text-xs font-normal tracking-widest text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuShortcut,
  menuItemVariants,
}
