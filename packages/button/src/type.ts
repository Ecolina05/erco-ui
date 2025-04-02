import { variants } from './props/variants'
import { sizes } from './props/sizes'

export type ButtonProps = {
  children: React.ReactNode | string
  onClick: () => void
  className?: string
  variant?: keyof typeof variants
  size?: keyof typeof sizes
} & React.ButtonHTMLAttributes<HTMLButtonElement>
