import { radius } from '../props/radius'
import { borderColor } from '../props/border-colors'

export type InputProps = {
  borderColor?: keyof typeof borderColor
  classNames?: string
  id?: string
  isRequired?: boolean
  label?: string
  placeholder?: string
  radius?: keyof typeof radius
} & React.HTMLAttributes<HTMLInputElement>
