import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import Avatar from '../index'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar'
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    alt: 'Avatar',
    classNames: '',
    color: 'purple',
    isBordered: false,
    radius: 'full',
    size: 'md',
    src: 'https://i.pravatar.cc/150?u=a04258114e29026708c'
    // text: 'Ernesto Colina Doe'
  },
  argTypes: {
    alt: {
      control: 'text'
    },
    classNames: {
      control: 'text'
    },
    color: {
      control: 'select',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    isBordered: {
      control: 'boolean'
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
