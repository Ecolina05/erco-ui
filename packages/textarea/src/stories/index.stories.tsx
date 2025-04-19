import type { Meta, StoryObj } from '@storybook/react'

import Textarea from '../index'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Textarea'
}

export default meta
type Story = StoryObj<typeof Textarea>

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
    radius: 'lg'
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
    }
  }
}
