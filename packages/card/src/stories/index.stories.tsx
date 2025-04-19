import type { Meta, StoryObj } from '@storybook/react'

import Card from '../index'

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card'
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: 'Card Content',
    classNames: '',
    isBordered: false,
    isClickable: false,
    isHoverable: false,
    isPressable: false,
    radius: 'md',
    shadow: 'sm',
    onClick: () => {}
  },
  argTypes: {
    children: {
      description: 'Card children'
    },
    classNames: {
      control: 'text',
      description: 'Custom card class name'
    },
    isBordered: {
      control: 'boolean',
      description: 'Add border to the card'
    },
    isClickable: {
      control: 'boolean',
      description: 'Make the card clickable (adds cursor pointer)'
    },
    isHoverable: {
      control: 'boolean',
      description: 'Add hover effect to the card'
    },
    isPressable: {
      control: 'boolean',
      description: 'Add press effect to the card (slight scale animation)'
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    },
    shadow: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg']
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when card is clicked'
    }
  }
}
