import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

type TabsContextValue = {
  value: string
  onValueChange: (value: string) => void
  orientation: "horizontal" | "vertical"
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

const TabsListContext = React.createContext<"default" | "secondary">("default")

function useTabsContext() {
  const context = React.useContext(TabsContext)
  if (!context) {
    throw new Error("Tabs components must be used within Tabs")
  }
  return context
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  orientation?: "horizontal" | "vertical"
}

function Tabs({
  className,
  defaultValue,
  value: valueProp,
  onValueChange,
  orientation = "horizontal",
  children,
  ...props
}: TabsProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue ?? ""
  )
  const value = valueProp ?? uncontrolledValue

  function handleValueChange(nextValue: string) {
    if (valueProp === undefined) {
      setUncontrolledValue(nextValue)
    }
    onValueChange?.(nextValue)
  }

  return (
    <TabsContext.Provider
      value={{ value, onValueChange: handleValueChange, orientation }}
    >
      <div
        className={cn(
          orientation === "vertical" && "flex gap-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  )
}

const tabsListVariants = cva("inline-flex items-center text-muted-foreground", {
  variants: {
    variant: {
      default: "",
      secondary: "",
    },
    orientation: {
      horizontal: "w-full flex-row",
      vertical: "h-auto shrink-0 flex-col items-stretch",
    },
  },
  compoundVariants: [
    {
      variant: "default",
      orientation: "horizontal",
      className: "h-10 justify-center rounded-full bg-muted p-1",
    },
    {
      variant: "default",
      orientation: "vertical",
      className: "w-48 rounded-3xl bg-muted p-1",
    },
    {
      variant: "secondary",
      orientation: "horizontal",
      className: "h-9 justify-start gap-4 border-b border-border",
    },
    {
      variant: "secondary",
      orientation: "vertical",
      className: "w-48 gap-1 border-r border-border pr-4",
    },
  ],
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
  },
})

export interface TabsListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsListVariants> {}

function TabsList({
  className,
  variant = "default",
  children,
  ...props
}: TabsListProps) {
  const { orientation } = useTabsContext()

  const listVariant = variant ?? "default"

  return (
    <TabsListContext.Provider value={listVariant}>
      <div
        role="tablist"
        aria-orientation={orientation}
        className={cn(tabsListVariants({ variant: listVariant, orientation }), className)}
        {...props}
      >
        {children}
      </div>
    </TabsListContext.Provider>
  )
}

export interface TabsTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

function TabsTrigger({
  className,
  value,
  ...props
}: TabsTriggerProps) {
  const { value: activeValue, onValueChange, orientation } = useTabsContext()
  const variant = React.useContext(TabsListContext)
  const isActive = activeValue === value

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      onClick={() => onValueChange(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variant === "default" &&
          "rounded-full text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        variant === "secondary" &&
          orientation === "horizontal" &&
          "rounded-none border-b-2 border-transparent px-1 pb-2 text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground",
        variant === "secondary" &&
          orientation === "vertical" &&
          "w-full justify-start rounded-none border-l-2 border-transparent py-2 pl-3 pr-1 text-left text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground",
        orientation === "vertical" &&
          variant === "default" &&
          "w-full justify-start",
        className
      )}
      {...props}
    />
  )
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

function TabsContent({ className, value, ...props }: TabsContentProps) {
  const { value: activeValue, orientation } = useTabsContext()

  if (activeValue !== value) {
    return null
  }

  return (
    <div
      role="tabpanel"
      className={cn(
        "mt-4 text-xs text-muted-foreground focus-visible:outline-none",
        orientation === "vertical" && "mt-0 min-w-0 flex-1",
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
