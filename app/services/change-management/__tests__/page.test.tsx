import { render, screen } from '@testing-library/react'
import ChangeManagementPage from '../page'

describe('Change Management Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<ChangeManagementPage />)
    expect(container).toBeInTheDocument()
  })

  it('renders hero section with title', () => {
    render(<ChangeManagementPage />)
    expect(screen.getByText(/When change needs to hold/i)).toBeInTheDocument()
  })

  it('renders when useful section', () => {
    render(<ChangeManagementPage />)
    expect(
      screen.getByText(/When change management tends to matter most/i)
    ).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<ChangeManagementPage />)
    const startConversationLinks = screen.getAllByRole('link', {
      name: /Start a Conversation/i,
    })
    expect(startConversationLinks.length).toBeGreaterThan(0)
  })
})
