import '@testing-library/jest-dom'
import React from 'react'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => {
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
      whileHover: _whileHover,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      whileTap: _whileTap,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onHoverStart: _onHoverStart,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onHoverEnd: _onHoverEnd,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onTap: _onTap,
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
      whileHover?: unknown
      whileTap?: unknown
      onHoverStart?: unknown
      onHoverEnd?: unknown
      onTap?: unknown
      viewport?: unknown
      transition?: unknown
    } & React.HTMLAttributes<HTMLElement>) => {
      return React.createElement(tag, props, children)
    }
    MockComponent.displayName = `Mock${tag}`
    return MockComponent
  }

  // Mock for useScroll hook
  const mockUseScroll = jest.fn(() => ({
    scrollYProgress: {
      get: () => 0,
    },
  }))

  // Mock for useTransform hook
  const mockUseTransform = jest.fn((value, inputRange, outputRange) => {
    return jest.fn(() => outputRange[0])
  })

  return {
    motion: {
      div: createMockComponent('div'),
      section: createMockComponent('section'),
      li: createMockComponent('li'),
    },
    default: createMockComponent('div'),
    useScroll: mockUseScroll,
    useTransform: mockUseTransform,
    MotionValue: jest.fn(),
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
    width,
    height,
  }: {
    src: string
    alt: string
    className?: string
    fill?: boolean
    width?: number
    height?: number
  }) => {
    return (
      // Using img tag here is intentional for test mocking
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        {...(fill ? { style: { position: 'absolute', inset: 0 } } : {})}
      />
    )
  },
}))

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}))
