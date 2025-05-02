import type { ButtonProps } from './types/index'
import React from 'react'

import clsx from 'clsx'

import { sizes } from './props/sizes'
import { variants } from './props/variants'

import Spinner from '@erco-ui/spinner'

export default function Button({
  ariaLabel,
  className = '',
  color = 'purple',
  children,
  isDisabled = false,
  isIconOnly = false,
  isLoading = false,
  size = 'sm',
  type = 'button',
  variant = 'solid',
  onClick,
  ...rest
}: ButtonProps) {
  const buttonClassName = clsx('erco-button', sizes[size], className, variants[variant](color), {
    'erco-button--icon': isIconOnly
  })
  const spinnerColor = ['purple', 'green', 'red', 'yellow', 'blue'].includes(color)
    ? 'white'
    : color

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoading || isDisabled) {
      return
    }

    if (type !== 'submit') {
      event.preventDefault()
    }

    onClick?.()
  }

  return (
    <button
      aria-label={ariaLabel}
      className={buttonClassName}
      disabled={isLoading || isDisabled}
      onClick={handleClick}
      type={type}
      {...rest}
    >
      {isLoading ? (
        <div className='flex items-center gap-2'>
          <Spinner
            color={spinnerColor as any}
            size={isIconOnly ? 'sm' : size}
          />

          {children}
        </div>
      ) : (
        children
      )}
    </button>
  )
}
