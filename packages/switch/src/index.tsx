import type { SwitchProps } from './types'
import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import { colors } from './props/colors'

import './styles/index.css'

export default function Switch({
  color = 'purple',
  id,
  label,
  checked = false,
  disabled = false,
  onChange,
  ...rest
}: SwitchProps) {
  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    onChange?.(event)
  }

  const switchClassName = clsx(
    'relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all',
    {
      [colors[color]]: isChecked,
      'opacity-20 cursor-not-allowed': disabled,
      'cursor-pointer': !disabled
    }
  )

  return (
    <label className='inline-flex items-center'>
      <input
        type='checkbox'
        value=''
        className='sr-only peer'
        checked={isChecked}
        onChange={handleSwitchChange}
        disabled={disabled}
        {...rest}
      />

      <div className={switchClassName}></div>
      {label && (
        <span
          className={`ms-3 text-xs font-normal text-gray-900 ${
            disabled ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          {label}
        </span>
      )}
    </label>
  )
}
