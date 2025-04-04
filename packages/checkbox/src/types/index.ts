import { bgColors } from '../props/colors'

export type CheckboxProps = {
  color?: keyof typeof bgColors
  id: string
  label: string
  checked?: boolean
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
} & React.InputHTMLAttributes<HTMLInputElement>
