import { radius } from '../props/radius'
import { borderColor } from '../props/border-colors'

export type InputProps = {
  borderColor?: keyof typeof borderColor
  description?: string
  id?: string
  inputClassNames?: string
  isRequired?: boolean
  label?: string
  labelClassNames?: string
  placeholder?: string
  radius?: keyof typeof radius
  type?: 'text' | 'email' | 'password' | 'number' | 'time' | 'date' | 'datetime-local'
} & React.HTMLAttributes<HTMLInputElement>
