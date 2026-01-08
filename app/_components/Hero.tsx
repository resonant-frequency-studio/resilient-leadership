import Image from 'next/image'
import Button from '@/components/Button'
import Typography from '@/components/Typography'
import Pill from '@/components/Pill'
import TickerTape from '@/components/TickerTape'
import { ArrowRight } from '@/components/icons/ArrowRight'
import Motion from '@/components/Motion'

const clientLogos = [
  '/logos/Capital_One_logo.svg',
  '/logos/Google_2015_logo.svg',
  '/logos/NASA_Worm_logo.svg',
  '/logos/GeneDx_logo.svg',
  '/logos/NVTA_BIG.svg',
  '/logos/heron-foundation.svg',
]

export default function Hero() {
  const logos = clientLogos.map((logoPath, index) => (
    <div
      key={index}
      className="flex items-center justify-center h-12 px-4 opacity-60 hover:opacity-100 transition-opacity"
    >
      <Image
        src={logoPath}
        alt=""
        width={120}
        height={48}
        className="h-full w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
        style={{ maxWidth: '150px' }}
      />
    </div>
  ))

  return (
    <section className="pt-32 pb-16 md:py-32">
      <div className="max-width-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-8 md:gap-12">
            {/* Main heading */}
            <Motion
              as="div"
              className="space-y-2 md:space-y-3 lg:mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
            >
              <Typography variant="heading-1" as="h1">
                Lead with clarity.
                <br />
                Grow with resilience.
              </Typography>
            </Motion>

            {/* Description paragraph */}
            <Motion
              as="div"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
            >
              <Typography variant="body-large" as="p" className="max-w-xl">
                Executive coaching for leaders who are navigating complexity,
                responsibility, and change and want to lead with courage,
                wisdom, and steadiness.
              </Typography>
            </Motion>

            {/* CTA Buttons */}
            <Motion
              as="div"
              className="flex flex-col items-center sm:items-start sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
            >
              <Button variant="primary" size="md" href="/contact">
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                size="md"
                href="/services"
                icon={<ArrowRight />}
                iconPosition="right"
              >
                Explore What We Do
              </Button>
            </Motion>
          </div>

          {/* Right side - Image + Client Logos Widget */}
          <div className="flex flex-col gap-8 md:gap-12">
            <div className="flex justify-end">
              <Motion
                as="div"
                className="heroMask relative aspect-square overflow-hidden size-full mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <Image
                  src="/charlene-primary.webp"
                  alt="Charlene Wilson"
                  fill
                  className="object-cover"
                  priority
                />
              </Motion>
            </div>

            {/* Client Logos Widget */}
            <Motion
              as="div"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              className="flex flex-col gap-4"
            >
              <Pill>Clients we work with</Pill>
              <Typography variant="body-muted" as="p" className="text-sm">
                Leaders and organizations across technology, healthcare,
                finance, and professional services.
              </Typography>
              <TickerTape>{logos}</TickerTape>
            </Motion>
          </div>
        </div>
      </div>
    </section>
  )
}
