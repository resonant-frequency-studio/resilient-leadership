'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Typography from '@/components/Typography'
import Pill from '@/components/Pill'
import { ServiceCoachingApproachData } from './types'

interface CoachingApproachSectionProps {
  data: ServiceCoachingApproachData
}

// Define block styles with varying colors for masonry effect
// Colors are assigned based on index to create visual variety
const blockStyles = [
  {
    // First block - secondary color (for contrast with bg-main section)
    bgColor: 'bg-secondary',
    textColor: 'text-foreground-dark',
    descriptionColor: 'text-foreground-dark/80',
    isImage: false,
  },
  {
    // Second block - third color
    bgColor: 'bg-third',
    textColor: 'text-foreground-dark',
    descriptionColor: 'text-foreground-dark/80',
    isImage: false,
  },
  {
    // Third block - fourth color
    bgColor: 'bg-fourth',
    textColor: 'text-foreground-dark',
    descriptionColor: 'text-foreground-dark/80',
    isImage: false,
  },
  {
    // Fourth block - black color (always used)
    bgColor: 'bg-fifth',
    textColor: 'text-foreground-light',
    descriptionColor: 'text-foreground-light/90',
    isImage: false,
  },
  {
    // Fifth block - image background (always used)
    bgColor: '',
    textColor: 'text-foreground-light',
    descriptionColor: 'text-foreground-light/90',
    isImage: true,
  },
]

export default function CoachingApproachSection({
  data,
}: CoachingApproachSectionProps) {
  return (
    <section className="bg-main py-16 md:py-[120px]">
      <div className="max-width-container">
        <motion.div
          className="flex flex-col gap-4 mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Pill>{data.pill}</Pill>
          <Typography variant="heading-2" as="h2">
            {data.heading}
          </Typography>
        </motion.div>

        {/* Masonry grid - 3 columns on md-xl, 5 columns on xl+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {(() => {
            // Manually arrange blocks with varying sizes to prevent text alignment
            // Blocks span 1-3 columns with varying heights
            // Text blocks (approach, black, image) should never be directly above/below each other

            const items: Array<
              | {
                  type: 'approach'
                  approach: (typeof data.approaches)[0]
                  index: number
                  styleIndex: number
                  colSpan: string
                  minHeight: string
                }
              | {
                  type: 'filler'
                  index: number
                  colSpan: string
                  bgColor: string
                  minHeight: string
                }
              | {
                  type: 'image'
                  index: number
                  colSpan: string
                  minHeight: string
                  approach?: (typeof data.approaches)[0]
                }
            > =
              data.approaches.length === 3
                ? [
                    // 3-block layout: 2 approach blocks + black + image = 4 text blocks
                    // Row 1: approach0 (md:2/3 cols, xl:2/5 cols) | empty (md:1/3, xl:1/5) | empty (md:1/3, xl:1/5) | black (md:1/3, xl:1/5)
                    {
                      type: 'approach',
                      approach: data.approaches[0],
                      index: 0,
                      styleIndex: 0, // bg-secondary
                      colSpan: 'md:col-span-2 xl:col-span-2',
                      minHeight: 'min-h-[180px] md:min-h-[280px]',
                    },
                    {
                      type: 'filler',
                      index: 0,
                      colSpan: 'md:col-span-1 xl:col-span-1',
                      bgColor: 'bg-third',
                      minHeight: 'min-h-[140px] md:min-h-[200px]',
                    },
                    {
                      type: 'filler',
                      index: 1,
                      colSpan: 'md:col-span-1 xl:col-span-1',
                      bgColor: 'bg-fourth',
                      minHeight: 'min-h-[160px] md:min-h-[240px]',
                    },
                    {
                      type: 'approach',
                      approach: data.approaches[1],
                      index: 1,
                      styleIndex: 3, // bg-fifth (black) - always present
                      colSpan: 'md:col-span-1 xl:col-span-1',
                      minHeight: 'min-h-[180px] md:min-h-[280px]',
                    },
                    // Row 2: empty (md:1/3, xl:1/5) | approach2 (md:2/3, xl:2/5) | image (md:3/3, xl:2/5)
                    {
                      type: 'filler',
                      index: 2,
                      colSpan: 'md:col-span-1 xl:col-span-1',
                      bgColor: 'bg-fourth',
                      minHeight: 'min-h-[140px] md:min-h-[200px]',
                    },
                    {
                      type: 'approach',
                      approach: data.approaches[2],
                      index: 2,
                      styleIndex: 1, // bg-third
                      colSpan: 'md:col-span-2 xl:col-span-2',
                      minHeight: 'min-h-[180px] md:min-h-[280px]',
                    },
                    {
                      type: 'image',
                      index: 3,
                      colSpan: 'md:col-span-3 xl:col-span-2',
                      minHeight: 'min-h-[180px] md:min-h-[280px]',
                    },
                  ]
                : [
                    // 4-block layout: 2 approach blocks + black + image = 4 text blocks
                    // Row 1: approach0 (md:3/3, xl:3/5) | black (md:1/3, xl:1/5) | empty (md:1/3, xl:1/5)
                    {
                      type: 'approach',
                      approach: data.approaches[0],
                      index: 0,
                      styleIndex: 0, // bg-secondary
                      colSpan: 'md:col-span-3 xl:col-span-3',
                      minHeight: 'min-h-[180px] md:min-h-[280px]',
                    },
                    {
                      type: 'approach',
                      approach: data.approaches[1],
                      index: 1,
                      styleIndex: 3, // bg-fifth (black) - always present
                      colSpan: 'md:col-span-1 xl:col-span-1',
                      minHeight: 'min-h-[180px] md:min-h-[280px]',
                    },
                    {
                      type: 'filler',
                      index: 0,
                      colSpan: 'md:col-span-1 xl:col-span-1',
                      bgColor: 'bg-third',
                      minHeight: 'min-h-[140px] md:min-h-[200px]',
                    },
                    // Row 2: empty (md:1/3, xl:1/5) | approach2 (md:2/3, xl:2/5) | image (md:3/3, xl:2/5)
                    {
                      type: 'filler',
                      index: 1,
                      colSpan: 'md:col-span-1 xl:col-span-1',
                      bgColor: 'bg-fourth',
                      minHeight: 'min-h-[160px] md:min-h-[240px]',
                    },
                    {
                      type: 'approach',
                      approach: data.approaches[2],
                      index: 2,
                      styleIndex: 1, // bg-third
                      colSpan: 'md:col-span-2 xl:col-span-2',
                      minHeight: 'min-h-[180px] md:min-h-[280px]',
                    },
                    {
                      type: 'image',
                      index: 3,
                      colSpan: 'md:col-span-3 xl:col-span-2',
                      minHeight: 'min-h-[180px] md:min-h-[280px]',
                      approach: data.approaches[3],
                    },
                  ]

            return items.map((item, itemIndex) => {
              if (item.type === 'filler') {
                return (
                  <motion.div
                    key={`filler-${item.index}`}
                    className={`hidden md:block ${item.colSpan} ${item.bgColor} ${item.minHeight} rounded-2xl`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut',
                      delay: (itemIndex + 1) * 0.1,
                    }}
                  />
                )
              }

              if (item.type === 'image') {
                return (
                  <motion.div
                    key={`image-${item.index}`}
                    className={`${item.colSpan} ${item.minHeight} rounded-2xl relative overflow-hidden flex flex-col`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut',
                      delay: itemIndex * 0.1,
                    }}
                  >
                    {/* Background image with overlay */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src="/cta-background.webp"
                        alt=""
                        fill
                        className="object-cover blur-[2px]"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundColor:
                            'color-mix(in srgb, #191818 32%, transparent)',
                        }}
                      />
                    </div>
                    {/* Text content overlay if approach is provided */}
                    {item.approach && (
                      <div className="relative z-10 p-6 md:p-8 flex flex-col gap-4 h-full">
                        <Typography
                          variant="heading-4"
                          as="h3"
                          className="text-foreground-light"
                        >
                          {item.approach.title}
                        </Typography>
                        <Typography
                          variant="body"
                          as="p"
                          className="text-foreground-light/90"
                        >
                          {item.approach.description}
                        </Typography>
                      </div>
                    )}
                  </motion.div>
                )
              }

              // Approach blocks with text
              const style = blockStyles[item.styleIndex]

              return (
                <motion.div
                  key={item.approach.title}
                  className={`${item.colSpan} ${style.bgColor} ${item.minHeight} rounded-2xl p-6 md:p-8 flex flex-col gap-4`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: itemIndex * 0.1,
                  }}
                >
                  <Typography
                    variant="heading-4"
                    as="h3"
                    className={style.textColor}
                  >
                    {item.approach.title}
                  </Typography>
                  <Typography
                    variant="body"
                    as="p"
                    className={style.descriptionColor}
                  >
                    {item.approach.description}
                  </Typography>
                </motion.div>
              )
            })
          })()}
        </div>
      </div>
    </section>
  )
}
