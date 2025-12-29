import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'
import Select from './Select'

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
]

export const Default: Story = {
  args: {
    label: 'Select Label',
    placeholder: 'Choose an option',
    options,
  },
}

export const WithValue: Story = {
  args: {
    label: 'Select Label',
    defaultValue: 'option2',
    options,
  },
}

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Choose an option',
    options,
  },
}

export const WithError: Story = {
  args: {
    label: 'Select Label',
    error: 'Please select an option',
    options,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    disabled: true,
    options,
  },
}

export const Required: Story = {
  args: {
    label: 'Required Select',
    required: true,
    placeholder: 'Choose an option',
    options,
  },
}

export const ManyOptions: Story = {
  args: {
    label: 'Select with Many Options',
    placeholder: 'Choose an option',
    options: Array.from({ length: 20 }, (_, i) => ({
      value: `option${i + 1}`,
      label: `Option ${i + 1}`,
    })),
  },
}
