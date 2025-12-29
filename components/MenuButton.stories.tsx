import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'
import MenuButton from './MenuButton'

const meta = {
  title: 'Components/MenuButton',
  component: MenuButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: { onToggle: fn() },
} satisfies Meta<typeof MenuButton>

export default meta
type Story = StoryObj<typeof meta>

export const Closed: Story = {
  args: {
    isOpen: false,
  },
}

export const Open: Story = {
  args: {
    isOpen: true,
  },
}

export const Disabled: Story = {
  args: {
    isOpen: false,
    disabled: true,
  },
}

export const CustomAriaLabel: Story = {
  args: {
    isOpen: false,
    'aria-label': 'Custom menu toggle button',
  },
}
