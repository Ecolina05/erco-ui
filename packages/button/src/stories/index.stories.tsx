import type { Meta, StoryObj } from '@storybook/react'

import Button from '../index'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button'
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    className: '',
    children: 'Button',
    color: 'purple',
    size: 'xs',
    onClick: () => alert('Button clicked')
  },
  argTypes: {
    color: {
      control: 'select',
      defaultValue: 'purple',
      description: 'Button color',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    children: {
      description: 'Button children'
    },
    className: {
      control: 'text',
      description: 'Custom button class name'
    },
    size: {
      control: 'select',
      defaultValue: 'xs',
      description: 'Button size',
      options: ['xs', 'sm', 'md', 'lg']
    },
    onClick: {
      action: 'clicked',
      description: 'Button click handler'
    }
  }
}
