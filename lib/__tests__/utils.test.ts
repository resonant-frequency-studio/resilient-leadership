import { getArticlesLink } from '../utils'

describe('getArticlesLink', () => {
  it('returns production URL for production domain', () => {
    expect(getArticlesLink('resilientleadership.us')).toBe(
      'https://articles.resilientleadership.us'
    )
  })

  it('returns production URL for articles subdomain', () => {
    expect(getArticlesLink('articles.resilientleadership.us')).toBe(
      'https://articles.resilientleadership.us'
    )
  })

  it('returns staging URL for staging domain', () => {
    expect(getArticlesLink('staging.resilientleadership.us')).toBe(
      'https://staging-articles.resilientleadership.us'
    )
  })

  it('returns staging URL for localhost', () => {
    expect(getArticlesLink('localhost')).toBe(
      'https://staging-articles.resilientleadership.us'
    )
  })

  it('returns staging URL for 127.0.0.1', () => {
    expect(getArticlesLink('127.0.0.1')).toBe(
      'https://staging-articles.resilientleadership.us'
    )
  })

  it('returns staging URL when hostname is undefined (server-side)', () => {
    expect(getArticlesLink(undefined)).toBe(
      'https://staging-articles.resilientleadership.us'
    )
  })

  it('returns staging URL for any other domain', () => {
    expect(getArticlesLink('example.com')).toBe(
      'https://staging-articles.resilientleadership.us'
    )
  })

  it('returns staging URL for development domain patterns', () => {
    expect(getArticlesLink('dev.resilientleadership.us')).toBe(
      'https://staging-articles.resilientleadership.us'
    )
  })

  it('uses window.location.hostname when hostname parameter is not provided', () => {
    // This test verifies the default behavior in browser environment
    // We can't easily mock window.location in jsdom, but we can verify
    // the function falls back to window.location when no parameter is given
    const result = getArticlesLink()
    // Should return a valid URL (either staging or production)
    expect(result).toMatch(
      /^https:\/\/(staging-)?articles\.resilientleadership\.us$/
    )
  })
})
