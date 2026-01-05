import type { Metadata } from 'next'
import ExecutiveCoachingHero from '../_components/ExecutiveCoachingHero'
import WhenUsefulSection from '../_components/WhenUsefulSection'
import WhatWorkFeelsLikeSection from '../_components/WhatWorkFeelsLikeSection'
import CoachingApproachSection from '../_components/CoachingApproachSection'
import OutcomesSection from '../_components/OutcomesSection'
import WhoThisIsForSection from '../_components/WhoThisIsForSection'
import AboutSection from '../../_components/AboutSection'
import { changeManagementData } from './data'

export const metadata: Metadata = {
  title: 'Change Management | Resilient Leadership',
  description:
    'Change management creates conditions for organizational change to be understood, supported, and sustained. Support your team through transitions with expert facilitation.',
}

export default function ChangeManagementPage() {
  return (
    <>
      <ExecutiveCoachingHero data={changeManagementData.hero} />
      <WhenUsefulSection data={changeManagementData.whenUseful} />
      <WhatWorkFeelsLikeSection data={changeManagementData.whatWorkFeelsLike} />
      <CoachingApproachSection data={changeManagementData.coachingApproach} />
      <OutcomesSection data={changeManagementData.outcomes} />
      <WhoThisIsForSection data={changeManagementData.whoThisIsFor} />
      <AboutSection data={changeManagementData.aboutCharlene} />
    </>
  )
}
