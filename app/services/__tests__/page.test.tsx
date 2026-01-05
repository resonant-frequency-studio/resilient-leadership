import { render, screen } from '@testing-library/react'
import ServicesPage from '../page'

describe('Services Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<ServicesPage />)
    expect(container).toBeInTheDocument()
  })

  it('renders main heading', () => {
    render(<ServicesPage />)
    const heading = screen.getByRole('heading', {
      name: /Support for leaders navigating complexity/i,
    })
    expect(heading).toBeInTheDocument()
  })

  it('renders services section', () => {
    render(<ServicesPage />)
    // Check for service names (may appear multiple times)
    const executiveCoaching = screen.getAllByText(/Executive Coaching/i)
    expect(executiveCoaching.length).toBeGreaterThan(0)
    const teamCoaching = screen.getAllByText(/Team Coaching/i)
    expect(teamCoaching.length).toBeGreaterThan(0)
    const changeManagement = screen.getAllByText(/Change Management/i)
    expect(changeManagement.length).toBeGreaterThan(0)
  })
})
