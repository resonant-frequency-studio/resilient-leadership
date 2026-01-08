import type { Preview } from '@storybook/nextjs-vite'
import React from 'react'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import '../app/globals.css'

// Load fonts for Storybook
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    Story => {
      // Apply font variables to the story wrapper
      return React.createElement(
        'div',
        {
          className: `${cormorantGaramond.variable} ${inter.variable}`,
          style: { fontFamily: inter.style.fontFamily },
        },
        React.createElement(Story)
      )
    },
  ],
}

export default preview
