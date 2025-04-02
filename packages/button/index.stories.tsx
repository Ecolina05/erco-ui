import type { Meta, StoryObj } from '@storybook/react'

import Button from './src/Button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button'
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    onClick: () => {},
    children: 'Button',
    variant: 'primary',
    size: 'md'
  }
}
