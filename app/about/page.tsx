import type { Metadata } from 'next'
import HeroSection from './_components/HeroSection'
import PhilosophySection from './_components/PhilosophySection'
import FounderSection from './_components/FounderSection'
import TeamIntroSection from './_components/TeamIntroSection'
import TeamMemberSection from './_components/TeamMemberSection'
import ClosingSection from './_components/ClosingSection'

export const metadata: Metadata = {
  title: 'About Us | Resilient Leadership',
  description:
    'Learn about Resilient Leadership, our team, philosophy, and approach to executive coaching and leadership development. Meet Charlene Wilson and our experienced coaches.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-main">
      <HeroSection />
      <PhilosophySection />
      <FounderSection />
      <TeamIntroSection />
      <TeamMemberSection
        name="Filaree Radich"
        title="Executive Coach and 360 Degree Feedback Specialist"
        imageSrc="/resilient-filaree-radich.avif"
        imageAlt="Filaree Radich"
        paragraphs={[
          'Filaree brings over 15 years of experience supporting leaders through executive coaching and interview based 360 feedback. Her work is grounded in compassion, rigor, and a deep respect for the complexity of leadership.',
          'She has coached and conducted feedback for hundreds of leaders across industries, including Fortune 500 companies, Bay Area startups, government agencies, and nonprofit organizations. Her clients include leaders from Capital One, Qualcomm, Shell, EnPro Industries, Siluria Technologies, NAVAIR, NIST, KIPP Charter Schools, Harlem Children&apos;s Zone, and the Mini Twelve Step House.',
          'Filaree spent more than a decade as Director of the 360 Feedback Department at Learning as Leadership, where she hired, trained, and led a team of feedback specialists delivering high quality qualitative feedback at scale.',
          'Her background includes ICF approved coaching training, Rational Behavioral Therapy tools, the Learning as Leadership methodology, Getting Things Done, and deep grounding in humanistic psychology and adult development. She is also a trained actor and alumna of the Meisner Acting Technique Studio in San Francisco.',
        ]}
        socialLinks={{
          linkedin: 'https://linkedin.com/in/filaree-radich',
        }}
      />
      <TeamMemberSection
        name="Harriet Parsons"
        title="Certified Coach"
        imageSrc="/resilient-harriet.avif"
        imageAlt="Harriet Parsons"
        paragraphs={[
          'Harriet is a Certified Coach trained by the Co Active Institute with a background that bridges corporate leadership, well being, and human development. She brings warmth, curiosity, and steadiness to her work, creating a safe space for exploration, creativity, and growth.',
          'She holds a degree in English Language and Literature from King&apos;s College London and has professional experience in corporate finance and technology recruitment for private equity backed businesses. Harriet is also a Qualified Personal Trainer with a deep understanding of balanced health and well being.',
          'Originally from the United Kingdom, Harriet spent over a decade in California and now lives on Bainbridge Island, Washington with her husband and two children. Her work meets clients exactly where they are and supports leadership that is both effective and sustainable.',
        ]}
        socialLinks={{
          linkedin: 'https://linkedin.com/in/harriet-parsons',
          facebook: 'https://facebook.com/harriet-parsons',
        }}
        backgroundColor="secondary"
      />
      <ClosingSection />
    </div>
  )
}
