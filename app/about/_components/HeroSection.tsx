'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Typography from '@/components/Typography'
import { Pill } from '@/components'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:py-32">
      <div className="max-width-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-8 md:gap-12">
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
            >
              <Pill>About Resilient Leadership</Pill>
            </motion.div>

            {/* Main heading */}
            <motion.div
              className="space-y-2 md:space-y-3 lg:mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
            >
              <Typography variant="heading-1" as="h1">
                Grounded leadership begins with awareness
              </Typography>
            </motion.div>

            {/* Description paragraphs */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
            >
              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                Resilient Leadership exists to support leaders and organizations
                navigating complexity, responsibility, and change. The work is
                grounded, human, and practical, focused on building clarity,
                resilience, and capacity where it matters most.
              </Typography>
              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                This is not about adopting a leadership style or fixing what is
                broken. It is about creating the space and insight needed to
                lead with intention, steadiness, and impact in real world
                conditions.
              </Typography>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-end">
            <motion.div
              className="heroMask relative aspect-square overflow-hidden size-full mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <Image
                src="/about-hero.webp"
                alt="About Resilient Leadership"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
