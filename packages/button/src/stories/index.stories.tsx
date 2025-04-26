import type { Meta, StoryObj } from '@storybook/react'

import Button from '../index'

import '../../../../lib/styles/globals.css'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button'
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    ariaLabel: 'Button',
    children: 'Button',
    className: '',
    color: 'purple',
    isLoading: false,
    size: 'sm',
    onClick: () => {}
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description: 'Aria label for the button'
    },
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
      defaultValue: 'sm',
      description: 'Button size',
      options: ['sm', 'md', 'lg']
    },
    isLoading: {
      control: 'boolean',
      description: 'Button loading state'
    },
    onClick: {
      action: 'clicked',
      description: 'Button click handler'
    }
  }
}
