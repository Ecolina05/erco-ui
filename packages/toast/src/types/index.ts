import { colors } from '../props/colors'
import { positions } from '../props/positions'
import { shadows } from '../props/shadows'
import { radius } from '../props/radius'

type ColorKey = keyof typeof colors
type ToastPosition = keyof typeof positions
type ToastShadow = keyof typeof shadows
type ToastRadius = keyof typeof radius

export type ToastProps = {
  title: string | React.ReactNode
  className?: string
  color?: ColorKey
  description?: string | React.ReactNode
  position?: ToastPosition
  shadow?: ToastShadow
  radius?: ToastRadius
} & React.HTMLAttributes<HTMLDivElement>
