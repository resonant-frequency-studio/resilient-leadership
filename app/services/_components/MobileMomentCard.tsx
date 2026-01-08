import Image from 'next/image'
import Typography from '@/components/Typography'
import Motion from '@/components/Motion'

interface MobileMomentCardProps {
  title: string
  description: string
  image: string
  index: number
}

export default function MobileMomentCard({
  title,
  description,
  image,
  index,
}: MobileMomentCardProps) {
  return (
    <Motion
      as="div"
      className="bg-main rounded-2xl overflow-hidden shadow-lg w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay: 1 + index * 0.1,
      }}
    >
      <div className="grid grid-cols-1 gap-0">
        {/* Image */}
        <div className="relative aspect-square">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4">
          <Typography variant="heading-4" as="h3">
            {title}
          </Typography>

          <Typography variant="body" as="p">
            {description}
          </Typography>
        </div>
      </div>
    </Motion>
  )
}
