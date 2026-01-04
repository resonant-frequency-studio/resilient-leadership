import { render, screen } from '@testing-library/react'
import SurveysAssessmentsPage from '../page'

describe('Surveys & Assessments Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<SurveysAssessmentsPage />)
    expect(container).toBeInTheDocument()
  })

  it('renders hero section with title', () => {
    render(<SurveysAssessmentsPage />)
    expect(
      screen.getByText(/When clarity is needed across the system/i)
    ).toBeInTheDocument()
  })

  it('renders when useful section', () => {
    render(<SurveysAssessmentsPage />)
    expect(
      screen.getByText(/When surveys and assessments tend to matter most/i)
    ).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<SurveysAssessmentsPage />)
    const startConversationLinks = screen.getAllByRole('link', {
      name: /Start a Conversation/i,
    })
    expect(startConversationLinks.length).toBeGreaterThan(0)
  })
})
