import type { ButtonProps } from './types'
import React from 'react'

import clsx from 'clsx'

import { colors } from './props/colors'
import { sizes } from './props/sizes'

import Spinner from '../../spinner/src/index'

import './styles/index.css'

export default function Button({
  ariaLabel,
  color = 'purple',
  className = '',
  children,
  isLoading = false,
  size = 'xs',
  onClick = () => {},
  ...props
}: ButtonProps) {
  const buttonClassName = clsx('button', colors[color], sizes[size], className)
  const spinnerColor = ['purple', 'green', 'red', 'yellow', 'blue'].includes(color)
    ? 'white'
    : color

  return (
    <button
      aria-label={ariaLabel}
      className={buttonClassName}
      disabled={isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading ? (
        <div className='flex items-center gap-2'>
          <Spinner
            color={spinnerColor as any}
            size={size}
          />

          {children}
        </div>
      ) : (
        children
      )}
    </button>
  )
}
