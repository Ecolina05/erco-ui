import type { Meta, StoryObj } from '@storybook/react'

import Select from '../index'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Select'
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    borderColor: 'purple',
    classNames: '',
    description: '',
    label: '',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ],
    radius: 'md',
    onChange: () => {}
  },
  argTypes: {
    options: {
      description: 'Select options'
    },
    classNames: {
      control: 'text',
      description: 'Custom card class name'
    },
    borderColor: {
      control: 'select',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    description: {
      control: 'text',
      description: 'Custom card description'
    },
    label: {
      control: 'text',
      description: 'Custom card label'
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    }
  }
}
