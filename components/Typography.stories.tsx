import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Typography from './Typography'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'heading-1',
        'heading-2',
        'heading-3',
        'heading-4',
        'heading-5',
        'heading-6',
        'body',
        'body-large',
        'body-small',
        'caption',
        'nav',
        'button',
        'quote',
      ],
    },
    as: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'div',
        'label',
        'li',
        'blockquote',
      ],
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Heading1: Story = {
  args: {
    variant: 'heading-1',
    children: 'Heading 1',
  },
}

export const Heading2: Story = {
  args: {
    variant: 'heading-2',
    children: 'Heading 2',
  },
}

export const Heading3: Story = {
  args: {
    variant: 'heading-3',
    children: 'Heading 3',
  },
}

export const Heading4: Story = {
  args: {
    variant: 'heading-4',
    children: 'Heading 4',
  },
}

export const Heading5: Story = {
  args: {
    variant: 'heading-5',
    children: 'Heading 5',
  },
}

export const Heading6: Story = {
  args: {
    variant: 'heading-6',
    children: 'Heading 6',
  },
}

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body text - This is the default body text style.',
  },
}

export const BodyLarge: Story = {
  args: {
    variant: 'body-large',
    children: 'Body Large - This is larger body text for emphasis.',
  },
}

export const BodySmall: Story = {
  args: {
    variant: 'body-small',
    children: 'Body Small - This is smaller body text for supporting content.',
  },
}

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text',
  },
}

export const Nav: Story = {
  args: {
    variant: 'nav',
    children: 'Navigation Text',
  },
}

export const Button: Story = {
  args: {
    variant: 'button',
    children: 'Button Text',
  },
}

export const Quote: Story = {
  args: {
    variant: 'quote',
    children: 'This is a quote that demonstrates the quote typography style.',
  },
}

export const CustomElement: Story = {
  args: {
    variant: 'heading-1',
    as: 'div',
    children: 'Heading 1 as div element',
  },
}

export const LongText: Story = {
  args: {
    variant: 'body',
    children:
      'This is a longer paragraph that demonstrates how the typography component handles multiple lines of text. It should maintain proper line height and spacing for readability.',
  },
}
