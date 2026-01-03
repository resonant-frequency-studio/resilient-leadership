'use client'

import { motion } from 'framer-motion'
import Typography from '@/components/Typography'
import Pill from '@/components/Pill'
import { ServiceOutcomesData } from './types'

interface OutcomesSectionProps {
  data: ServiceOutcomesData
}

export default function OutcomesSection({ data }: OutcomesSectionProps) {
  return (
    <section className="py-16 md:py-[120px]">
      <div className="max-width-container">
        <motion.div
          className="flex flex-col gap-4 mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Pill>{data.pill}</Pill>
          <Typography variant="heading-2" as="h2">
            {data.heading}
          </Typography>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-4 md:pr-8 md:border-r md:border-foreground-dark/10">
            {data.outcomes
              .slice(0, Math.ceil(data.outcomes.length / 2))
              .map((outcome, index) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: index * 0.05,
                  }}
                >
                  <Typography variant="body-large" as="p">
                    {outcome}
                  </Typography>
                </motion.div>
              ))}
          </div>
          <div className="flex flex-col gap-4 md:pl-8">
            {data.outcomes
              .slice(Math.ceil(data.outcomes.length / 2))
              .map((outcome, index) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: (Math.ceil(data.outcomes.length / 2) + index) * 0.05,
                  }}
                >
                  <Typography variant="body-large" as="p">
                    {outcome}
                  </Typography>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
