import Typography from '@/components/Typography'
import Pill from '@/components/Pill'
import Motion from '@/components/Motion'
import { ServiceWhoThisIsForData } from './types'

interface WhoThisIsForSectionProps {
  data: ServiceWhoThisIsForData
}

export default function WhoThisIsForSection({
  data,
}: WhoThisIsForSectionProps) {
  return (
    <section className="py-16 md:py-32">
      <div className="max-width-container">
        <Motion
          as="div"
          className="flex flex-col gap-4 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Pill>{data.pill}</Pill>
          <Typography variant="heading-2" as="h2">
            {data.heading}
          </Typography>
        </Motion>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left column - Framing paragraph + Recognition items */}
          <Motion
            as="div"
            className="flex flex-col gap-8 md:gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Framing paragraph */}
            {Array.isArray(data.framingParagraph) ? (
              <div className="flex flex-col gap-4 md:gap-6">
                {data.framingParagraph.map((paragraph, index) => (
                  <Typography key={index} variant="body-large" as="p">
                    {paragraph}
                  </Typography>
                ))}
              </div>
            ) : (
              <Typography variant="body-large" as="p">
                {data.framingParagraph}
              </Typography>
            )}

            {/* Recognition items */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-5" as="h3">
                This is a strong fit if you are:
              </Typography>
              <ul className="flex flex-col gap-4">
                {data.recognitionItems.map((item, index) => (
                  <Motion
                    key={index}
                    as="li"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut',
                      delay: 0.2 + index * 0.1,
                    }}
                  >
                    <Typography variant="body" as="span">
                      {item}
                    </Typography>
                  </Motion>
                ))}
              </ul>
            </div>
          </Motion>

          {/* Right column - Orientation text */}
          <Motion
            as="div"
            className="flex flex-col gap-4 md:gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            {data.orientationText.map((paragraph, index) => (
              <Typography key={index} variant="body-large" as="p">
                {paragraph}
              </Typography>
            ))}
          </Motion>
        </div>
      </div>
    </section>
  )
}
