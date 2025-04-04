import type { AccordionProps } from './types'

import React, { useEffect, useState } from 'react'

import './styles/index.css'

export default function Accordion({ children, title, isOpen = false }: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    setIsExpanded(isOpen)
  }, [isOpen])

  return (
    <section className=''>
      <header
        className='flex items-center justify-between border-b border-gray-300 cursor-pointer w-full p-2'
        onClick={handleExpand}
        role='button'
      >
        <h2 className='text-xs font-medium mb-0'>{title}</h2>

        {!isExpanded ? (
          <svg
            className='w-6 h-6 text-gray-800'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='m8 10 4 4 4-4'
            />
          </svg>
        ) : (
          <svg
            className='w-6 h-6 text-gray-800'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='m16 14-4-4-4 4'
            />
          </svg>
        )}
      </header>

      {isExpanded && <div className='text-xs p-2'>{children}</div>}
    </section>
  )
}
