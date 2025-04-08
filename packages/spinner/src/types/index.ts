import { colors } from '../props/colors'
import { sizes } from '../props/sizes'

export type SpinnerProps = {
  color?: keyof typeof colors
  size?: keyof typeof sizes
}
