import type { SelectProps } from './types/index'
import React from 'react'
import clsx from 'clsx'

import { radius as SelectRadius } from './props/radius'
import { borderColor as SelectBorderColor } from './props/border-colors'

export default function Select({
  options,
  classNames,
  borderColor = 'purple',
  description,
  id,
  label,
  radius = 'lg',
  onChange
}: SelectProps) {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event)
  }

  const selectClassNames = clsx(
    'erco-select',
    SelectRadius[radius],
    SelectBorderColor[borderColor],
    classNames
  )

  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className='block mb-1 text-xs text-gray-900'
        >
          {label}
        </label>
      )}
      <select
        className={selectClassNames}
        id={id}
        onChange={handleSelectChange}
      >
        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {description && <p className='text-xs font-light text-gray-500 mt-1 italic'>{description}</p>}
    </>
  )
}
