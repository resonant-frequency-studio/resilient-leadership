import ServiceHero from '../_components/ExecutiveCoachingHero'
import WhenUsefulSection from '../_components/WhenUsefulSection'
import WhatWorkFeelsLikeSection from '../_components/WhatWorkFeelsLikeSection'
import CoachingApproachSection from '../_components/CoachingApproachSection'
import OutcomesSection from '../_components/OutcomesSection'
import WhoThisIsForSection from '../_components/WhoThisIsForSection'
import AboutCharleneSection from '../_components/AboutCharleneSection'
import { teamCoachingData } from './data'

export default function TeamCoachingPage() {
  return (
    <>
      <ServiceHero data={teamCoachingData.hero} />
      <WhenUsefulSection data={teamCoachingData.whenUseful} />
      <WhatWorkFeelsLikeSection data={teamCoachingData.whatWorkFeelsLike} />
      <CoachingApproachSection data={teamCoachingData.coachingApproach} />
      <OutcomesSection data={teamCoachingData.outcomes} />
      <WhoThisIsForSection data={teamCoachingData.whoThisIsFor} />
      <AboutCharleneSection data={teamCoachingData.aboutCharlene} />
    </>
  )
}
