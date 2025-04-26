import type { SpinnerProps } from './types/index'
import React from 'react'

import { colors } from './props/colors'
import { sizes } from './props/sizes'

export default function Spinner({ color = 'purple', size = 'sm' }: SpinnerProps) {
  return <figure className={`erco-spinner ${colors[color]} ${sizes[size]}`}></figure>
}
