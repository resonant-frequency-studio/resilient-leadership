'use client'

import React from 'react'
import Motion from './Motion'

export interface TickerTapeProps {
  children: React.ReactNode
  className?: string
}

export default function TickerTape({ children, className }: TickerTapeProps) {
  // Create duplicate items for seamless loop
  const items = React.Children.toArray(children)
  const duplicatedItems = [...items, ...items, ...items]

  return (
    <div className={className}>
      <div className="overflow-hidden">
        <Motion
          as="div"
          className="flex gap-12 items-center"
          animate={{
            x: ['0%', '-33.333%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="shrink-0">
              {item}
            </div>
          ))}
        </Motion>
      </div>
    </div>
  )
}
