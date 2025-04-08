import { colors } from '../props/colors'
import { sizes } from '../props/sizes'
import { radius } from '../props/radius'

export type AvatarProps = {
  alt?: string
  classNames?: string
  color?: keyof typeof colors
  isBordered?: boolean
  radius?: keyof typeof radius
  size?: keyof typeof sizes
  src?: string
  text?: string
}
