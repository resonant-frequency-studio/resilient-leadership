'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/Button'
import Typography from '@/components/Typography'
import Pill from '@/components/Pill'
import TickerTape, { LogoPlaceholder } from '@/components/TickerTape'
import { ArrowRight } from '@/components/icons/ArrowRight'

export default function Hero() {
  // Placeholder logos - replace with actual logo components later
  const logos = Array.from({ length: 8 }, (_, i) => <LogoPlaceholder key={i} />)

  return (
    <section className="pt-32 pb-16 md:py-32">
      <div className="max-width-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-8 md:gap-12">
            {/* Main heading */}
            <motion.div
              className="space-y-2 md:space-y-3 lg:mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
            >
              <Typography variant="heading-1" as="h1">
                Lead with clarity.
                <br />
                Grow with resilience.
              </Typography>
            </motion.div>

            {/* Description paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
            >
              <Typography variant="body-large" as="p" className="max-w-xl">
                Executive coaching for leaders who are navigating complexity,
                responsibility, and change and want to lead with courage,
                wisdom, and steadiness.
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
            >
              <Button variant="primary" size="md" href="/contact">
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                size="md"
                href="/what-we-do"
                icon={<ArrowRight />}
                iconPosition="right"
              >
                Explore What We Do
              </Button>
            </motion.div>
          </div>

          {/* Right side - Image + Client Logos Widget */}
          <div className="flex flex-col gap-8 md:gap-12">
            <div className="flex justify-end">
              <motion.div
                className="heroMask relative aspect-square overflow-hidden size-full mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <Image
                  src="/hero-placeholder.webp"
                  alt="Executive coaching"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>

            {/* Client Logos Widget */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              className="flex flex-col gap-4"
            >
              <Pill>Clients we work with</Pill>
              <Typography variant="body-muted" as="p" className="text-sm">
                Leaders and organizations across technology, healthcare,
                finance, and professional services.
              </Typography>
              <TickerTape>{logos}</TickerTape>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
