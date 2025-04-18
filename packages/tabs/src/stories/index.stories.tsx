import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Tabs from '../index'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Tabs'
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Tab 1', value: 'tab1' },
      { label: 'Tab 2', value: 'tab2' },
      { label: 'Tab 3', value: 'tab3' }
    ],
    content: [
      <div key='tab1'>Content 1</div>,
      <div key='tab2'>Content 2</div>,
      <div key='tab3'>Content 3</div>
    ],
    className: '',
    color: 'purple',
    defaultValue: 'tab1',
    orientation: 'horizontal',
    value: undefined,
    onChange: undefined
  },
  argTypes: {
    tabs: {
      control: 'select',
      options: [
        { label: 'Tab 1', value: 'tab1' },
        { label: 'Tab 2', value: 'tab2' },
        { label: 'Tab 3', value: 'tab3' }
      ]
    },
    content: {
      control: 'select',
      options: [
        <div key='tab1'>Content 1</div>,
        <div key='tab2'>Content 2</div>,
        <div key='tab3'>Content 3</div>
      ]
    },
    className: {
      control: 'text'
    },
    color: {
      control: 'select',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    defaultValue: {
      control: 'text'
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical']
    },
    value: {
      control: 'text'
    },
    onChange: {}
  }
}
