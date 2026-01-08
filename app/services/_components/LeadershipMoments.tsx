'use client'

import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import Typography from '@/components/Typography'
import Motion from '@/components/Motion'
import MobileMomentCard from './MobileMomentCard'
import MomentCard from './MomentCard'

const moments = [
  {
    title: 'When leadership feels heavy',
    description:
      'You are carrying responsibility that affects people, outcomes, and direction, often without space to pause.',
    image: '/what-we-do-leadership-01.webp',
  },
  {
    title: 'When conversations carry weight',
    description:
      'You are navigating tension or accountability and want to communicate clearly without overexplaining or retreating.',
    image: '/what-we-do-conversations-01.webp',
  },
  {
    title: 'When a team needs steadiness',
    description:
      'Priorities have shifted or trust feels uneven, and how leaders show up together matters more than ever.',
    image: '/what-we-do-steadiness-01.webp',
  },
  {
    title: 'When change outpaces capacity',
    description:
      'The organization is evolving, but the people side needs attention if the change is going to hold.',
    image: '/what-we-do-change-outpaces-01.webp',
  },
]

export default function LeadershipMoments() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section ref={sectionRef} className="py-16 md:py-32">
      <div className="max-width-container">
        <Motion
          as="div"
          className="flex flex-col gap-8 md:gap-12 mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          <Typography variant="heading-2" as="h2" className="text-center">
            Leadership moments that bring people here
          </Typography>

          <Typography
            variant="body-large"
            as="p"
            className="text-center max-w-3xl mx-auto"
          >
            These are the moments where support makes the greatest difference.
          </Typography>
        </Motion>

        {/* Mobile: Simple stacked cards */}
        <div className="block md:hidden space-y-6">
          {moments.map((moment, index) => (
            <MobileMomentCard
              key={moment.title}
              title={moment.title}
              description={moment.description}
              image={moment.image}
              index={index}
            />
          ))}
        </div>

        {/* Desktop: Animated stacked cards container - Tall enough for scroll animation */}
        <div className="hidden md:block relative min-h-[300vh] pb-32 md:pb-64">
          {moments.map((moment, index) => (
            <MomentCard
              key={moment.title}
              title={moment.title}
              description={moment.description}
              image={moment.image}
              index={index}
              scrollYProgress={scrollYProgress}
              totalCards={moments.length}
            />
          ))}
        </div>

        {/* Closing line */}
        <Motion
          as="div"
          className="mt-16 md:mt-48 xl:mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Typography
            variant="heading-3"
            as="p"
            className="text-center max-w-3xl mx-auto"
          >
            These moments look different for everyone. Our work is designed to
            meet you where you are and support what comes next.
          </Typography>
        </Motion>
      </div>
    </section>
  )
}
