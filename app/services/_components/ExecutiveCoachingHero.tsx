import Image from 'next/image'
import Typography from '@/components/Typography'
import Button from '@/components/Button'
import Pill from '@/components/Pill'
import Motion from '@/components/Motion'
import { ServiceHeroData } from './types'

interface ServiceHeroProps {
  data: ServiceHeroData
}

export default function ServiceHero({ data }: ServiceHeroProps) {
  return (
    <section className="pt-32 pb-16 md:py-32">
      <div className="max-width-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left side - Text content */}
          <Motion
            as="div"
            className="flex flex-col gap-8 md:gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Eyebrow and Headline */}
            <div className="flex flex-col gap-4">
              <Pill>{data.pill}</Pill>
              <Typography variant="heading-1" as="h1">
                {data.title}
              </Typography>
            </div>

            {/* Body copy */}
            {Array.isArray(data.description) ? (
              <div className="flex flex-col gap-4 md:gap-6">
                {data.description.map((paragraph, index) => (
                  <Typography key={index} variant="body-large" as="p">
                    {paragraph}
                  </Typography>
                ))}
              </div>
            ) : (
              <Typography variant="body-large" as="p">
                {data.description}
              </Typography>
            )}

            {/* CTA Button */}
            <div>
              <Button variant="primary" size="md" href={data.ctaHref}>
                {data.ctaText}
              </Button>
            </div>
          </Motion>

          {/* Right side - Image */}
          <Motion
            as="div"
            className="flex justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="relative w-full aspect-square max-w-[600px] rounded-2xl overflow-hidden">
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </Motion>
        </div>
      </div>
    </section>
  )
}
