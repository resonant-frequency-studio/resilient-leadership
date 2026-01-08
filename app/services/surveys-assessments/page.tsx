import type { Metadata } from 'next'
import ExecutiveCoachingHero from '../_components/ExecutiveCoachingHero'
import WhenUsefulSection from '../_components/WhenUsefulSection'
import WhatWorkFeelsLikeSection from '../_components/WhatWorkFeelsLikeSection'
import CoachingApproachSection from '../_components/CoachingApproachSection'
import OutcomesSection from '../_components/OutcomesSection'
import WhoThisIsForSection from '../_components/WhoThisIsForSection'
import AboutSection from '../../_components/AboutSection'
import { surveysAssessmentsData } from './data'

export const metadata: Metadata = {
  title: 'Surveys & Assessments | Resilient Leadership',
  description:
    'Organizational surveys and assessments provide clear insight into how your organization functions. Identify patterns and gaps across people, processes, and systems.',
}

export default function SurveysAssessmentsPage() {
  return (
    <>
      <ExecutiveCoachingHero data={surveysAssessmentsData.hero} />
      <WhenUsefulSection data={surveysAssessmentsData.whenUseful} />
      <WhatWorkFeelsLikeSection
        data={surveysAssessmentsData.whatWorkFeelsLike}
      />
      <CoachingApproachSection data={surveysAssessmentsData.coachingApproach} />
      <OutcomesSection data={surveysAssessmentsData.outcomes} />
      <WhoThisIsForSection data={surveysAssessmentsData.whoThisIsFor} />
      <AboutSection data={surveysAssessmentsData.aboutCharlene} />
    </>
  )
}
