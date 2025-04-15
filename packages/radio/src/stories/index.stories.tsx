import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from '../index'

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: 'Radio Group'
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  args: {
    options: [
      { value: '1', text: 'Option 1' },
      { value: '2', text: 'Option 2' },
      { value: '3', text: 'Option 3', isDisabled: true }
    ],
    classNames: '',
    color: 'primary',
    label: 'Some title',
    orientation: 'vertical'
  },
  argTypes: {
    options: {
      control: 'array' as any,
      description: 'Radio options'
    },
    classNames: {
      control: 'text',
      description: 'Radio classNames'
    },
    color: {
      control: 'select',
      defaultValue: 'primary',
      description: 'Radio color',
      options: ['primary', 'default', 'green', 'red', 'yellow', 'blue']
    },
    label: {
      control: 'text',
      description: 'Radio label'
    },
    orientation: {
      control: 'radio',
      defaultValue: 'vertical',
      description: 'Radio orientation',
      options: ['vertical', 'horizontal']
    }
  }
}
