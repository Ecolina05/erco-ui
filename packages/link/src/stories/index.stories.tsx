import type { Meta, StoryObj } from '@storybook/react'

import Link from '../index'

import '../../../../lib/styles/index.css'

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Link'
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    children: 'Link',
    color: 'purple',
    href: 'https://example.com',
    size: 'sm',
    underline: true,
    target: '_blank',
    onClick: () => {}
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
