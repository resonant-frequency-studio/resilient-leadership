import Typography from '@/components/Typography'

export default function TeamIntroSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-width-container">
        <div className="max-w-3xl mx-auto">
          <Typography variant="heading-3" as="h2" className="mb-6">
            The team
          </Typography>
          <Typography variant="body" as="p" className="text-foreground-dark/80">
            Resilient Leadership works with a trusted network of experienced
            coaches and facilitators. Each brings depth, care, and a distinct
            perspective to the work while sharing a common commitment to
            thoughtful, human centered leadership development.
          </Typography>
        </div>
      </div>
    </section>
  )
}
