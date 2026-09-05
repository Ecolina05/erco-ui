import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      title: "scroll-m-20 text-3xl font-bold tracking-tight",
      heading: "scroll-m-20 text-2xl font-semibold tracking-tight",
      subheading: "scroll-m-20 text-xl font-semibold tracking-tight",
      section: "text-lg font-semibold leading-snug",
      subtitle: "text-sm text-muted-foreground",
      body: "text-xs leading-relaxed",
      muted: "text-xs leading-relaxed text-muted-foreground",
      label: "text-xs font-medium leading-none",
      caption: "text-xs leading-relaxed text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "body",
  },
})

type TypographyVariant = NonNullable<
  VariantProps<typeof typographyVariants>["variant"]
>

const defaultElements: Record<TypographyVariant, React.ElementType> = {
  title: "h1",
  heading: "h2",
  subheading: "h3",
  section: "h4",
  subtitle: "p",
  body: "p",
  muted: "p",
  label: "span",
  caption: "span",
}

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "body", as, children, ...props }, ref) => {
    const resolvedVariant = variant ?? "body"
    const Component = as ?? defaultElements[resolvedVariant]

    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant: resolvedVariant }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
Typography.displayName = "Typography"

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(typographyVariants({ variant: "label" }), className)}
      {...props}
    />
  )
)
Label.displayName = "Label"

export { Typography, Label, typographyVariants }
