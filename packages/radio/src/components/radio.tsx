import type { RadioProps } from '../types'

import React from 'react'
import clsx from 'clsx'

import { bgColors } from '../props/colors'

import '../styles/index.css'

export default function Radio({
  value,
  color = 'primary',
  isDisabled = false,
  isSelected,
  text,
  onChange
}: RadioProps) {
  const handleChange = () => {
    if (isDisabled) return
    onChange?.(value)
  }

  const radioCircleClassName = clsx(
    'w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all',
    isSelected ? bgColors[color] : 'border-gray-400 bg-transparent'
  )

  const radioSelectedClassName = clsx(
    'w-2 h-2 rounded-full',
    color === 'yellow' ? 'bg-gray-600' : 'bg-white'
  )

  return (
    <div
      className={clsx(
        'flex items-center',
        isDisabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
      )}
      onClick={handleChange}
      role='button'
    >
      <div className={radioCircleClassName}>
        {isSelected && <div className={radioSelectedClassName}></div>}
      </div>

      {text && <span className='ml-2 text-sm text-gray-700'>{text}</span>}
    </div>
  )
}
