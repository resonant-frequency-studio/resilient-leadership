'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,

      // "soft stop" knobs:
      duration: 1.1, // try 0.9–1.4
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // nice, gentle easeOutCubic

      // optional: reduces jitter when wheel input is spiky
      // wheelMultiplier: 1,
    })

    // Expose Lenis instance to window for anchor link handling
    window.lenis = lenis

    // Handle anchor links with smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement
      if (!link) return

      const href = link.getAttribute('href')
      if (!href || !href.startsWith('#')) return

      const id = href.slice(1)
      const element = document.getElementById(id)
      if (!element) return

      e.preventDefault()

      lenis.scrollTo(element, {
        offset: -100, // Account for sticky header
        duration: 1.2,
      })
    }

    document.addEventListener('click', handleAnchorClick)

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', handleAnchorClick)
      delete window.lenis
      lenis.destroy()
    }
  }, [])

  return null
}
