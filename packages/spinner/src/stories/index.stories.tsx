import type { Meta, StoryObj } from '@storybook/react'

import Spinner from '../index'

import '../../../../lib/styles/globals.css'

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: 'Spinner'
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  args: {
    color: 'purple',
    size: 'sm'
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    }
  }
}
