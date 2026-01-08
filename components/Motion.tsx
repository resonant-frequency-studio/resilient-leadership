'use client'

import { motion } from 'framer-motion'
import { ComponentProps, Ref } from 'react'

type MotionElementType =
  | 'div'
  | 'section'
  | 'li'
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'

type MotionProps = Omit<ComponentProps<typeof motion.div>, 'as'> & {
  as?: MotionElementType
  ref?: Ref<HTMLElement>
}

function MotionComponent({ as = 'div', children, ref, ...props }: MotionProps) {
  const MotionElement = motion[as] as typeof motion.div

  return (
    <MotionElement ref={ref} {...props}>
      {children}
    </MotionElement>
  )
}

MotionComponent.displayName = 'Motion'

export default MotionComponent
