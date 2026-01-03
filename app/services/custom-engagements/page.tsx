import ExecutiveCoachingHero from '../_components/ExecutiveCoachingHero'
import WhenUsefulSection from '../_components/WhenUsefulSection'
import WhatWorkFeelsLikeSection from '../_components/WhatWorkFeelsLikeSection'
import CoachingApproachSection from '../_components/CoachingApproachSection'
import OutcomesSection from '../_components/OutcomesSection'
import WhoThisIsForSection from '../_components/WhoThisIsForSection'
import AboutCharleneSection from '../_components/AboutCharleneSection'
import { customEngagementsData } from './data'

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
      <AboutCharleneSection data={customEngagementsData.aboutCharlene} />
    </>
  )
}
