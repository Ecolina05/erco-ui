import type { InputProps } from './types/index'
import React, { useState, useRef } from 'react'
import clsx from 'clsx'

import { radius as InputRadius } from './props/radius'
import { colors } from './props/colors'

export default function Input({
  color = 'purple',
  description,
  id,
  className,
  isRequired,
  label,
  labelClassName,
  placeholder,
  radius = 'lg',
  type = 'text',
  onFocus,
  onBlur,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const inputClassName = clsx(
    'erco-input',
    InputRadius[radius],
    isFocused ? colors[color] : 'border-gray-300',
    className
  )

  const labelClassNames = clsx('block mb-1 text-xs text-gray-900', labelClassName)

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)

    if (onFocus) {
      onFocus(e)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)

    if (onBlur) {
      onBlur(e)
    }
  }

  return (
    <div className='erco-input-container'>
      {label && (
        <label
          htmlFor={id}
          className={labelClassNames}
        >
          {label}
        </label>
      )}

      <input
        ref={inputRef}
        className={inputClassName}
        data-focused={isFocused ? 'true' : 'false'}
        id={id}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={placeholder}
        required={isRequired}
        type={type}
        {...rest}
      />

      {description && <p className='text-xs font-light text-gray-500 mt-1 italic'>{description}</p>}
    </div>
  )
}
