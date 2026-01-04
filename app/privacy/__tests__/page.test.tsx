import { render, screen } from '@testing-library/react'
import PrivacyPage from '../page'

describe('Privacy Policy Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<PrivacyPage />)
    expect(container).toBeInTheDocument()
  })

  it('renders page title', () => {
    render(<PrivacyPage />)
    const headings = screen.getAllByRole('heading', { name: /Privacy Policy/i })
    expect(headings.length).toBeGreaterThan(0)
  })

  it('renders key sections', () => {
    render(<PrivacyPage />)
    const infoCollect = screen.getAllByText(/Information We Collect/i)
    expect(infoCollect.length).toBeGreaterThan(0)
    expect(screen.getByText(/How We Use Your Information/i)).toBeInTheDocument()
    const californiaRights = screen.getAllByText(/California Privacy Rights/i)
    expect(californiaRights.length).toBeGreaterThan(0)
  })

  it('renders contact information', () => {
    render(<PrivacyPage />)
    const resilientLeadership = screen.getAllByText(/Resilient Leadership/i)
    expect(resilientLeadership.length).toBeGreaterThan(0)
    const emailLinks = screen.getAllByText(/info@resilientleadership.us/i)
    expect(emailLinks.length).toBeGreaterThan(0)
  })
})
