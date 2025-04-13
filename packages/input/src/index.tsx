import type { InputProps } from './types'
import React, { useState } from 'react'
import clsx from 'clsx'

import { radius as InputRadius } from './props/radius'
import { borderColor as InputBorderColor } from './props/border-colors'

import './styles/index.css'

export default function Input({
  borderColor = 'purple',
  classNames,
  id,
  isRequired,
  label,
  placeholder,
  radius = 'lg',
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  const inputClassNames = clsx(
    'input',
    InputRadius[radius],
    isFocused && InputBorderColor[borderColor],
    classNames
  )

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className='block mb-1 text-xs text-gray-900'
        >
          {label}
        </label>
      )}

      <input
        type='text'
        id={id}
        className={inputClassNames}
        placeholder={placeholder}
        required={isRequired}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </div>
  )
}
