import React from 'react'

import type { ButtonProps } from './type'
import clsx from 'clsx'

import { variants } from './props/variants'
import { sizes } from './props/sizes'

import '../../../globals.css'

export default function Button({
  children,
  className = '',
  size,
  variant,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-normal transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
        variants[variant ?? 'primary'],
        sizes[size ?? 'xs'],
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
