import type { Meta, StoryObj } from '@storybook/react'

import Switch from '../index'

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Switch'
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    checked: false,
    color: 'purple',
    disabled: false,
    id: 'switch-1',
    label: 'Switch',
    onChange: () => {}
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    }
  }
}
