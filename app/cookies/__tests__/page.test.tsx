import { render, screen } from '@testing-library/react'
import CookiePage from '../page'

describe('Cookie Policy Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<CookiePage />)
    expect(container).toBeInTheDocument()
  })

  it('renders page title', () => {
    render(<CookiePage />)
    const headings = screen.getAllByRole('heading', { name: /Cookie Policy/i })
    expect(headings.length).toBeGreaterThan(0)
  })

  it('renders key sections', () => {
    render(<CookiePage />)
    expect(screen.getByText(/What Are Cookies/i)).toBeInTheDocument()
    expect(screen.getByText(/How We Use Cookies/i)).toBeInTheDocument()
    const managingCookies = screen.getAllByText(/Managing Cookies/i)
    expect(managingCookies.length).toBeGreaterThan(0)
  })
})
