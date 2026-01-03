import Image from 'next/image'
import Typography from '@/components/Typography'
import SocialLinks, { SocialLinksProps } from '@/components/SocialLinks'

interface TeamMemberSectionProps {
  name: string
  title: string
  imageSrc: string
  imageAlt: string
  paragraphs: string[]
  socialLinks?: SocialLinksProps
  backgroundColor?: 'default' | 'secondary'
}

export default function TeamMemberSection({
  name,
  title,
  imageSrc,
  imageAlt,
  paragraphs,
  socialLinks,
  backgroundColor = 'default',
}: TeamMemberSectionProps) {
  const bgClass = backgroundColor === 'secondary' ? 'bg-secondary' : ''

  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <div className="max-width-container px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Left Column - Portrait */}
          <div className="relative aspect-3/4 w-full lg:w-[40%] mx-auto lg:mx-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col gap-6 w-full lg:w-[60%]">
            <div>
              <Typography variant="heading-2" as="h2" className="mb-2">
                {name}
              </Typography>
              <Typography
                variant="body-semibold"
                as="p"
                className="text-foreground-dark/80 mb-6"
              >
                {title}
              </Typography>
            </div>

            <div className="flex flex-col gap-4">
              {paragraphs.map((paragraph, index) => (
                <Typography
                  key={index}
                  variant="body"
                  as="p"
                  className="text-foreground-dark/80"
                >
                  {paragraph}
                </Typography>
              ))}
            </div>

            {/* Social Links */}
            {socialLinks && <SocialLinks {...socialLinks} className="mt-2" />}
          </div>
        </div>
      </div>
    </section>
  )
}
