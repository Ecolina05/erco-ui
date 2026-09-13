import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

import { Toaster, type ToastPosition } from "@/components/Toast"

type ToastPageContextValue = {
  position: ToastPosition
  setPosition: (position: ToastPosition) => void
}

const ToastPageContext = createContext<ToastPageContextValue | null>(null)

export function ToastPageProvider({ children }: { children: ReactNode }) {
  const [position, setPosition] = useState<ToastPosition>("top-right")
  const value = useMemo(
    () => ({ position, setPosition }),
    [position]
  )

  return (
    <ToastPageContext.Provider value={value}>
      <Toaster position={position} />
      {children}
    </ToastPageContext.Provider>
  )
}

export function useToastPagePosition() {
  const context = useContext(ToastPageContext)
  if (!context) {
    throw new Error("useToastPagePosition must be used within ToastPageProvider")
  }
  return context
}
