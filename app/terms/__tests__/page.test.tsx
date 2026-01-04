import { render, screen } from '@testing-library/react'
import TermsPage from '../page'

describe('Terms of Service Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<TermsPage />)
    expect(container).toBeInTheDocument()
  })

  it('renders page title', () => {
    render(<TermsPage />)
    expect(
      screen.getByRole('heading', { name: /Terms of Service/i })
    ).toBeInTheDocument()
  })

  it('renders key sections', () => {
    render(<TermsPage />)
    expect(screen.getByText(/Acceptance of Terms/i)).toBeInTheDocument()
    expect(screen.getByText(/Services Description/i)).toBeInTheDocument()
    expect(screen.getByText(/Governing Law/i)).toBeInTheDocument()
  })
})
