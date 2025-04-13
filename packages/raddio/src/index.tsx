import type { RadioProps } from './types'

import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import { bgColors } from './props/colors'

import './styles/index.css'

export default function Radio({
  id,
  checked = false,
  color = 'primary',
  disabled = false,
  label,
  onChange,
  name,
  ...rest
}: RadioProps) {
  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    onChange?.(event)
  }

  const radioCircleClassName = clsx(
    'w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all',
    isChecked ? bgColors[color] : 'border-gray-400'
  )

  return (
    <label className='flex items-center cursor-pointer'>
      <input
        checked={isChecked}
        className='hidden'
        disabled={disabled}
        id={id}
        name={name}
        onChange={handleRadioChange}
        type='radio'
        {...rest}
      />

      <div className={radioCircleClassName}>
        {isChecked && (
          <div
            className={`w-1 h-1 rounded-full ${color === 'yellow' ? 'bg-gray-700' : 'bg-white'}`}
          ></div>
        )}
      </div>

      {label && <span className='ml-2 text-sm text-gray-700'>{label}</span>}
    </label>
  )
}
