import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Footer from './Footer'

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InContainer: Story = {
  render: () => (
    <div className="min-h-screen bg-main">
      <div className="h-96" />
      <Footer />
    </div>
  ),
}
