'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'
import Typography from '@/components/Typography'

// Mobile stacked cards component with slide up and fade in
function MobileMomentCard({
  title,
  description,
  image,
  index,
}: {
  title: string
  description: string
  image: string
  index: number
}) {
  return (
    <motion.div
      className="bg-main rounded-2xl overflow-hidden shadow-lg w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay: 1 + index * 0.1,
      }}
    >
      <div className="grid grid-cols-1 gap-0">
        {/* Image */}
        <div className="relative aspect-square">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4">
          <Typography variant="heading-4" as="h3">
            {title}
          </Typography>

          <Typography variant="body" as="p">
            {description}
          </Typography>
        </div>
      </div>
    </motion.div>
  )
}

interface MomentCardProps {
  title: string
  description: string
  image: string
  index: number
  scrollYProgress: MotionValue<number>
  totalCards: number
}

function MomentCard({
  title,
  description,
  image,
  index,
  scrollYProgress,
  totalCards,
}: MomentCardProps) {
  // Card-specific final scale values for depth effect (evenly spaced between 0.88 and 1.0)
  const finalScales = [0.7, 0.8, 0.9, 1] // Card 0, 1, 2, 3
  const isLastCard = index === totalCards - 1
  const finalScale = isLastCard ? 1 : finalScales[index]

  // Divide scroll progress into equal segments per card
  const segmentSize = 1 / totalCards
  const cardPhaseStart = index * segmentSize
  const cardPhaseEnd = (index + 1) * segmentSize

  // Within each card's phase: enter (first 30%), sticky (middle 40%), scale down (last 30%)
  const enterStart = cardPhaseStart
  const enterEnd = cardPhaseStart + segmentSize * 0.3
  const stickyStart = enterEnd
  const stickyEnd = cardPhaseStart + segmentSize * 0.7
  const scaleDownStart = stickyEnd
  const scaleDownEnd = cardPhaseEnd

  // Y position: scrolls up from below into sticky position (except for first card)
  const baseY = index * 80
  const y = useTransform(
    scrollYProgress,
    index === 0 ? [enterStart, enterEnd] : [enterStart, enterEnd],
    index === 0 ? [baseY, baseY] : [baseY + 400, baseY],
    { clamp: true }
  )

  // Opacity: fades in as card enters (first card is always visible)
  const opacity = useTransform(
    scrollYProgress,
    index === 0 ? [0, 0] : [enterStart, enterEnd],
    index === 0 ? [1, 1] : [0, 1],
    { clamp: true }
  )

  // Scale: stays at 1.0 while sticky, then scales down to card-specific value
  const scale = useTransform(
    scrollYProgress,
    isLastCard
      ? [stickyStart, stickyEnd]
      : [stickyStart, stickyEnd, scaleDownEnd],
    isLastCard ? [1, 1] : [1, 1, finalScale],
    { clamp: true }
  )

  // Dark overlay: darkens when next card starts entering
  const overlayOpacity = useTransform(
    scrollYProgress,
    isLastCard ? [1, 1] : [scaleDownStart, scaleDownEnd],
    isLastCard ? [0, 0] : [0, 0.4],
    { clamp: true }
  )

  // Z-index: later cards (higher index) stack on top; sticky card gets highest z-index
  const baseZIndex = index + 10 // Higher index = higher z-index for proper stacking
  const stickyZIndex = 100 + index // Very high z-index when sticky
  const zIndex = useTransform(
    scrollYProgress,
    [enterStart, stickyStart, stickyEnd, scaleDownEnd],
    [baseZIndex, stickyZIndex, stickyZIndex, baseZIndex],
    { clamp: true }
  )

  return (
    <motion.div
      className="sticky top-20 xl:top-32"
      style={{
        y,
        opacity,
        scale,
        zIndex,
        marginTop: index === 0 ? 0 : '-200px',
      }}
    >
      <div className="bg-main rounded-2xl overflow-hidden shadow-lg relative w-full xl:max-w-[65%] mx-auto min-h-[65vh]">
        {/* Dark overlay for cards that have been scrolled past */}
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none rounded-2xl z-10"
          style={{ opacity: overlayOpacity }}
        />
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-0 relative z-0 h-full min-h-[65vh]">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:h-full md:min-h-full">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col justify-center gap-4 md:gap-5 h-full">
            <Typography variant="heading-4" as="h3">
              {title}
            </Typography>

            <Typography variant="body" as="p">
              {description}
            </Typography>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const moments = [
  {
    title: 'When leadership feels heavy',
    description:
      'You are carrying responsibility that affects people, outcomes, and direction, often without space to pause.',
    image: '/why-coaching-placeholder-1.webp',
  },
  {
    title: 'When conversations carry weight',
    description:
      'You are navigating tension or accountability and want to communicate clearly without overexplaining or retreating.',
    image: '/why-coaching-placeholder-2.webp',
  },
  {
    title: 'When a team needs steadiness',
    description:
      'Priorities have shifted or trust feels uneven, and how leaders show up together matters more than ever.',
    image: '/why-coaching-placeholder-3.webp',
  },
  {
    title: 'When change outpaces capacity',
    description:
      'The organization is evolving, but the people side needs attention if the change is going to hold.',
    image: '/why-coaching-placeholder-4.webp',
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
        <motion.div
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
        </motion.div>

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
        <motion.div
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
        </motion.div>
      </div>
    </section>
  )
}
