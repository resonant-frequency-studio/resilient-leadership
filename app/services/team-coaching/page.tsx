import type { Metadata } from 'next'
import ServiceHero from '../_components/ExecutiveCoachingHero'
import WhenUsefulSection from '../_components/WhenUsefulSection'
import WhatWorkFeelsLikeSection from '../_components/WhatWorkFeelsLikeSection'
import CoachingApproachSection from '../_components/CoachingApproachSection'
import OutcomesSection from '../_components/OutcomesSection'
import WhoThisIsForSection from '../_components/WhoThisIsForSection'
import AboutSection from '../../_components/AboutSection'
import { teamCoachingData } from './data'

export const metadata: Metadata = {
  title: 'Team Coaching | Resilient Leadership',
  description:
    'Team coaching builds collective capacity for high performance, effective communication, and alignment. Support your team through change and growth with professional coaching.',
}

export default function TeamCoachingPage() {
  return (
    <>
      <ServiceHero data={teamCoachingData.hero} />
      <WhenUsefulSection data={teamCoachingData.whenUseful} />
      <WhatWorkFeelsLikeSection data={teamCoachingData.whatWorkFeelsLike} />
      <CoachingApproachSection data={teamCoachingData.coachingApproach} />
      <OutcomesSection data={teamCoachingData.outcomes} />
      <WhoThisIsForSection data={teamCoachingData.whoThisIsFor} />
      <AboutSection data={teamCoachingData.aboutCharlene} />
    </>
  )
}
