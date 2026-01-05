import { render, screen } from '@testing-library/react'
import ThreeSixtyFeedbackPage from '../page'

describe('360° Feedback Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<ThreeSixtyFeedbackPage />)
    expect(container).toBeInTheDocument()
  })

  it('renders hero section with title', () => {
    render(<ThreeSixtyFeedbackPage />)
    expect(screen.getByText(/When clear feedback matters/i)).toBeInTheDocument()
  })

  it('renders when useful section', () => {
    render(<ThreeSixtyFeedbackPage />)
    expect(
      screen.getByText(/When 360° feedback tends to matter most/i)
    ).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<ThreeSixtyFeedbackPage />)
    const startConversationLinks = screen.getAllByRole('link', {
      name: /Start a Conversation/i,
    })
    expect(startConversationLinks.length).toBeGreaterThan(0)
  })
})
