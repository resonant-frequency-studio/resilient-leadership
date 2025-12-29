import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import SocialLinks from './SocialLinks'

const meta = {
  title: 'Components/SocialLinks',
  component: SocialLinks,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    linkedin: {
      control: 'text',
    },
    facebook: {
      control: 'text',
    },
    instagram: {
      control: 'text',
    },
    youtube: {
      control: 'text',
    },
  },
} satisfies Meta<typeof SocialLinks>

export default meta
type Story = StoryObj<typeof meta>

export const AllLinks: Story = {
  args: {
    linkedin: 'https://www.linkedin.com/example',
    facebook: 'https://www.facebook.com/example',
    instagram: 'https://www.instagram.com/example',
    youtube: 'https://www.youtube.com/example',
  },
}

export const LinkedInOnly: Story = {
  args: {
    linkedin: 'https://www.linkedin.com/example',
  },
}

export const FacebookOnly: Story = {
  args: {
    facebook: 'https://www.facebook.com/example',
  },
}

export const InstagramOnly: Story = {
  args: {
    instagram: 'https://www.instagram.com/example',
  },
}

export const YouTubeOnly: Story = {
  args: {
    youtube: 'https://www.youtube.com/example',
  },
}

export const MultipleLinks: Story = {
  args: {
    linkedin: 'https://www.linkedin.com/example',
    youtube: 'https://www.youtube.com/example',
  },
}

export const WithCustomClassName: Story = {
  args: {
    linkedin: 'https://www.linkedin.com/example',
    facebook: 'https://www.facebook.com/example',
    instagram: 'https://www.instagram.com/example',
    youtube: 'https://www.youtube.com/example',
    className: 'gap-4',
  },
}

export const WithCustomIconClassName: Story = {
  args: {
    linkedin: 'https://www.linkedin.com/example',
    facebook: 'https://www.facebook.com/example',
    iconClassName: 'w-12 h-12',
  },
}
