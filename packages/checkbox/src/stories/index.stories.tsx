import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from '../index'

import '../../../../lib/styles/globals.css'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox'
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    color: 'purple',
    id: 'checkbox-1',
    label: 'Label',
    checked: false,
    disabled: false,
    onChange: () => {}
  },
  argTypes: {
    color: {
      control: 'select',
      defaultValue: 'purple',
      description: 'Checkbox color',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
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
