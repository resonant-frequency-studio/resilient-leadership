import type { Metadata } from 'next'
import WhatWeDoHero from './_components/WhatWeDoHero'
import LeadershipMoments from './_components/LeadershipMoments'
import ServicesSection from './_components/ServicesSection'
import OutcomesSectionServices from './_components/OutcomesSectionServices'
import AboutCharleneSectionServices from './_components/AboutCharleneSectionServices'

export const metadata: Metadata = {
  title: 'Our Services | Resilient Leadership',
  description:
    'Explore our comprehensive leadership development services including executive coaching, team coaching, change management, 360° feedback, surveys, and custom engagements.',
}

export default function WhatWeDoPage() {
  return (
    <>
      <WhatWeDoHero />
      <LeadershipMoments />
      <ServicesSection />
      <OutcomesSectionServices />
      <AboutCharleneSectionServices />
    </>
  )
}
