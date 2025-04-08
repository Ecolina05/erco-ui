import { sizes } from '../props/sizes'

export type AvatarProps = {
  alt?: string
  size?: keyof typeof sizes
  src?: string
  text?: string
}
