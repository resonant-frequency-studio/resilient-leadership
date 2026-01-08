import type { Metadata } from 'next'
import ExecutiveCoachingHero from '../_components/ExecutiveCoachingHero'
import WhenUsefulSection from '../_components/WhenUsefulSection'
import WhatWorkFeelsLikeSection from '../_components/WhatWorkFeelsLikeSection'
import CoachingApproachSection from '../_components/CoachingApproachSection'
import OutcomesSection from '../_components/OutcomesSection'
import WhoThisIsForSection from '../_components/WhoThisIsForSection'
import AboutSection from '../../_components/AboutSection'
import { customEngagementsData } from './data'

export const metadata: Metadata = {
  title: 'Custom Engagements | Resilient Leadership',
  description:
    'Custom leadership development engagements tailored to your unique organizational context. Flexible, responsive coaching and facilitation for complex leadership challenges.',
}

export default function CustomEngagementsPage() {
  return (
    <>
      <ExecutiveCoachingHero data={customEngagementsData.hero} />
      <WhenUsefulSection data={customEngagementsData.whenUseful} />
      <WhatWorkFeelsLikeSection
        data={customEngagementsData.whatWorkFeelsLike}
      />
      <CoachingApproachSection data={customEngagementsData.coachingApproach} />
      <OutcomesSection data={customEngagementsData.outcomes} />
      <WhoThisIsForSection data={customEngagementsData.whoThisIsFor} />
      <AboutSection data={customEngagementsData.aboutCharlene} />
    </>
  )
}
