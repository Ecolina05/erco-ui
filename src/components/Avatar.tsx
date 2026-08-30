import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "size-8",
        default: "size-10",
        lg: "size-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

type AvatarContextValue = {
  imageLoaded: boolean
  setImageLoaded: (loaded: boolean) => void
}

const AvatarContext = React.createContext<AvatarContextValue | null>(null)

function useAvatarContext() {
  const context = React.useContext(AvatarContext)
  if (!context) {
    throw new Error("AvatarImage and AvatarFallback must be used within Avatar")
  }
  return context
}

export interface AvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, children, ...props }, ref) => {
    const [imageLoaded, setImageLoaded] = React.useState(false)

    return (
      <AvatarContext.Provider value={{ imageLoaded, setImageLoaded }}>
        <span
          ref={ref}
          className={cn(avatarVariants({ size }), className)}
          {...props}
        >
          {children}
        </span>
      </AvatarContext.Provider>
    )
  }
)
Avatar.displayName = "Avatar"

export interface AvatarImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, alt, onLoad, onError, ...props }, ref) => {
    const { setImageLoaded } = useAvatarContext()

    return (
      <img
        ref={ref}
        alt={alt}
        onLoad={(event) => {
          setImageLoaded(true)
          onLoad?.(event)
        }}
        onError={(event) => {
          setImageLoaded(false)
          onError?.(event)
        }}
        className={cn("aspect-square size-full object-cover", className)}
        {...props}
      />
    )
  }
)
AvatarImage.displayName = "AvatarImage"

export interface AvatarFallbackProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => {
    const { imageLoaded } = useAvatarContext()

    if (imageLoaded) {
      return null
    }

    return (
      <span
        ref={ref}
        className={cn(
          "flex size-full items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground",
          className
        )}
        {...props}
      />
    )
  }
)
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarImage, AvatarFallback, avatarVariants }
