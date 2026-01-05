import Typography from '@/components/Typography'
import Button from '@/components/Button'
import Motion from '@/components/Motion'

export default function ClosingSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-width-container">
        <div className="max-w-3xl mx-auto text-center">
          <Motion
            as="div"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <Typography variant="heading-3" as="h2" className="mb-6">
              How we work together
            </Typography>
          </Motion>
          <Motion
            as="div"
            className="flex flex-col gap-4 mb-8"
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
              Every engagement at Resilient Leadership is shaped by context,
              care, and attention to what is actually happening beneath the
              surface. Whether working with individuals, teams, or
              organizations, the work is designed to support clarity,
              resilience, and meaningful progress.
            </Typography>
            <Typography
              variant="body"
              as="p"
              className="text-foreground-dark/80"
            >
              If you are curious about working together, the first step is a
              conversation.
            </Typography>
          </Motion>
          <Motion
            as="div"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          >
            <Button variant="primary" size="lg" href="/contact">
              Start a Conversation
            </Button>
          </Motion>
        </div>
      </div>
    </section>
  )
}
