import { render, screen } from '@testing-library/react'
import TeamCoachingPage from '../page'

describe('Team Coaching Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<TeamCoachingPage />)
    expect(container).toBeInTheDocument()
  })

  it('renders hero section with title', () => {
    render(<TeamCoachingPage />)
    expect(screen.getByText(/When teams need steadiness/i)).toBeInTheDocument()
  })

  it('renders when useful section', () => {
    render(<TeamCoachingPage />)
    expect(
      screen.getByText(/When team coaching tends to matter most/i)
    ).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<TeamCoachingPage />)
    const startConversationLinks = screen.getAllByRole('link', {
      name: /Start a Conversation/i,
    })
    expect(startConversationLinks.length).toBeGreaterThan(0)
  })
})
