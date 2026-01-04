'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Typography from '@/components/Typography'
import Button from '@/components/Button'
import Pill from '@/components/Pill'

export default function WhatWeDoHero() {
  return (
    <section className="pt-32 pb-16 md:py-32">
      <div className="max-width-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="flex flex-col gap-8 md:gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Eyebrow and Headline */}
            <div className="flex flex-col gap-4">
              <Pill>What We Do</Pill>
              <Typography variant="heading-1" as="h1">
                Support for leaders navigating complexity, responsibility, and
                change
              </Typography>
            </div>

            {/* Body copy */}
            <div className="flex flex-col gap-4 md:gap-6">
              <Typography variant="body-large" as="p">
                Leadership rarely slows down when clarity is most needed.
                Decisions carry weight. Conversations are complex. The impact of
                your choices often reaches beyond what is visible.
              </Typography>

              <Typography variant="body-large" as="p">
                Our work supports leaders, teams, and organizations during
                moments of growth, transition, and uncertainty. We offer
                grounded coaching and development that creates space for
                reflection, strengthens leadership capacity, and supports
                steadier, more intentional action.
              </Typography>
            </div>

            {/* CTA Button */}
            <div>
              <Button variant="outline" size="md" href="/services#services">
                Explore how we work
              </Button>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="relative w-full aspect-square max-w-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/what-we-do-hero.webp"
                alt="Man and woman talking"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
