import { radius } from '../props/radius'
import { colors } from '../props/colors'

export type InputProps = {
  color?: keyof typeof colors
  description?: string
  id?: string
  className?: string
  isRequired?: boolean
  label?: string
  labelClassName?: string
  placeholder?: string
  radius?: keyof typeof radius
  type?: 'text' | 'email' | 'password' | 'number' | 'time' | 'date' | 'datetime-local'
} & React.HTMLAttributes<HTMLInputElement>
