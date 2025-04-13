import { bgColors } from '../props/colors'

export type RadioProps = {
  id: string  
  checked?: boolean
  color?: keyof typeof bgColors
  disabled?: boolean
  label?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
} & React.InputHTMLAttributes<HTMLInputElement>
