import * as React from "react"

import { Button } from "@/components/Button"
import { cn } from "@/lib/utils"

type SidebarLinkProps = {
  active?: boolean
  onClick: () => void
  children: React.ReactNode
  className?: string
}

export function SidebarLink({
  active,
  onClick,
  children,
  className,
}: SidebarLinkProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      onClick={onClick}
      className={cn(
        "h-8 w-full justify-start px-2 font-normal",
        active && "bg-accent text-accent-foreground font-medium",
        className
      )}
    >
      {children}
    </Button>
  )
}
