import { render, screen } from '@testing-library/react'
import CustomEngagementsPage from '../page'

describe('Custom Engagements Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<CustomEngagementsPage />)
    expect(container).toBeInTheDocument()
  })

  it('renders hero section with title', () => {
    render(<CustomEngagementsPage />)
    expect(
      screen.getByText(/When the work does not fit a standard format/i)
    ).toBeInTheDocument()
  })

  it('renders when useful section', () => {
    render(<CustomEngagementsPage />)
    expect(
      screen.getByText(/When complexity calls for a tailored approach/i)
    ).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<CustomEngagementsPage />)
    const startConversationLinks = screen.getAllByRole('link', {
      name: /Start a Conversation/i,
    })
    expect(startConversationLinks.length).toBeGreaterThan(0)
  })
})
