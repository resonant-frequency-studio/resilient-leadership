// Types for reusable service page components

export interface ServiceHeroData {
  pill: string
  title: string
  description: string | string[]
  imageSrc: string
  imageAlt: string
  ctaText: string
  ctaHref: string
}

export interface MomentData {
  title: string
  description: string
}

export interface ServiceWhenUsefulData {
  pill: string
  heading: string
  intro1: string
  intro2: string
  moments: MomentData[]
  closing?: string
}

export interface PhaseData {
  label: string
  line1: string
  line2?: string
}

export interface ServiceWhatWorkFeelsLikeData {
  heading: string
  phases: PhaseData[]
  imageSrc: string
  imageAlt: string
}

export interface ApproachData {
  title: string
  description: string
}

export interface ServiceCoachingApproachData {
  pill: string
  heading: string
  approaches: ApproachData[]
}

export interface ServiceOutcomesData {
  pill: string
  heading: string
  outcomes: string[]
}

export interface ServiceWhoThisIsForData {
  pill: string
  heading: string
  framingParagraph: string | string[]
  recognitionItems: string[]
  orientationText: string[]
}

export interface ServiceAboutCharleneData {
  heading: string
  description: string | string[]
  ctaText: string
  ctaHref: string
  imageSrc: string
  imageAlt: string
}

export interface ServicePageData {
  hero: ServiceHeroData
  whenUseful: ServiceWhenUsefulData
  whatWorkFeelsLike: ServiceWhatWorkFeelsLikeData
  coachingApproach: ServiceCoachingApproachData
  outcomes: ServiceOutcomesData
  whoThisIsFor: ServiceWhoThisIsForData
  aboutCharlene: ServiceAboutCharleneData
}
