'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Typography from '@/components/Typography'
import Pill from '@/components/Pill'

const benefits = [
  {
    image: '/why-coaching-placeholder-1.webp',
    text: 'Greater confidence in complex decision-making',
  },
  {
    image: '/why-coaching-placeholder-2.webp',
    text: 'Stronger presence and trust in conversations that matter',
  },
  {
    image: '/why-coaching-placeholder-3.webp',
    text: 'Alignment between values, actions, and leadership impact',
  },
  {
    image: '/why-coaching-placeholder-4.webp',
    text: 'A steadiness that supports both performance and well-being',
  },
]

export default function WhyCoachingSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="max-width-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left column - Pill, headline, paragraph, and "Over time..." */}
          <motion.div
            className="flex flex-col items-start gap-8 md:gap-12 lg:h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          >
            <div className="flex flex-col items-start gap-8 md:gap-12">
              <div className="flex flex-col gap-8 md:gap-12">
                <div className="flex flex-col gap-8 md:gap-12">
                  <Pill>What Changes With Coaching</Pill>

                  <Typography variant="heading-2" as="h2">
                    When you create space to reflect, your leadership changes.
                  </Typography>
                </div>

                <div className="flex flex-col gap-4 md:gap-6">
                  <Typography variant="body-large" as="p">
                    <strong>Leadership carries responsibility,</strong> often in
                    ways that are not visible to others. The decisions you make
                    affect your people, your organization, and your own sense of
                    purpose. The pace is demanding, the challenges are complex,
                    and there is rarely space to pause and reflect.
                  </Typography>
                  <Typography variant="body-large" as="p">
                    <strong>Coaching provides a dedicated space</strong> to slow
                    down, examine how you are leading, and regain perspective.
                    Decisions feel more intentional. Communication becomes more
                    grounded. You begin to respond with clarity rather than
                    react under pressure.
                  </Typography>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Image grid */}
          <div>
            {/* Images grid - 2x2 on desktop */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-3/4 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                    delay: index * 0.1,
                  }}
                >
                  <Image
                    src={benefit.image}
                    alt={benefit.text}
                    fill
                    className="object-cover"
                  />
                  {/* Frosted glass text overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 min-h-[80px] flex items-center">
                      <Typography variant="body-light" as="p">
                        {benefit.text}
                      </Typography>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
