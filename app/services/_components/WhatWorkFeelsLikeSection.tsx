'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Typography from '@/components/Typography'
import { ServiceWhatWorkFeelsLikeData } from './types'

interface WhatWorkFeelsLikeSectionProps {
  data: ServiceWhatWorkFeelsLikeData
}

export default function WhatWorkFeelsLikeSection({
  data,
}: WhatWorkFeelsLikeSectionProps) {
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
                src={data.imageSrc}
                alt={data.imageAlt}
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
              {data.heading}
            </Typography>

            <div className="flex flex-col gap-8">
              {data.phases.map((phase, index) => (
                <div key={phase.label}>
                  <div className="flex flex-col gap-4">
                    <Typography
                      variant="heading-5"
                      as="h3"
                      className="text-foreground-dark/70"
                    >
                      {phase.label}
                    </Typography>
                    <Typography variant="body-large" as="p">
                      {phase.line1}
                    </Typography>
                    {phase.line2 && (
                      <Typography variant="body-large" as="p">
                        {phase.line2}
                      </Typography>
                    )}
                  </div>
                  {index < data.phases.length - 1 && (
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
