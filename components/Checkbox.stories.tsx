import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'
import Checkbox from './Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Checkbox Label',
  },
}

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
  },
}

export const Unchecked: Story = {
  args: {
    label: 'Unchecked Checkbox',
    checked: false,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked Checkbox',
    checked: true,
    disabled: true,
  },
}

export const WithError: Story = {
  args: {
    label: 'Checkbox with Error',
    error: 'This field is required',
  },
}

export const WithoutLabel: Story = {
  args: {},
}

export const WithLongLabel: Story = {
  args: {
    label:
      'This is a very long checkbox label that demonstrates how the component handles longer text content',
  },
}
