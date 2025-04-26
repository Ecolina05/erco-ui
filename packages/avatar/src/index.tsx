import type { AvatarProps } from './types/index'

import React, { useState } from 'react'
import clsx from 'clsx'

import { borderColors, bgColors } from './props/colors'
import { radius as AvatarRadius } from './props/radius'
import { sizes } from './props/sizes'

export default function Avatar({
  alt = 'Avatar',
  classNames = '',
  color = 'purple',
  isBordered = false,
  name,
  radius = 'full',
  size = 'md',
  src = '',
  text = '',
  ...restProps
}: AvatarProps) {
  const [imgError, setImgError] = useState(false)
  const displayText = text?.slice(0, 2) || (name && getInitials(name)) || ''

  function getInitials(name: string): string {
    if (!name) return ''

    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase()
  }

  const handleImageError = () => {
    setImgError(true)
  }

  const showImage = src && !imgError
  const showText = !showImage && (displayText || name)

  const avatarClassName = clsx(
    'erco-avatar',
    `${classNames} ${borderColors[color as keyof typeof borderColors]} ${AvatarRadius[radius]} ${
      sizes[size]
    } text-white font-medium`,
    isBordered && 'border-2',
    showText ? `flex items-center justify-center ${bgColors[color as keyof typeof bgColors]}` : ''
  )

  const imageClassName = clsx('image', sizes[size])

  const getAriaLabel = () => {
    if (name) {
      return name
    }

    if (alt && alt !== 'Avatar') {
      return alt
    }

    if (text) {
      return `Avatar with text: ${text}`
    }

    return 'Avatar'
  }

  return (
    <span
      aria-label={getAriaLabel()}
      className={avatarClassName}
      role='img'
      {...restProps}
    >
      {showImage && (
        <img
          alt={alt || name || 'Avatar image'}
          className={imageClassName}
          loading='lazy'
          onError={handleImageError}
          src={src}
        />
      )}

      {showText && (
        <span
          aria-hidden='true'
          className='text-xs uppercase'
        >
          {displayText}
        </span>
      )}
    </span>
  )
}
