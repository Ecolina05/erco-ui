import { colors } from '../props/colors'
import { sizes } from '../props/sizes'

export type ButtonProps = {
  children: React.ReactNode | string
  onClick: () => void
  ariaLabel?: string
  className?: string
  color?: keyof typeof colors
  isDisabled?: boolean
  isIconOnly?: boolean
  isLoading?: boolean
  size?: keyof typeof sizes
  variant?: 'flat' | 'outline' | 'solid'
} & React.ButtonHTMLAttributes<HTMLButtonElement>
