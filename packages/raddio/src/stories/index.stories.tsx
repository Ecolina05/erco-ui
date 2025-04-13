import type { Meta, StoryObj } from '@storybook/react'

import Radio from '../index'

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: 'Radio'
}

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  args: {
    id: 'radio-1',
    checked: false,
    color: 'primary',
    disabled: false,
    label: 'Label',
    name: 'radio'
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Checkbox id'
    },
    checked: {
      control: 'boolean',
      description: 'Checkbox state'
    },
    color: {
      control: 'select',
      options: ['primary', 'default', 'green', 'red', 'yellow', 'blue'],
      description: 'Checkbox color'
    },
    disabled: {
      control: 'boolean',
      description: 'Checkbox disabled state'
    },
    label: {
      control: 'text',
      description: 'Checkbox label'
    },
    name: {
      control: 'text',
      description: 'Checkbox name'
    }
  }
}
