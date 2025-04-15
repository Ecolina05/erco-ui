import { bgColors } from '../props/colors'

export type RadioGroupProps = {
  options: RadioProps[]
  classNames?: string
  color?: keyof typeof bgColors
  label?: string
  orientation?: 'horizontal' | 'vertical'
  onChange?: (value: string) => void
}

export type RadioProps = {
  value: string
  color?: keyof typeof bgColors
  isDisabled?: boolean
  isSelected?: boolean
  text?: string
  onChange?: (value: string) => void
}
