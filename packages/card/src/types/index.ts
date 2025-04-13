import { radius } from '../props/radius'
import { shadow } from '../props/shadow'

export type CardProps = {
  children: React.ReactNode
  classNames?: string
  shadow?: keyof typeof shadow
  radius?: keyof typeof radius
  isBordered?: boolean
} & React.HTMLAttributes<HTMLDivElement>
