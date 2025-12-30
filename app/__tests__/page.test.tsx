import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../page'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => {
  // Filter out framer-motion specific props
  const createMockComponent = (tag: string) => {
    const MockComponent = ({
      children,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      initial: _initial,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      animate: _animate,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      whileInView: _whileInView,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      viewport: _viewport,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      transition: _transition,
      ...props
    }: {
      children?: React.ReactNode
      initial?: unknown
      animate?: unknown
      whileInView?: unknown
      viewport?: unknown
      transition?: unknown
    } & React.HTMLAttributes<HTMLElement>) => {
      // Only pass through standard HTML attributes, filtering out framer-motion props
      return React.createElement(tag, props, children)
    }
    MockComponent.displayName = `Mock${tag}`
    return MockComponent
  }

  return {
    motion: {
      div: createMockComponent('div'),
    },
    default: createMockComponent('div'),
  }
})

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    className,
    fill,
  }: {
    src: string
    alt: string
    className?: string
    fill?: boolean
  }) => {
    return (
      // Using img tag here is intentional for test mocking
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={className}
        {...(fill ? { style: { position: 'absolute', inset: 0 } } : {})}
      />
    )
  },
}))

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})
