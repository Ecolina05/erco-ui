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
    classNames: '',
    children: 'Card',
    radius: 'sm',
    shadow: 'sm',
    isBordered: false
  },
  argTypes: {
    classNames: {
      control: 'text',
      description: 'Custom card class name'
    },
    children: {
      description: 'Card children'
    },
    radius: {
      control: 'select',
      options: ['sm', 'xs', 'md', 'lg']
    },
    shadow: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg']
    },
    isBordered: {
      control: 'boolean',
      description: 'Add border to the card'
    }
  }
}
