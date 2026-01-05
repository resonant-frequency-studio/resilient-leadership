import Typography from '@/components/Typography'
import Button from '@/components/Button'
import Motion from '@/components/Motion'

export default function HowLeadersWorkSection() {
  return (
    <section className="bg-linear-to-b from-secondary to-main py-16 md:py-32">
      <div className="max-width-container">
        <Motion
          as="div"
          className="flex flex-col items-center text-center gap-8 md:gap-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          <Typography variant="heading-2" as="h2">
            Ways leaders engage with us
          </Typography>

          <Typography variant="body-large" as="p">
            Coaching looks different depending on your role, your context, and
            the challenges you are navigating. Our work supports leaders and
            organizations at key moments of growth, transition, and change.
          </Typography>
        </Motion>

        {/* Services grid */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Executive Coaching */}
            <Motion
              as="div"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <Typography variant="heading-4" as="h3">
                Executive Coaching
              </Typography>
              <Typography variant="body" as="p">
                For leaders navigating complexity and responsibility who want
                greater clarity, confidence, and steadiness in how they lead.
              </Typography>
            </Motion>

            {/* Team Coaching */}
            <Motion
              as="div"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <Typography variant="heading-4" as="h3">
                Team Coaching
              </Typography>
              <Typography variant="body" as="p">
                For leadership teams and groups seeking stronger communication,
                trust, and alignment as they work through growth or transition.
              </Typography>
            </Motion>

            {/* Organizational Development & Change */}
            <Motion
              as="div"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <Typography variant="heading-4" as="h3">
                Organizational Development & Change
              </Typography>
              <Typography variant="body" as="p">
                For organizations ready to build the leadership capacity,
                systems, and practices needed to navigate meaningful change.
              </Typography>
            </Motion>
          </div>
        </div>

        {/* CTA Button */}
        <Motion
          as="div"
          className="mt-16 md:mt-24 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          <Button variant="primary" size="md" href="/services">
            Explore What We Do
          </Button>
        </Motion>
      </div>
    </section>
  )
}
