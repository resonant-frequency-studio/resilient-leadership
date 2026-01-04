import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<Home />)
    expect(container).toBeInTheDocument()
  })

  it('renders main heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/Lead with clarity/i)
  })

  it('renders CTA buttons', () => {
    render(<Home />)
    const startConversationLinks = screen.getAllByRole('link', {
      name: /Start a Conversation/i,
    })
    expect(startConversationLinks.length).toBeGreaterThan(0)
    const exploreLinks = screen.getAllByRole('link', {
      name: /Explore What We Do/i,
    })
    expect(exploreLinks.length).toBeGreaterThan(0)
  })

  it('renders client logos section', () => {
    render(<Home />)
    expect(screen.getByText(/Clients we work with/i)).toBeInTheDocument()
  })
})
