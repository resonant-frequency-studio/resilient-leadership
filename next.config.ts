import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/executive-coaching',
        destination: '/services/executive-coaching',
        permanent: true,
      },
      {
        source: '/team-coaching',
        destination: '/services/team-coaching',
        permanent: true,
      },
      {
        source: '/360-feedback',
        destination: '/services/360-feedback',
        permanent: true,
      },
      {
        source: '/organization-development',
        destination: '/services/change-management',
        permanent: true,
      },
      {
        source: '/surveys-assessments',
        destination: '/services/surveys-assessments',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
