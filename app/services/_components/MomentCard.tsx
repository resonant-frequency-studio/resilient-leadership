'use client'

import Image from 'next/image'
import { motion, useTransform, MotionValue } from 'framer-motion'
import Typography from '@/components/Typography'

interface MomentCardProps {
  title: string
  description: string
  image: string
  index: number
  scrollYProgress: MotionValue<number>
  totalCards: number
}

export default function MomentCard({
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
