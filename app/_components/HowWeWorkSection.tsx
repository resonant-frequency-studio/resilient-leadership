'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Typography from '@/components/Typography'

export default function HowWeWorkSection() {
  return (
    <section className="bg-main py-16 md:py-32">
      <div className="max-width-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-center">
          {/* Left column - Image with mask (top on mobile) */}
          <div className="order-2 lg:order-1">
            <motion.div
              className="howWeWorkMask relative aspect-square overflow-hidden w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
            >
              <Image
                src="/how-we-work-placeholder.jpg"
                alt="Team collaboration"
                fill
                className="object-cover brightness-[0.8] contrast-[1.1] saturate-[0.9]"
                priority
              />
            </motion.div>
          </div>

          {/* Right column - Content (bottom on mobile) */}
          <motion.div
            className="flex flex-col gap-8 md:gap-12 order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
          >
            <Typography variant="heading-2" as="h2">
              How we work
            </Typography>

            <div className="flex flex-col gap-4 md:gap-6">
              <Typography
                variant="body-large"
                as="p"
                className="text-lg md:text-xl leading-[1.65] text-foreground-dark"
              >
                At Resilient Leadership, we believe leadership development is
                not about fixing what is broken or adopting a prescribed style.
                It is about creating the awareness, capacity, and resilience
                needed to lead effectively in complex, real-world conditions.
              </Typography>

              <Typography
                variant="body-large"
                as="p"
                className="text-lg md:text-xl leading-[1.65] text-foreground-dark"
              >
                Our work integrates timeless wisdom with modern insights from
                neuroscience, psychology, and organizational systems. We focus
                not only on what leaders do, but on how they think, relate, and
                respond, especially under pressure.
              </Typography>

              <Typography
                variant="body-large"
                as="p"
                className="text-lg md:text-xl leading-[1.65] text-foreground-dark"
              >
                Coaching is a collaborative process. We create a thoughtful,
                confidential space where leaders can slow down, reflect
                honestly, and explore new possibilities. From that space, more
                intentional decisions, clearer communication, and sustainable
                leadership practices emerge.
              </Typography>

              <Typography
                variant="body-large"
                as="p"
                className="text-lg md:text-xl leading-[1.65] text-foreground-dark"
              >
                Our role is not to provide answers. It is to help you see more
                clearly so you can lead in a way that is aligned, grounded, and
                genuinely your own.
              </Typography>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
