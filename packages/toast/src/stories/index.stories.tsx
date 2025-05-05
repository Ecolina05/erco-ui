import type { Meta, StoryObj } from '@storybook/react'

import Toast from '../index'

import '../../../../lib/styles/index.css'

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: 'Toast'
}

export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  args: {
    title: 'Toast Title',
    className: '',
    color: 'default',
    description: 'Toast Description',
    position: 'bottom-right',
    shadow: 'sm',
    radius: 'lg'
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Toast title'
    },
    className: {
      control: 'text',
      description: 'Toast class name'
    },
    color: {
      control: 'select',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    description: {
      control: 'text',
      description: 'Toast description'
    },
    position: {
      control: 'select',
      options: [
        'top-right',
        'top-left',
        'top-center',
        'bottom-right',
        'bottom-left',
        'bottom-center'
      ]
    },
    shadow: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl']
    },
    radius: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full']
    }
  }
}
