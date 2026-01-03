'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Typography from '@/components/Typography'
import Button from '@/components/Button'
import { ServiceAboutCharleneData } from './types'

interface AboutCharleneSectionProps {
  data: ServiceAboutCharleneData
}

export default function AboutCharleneSection({
  data,
}: AboutCharleneSectionProps) {
  return (
    <section className="relative py-16 md:py-[120px] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta-background.webp"
          alt=""
          fill
          className="object-cover blur-[2px]"
          priority
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'color-mix(in srgb, #191818 32%, transparent)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-width-container">
        <motion.div
          className="bg-main rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left side - Content */}
            <div className="p-8 md:p-12 flex flex-col gap-8 md:gap-12">
              <Typography variant="heading-3" as="h2">
                {data.heading}
              </Typography>

              {Array.isArray(data.description) ? (
                <div className="flex flex-col gap-4 md:gap-6">
                  {data.description.map((paragraph, index) => (
                    <Typography key={index} variant="body-large" as="p">
                      {paragraph}
                    </Typography>
                  ))}
                </div>
              ) : (
                <Typography variant="body-large" as="p">
                  {data.description}
                </Typography>
              )}

              <div>
                <Button variant="primary" size="md" href={data.ctaHref}>
                  {data.ctaText}
                </Button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px]">
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                className="object-cover scale-x-[-1]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
