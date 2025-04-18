import { colors } from '../props/colors'

export type SwitchProps = {
  checked?: boolean
  color?: keyof typeof colors
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>
