import type { SpinnerProps } from './types'
import React from 'react'

import { colors } from './props/colors'
import { sizes } from './props/sizes'

import './styles/index.css'

export default function Spinner({ color = 'purple', size = 'sm' }: SpinnerProps) {
  return <figure className={`spinner ${colors[color]} ${sizes[size]}`}></figure>
}
