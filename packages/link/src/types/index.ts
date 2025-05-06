import { colors } from '../props/colors'
import { sizes } from '../props/sizes'

export type LinkProps = {
  children: React.ReactNode
  className?: string
  color?: keyof typeof colors
  href: string
  size?: keyof typeof sizes
  target?: React.HTMLAttributeAnchorTarget
  underline?: boolean
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
} & React.AnchorHTMLAttributes<HTMLAnchorElement>
