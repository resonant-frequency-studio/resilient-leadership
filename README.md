# Resilient Leadership

A modern, responsive website for Resilient Leadership, an executive coaching and leadership development consultancy. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS, featuring smooth animations, accessibility-first design, and comprehensive service pages.

## 🚀 Features

### Core Functionality

- **Multi-page website** with SEO-optimized metadata for all pages
- **Contact form** with Google reCAPTCHA v3 spam protection and email integration via Resend API
- **Service pages** for 6 different coaching and development services:
  - Executive Coaching
  - Team Coaching
  - Change Management
  - 360° Feedback
  - Surveys & Assessments
  - Custom Engagements
- **Legal pages** (Privacy Policy, Cookie Policy, Terms of Service) with California CCPA/CPRA compliance
- **Custom 404 page** with navigation links
- **Permanent URL redirects** for legacy service URLs

### User Experience

- **Smooth scroll animations** using Framer Motion and Lenis
- **Responsive design** with mobile-first approach
- **Accessible navigation** with mobile menu supporting nested service links
- **Animated logo ticker** displaying client logos
- **Scroll-triggered animations** for enhanced visual storytelling
- **Client component optimization** with abstracted Motion wrapper to minimize bundle size

### Developer Experience

- **Component library** with Storybook integration
- **Comprehensive test coverage** using Jest and React Testing Library (206 tests)
- **TypeScript** for type safety
- **ESLint + Prettier** for code quality and formatting
- **Modular architecture** with reusable components and shared types

## 🛠️ Tech Stack

### Core

- **Next.js 16.1.1** (App Router)
- **React 19.2.3**
- **TypeScript 5**
- **Tailwind CSS 4**

### Animations & Interactions

- **Framer Motion 12.23.26** - Scroll-triggered and interactive animations
- **Lenis 1.3.17** - Smooth scrolling

### Forms & API

- **React Google reCAPTCHA v3** - Spam protection
- **Resend 6.6.0** - Email API integration
- **Zod 4.3.4** - Schema validation

### Testing & Development

- **Jest 30.2.0** - Unit testing
- **React Testing Library** - Component testing
- **Storybook 10.1.10** - Component documentation and development
- **Playwright** - E2E testing (via Storybook)

### Fonts

- **Cormorant Garamond** - Display/heading font
- **Inter** - Body font

## 📁 Project Structure

```
resilient-leadership/
├── app/                          # Next.js App Router pages
│   ├── _components/              # Page-specific components
│   │   ├── AboutSection.tsx      # Reusable CTA section
│   │   ├── Hero.tsx              # Homepage hero with logo ticker
│   │   ├── HowLeadersWorkSection.tsx
│   │   ├── HowWeWorkSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── WhyCoachingSection.tsx
│   ├── about/                    # About page
│   │   └── _components/          # About page sections
│   ├── contact/                  # Contact page with form
│   ├── services/                 # Services pages
│   │   ├── page.tsx              # Services listing page
│   │   ├── _components/          # Reusable service page components
│   │   │   ├── ExecutiveCoachingHero.tsx
│   │   │   ├── LeadershipMoments.tsx    # Scroll-animated cards
│   │   │   ├── MomentCard.tsx
│   │   │   ├── MobileMomentCard.tsx
│   │   │   ├── CoachingApproachSection.tsx
│   │   │   ├── OutcomesSection.tsx
│   │   │   └── types.ts          # Shared TypeScript types
│   │   └── [service-name]/       # Individual service pages
│   │       ├── page.tsx
│   │       └── data.ts           # Service-specific content
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── privacy/                  # Privacy Policy page
│   ├── cookies/                  # Cookie Policy page
│   ├── terms/                    # Terms of Service page
│   ├── not-found.tsx             # Custom 404 page
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # Reusable UI components
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Select.tsx
│   ├── Textarea.tsx
│   ├── Checkbox.tsx
│   ├── Typography.tsx
│   ├── Header.tsx                # Navigation header
│   ├── Footer.tsx                # Site footer
│   ├── BookCallForm.tsx          # Contact form component
│   ├── Motion.tsx                # Framer Motion wrapper
│   ├── TickerTape.tsx            # Animated logo carousel
│   ├── Pill.tsx                  # Badge/pill component
│   └── icons/                    # SVG icon components
├── providers/                    # React context providers
│   ├── SmoothScrollProvider.tsx  # Lenis smooth scroll
│   └── ReCaptchaProvider.tsx     # reCAPTCHA v3 provider
├── lib/
│   └── utils.ts                  # Utility functions (cn, etc.)
└── public/                       # Static assets
    ├── logos/                    # Client logo SVGs
    └── *.webp, *.jpg             # Images
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd resilient-leadership
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
RESEND_API_KEY=your_resend_api_key
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## 🧩 Key Components

### Motion Component

Abstracted wrapper around Framer Motion that allows components to use animations without requiring `'use client'` directive, reducing bundle size:

```tsx
import Motion from '@/components/Motion'
;<Motion
  as="div"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</Motion>
```

### Service Page Components

Reusable components for building consistent service pages:

- `ExecutiveCoachingHero` - Hero section with service-specific content
- `WhenUsefulSection` - When the service is most valuable
- `WhatWorkFeelsLikeSection` - What to expect
- `CoachingApproachSection` - Approach and methodology
- `OutcomesSection` - Expected outcomes
- `WhoThisIsForSection` - Target audience
- `AboutSection` - Call-to-action section with Charlene intro

### Form Components

- `BookCallForm` - Full contact form with validation and reCAPTCHA
- Form fields: `Input`, `Select`, `Textarea`, `Checkbox`
- All form components include error handling and accessibility features

## 🧪 Testing

The project includes comprehensive test coverage:

- **206 tests** across 24 test suites
- Unit tests for all reusable components
- Page rendering tests for all routes
- Form validation tests
- Mock setup for Framer Motion, Next.js Image, and navigation

Run tests:

```bash
npm test
```

## 🎨 Design System

### Colors

Custom color palette defined in `app/globals.css`:

- `main` - Primary background
- `secondary` - Secondary background
- `foreground-dark` / `foreground-light` - Text colors
- `button-primary` - Primary button color
- Additional semantic colors for various UI elements

### Typography

- **Headings**: Cormorant Garamond (serif)
- **Body**: Inter (sans-serif)
- Typography component with variants: `heading-1` through `heading-4`, `body`, `body-large`, `body-small`, `nav`

### Spacing & Layout

- Consistent max-width container (`max-width-container`)
- Responsive spacing using Tailwind's spacing scale
- Mobile-first breakpoints: `sm:`, `md:`, `lg:`, `xl:`

## 🔗 Routes

### Public Pages

- `/` - Homepage
- `/about` - About page with team and philosophy
- `/services` - Services listing page
- `/services/[service-name]` - Individual service pages
- `/contact` - Contact form page
- `/privacy` - Privacy Policy (CCPA/CPRA compliant)
- `/cookies` - Cookie Policy
- `/terms` - Terms of Service

### API Routes

- `/api/contact` - POST endpoint for contact form submissions

### Redirects

Permanent (308) redirects configured in `next.config.ts`:

- `/executive-coaching` → `/services/executive-coaching`
- `/team-coaching` → `/services/team-coaching`
- `/360-feedback` → `/services/360-feedback`
- `/organization-development` → `/services/change-management`
- `/surveys-assessments` → `/services/surveys-assessments`

## 🌐 Deployment

The application is optimized for deployment on Vercel (recommended) or any Node.js hosting platform.

### Environment Variables Required:

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - Google reCAPTCHA site key
- `RECAPTCHA_SECRET_KEY` - Google reCAPTCHA secret key
- `RESEND_API_KEY` - Resend API key for email sending

### Build:

```bash
npm run build
```

## 📝 Notes

- **Server Components**: The codebase is optimized to use Next.js Server Components where possible, with client components (`'use client'`) only when needed for interactivity
- **Performance**: Images are optimized using Next.js Image component with appropriate sizing and lazy loading
- **Accessibility**: All components follow WCAG guidelines with proper ARIA labels and keyboard navigation
- **SEO**: All pages include comprehensive metadata (title, description) for search engine optimization

## 📄 License

Private project - All rights reserved
