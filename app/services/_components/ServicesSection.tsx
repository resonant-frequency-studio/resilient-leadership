'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Typography from '@/components/Typography'
import Pill from '@/components/Pill'
import {
  ExecutiveIcon,
  Executive360Icon,
  TeamIcon,
  ChangeIcon,
  SurveyIcon,
  CustomIcon,
} from './ServiceIcons'

const services = [
  {
    title: 'Executive Coaching',
    description:
      'A confidential space to slow down, clarify priorities, and lead with steadiness.',
    moment: 'When leadership feels heavy',
    href: '/services/executive-coaching',
    Icon: ExecutiveIcon,
  },
  {
    title: 'Executive Coaching + 360° Feedback',
    description:
      'Clear, grounded feedback that strengthens presence, judgment, and trust.',
    moment: 'When conversations carry weight',
    href: '/services/360-feedback',
    Icon: Executive360Icon,
  },
  {
    title: 'Team Coaching',
    description:
      'Helping leadership teams build trust, alignment, and steadiness together.',
    moment: 'When a team needs steadiness',
    href: '/services/team-coaching',
    Icon: TeamIcon,
  },
  {
    title: 'Change Management',
    description:
      'Supporting the people side of change so transformation can actually hold.',
    moment: 'When change outpaces capacity',
    href: '/services/change-management',
    Icon: ChangeIcon,
  },
  {
    title: 'Surveys & Assessments',
    description:
      'Insight that reveals patterns, strengths, and where attention is most needed.',
    moment: 'When clarity is missing',
    href: '/services/surveys-assessments',
    Icon: SurveyIcon,
  },
  {
    title: 'Custom Engagements',
    description:
      'Thoughtful combinations of coaching and feedback shaped to your context.',
    moment: 'When the situation does not fit a box',
    href: '/services/custom-engagements',
    Icon: CustomIcon,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-secondary py-16 md:py-32">
      <div className="max-width-container">
        {/* Headline and eyebrow */}
        <motion.div
          className="flex flex-col gap-4 mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Pill className="bg-tags-pills-dark text-foreground-light">
            How leaders work with us
          </Pill>
          <Typography variant="heading-2" as="h2">
            Support shaped to the moment you are in
          </Typography>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: index * 0.05,
              }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Link
                href={service.href}
                className="flex flex-col h-full p-6 md:p-8 bg-main rounded-2xl hover:bg-main/95 transition-all duration-200 cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6 text-foreground-dark/60 group-hover:text-foreground-dark transition-colors duration-200">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <service.Icon className="w-12 h-12" />
                  </motion.div>
                </div>

                {/* Service name */}
                <Typography variant="heading-4" as="h3" className="mb-4">
                  {service.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body"
                  as="p"
                  className="mb-auto text-foreground-dark/80"
                >
                  {service.description}
                </Typography>

                {/* Moment tag */}
                <div className="mt-6 pt-6 border-t border-foreground-dark/5">
                  <Typography
                    variant="body-small"
                    as="span"
                    className="text-foreground-dark/50"
                  >
                    {service.moment}
                  </Typography>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
