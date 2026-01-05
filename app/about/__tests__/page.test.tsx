import { render, screen } from '@testing-library/react'
import AboutPage from '../page'

describe('About Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<AboutPage />)
    expect(container).toBeInTheDocument()
  })

  it('renders main heading', () => {
    render(<AboutPage />)
    const heading = screen.getByRole('heading', {
      name: /Grounded leadership begins with awareness/i,
    })
    expect(heading).toBeInTheDocument()
  })

  it('renders philosophy section', () => {
    render(<AboutPage />)
    expect(screen.getByText(/Our approach/i)).toBeInTheDocument()
  })

  it('renders founder section with Charlene Wilson', () => {
    render(<AboutPage />)
    expect(screen.getByText(/Charlene Wilson/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Founder, Executive Coach, Facilitator/i)
    ).toBeInTheDocument()
  })

  it('renders team intro section', () => {
    render(<AboutPage />)
    expect(screen.getByText(/The team/i)).toBeInTheDocument()
  })

  it('renders team member sections', () => {
    render(<AboutPage />)
    expect(screen.getByText(/Filaree Radich/i)).toBeInTheDocument()
    expect(screen.getByText(/Harriet Parsons/i)).toBeInTheDocument()
  })

  it('renders closing section with CTA', () => {
    render(<AboutPage />)
    expect(screen.getByText(/How we work together/i)).toBeInTheDocument()
    const startConversationLinks = screen.getAllByRole('link', {
      name: /Start a Conversation/i,
    })
    expect(startConversationLinks.length).toBeGreaterThan(0)
  })
})
