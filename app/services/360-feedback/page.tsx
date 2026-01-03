import ExecutiveCoachingHero from '../_components/ExecutiveCoachingHero'
import WhenUsefulSection from '../_components/WhenUsefulSection'
import WhatWorkFeelsLikeSection from '../_components/WhatWorkFeelsLikeSection'
import CoachingApproachSection from '../_components/CoachingApproachSection'
import OutcomesSection from '../_components/OutcomesSection'
import WhoThisIsForSection from '../_components/WhoThisIsForSection'
import AboutCharleneSection from '../_components/AboutCharleneSection'
import { threeSixtyFeedbackData } from './data'

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
      <AboutCharleneSection data={threeSixtyFeedbackData.aboutCharlene} />
    </>
  )
}
