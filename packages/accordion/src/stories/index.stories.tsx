import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import Accordion from '../index'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion'
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {
    title: 'TITLE',
    children: <p>Accordion Content</p>
  },
  argTypes: {
    title: {
      control: 'text'
    },
    children: {
      control: 'text'
    },
    isOpen: {
      control: 'boolean'
    }
  }
}
