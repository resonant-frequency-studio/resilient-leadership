import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'
import Button from './Button'
import { ArrowRight } from './icons/ArrowRight'
import { ArrowLeft } from './icons/ArrowLeft'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'inverse', 'outline', 'glass'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Button',
  },
}

export const Inverse: Story = {
  args: {
    variant: 'inverse',
    size: 'md',
    children: 'Inverse Button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    children: 'Outline Button',
  },
}

export const Glass: Story = {
  args: {
    variant: 'glass',
    size: 'md',
    children: 'Glass Button',
  },
}

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small Button',
  },
}

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button',
  },
}

export const WithIconRight: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button with Icon',
    icon: <ArrowRight />,
    iconPosition: 'right',
  },
}

export const WithIconLeft: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button with Icon',
    icon: <ArrowLeft />,
    iconPosition: 'left',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Disabled Button',
    disabled: true,
  },
}

export const AsLink: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button as Link',
    href: '/example',
  },
}
