import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Determines the Articles link based on the NEXT_PUBLIC_ENV environment variable.
 * Returns production URL for production environment, staging URL otherwise.
 * Defaults to staging URL if environment variable is not set.
 */
export function getArticlesLink(): string {
  const env = process.env.NEXT_PUBLIC_ENV || 'development'

  switch (env) {
    case 'production':
      return 'https://articles.resilientleadership.us'
    case 'staging':
      return 'https://staging-articles.resilientleadership.us'
    default:
      // development or any other value defaults to staging
      return 'https://staging-articles.resilientleadership.us'
  }
}
