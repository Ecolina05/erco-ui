import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Accordion from '../index'
import '../../../../lib/styles/index.css'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion'
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {
    title: 'Accordion Title',
    children: <p>Accordion Content</p>,
    id: 'accordion-1',
    isOpen: false
  },
  argTypes: {
    title: {
      control: 'text'
    },
    children: {
      control: 'text'
    },
    id: {
      control: 'text'
    },
    isOpen: {
      control: 'boolean'
    }
  }
}
