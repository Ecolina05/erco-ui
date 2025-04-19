import type { AccordionProps } from './types'

import React, { useEffect, useState, useId } from 'react'

import './styles/index.css'

export default function Accordion({
  children,
  title,
  isOpen = false,
  id,
  ...rest
}: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(isOpen)
  const uniqueId = useId()
  const accordionId = id || uniqueId
  const headerId = `accordion-header-${accordionId}`
  const contentId = `accordion-content-${accordionId}`

  useEffect(() => {
    setIsExpanded(isOpen)
  }, [isOpen])

  const handleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div
      className='accordion'
      {...rest}
    >
      <h3>
        <button
          aria-controls={contentId}
          aria-expanded={isExpanded}
          className={`accordion-trigger flex items-center justify-between border-b border-gray-300 w-full p-2 text-left cursor-pointer focus:outline-none`}
          id={headerId}
          onClick={handleExpand}
          type='button'
        >
          <span className='text-xs font-medium mb-0'>{title}</span>

          <span
            className='accordion-icon ml-2'
            aria-hidden='true'
          >
            {!isExpanded ? (
              <svg
                aria-hidden='true'
                className='w-6 h-6 text-gray-800'
                fill='none'
                height='24'
                viewBox='0 0 24 24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m8 10 4 4 4-4'
                />
              </svg>
            ) : (
              <svg
                aria-hidden='true'
                className='w-6 h-6 text-gray-800'
                fill='none'
                height='24'
                viewBox='0 0 24 24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m16 14-4-4-4 4'
                />
              </svg>
            )}
          </span>
        </button>
      </h3>

      <div
        aria-labelledby={headerId}
        className='accordion-content'
        hidden={!isExpanded}
        id={contentId}
        role='region'
      >
        {isExpanded && <div className='text-xs p-2'>{children}</div>}
      </div>
    </div>
  )
}
