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
  args: {},
  argTypes: {}
}
