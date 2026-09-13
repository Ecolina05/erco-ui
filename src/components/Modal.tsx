import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { Typography } from "@/components/Typography"
import { cn } from "@/lib/utils"

type ModalContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  dialogRef: React.RefObject<HTMLDialogElement | null>
  handleDialogClosed: () => void
  captureRestorePoint: () => void
}

const ModalContext = React.createContext<ModalContextValue | null>(null)

function useModalContext() {
  const context = React.useContext(ModalContext)
  if (!context) {
    throw new Error("Modal components must be used within Modal")
  }
  return context
}

export interface ModalProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

function restorePageScrollAndFocus(
  scrollY: number,
  focusTarget: HTMLElement | null
) {
  requestAnimationFrame(() => {
    window.scrollTo({ top: scrollY, left: 0, behavior: "auto" })
    focusTarget?.focus({ preventScroll: true })
  })
}

function Modal({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  children,
}: ModalProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)
  const dialogRef = React.useRef<HTMLDialogElement>(null)
  const restoreScrollRef = React.useRef(0)
  const restoreFocusRef = React.useRef<HTMLElement | null>(null)
  const open = openProp ?? uncontrolledOpen

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (openProp === undefined) {
        setUncontrolledOpen(next)
      }
      onOpenChange?.(next)
    },
    [openProp, onOpenChange]
  )

  const handleDialogClosed = React.useCallback(() => {
    setOpen(false)
    restorePageScrollAndFocus(
      restoreScrollRef.current,
      restoreFocusRef.current
    )
  }, [setOpen])

  React.useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) {
      return
    }
    if (open) {
      if (!dialog.open) {
        restoreScrollRef.current = window.scrollY
        restoreFocusRef.current = document.activeElement as HTMLElement | null
        dialog.showModal()
      }
    } else if (dialog.open) {
      dialog.close()
    }
  }, [open])

  const captureRestorePoint = React.useCallback(() => {
    restoreScrollRef.current = window.scrollY
    restoreFocusRef.current = document.activeElement as HTMLElement | null
  }, [])

  return (
    <ModalContext.Provider
      value={{
        open,
        setOpen,
        dialogRef,
        handleDialogClosed,
        captureRestorePoint,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export interface ModalTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ModalTrigger = React.forwardRef<HTMLButtonElement, ModalTriggerProps>(
  ({ className, onClick, ...props }, ref) => {
    const { setOpen, captureRestorePoint } = useModalContext()

    return (
      <button
        ref={ref}
        type="button"
        className={className}
        onClick={(event) => {
          onClick?.(event)
          if (!event.defaultPrevented) {
            captureRestorePoint()
            setOpen(true)
          }
        }}
        {...props}
      />
    )
  }
)
ModalTrigger.displayName = "ModalTrigger"

const modalContentVariants = cva(
  "erco-modal w-full rounded-3xl border border-border bg-surface p-6 text-foreground shadow-lg",
  {
    variants: {
      size: {
        xs: "max-w-[280px]",
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
      },
      backdrop: {
        blur: "erco-modal-backdrop-blur",
        dim: "erco-modal-backdrop-dim",
      },
    },
    defaultVariants: {
      size: "md",
      backdrop: "blur",
    },
  }
)

export type ModalSize = NonNullable<
  VariantProps<typeof modalContentVariants>["size"]
>

export type ModalBackdrop = NonNullable<
  VariantProps<typeof modalContentVariants>["backdrop"]
>

export interface ModalContentProps
  extends Omit<React.DialogHTMLAttributes<HTMLDialogElement>, "children">,
    VariantProps<typeof modalContentVariants> {
  showClose?: boolean
  children: React.ReactNode
}

const ModalContent = React.forwardRef<HTMLDialogElement, ModalContentProps>(
  (
    {
      className,
      size,
      backdrop,
      showClose = true,
      children,
      onClose,
      ...props
    },
    ref
  ) => {
    const { handleDialogClosed, dialogRef } = useModalContext()

    function assignDialogRef(node: HTMLDialogElement | null) {
      dialogRef.current = node
      if (typeof ref === "function") {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
    }

    return (
      <dialog
        ref={assignDialogRef}
        className={cn(modalContentVariants({ size, backdrop }), className)}
        onClose={(event) => {
          onClose?.(event)
          handleDialogClosed()
        }}
        {...props}
      >
        {showClose ? (
          <ModalClose className="absolute right-4 top-4 z-10" />
        ) : null}
        {children}
      </dialog>
    )
  }
)
ModalContent.displayName = "ModalContent"

export interface ModalCloseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ModalClose = React.forwardRef<HTMLButtonElement, ModalCloseProps>(
  ({ className, onClick, children, ...props }, ref) => {
    const { dialogRef } = useModalContext()

    return (
      <button
        ref={ref}
        type="button"
        aria-label={props["aria-label"] ?? "Close"}
        onClick={(event) => {
          onClick?.(event)
          if (!event.defaultPrevented) {
            dialogRef.current?.close()
          }
        }}
        className={cn(
          "inline-flex size-8 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          className
        )}
        {...props}
      >
        {children ?? <X size={16} aria-hidden />}
      </button>
    )
  }
)
ModalClose.displayName = "ModalClose"

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

function ModalHeader({ className, ...props }: ModalHeaderProps) {
  return (
    <div
      className={cn("space-y-3 pr-8", className)}
      {...props}
    />
  )
}

export interface ModalIconProps extends React.HTMLAttributes<HTMLDivElement> {}

function ModalIcon({ className, ...props }: ModalIconProps) {
  return (
    <div
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground [&_svg]:size-5",
        className
      )}
      {...props}
    />
  )
}

export interface ModalTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const ModalTitle = React.forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ className, ...props }, ref) => (
    <Typography
      ref={ref}
      as="h2"
      variant="section"
      className={cn("text-base font-semibold", className)}
      {...props}
    />
  )
)
ModalTitle.displayName = "ModalTitle"

export interface ModalDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const ModalDescription = React.forwardRef<
  HTMLParagraphElement,
  ModalDescriptionProps
>(({ className, ...props }, ref) => (
  <Typography
    ref={ref}
    as="p"
    variant="muted"
    className={cn("leading-relaxed", className)}
    {...props}
  />
))
ModalDescription.displayName = "ModalDescription"

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

function ModalBody({ className, ...props }: ModalBodyProps) {
  return <div className={cn("pt-4", className)} {...props} />
}

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

function ModalFooter({ className, ...props }: ModalFooterProps) {
  return (
    <div
      className={cn("flex flex-col gap-2 pt-6", className)}
      {...props}
    />
  )
}

export {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalClose,
  ModalHeader,
  ModalIcon,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
}
