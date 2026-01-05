import { render, screen } from '@testing-library/react'
import ExecutiveCoachingPage from '../page'

describe('Executive Coaching Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<ExecutiveCoachingPage />)
    expect(container).toBeInTheDocument()
  })

  it('renders hero section with title', () => {
    render(<ExecutiveCoachingPage />)
    expect(
      screen.getByText(/When leadership carries weight/i)
    ).toBeInTheDocument()
  })

  it('renders when useful section', () => {
    render(<ExecutiveCoachingPage />)
    expect(
      screen.getByText(/When executive coaching tends to matter most/i)
    ).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<ExecutiveCoachingPage />)
    const startConversationLinks = screen.getAllByRole('link', {
      name: /Start a Conversation/i,
    })
    expect(startConversationLinks.length).toBeGreaterThan(0)
  })
})
