import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from '../index'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox'
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    color: 'primary',
    id: 'checkbox-1',
    label: 'Label',
    checked: false,
    disabled: false,
    onChange: () => {}
  },
  argTypes: {
    color: {
      control: 'select',
      defaultValue: 'primary',
      description: 'Checkbox color',
      options: ['primary', 'default', 'green', 'red', 'yellow', 'blue']
    },
    id: {
      control: 'text',
      description: 'Checkbox id'
    },
    label: {
      control: 'text',
      description: 'Checkbox label'
    },
    checked: {
      control: 'boolean',
      description: 'Checkbox state'
    },
    disabled: {
      control: 'boolean',
      description: 'Checkbox disabled state'
    },
    onChange: {
      action: 'changed',
      description: 'Checkbox change handler'
    }
  }
}
