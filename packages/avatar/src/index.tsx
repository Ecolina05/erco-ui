import type { AvatarProps } from './types'

import React from 'react'
import clsx from 'clsx'

import { colors } from './props/colors'
import { radius as AvatarRadius } from './props/radius'
import { sizes } from './props/sizes'

import './styles/index.css'

export default function Avatar({
  alt = 'Avatar',
  classNames = '',
  color = 'purple',
  isBordered = false,
  radius = 'sm',
  size = 'sm',
  src = '',
  text = ''
}: AvatarProps) {
  text = text?.slice(0, 3)

  const avatarClassName = clsx(
    'avatar',
    `${classNames} ${colors[color!]} ${AvatarRadius[radius]} ${
      sizes[size]
    } text-white text-xs font-normal`,
    isBordered && 'border-2'
  )

  const imageClassName = clsx('image', sizes[size!])

  return (
    <span className={avatarClassName}>
      {src && !text && (
        <img
          className={imageClassName}
          src={src}
          alt={alt}
        />
      )}

      {text && !src && <span className='text'>{text}</span>}
    </span>
  )
}
