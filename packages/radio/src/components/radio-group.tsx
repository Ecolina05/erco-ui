import type { RadioGroupProps } from '../types/index'

import React, { useState } from 'react'
import clsx from 'clsx'

import { Radio } from '../index'

export default function RadioGroup({
  options,
  className = '',
  color = 'purple',
  label,
  orientation = 'vertical',
  onChange
}: RadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>()

  const handleRadioChange = (value: string) => {
    setSelectedValue(value)
    onChange?.(value)
  }

  return (
    <section className={clsx('flex flex-col gap-2', className)}>
      {label && <p className='text-sm'>{label}</p>}

      <section className={clsx('flex gap-2', orientation === 'vertical' && 'flex-col')}>
        {options.map(option => (
          <Radio
            color={color}
            isDisabled={option.isDisabled}
            isSelected={selectedValue === option.value}
            key={option.value}
            onChange={selected => handleRadioChange(selected)}
            text={option.text}
            value={option.value}
          />
        ))}
      </section>
    </section>
  )
}
