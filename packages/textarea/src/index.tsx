import type { TextareaProps } from './types'
import React, { useState } from 'react'
import clsx from 'clsx'

import { radius as TextareaRadius } from './props/radius'
import { borderColor as TextareaBorderColor } from './props/border-colors'

import './styles/index.css'

export default function Textarea({
  borderColor = 'purple',
  description,
  id,
  textareaClassNames,
  isRequired,
  label,
  labelClassNames,
  placeholder,
  radius = 'lg',
  ...rest
}: TextareaProps) {
  const [isFocused, setIsFocused] = useState(false)

  const textareaClassName = clsx(
    'textarea',
    TextareaRadius[radius],
    isFocused && TextareaBorderColor[borderColor],
    textareaClassNames
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

      <textarea
        className={textareaClassName}
        id={id}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        placeholder={placeholder}
        required={isRequired}
        {...rest}
      />

      {description && <p className='text-xs font-light text-gray-500 mt-1 italic'>{description}</p>}
    </div>
  )
}
