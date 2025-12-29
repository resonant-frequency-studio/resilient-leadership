import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Header from './Header'

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const OnHomePage: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/',
      },
    },
  },
}

export const OnAboutPage: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/about',
      },
    },
  },
}
