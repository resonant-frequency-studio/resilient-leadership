import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'
import Textarea from './Textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    rows: {
      control: 'number',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Textarea Label',
    placeholder: 'Enter your message...',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Textarea Label',
    defaultValue: 'This is some sample text content in the textarea.',
  },
}

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
}

export const WithError: Story = {
  args: {
    label: 'Textarea Label',
    error: 'This field is required',
    placeholder: 'Enter your message...',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    value: 'This textarea is disabled',
    disabled: true,
  },
}

export const Required: Story = {
  args: {
    label: 'Required Textarea',
    required: true,
    placeholder: 'Required field',
  },
}

export const LongContent: Story = {
  args: {
    label: 'Long Content',
    defaultValue:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
}
