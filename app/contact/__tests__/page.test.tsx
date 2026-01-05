import { render, screen } from '@testing-library/react'
import ContactPage from '../page'

describe('Contact Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<ContactPage />)
    expect(container).toBeInTheDocument()
  })

  it('renders main heading', () => {
    render(<ContactPage />)
    const heading = screen.getByRole('heading', {
      name: /A thoughtful first conversation/i,
    })
    expect(heading).toBeInTheDocument()
  })

  it('renders contact form', () => {
    render(<ContactPage />)
    expect(screen.getByLabelText(/NAME/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/EMAIL/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/WHAT BRINGS YOU HERE/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/MESSAGE/i)).toBeInTheDocument()
  })

  it('renders what to expect section', () => {
    render(<ContactPage />)
    expect(screen.getByText(/What to expect/i)).toBeInTheDocument()
  })

  it('renders form submission button', () => {
    render(<ContactPage />)
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument()
  })
})
