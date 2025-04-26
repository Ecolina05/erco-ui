import type { TabsProps } from './types/index'

import React, { useState, useEffect, useId } from 'react'
import clsx from 'clsx'

import { colors, textColors } from './props/colors'

export default function Tabs({
  tabs,
  content,
  className,
  color,
  defaultValue,
  orientation = 'horizontal',
  value: controlledValue,
  onChange
}: TabsProps) {
  const tabsId = useId()
  const [selectedTab, setSelectedTab] = useState<string>(
    controlledValue || defaultValue || (tabs.length > 0 ? tabs[0].value : '')
  )

  useEffect(() => {
    if (controlledValue !== undefined) {
      setSelectedTab(controlledValue)
    }
  }, [controlledValue])

  const handleTabChange = (value: string) => {
    if (controlledValue === undefined) {
      setSelectedTab(value)
    }

    onChange?.(value)
  }

  const isVertical = orientation === 'vertical'

  return (
    <div
      className={clsx('erco-tabs-container', isVertical ? 'flex flex-row' : 'flex flex-col', className)}
    >
      <div
        aria-orientation={orientation}
        className={clsx('erco-tabs', isVertical ? 'flex-col border-r' : 'flex-row border-b')}
        role='tablist'
      >
        {tabs.map(tab => (
          <button
            aria-controls={`${tabsId}-panel-${tab.value}`}
            aria-selected={selectedTab === tab.value}
            className={clsx(
              'tab px-4 py-2 focus:outline-none',
              selectedTab === tab.value ? ['active', colors[color], textColors[color]] : null,
              tab.disabled && 'opacity-50 cursor-not-allowed'
            )}
            disabled={tab.disabled}
            id={`${tabsId}-tab-${tab.value}`}
            key={tab.value}
            role='tab'
            onClick={() => !tab.disabled && handleTabChange(tab.value)}
          >
            {tab.icon && <span className='mr-2'>{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      <div className={clsx('flex-1', isVertical ? 'pl-1 pt-1' : 'pt-2')}>
        {tabs.map((tab, index) =>
          content[index] ? (
            <div
              aria-labelledby={`${tabsId}-tab-${tab.value}`}
              className={clsx('text-xs px-1', selectedTab === tab.value ? 'block' : 'hidden')}
              hidden={selectedTab !== tab.value}
              id={`${tabsId}-panel-${tab.value}`}
              key={tab.value}
              role='tabpanel'
            >
              {content[index]}
            </div>
          ) : null
        )}
      </div>
    </div>
  )
}
