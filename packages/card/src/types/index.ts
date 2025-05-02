import { radius } from '../props/radius'
import { shadow } from '../props/shadow'
import { padding } from '../props/padding'

export type CardProps = {
  children: React.ReactNode
  className?: string
  isBordered?: boolean
  isClickable?: boolean
  isHoverable?: boolean
  isPressable?: boolean
  padding?: keyof typeof padding
  radius?: keyof typeof radius
  shadow?: keyof typeof shadow
  onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void
} & React.HTMLAttributes<HTMLDivElement>
