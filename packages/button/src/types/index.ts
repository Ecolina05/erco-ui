import { colors } from '../props/colors'
import { sizes } from '../props/sizes'

export type ButtonProps = {
  children: React.ReactNode | string
  ariaLabel?: string
  className?: string
  color?: keyof typeof colors
  isDisabled?: boolean
  isIconOnly?: boolean
  isLoading?: boolean
  size?: keyof typeof sizes
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  variant?: 'flat' | 'light' | 'outline' | 'solid'
  onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>
