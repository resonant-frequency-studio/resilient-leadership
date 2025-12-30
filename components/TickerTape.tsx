'use client'

import { motion } from 'framer-motion'
import React from 'react'

export interface TickerTapeProps {
  children: React.ReactNode
  className?: string
}

// Building SVG placeholder
const BuildingIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="120"
    height="40"
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="10" y="20" width="20" height="20" fill="currentColor" />
    <rect x="40" y="10" width="20" height="30" fill="currentColor" />
    <rect x="70" y="15" width="20" height="25" fill="currentColor" />
    <rect x="100" y="5" width="20" height="35" fill="currentColor" />
  </svg>
)

export default function TickerTape({ children, className }: TickerTapeProps) {
  // Create duplicate items for seamless loop
  const items = React.Children.toArray(children)
  const duplicatedItems = [...items, ...items, ...items]

  return (
    <div className={className}>
      <div className="overflow-hidden">
        <motion.div
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
        </motion.div>
      </div>
    </div>
  )
}

// Default placeholder component for logos
export function LogoPlaceholder({ className }: { className?: string }) {
  return (
    <div className="flex items-center justify-center h-12 text-foreground-dark opacity-60">
      <BuildingIcon className={className || 'w-24 h-8'} />
    </div>
  )
}
