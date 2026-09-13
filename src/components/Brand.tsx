import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { Label } from "@/components/Typography"
import { cn } from "@/lib/utils"

const brandVariants = cva("inline-flex items-center text-foreground", {
  variants: {
    size: {
      sm: "gap-1.5",
      default: "gap-2",
      lg: "gap-2.5",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

const brandNameVariants = cva(
  "pointer-events-none font-bold leading-none tracking-tight text-current",
  {
    variants: {
      size: {
        sm: "text-sm",
        default: "text-lg",
        lg: "text-xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface BrandProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof brandVariants> {
  name: string
}

const Brand = React.forwardRef<HTMLSpanElement, BrandProps>(
  ({ className, size, name, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(brandVariants({ size }), className)}
        {...props}
      >
        <span className="inline-flex shrink-0 items-center justify-center [&_img]:block [&_svg]:block">
          {children}
        </span>
        <Label as="span" className={brandNameVariants({ size })}>
          {name}
        </Label>
      </span>
    )
  }
)
Brand.displayName = "Brand"

export { Brand, brandVariants }
