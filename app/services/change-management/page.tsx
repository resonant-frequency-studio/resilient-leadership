import ExecutiveCoachingHero from '../_components/ExecutiveCoachingHero'
import WhenUsefulSection from '../_components/WhenUsefulSection'
import WhatWorkFeelsLikeSection from '../_components/WhatWorkFeelsLikeSection'
import CoachingApproachSection from '../_components/CoachingApproachSection'
import OutcomesSection from '../_components/OutcomesSection'
import WhoThisIsForSection from '../_components/WhoThisIsForSection'
import AboutCharleneSection from '../_components/AboutCharleneSection'
import { changeManagementData } from './data'

export default function ChangeManagementPage() {
  return (
    <>
      <ExecutiveCoachingHero data={changeManagementData.hero} />
      <WhenUsefulSection data={changeManagementData.whenUseful} />
      <WhatWorkFeelsLikeSection data={changeManagementData.whatWorkFeelsLike} />
      <CoachingApproachSection data={changeManagementData.coachingApproach} />
      <OutcomesSection data={changeManagementData.outcomes} />
      <WhoThisIsForSection data={changeManagementData.whoThisIsFor} />
      <AboutCharleneSection data={changeManagementData.aboutCharlene} />
    </>
  )
}
