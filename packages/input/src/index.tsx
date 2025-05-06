import type { InputProps } from './types/index'
import React, { useState, useId } from 'react'
import clsx from 'clsx'

import { radius as InputRadius } from './props/radius'
import { borderColor as InputBorderColor } from './props/border-colors'

export default function Input({
  borderColor = 'purple',
  description,
  id: externalId,
  className,
  isRequired,
  label,
  labelClassName,
  placeholder,
  radius = 'lg',
  type = 'text',
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const internalId = useId()
  const id = externalId || `erco-input-${internalId}`

  const inputClassName = clsx(
    'erco-input',
    InputRadius[radius],
    isFocused ? InputBorderColor[borderColor] : 'border-gray-300',
    className
  )

  const labelClassNames = clsx('block mb-1 text-xs text-gray-900', labelClassName)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
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
        className={inputClassName}
        id={id}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={placeholder}
        required={isRequired}
        type={type}
        data-focused={isFocused ? 'true' : 'false'}
        {...rest}
      />

      {description && <p className='text-xs font-light text-gray-500 mt-1 italic'>{description}</p>}
    </div>
  )
}
