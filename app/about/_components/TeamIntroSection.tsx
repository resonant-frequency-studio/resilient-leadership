import Typography from '@/components/Typography'
import Motion from '@/components/Motion'

export default function TeamIntroSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-width-container">
        <div className="max-w-3xl mx-auto">
          <Motion
            as="div"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <Typography variant="heading-3" as="h2" className="mb-6">
              The team
            </Typography>
          </Motion>
          <Motion
            as="div"
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
              Resilient Leadership works with a trusted network of experienced
              coaches and facilitators. Each brings depth, care, and a distinct
              perspective to the work while sharing a common commitment to
              thoughtful, human centered leadership development.
            </Typography>
          </Motion>
        </div>
      </div>
    </section>
  )
}
