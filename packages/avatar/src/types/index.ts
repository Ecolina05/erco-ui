import { bgColors } from '../props/colors'
import { sizes } from '../props/sizes'
import { radius } from '../props/radius'

export type AvatarProps = {
  alt?: string
  className?: string
  color?: keyof typeof bgColors
  isBordered?: boolean
  name?: string
  radius?: keyof typeof radius
  size?: keyof typeof sizes
  src?: string
  text?: string
} & React.HTMLAttributes<HTMLSpanElement>
