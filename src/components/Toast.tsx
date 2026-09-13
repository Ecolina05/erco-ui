import * as React from "react"
import { createPortal } from "react-dom"
import { CircleCheck, CircleX, Info } from "lucide-react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

export type ToastType = "success" | "error" | "info"

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"

export type ToastOptions = {
  description?: string
  duration?: number
  id?: string
}

type ToastRecord = {
  id: string
  message: string
  description?: string
  type: ToastType
  duration: number
}

const toastVariants = cva(
  "pointer-events-auto flex max-w-md gap-3 rounded-lg border border-white/10 bg-zinc-900 px-4 py-3 text-left text-xs shadow-lg transition-[transform,opacity] duration-200 ease-out dark:border-white/10 dark:bg-zinc-900"
)

const toastIconVariants = cva("size-5 shrink-0", {
  variants: {
    type: {
      success: "text-green-500",
      error: "text-red-500",
      info: "text-sky-400",
    },
  },
  defaultVariants: {
    type: "info",
  },
})

const toastIcons: Record<
  ToastType,
  React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  success: CircleCheck,
  error: CircleX,
  info: Info,
}

const positionClasses: Record<ToastPosition, string> = {
  "top-left": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "top-right": "top-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-4 right-4 items-end",
}

let memoryToasts: ToastRecord[] = []
const listeners = new Set<() => void>()
let defaultDuration = 4000

function notify() {
  listeners.forEach((listener) => listener())
}

function addToast(type: ToastType, message: string, options?: ToastOptions) {
  const id = options?.id ?? `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
  const duration = options?.duration ?? defaultDuration

  memoryToasts = [
    ...memoryToasts,
    {
      id,
      message,
      description: options?.description,
      type,
      duration,
    },
  ]
  notify()

  window.setTimeout(() => {
    dismissToast(id)
  }, duration)

  return id
}

function dismissToast(id: string) {
  memoryToasts = memoryToasts.filter((toast) => toast.id !== id)
  notify()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

function createTypedToast(type: ToastType) {
  return (message: string, options?: ToastOptions) => addToast(type, message, options)
}

function toast(message: string, options?: ToastOptions & { type?: ToastType }) {
  return addToast(options?.type ?? "info", message, options)
}

toast.success = createTypedToast("success")
toast.error = createTypedToast("error")
toast.info = createTypedToast("info")
toast.dismiss = dismissToast

export { toast }

export interface ToasterProps {
  position?: ToastPosition
  duration?: number
  className?: string
  toastClassName?: string
}

function ToastItem({
  record,
  className,
}: {
  record: ToastRecord
  className?: string
}) {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => setVisible(true))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  const Icon = toastIcons[record.type]
  const hasDescription = Boolean(record.description)

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        toastVariants(),
        hasDescription ? "items-start" : "items-center",
        visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
        className
      )}
    >
      <Icon
        aria-hidden
        className={cn(
          hasDescription && "mt-0.5",
          toastIconVariants({ type: record.type })
        )}
      />
      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "font-semibold text-white",
            hasDescription ? "leading-snug" : "leading-none"
          )}
        >
          {record.message}
        </p>
        {record.description ? (
          <p className="mt-0.5 text-xs font-normal leading-snug text-white/70">
            {record.description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

function Toaster({
  position = "top-right",
  duration = 4000,
  className,
  toastClassName,
}: ToasterProps) {
  const [toasts, setToasts] = React.useState<ToastRecord[]>(memoryToasts)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    defaultDuration = duration
  }, [duration])

  React.useEffect(() => subscribe(() => setToasts([...memoryToasts])), [])

  if (!mounted) {
    return null
  }

  return createPortal(
    <div
      className={cn(
        "pointer-events-none fixed z-[100] flex w-full max-w-[420px] flex-col gap-2",
        positionClasses[position],
        className
      )}
    >
      {toasts.map((record) => (
        <ToastItem key={record.id} record={record} className={toastClassName} />
      ))}
    </div>,
    document.body
  )
}

Toaster.displayName = "Toaster"

export { Toaster, toastVariants }
