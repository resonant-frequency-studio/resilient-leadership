import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/providers/SmoothScrollProvider'
import ReCaptchaProvider from '@/providers/ReCaptchaProvider'
import { Footer, Header } from '@/components'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Resilient Leadership',
  description:
    'Executive coaching, team coaching, and leadership development for leaders who are navigating complexity, responsibility, and change.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable}`}
    >
      <body className={inter.className}>
        <ReCaptchaProvider>
          <SmoothScrollProvider />
          <Header />
          <main className="min-h-screen bg-main">{children}</main>
          <Footer />
        </ReCaptchaProvider>
      </body>
    </html>
  )
}
