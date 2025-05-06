import { radius } from '../props/radius'
import { borderColor } from '../props/border-colors'

export type InputProps = {
  borderColor?: keyof typeof borderColor
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
