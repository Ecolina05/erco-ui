import { radius } from '../props/radius'
import { borderColor } from '../props/border-colors'

type Item = {
  value: string
  label: string
}

export type SelectProps = {
  options: Item[]
  className?: string
  borderColor?: keyof typeof borderColor
  description?: string
  label?: string
  isRequired?: boolean
  placeholder?: string
  radius?: keyof typeof radius
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
} & React.HTMLAttributes<HTMLSelectElement>
