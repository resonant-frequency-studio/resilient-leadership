import { getArticlesLink } from '../utils'

describe('getArticlesLink', () => {
  const originalEnv = process.env.NEXT_PUBLIC_ENV

  afterEach(() => {
    // Restore original environment variable after each test
    if (originalEnv) {
      process.env.NEXT_PUBLIC_ENV = originalEnv
    } else {
      delete process.env.NEXT_PUBLIC_ENV
    }
  })

  it('returns production URL when NEXT_PUBLIC_ENV is production', () => {
    process.env.NEXT_PUBLIC_ENV = 'production'
    expect(getArticlesLink()).toBe('https://articles.resilientleadership.us')
  })

  it('returns staging URL when NEXT_PUBLIC_ENV is staging', () => {
    process.env.NEXT_PUBLIC_ENV = 'staging'
    expect(getArticlesLink()).toBe(
      'https://staging-articles.resilientleadership.us'
    )
  })

  it('returns staging URL when NEXT_PUBLIC_ENV is development', () => {
    process.env.NEXT_PUBLIC_ENV = 'development'
    expect(getArticlesLink()).toBe(
      'https://staging-articles.resilientleadership.us'
    )
  })

  it('returns staging URL when NEXT_PUBLIC_ENV is not set (defaults to development)', () => {
    delete process.env.NEXT_PUBLIC_ENV
    expect(getArticlesLink()).toBe(
      'https://staging-articles.resilientleadership.us'
    )
  })

  it('returns staging URL for any other NEXT_PUBLIC_ENV value', () => {
    process.env.NEXT_PUBLIC_ENV = 'test'
    expect(getArticlesLink()).toBe(
      'https://staging-articles.resilientleadership.us'
    )
  })
})
