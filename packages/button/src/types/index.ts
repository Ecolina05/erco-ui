import { colors } from '../props/colors'
import { sizes } from '../props/sizes'

export type ButtonProps = {
  children: React.ReactNode | string
  onClick: () => void
  className?: string
  color?: keyof typeof colors
  size?: keyof typeof sizes
} & React.ButtonHTMLAttributes<HTMLButtonElement>
