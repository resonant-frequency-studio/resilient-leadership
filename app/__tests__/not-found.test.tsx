import { render, screen } from '@testing-library/react'
import NotFound from '../not-found'

describe('404 Not Found Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<NotFound />)
    expect(container).toBeInTheDocument()
  })

  it('renders 404 heading', () => {
    render(<NotFound />)
    expect(
      screen.getByRole('heading', { name: /Page Not Found/i })
    ).toBeInTheDocument()
  })

  it('renders helpful message', () => {
    render(<NotFound />)
    expect(
      screen.getByText(/We couldn't find the page you're looking for/i)
    ).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<NotFound />)
    expect(
      screen.getByRole('link', { name: /Go to Homepage/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Contact Us/i })
    ).toBeInTheDocument()
  })

  it('renders popular pages section', () => {
    render(<NotFound />)
    expect(screen.getByText(/Popular Pages/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /What We Do/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Executive Coaching/i })
    ).toBeInTheDocument()
  })
})
