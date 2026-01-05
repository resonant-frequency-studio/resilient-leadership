import type { Metadata } from 'next'
import Typography from '@/components/Typography'
import BookCallForm from '@/components/BookCallForm'
import { Pill } from '@/components'

export const metadata: Metadata = {
  title: 'Contact Us | Resilient Leadership',
  description:
    'Schedule a confidential 45-minute conversation to explore whether coaching, facilitation, or leadership support is right for you. No obligation required.',
}

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-main pt-32 pb-16 md:py-32">
      <div className="max-width-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-8 md:gap-12">
            {/* Label */}
            <Pill>Contact Us</Pill>

            {/* Main Heading */}
            <Typography variant="heading-2" as="h2">
              A thoughtful first conversation
            </Typography>

            {/* Introduction */}
            <Typography
              variant="body"
              as="p"
              className="text-foreground-dark/80"
            >
              If you are considering coaching, facilitation, or leadership
              support, the first step is a conversation.
            </Typography>

            <Typography
              variant="body"
              as="p"
              className="text-foreground-dark/80"
            >
              This is a <strong>45 minute, confidential space</strong> to talk
              through what you are facing, what matters most right now, and
              whether working together feels like the right fit. There is no
              obligation. This conversation is simply an opportunity to slow
              down and gain clarity.
            </Typography>

            {/* Divider */}
            <div className="w-full h-px bg-foreground-dark/20 my-4" />

            {/* What to expect section */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h3">
                What to expect
              </Typography>

              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Talk through your current context and what feels most
                    pressing
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Clarify what you would like to shift, strengthen, or better
                    understand
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Explore whether any type of engagement would be useful
                  </Typography>
                </li>
              </ul>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                The goal is clarity, not commitment.
              </Typography>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex flex-col gap-6 bg-secondary rounded-2xl p-6">
            <Typography
              variant="body"
              as="p"
              className="text-foreground-dark/80"
            >
              Share a bit about what brings you here so we can prepare
              thoughtfully for the conversation. What you share helps us
              understand your context and make the most of our time together.
            </Typography>
            <BookCallForm />
          </div>
        </div>
      </div>
    </section>
  )
}
