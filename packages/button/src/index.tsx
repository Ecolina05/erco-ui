import React from 'react'

import type { ButtonProps } from './types'
import clsx from 'clsx'

import { colors } from './props/colors'
import { sizes } from './props/sizes'

import './styles/index.css'

export default function Button({
  color = 'purple',
  className = '',
  children,
  size = 'xs',
  onClick = () => {},
  ...props
}: ButtonProps) {
  const buttonClassName = clsx('button', colors[color], sizes[size], className)

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
