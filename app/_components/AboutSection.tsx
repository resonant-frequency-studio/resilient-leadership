'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Typography from '@/components/Typography'
import Button from '@/components/Button'

export default function AboutSection() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
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
                A conversation with Charlene
              </Typography>

              <div className="flex flex-col gap-4 md:gap-6">
                <Typography variant="body-large" as="p">
                  Charlene works with leaders navigating complexity,
                  responsibility, and change. Her approach is grounded,
                  thoughtful, and direct, creating space for clarity,
                  resilience, and meaningful growth.
                </Typography>

                <Typography variant="body-large" as="p">
                  If you are considering coaching, the first step is a
                  conversation. This is a 45-minute, confidential space to talk
                  through what you are facing and explore whether working
                  together feels like the right fit.
                </Typography>
              </div>
              <div className="mx-auto md:mx-0">
                <Button variant="primary" size="md" href="/contact">
                  Start a Conversation
                </Button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px]">
              <Image
                src="/resilient-charlene-wilson.jpeg"
                alt="Charlene Wilson"
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
