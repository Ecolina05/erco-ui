import type { CardProps } from './types/index'
import React, { forwardRef } from 'react'
import clsx from 'clsx'

import { radius as CardRadius } from './props/radius'
import { shadow as CardShadow } from './props/shadow'

const Card = forwardRef<HTMLDivElement, CardProps>((
  {
    children,
    classNames,
    shadow = 'md',
    radius = 'md',
    isBordered = false,
    isHoverable = false,
    isClickable = false,
    isPressable = false,
    onClick,
    role,
    tabIndex,
    ...rest
  }, ref) => {
  const needsInteractiveRole = isClickable || isPressable || onClick;
  const needsTabIndex = needsInteractiveRole && tabIndex === undefined;
  
  const cardClassNames = clsx(
    'erco-card',
    CardRadius[radius],
    CardShadow[shadow],
    isBordered && 'border border-gray-200',
    isHoverable && 'hover:shadow-lg transition-shadow duration-200',
    isClickable && 'cursor-pointer',
    isPressable && 'active:scale-95 transition-transform duration-200',
    classNames
  )

  return (
    <div 
      className={cardClassNames}
      onClick={onClick}
      ref={ref}
      role={role || (needsInteractiveRole ? 'button' : undefined)}
      tabIndex={needsTabIndex ? 0 : tabIndex}
      {...(needsInteractiveRole && {
        onKeyDown: (e) => {
          if ((e.key === 'Enter' || e.key === ' ') && onClick) {
            e.preventDefault();
            onClick(e);
          }
        },
        'aria-pressed': isPressable ? 'false' : undefined
      })}
      {...rest}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card';

export default Card;
