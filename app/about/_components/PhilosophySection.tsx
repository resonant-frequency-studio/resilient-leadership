'use client'

import { motion } from 'framer-motion'
import Typography from '@/components/Typography'

export default function PhilosophySection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-width-container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <Typography variant="heading-3" as="h2" className="mb-6">
              Our approach
            </Typography>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <Typography
              variant="body"
              as="p"
              className="text-foreground-dark/80"
            >
              Leadership is not experienced in isolation. It lives in
              relationships, decisions, systems, and moments of pressure.
            </Typography>
            <Typography
              variant="body"
              as="p"
              className="text-foreground-dark/80"
            >
              At Resilient Leadership, development work focuses on how leaders
              think, relate, and respond, especially when the stakes are high.
              We integrate insights from neuroscience, somatic awareness,
              psychology, and organizational systems to support change that is
              sustainable rather than performative.
            </Typography>
            <Typography
              variant="body"
              as="p"
              className="text-foreground-dark/80"
            >
              The goal is not optimization for its own sake. The goal is
              clarity, presence, and leadership that holds under real
              conditions.
            </Typography>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
