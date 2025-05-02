import type { Meta, StoryObj } from '@storybook/react'

import Avatar from '../index'

import '../../../../lib/styles/index.css'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar'
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    alt: 'Avatar',
    className: '',
    color: 'purple',
    isBordered: false,
    name: 'Ernesto Colina',
    radius: 'full',
    size: 'md',
    src: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
    text: ''
  },
  argTypes: {
    alt: {
      control: 'text'
    },
    className: {
      control: 'text'
    },
    color: {
      control: 'select',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    isBordered: {
      control: 'boolean'
    },
    name: {
      control: 'text',
      description: 'Full name (generates initials if no image/text)'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    radius: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full']
    },
    src: {
      control: 'text'
    },
    text: {
      control: 'text'
    }
  }
}
