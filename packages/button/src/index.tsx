import type { ButtonProps } from './types/index'
import React from 'react'

import clsx from 'clsx'

import { colors } from './props/colors'
import { sizes } from './props/sizes'

import Spinner from '@erco-ui/spinner'

export default function Button({
  ariaLabel,
  color = 'purple',
  className = '',
  children,
  isLoading = false,
  size = 'sm',
  onClick = () => {},
  ...rest
}: ButtonProps) {
  const buttonClassName = clsx('erco-button', colors[color], sizes[size], className)
  const spinnerColor = ['purple', 'green', 'red', 'yellow', 'blue'].includes(color)
    ? 'white'
    : color

  return (
    <button
      aria-label={ariaLabel}
      className={buttonClassName}
      disabled={isLoading}
      onClick={onClick}
      {...rest}
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
