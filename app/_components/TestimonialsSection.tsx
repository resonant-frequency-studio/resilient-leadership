'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Typography from '@/components/Typography'
import Pill from '@/components/Pill'

const testimonials = [
  {
    quote:
      'Before meeting Charlene, I lived in a perpetual state of self-imposed high expectation and self-criticism. The ability to live in the moment was beyond me. She helped me realize that significant events from my past shaped how I deal with life today.\n\nI am now able to identify the tendencies that cause me to be overly critical of myself… My approach to both work and home life has improved tremendously.',
    name: 'Nate Breed',
    title: 'VP of Finance',
  },
  {
    quote:
      'My coaching with Charlene has changed my life personally, professionally and socially.\n\nI was traveling through life with unrealistic expectations and carrying a sense of failure. Charlene has an incredible way of holding me accountable with honesty and connecting me with what really matters.',
    name: 'Chad Henline',
    title: 'Director of Operations',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-third py-16 md:py-32">
      <div className="max-width-container">
        <motion.div
          className="flex flex-col items-center text-center gap-8 md:gap-12 max-w-3xl mx-auto mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          <Pill className="bg-tags-pills-dark text-foreground-light">
            Testimonials
          </Pill>

          <Typography variant="heading-2" as="h2">
            What leaders say
          </Typography>

          <Typography variant="body-muted" as="p">
            A few reflections from leaders who have worked with Charlene.
          </Typography>
        </motion.div>

        {/* Testimonials grid - Image + 2 testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {/* Image card */}
          <motion.div
            className="bg-main rounded-2xl overflow-hidden flex"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.2,
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/testimonials-placeholder.webp"
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Testimonial cards */}
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-main rounded-2xl p-8 flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.3 + index * 0.1,
              }}
            >
              {/* Quote */}
              <Typography
                variant="body-large"
                as="p"
                className="whitespace-pre-line"
              >
                &ldquo;{testimonial.quote}&rdquo;
              </Typography>

              {/* Author info with image */}
              <div className="flex items-end gap-4 mt-auto">
                <div className="flex-1">
                  <Typography variant="body-semibold" as="p">
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body-small"
                    as="p"
                    className="text-foreground-dark/70 mt-1"
                  >
                    {testimonial.title}
                  </Typography>
                </div>
                {/* Image - square with rounded corners */}
                <div className="relative size-20 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/testimonial-placeholder.webp"
                    alt=""
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
