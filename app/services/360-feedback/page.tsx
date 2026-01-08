import type { Metadata } from 'next'
import ExecutiveCoachingHero from '../_components/ExecutiveCoachingHero'
import WhenUsefulSection from '../_components/WhenUsefulSection'
import WhatWorkFeelsLikeSection from '../_components/WhatWorkFeelsLikeSection'
import CoachingApproachSection from '../_components/CoachingApproachSection'
import OutcomesSection from '../_components/OutcomesSection'
import WhoThisIsForSection from '../_components/WhoThisIsForSection'
import AboutSection from '../../_components/AboutSection'
import { threeSixtyFeedbackData } from './data'

export const metadata: Metadata = {
  title: '360° Feedback | Resilient Leadership',
  description:
    '360° feedback provides a well-rounded view of how your leadership is experienced by others. Gain clarity on strengths and blind spots to enhance your leadership effectiveness.',
}

export default function ThreeSixtyFeedbackPage() {
  return (
    <>
      <ExecutiveCoachingHero data={threeSixtyFeedbackData.hero} />
      <WhenUsefulSection data={threeSixtyFeedbackData.whenUseful} />
      <WhatWorkFeelsLikeSection
        data={threeSixtyFeedbackData.whatWorkFeelsLike}
      />
      <CoachingApproachSection data={threeSixtyFeedbackData.coachingApproach} />
      <OutcomesSection data={threeSixtyFeedbackData.outcomes} />
      <WhoThisIsForSection data={threeSixtyFeedbackData.whoThisIsFor} />
      <AboutSection data={threeSixtyFeedbackData.aboutCharlene} />
    </>
  )
}
