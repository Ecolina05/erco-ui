import type { LinkProps } from './types/index'
import React from 'react'
import clsx from 'clsx'

import { colors } from './props/colors'
import { sizes } from './props/sizes'

export default function Link({
  children,
  className,
  color = 'default',
  href = '#',
  size = 'sm',
  target = '_blank',
  underline = false,
  onClick,
  ...rest
}: LinkProps) {
  const linkClassName = clsx(
    'erco-link',
    `${colors[color]} ${sizes[size]} ${underline ? 'underline' : ''}`,
    className
  )

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
  }

  return (
    <a
      href={href}
      target={target}
      className={linkClassName}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  )
}
