'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Typography from '@/components/Typography'

const states = [
  {
    label: 'Arriving',
    line1: 'Carrying questions without clean answers.',
    line2: 'Feeling the weight of decisions that affect more than yourself.',
  },
  {
    label: 'In the work',
    line1: 'Space to slow the pace without losing momentum.',
    line2: 'Room to speak clearly, without performance.',
  },
  {
    label: 'Over time',
    line1: 'Less reactivity. More intention.',
    line2: 'A steadiness that supports people and progress.',
  },
]

export default function OutcomesSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="max-width-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column - Image */}
          <motion.div
            className="flex justify-start order-2 lg:order-1 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/what-we-do-outcome.webp"
                alt="Three people sitting and talking"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right column - Text content */}
          <motion.div
            className="flex flex-col gap-8 md:gap-12 order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Typography variant="heading-2" as="h2">
              What the work feels like
            </Typography>

            <div className="flex flex-col gap-8">
              {states.map((state, index) => (
                <div key={state.label}>
                  <div className="flex flex-col gap-4">
                    <Typography variant="heading-5" as="h3">
                      {state.label}
                    </Typography>
                    <Typography variant="body-large" as="p">
                      {state.line1}
                    </Typography>
                    <Typography variant="body-large" as="p">
                      {state.line2}
                    </Typography>
                  </div>
                  {index < states.length - 1 && (
                    <div className="mt-8 border-t border-foreground-dark/10" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
