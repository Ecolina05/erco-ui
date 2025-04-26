import type { Meta, StoryObj } from '@storybook/react'

import Input from '../index'

import '../../../../lib/styles/globals.css'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input'
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    borderColor: 'purple',
    description: '',
    id: 'first_name',
    inputClassNames: '',
    isRequired: true,
    label: 'First Name',
    labelClassNames: '',
    placeholder: 'Ernesto Colina',
    radius: 'lg',
    type: 'text'
  },
  argTypes: {
    borderColor: {
      control: 'select',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    description: {
      control: 'text',
      description: 'Input description'
    },
    id: {
      control: 'text',
      description: 'Input id'
    },
    inputClassNames: {
      control: 'text',
      description: 'Custom input class name'
    },
    isRequired: {
      control: 'boolean',
      description: 'Input required'
    },
    label: {
      control: 'text',
      description: 'Input label'
    },
    labelClassNames: {
      control: 'text',
      description: 'Custom label class name'
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder'
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'full']
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'time', 'date', 'datetime-local']
    }
  }
}
