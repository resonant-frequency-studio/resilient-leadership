import Typography from '@/components/Typography'
import Pill from '@/components/Pill'
import Motion from '@/components/Motion'
import { ServiceWhenUsefulData } from './types'

interface WhenUsefulSectionProps {
  data: ServiceWhenUsefulData
}

export default function WhenUsefulSection({ data }: WhenUsefulSectionProps) {
  return (
    <section className="py-16 md:py-32">
      <div className="max-width-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left column - Heading + Framing copy */}
          <Motion
            as="div"
            className="flex flex-col gap-8 md:gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex flex-col gap-4">
              <Pill>{data.pill}</Pill>
              <Typography variant="heading-2" as="h2">
                {data.heading}
              </Typography>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <Typography variant="body-large" as="p">
                {data.intro1}
              </Typography>
              <Typography variant="body-large" as="p">
                {data.intro2}
              </Typography>
            </div>
          </Motion>

          {/* Right column - 2x2 Grid of moment cards */}
          <div className="flex flex-col gap-8 md:gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {data.moments.map((moment, index) => (
                <Motion
                  key={moment.title}
                  as="div"
                  className="bg-main rounded-2xl p-6 md:p-8 flex flex-col gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: index * 0.1,
                  }}
                >
                  <Typography variant="heading-4" as="h3">
                    {moment.title}
                  </Typography>
                  <Typography variant="body" as="p">
                    {moment.description}
                  </Typography>
                </Motion>
              ))}
            </div>

            {/* Optional closing line */}
            {data.closing && (
              <Motion
                as="div"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <Typography
                  variant="body-small"
                  as="p"
                  className="text-foreground-dark/60"
                >
                  {data.closing}
                </Typography>
              </Motion>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
