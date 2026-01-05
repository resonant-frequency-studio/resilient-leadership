'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { ReactNode, useEffect } from 'react'

interface ReCaptchaProviderProps {
  children: ReactNode
}

export default function ReCaptchaProvider({
  children,
}: ReCaptchaProviderProps) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''

  useEffect(() => {
    // Hide the default reCAPTCHA badge
    const hideBadge = () => {
      const badge = document.querySelector('.grecaptcha-badge')
      if (badge) {
        ;(badge as HTMLElement).style.visibility = 'hidden'
        ;(badge as HTMLElement).style.display = 'none'
      }
    }

    // Try to hide immediately and on DOM changes
    hideBadge()
    const observer = new MutationObserver(hideBadge)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  if (!siteKey) {
    // If reCAPTCHA is not configured, just render children
    return <>{children}</>
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
