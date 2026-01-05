import type { Metadata } from 'next'
import Hero from './_components/Hero'
import WhyCoachingSection from './_components/WhyCoachingSection'
import HowLeadersWorkSection from './_components/HowLeadersWorkSection'
import HowWeWorkSection from './_components/HowWeWorkSection'
import TestimonialsSection from './_components/TestimonialsSection'
import AboutSection from './_components/AboutSection'

export const metadata: Metadata = {
  title: 'Resilient Leadership | Executive & Team Coaching',
  description:
    'Executive coaching, team coaching, and leadership development for leaders navigating complexity, responsibility, and change. Build greater self-awareness, resilience, and effectiveness.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhyCoachingSection />
      <HowLeadersWorkSection />
      <HowWeWorkSection />
      <TestimonialsSection />
      <AboutSection />
    </>
  )
}
