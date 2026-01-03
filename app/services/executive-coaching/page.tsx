import ServiceHero from '../_components/ExecutiveCoachingHero'
import WhenUsefulSection from '../_components/WhenUsefulSection'
import WhatWorkFeelsLikeSection from '../_components/WhatWorkFeelsLikeSection'
import CoachingApproachSection from '../_components/CoachingApproachSection'
import OutcomesSection from '../_components/OutcomesSection'
import WhoThisIsForSection from '../_components/WhoThisIsForSection'
import AboutCharleneSection from '../_components/AboutCharleneSection'
import { executiveCoachingData } from './data'

export default function ExecutiveCoachingPage() {
  return (
    <>
      <ServiceHero data={executiveCoachingData.hero} />
      <WhenUsefulSection data={executiveCoachingData.whenUseful} />
      <WhatWorkFeelsLikeSection
        data={executiveCoachingData.whatWorkFeelsLike}
      />
      <CoachingApproachSection data={executiveCoachingData.coachingApproach} />
      <OutcomesSection data={executiveCoachingData.outcomes} />
      <WhoThisIsForSection data={executiveCoachingData.whoThisIsFor} />
      <AboutCharleneSection data={executiveCoachingData.aboutCharlene} />
    </>
  )
}
