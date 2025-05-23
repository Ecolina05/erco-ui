import type { CardProps } from './types/index'
import React, { forwardRef } from 'react'
import clsx from 'clsx'

import { radius as CardRadius } from './props/radius'
import { shadow as CardShadow } from './props/shadow'
import { padding as CardPadding } from './props/padding'

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      isBordered = false,
      isClickable = false,
      isHoverable = false,
      isPressable = false,
      padding = 'md',
      radius = 'md',
      shadow = 'md',
      onClick,
      role,
      tabIndex,
      ...rest
    },
    ref
  ) => {
    const needsInteractiveRole = isClickable || isPressable || onClick
    const needsTabIndex = needsInteractiveRole && tabIndex === undefined

    const cardClassNames = clsx(
      'erco-card',
      CardRadius[radius],
      CardShadow[shadow],
      isBordered && 'border border-gray-200',
      isHoverable && 'hover:shadow-lg transition-shadow duration-200',
      isClickable && 'cursor-pointer',
      isPressable && 'active:scale-95 transition-transform duration-200',
      CardPadding[padding],
      className
    )

    return (
      <div
        className={cardClassNames}
        onClick={onClick}
        ref={ref}
        role={role || (needsInteractiveRole ? 'button' : undefined)}
        tabIndex={needsTabIndex ? 0 : tabIndex}
        {...(needsInteractiveRole && {
          onKeyDown: e => {
            if ((e.key === 'Enter' || e.key === ' ') && onClick) {
              e.preventDefault()
              onClick(e)
            }
          },
          'aria-pressed': isPressable ? 'false' : undefined
        })}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

export default Card
