import type { CardProps } from './types'
import React from 'react'
import clsx from 'clsx'

import { radius as CardRadius } from './props/radius'
import { shadow as CardShadow } from './props/shadow'

import './styles/index.css'

export default function Card({
  children,
  classNames,
  shadow = 'md',
  radius = 'md',
  isBordered = false
}: CardProps) {
  const cardClassNames = clsx(
    'card',
    CardRadius[radius],
    CardShadow[shadow],
    isBordered && 'border border-gray-200',
    classNames
  )

  return <div className={cardClassNames}>{children}</div>
}
