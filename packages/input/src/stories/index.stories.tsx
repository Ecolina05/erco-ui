import type { Meta, StoryObj } from '@storybook/react'

import Input from '../index'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input'
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    borderColor: 'purple',
    classNames: '',
    id: 'first_name',
    isRequired: true,
    label: 'First Name',
    placeholder: 'John',
    radius: 'lg'
  },
  argTypes: {
    borderColor: {
      control: 'select',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    classNames: {
      control: 'text',
      description: 'Custom card class name'
    },
    id: {
      control: 'text',
      description: 'Input id'
    },
    isRequired: {
      control: 'boolean',
      description: 'Input required'
    },
    label: {
      control: 'text',
      description: 'Input label'
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder'
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'full']
    }
  }
}
