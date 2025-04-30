import type { CheckboxProps } from './types/index'

import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import { bgColors, contentColors } from './props/colors'

export default function Checkbox({
  color = 'purple',
  id,
  label,
  checked = false,
  disabled = false,
  onChange
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    onChange?.(event)
  }

  const checkboxClassName = clsx(
    'w-4 h-4 rounded border-2 flex items-center justify-center transition-all',
    isChecked ? bgColors[color] : 'border-gray-400'
  )

  return (
    <label className='flex items-center cursor-pointer'>
      <input
        checked={isChecked}
        disabled={disabled}
        className='hidden'
        id={id}
        onChange={handleCheckboxChange}
        type='checkbox'
      />

      <div className={checkboxClassName}>
        {isChecked && <span className={`${contentColors[color]} text-xs`}>✓</span>}
      </div>

      {label && <span className='ml-2 text-sm text-gray-700'>{label}</span>}
    </label>
  )
}
