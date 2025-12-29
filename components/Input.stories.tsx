import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'
import Input from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input Label',
    placeholder: 'Enter text...',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Input Label',
    value: 'Sample value',
  },
}

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Placeholder text',
  },
}

export const Email: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'you@example.com',
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
  },
}

export const WithError: Story = {
  args: {
    label: 'Input Label',
    error: 'This field is required',
    placeholder: 'Enter text...',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    value: 'Disabled value',
    disabled: true,
  },
}

export const Required: Story = {
  args: {
    label: 'Required Input',
    required: true,
    placeholder: 'Required field',
  },
}
