import type { ToastProps } from './types'

import React from 'react'
import clsx from 'clsx'

import { colors as ToastColors } from './props/colors'
import { positions as ToastPositions } from './props/positions'
import { shadows as ToastShadows } from './props/shadows'
import { radius as ToastRadius } from './props/radius'

export default function Toast({
  title,
  className = '',
  color = 'default',
  description,
  position = 'bottom-right',
  shadow = 'sm',
  radius = 'lg'
}: ToastProps) {
  const toastClassName = clsx(
    'erco-toast',
    ToastColors[color],
    ToastShadows[shadow],
    ToastPositions[position],
    ToastRadius[radius],
    className
  )

  return (
    <div className={toastClassName}>
      <header className='erco-toast-title'>{title}</header>

      <div className='erco-toast-description'>{description}</div>
    </div>
  )
}
