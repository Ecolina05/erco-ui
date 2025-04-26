import { radius } from '../props/radius'
import { borderColor } from '../props/border-colors'

export type TextareaProps = {
  borderColor?: keyof typeof borderColor
  description?: string
  id?: string
  isRequired?: boolean
  label?: string
  labelClassNames?: string
  placeholder?: string
  radius?: keyof typeof radius
  textareaClassNames?: string
} & React.HTMLAttributes<HTMLTextAreaElement>
