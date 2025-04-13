import type { InputProps } from './types'
import React, { useState } from 'react'
import clsx from 'clsx'

import { radius as InputRadius } from './props/radius'
import { borderColor as InputBorderColor } from './props/border-colors'

import './styles/index.css'

export default function Input({
  borderColor = 'purple',
  description,
  id,
  inputClassNames,
  isRequired,
  label,
  labelClassNames,
  placeholder,
  radius = 'lg',
  type = 'text',
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  const inputClassName = clsx(
    'input',
    InputRadius[radius],
    isFocused && InputBorderColor[borderColor],
    inputClassNames
  )

  const labelClassName = clsx('block mb-1 text-xs text-gray-900', labelClassNames)

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={labelClassName}
        >
          {label}
        </label>
      )}

      <input
        className={inputClassName}
        id={id}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        placeholder={placeholder}
        required={isRequired}
        type={type}
        {...rest}
      />

      {description && <p className='text-xs font-light text-gray-500 mt-1 italic'>{description}</p>}
    </div>
  )
}
