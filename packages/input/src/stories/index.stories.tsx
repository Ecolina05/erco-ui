import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Input from '../index'

import '../../../../lib/styles/index.css'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input'
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    color: 'purple',
    description: '',
    id: 'first_name',
    className: '',
    isRequired: false,
    label: 'First Name',
    labelClassName: '',
    placeholder: 'Ernesto Colina',
    radius: 'lg',
    type: 'text'
  },
  argTypes: {
    color: {
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
    className: {
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
    labelClassName: {
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

export const FormInput: Story = {
  render: () => (
    <form className='flex flex-col gap-3'>
      <Input
        description=''
        id='first_name'
        className=''
        isRequired={false}
        label='First Name'
        labelClassName=''
        placeholder='Ernesto'
        radius='lg'
        type='text'
      />

      <Input
        description=''
        id='first_name'
        className=''
        isRequired={false}
        label='Second Name'
        labelClassName=''
        placeholder='Colina'
        radius='lg'
        type='text'
      />

      <Input
        color='purple'
        description='Should be at least 8 characters long'
        id='first_name'
        className=''
        isRequired={false}
        labelClassName=''
        placeholder='John'
        radius='lg'
        type='text'
      />
    </form>
  )
}
