import * as React from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export interface LoadingProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number | string
}

export function Loading({ className, size = 24, ...props }: LoadingProps) {
  return (
    <Loader2
      size={size}
      className={cn("animate-spin text-muted-foreground", className)}
      {...props}
    />
  )
}
