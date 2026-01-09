import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Determines the Articles link based on the current environment.
 * Returns production URL for production domains, staging URL otherwise.
 * @param hostname - Optional hostname for testing. If not provided, uses window.location.hostname
 */
export function getArticlesLink(hostname?: string): string {
  const currentHostname =
    hostname ??
    (typeof window !== 'undefined' ? window.location.hostname : undefined)

  // Production: resilientleadership.us or articles.resilientleadership.us
  if (
    currentHostname === 'resilientleadership.us' ||
    currentHostname === 'articles.resilientleadership.us'
  ) {
    return 'https://articles.resilientleadership.us'
  }

  // Staging/local development
  return 'https://staging-articles.resilientleadership.us'
}
