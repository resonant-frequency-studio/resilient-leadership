import Typography from '@/components/Typography'
import Button from '@/components/Button'

export default function ClosingSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-width-container">
        <div className="max-w-3xl mx-auto text-center">
          <Typography variant="heading-3" as="h2" className="mb-6">
            How we work together
          </Typography>
          <div className="flex flex-col gap-4 mb-8">
            <Typography
              variant="body"
              as="p"
              className="text-foreground-dark/80"
            >
              Every engagement at Resilient Leadership is shaped by context,
              care, and attention to what is actually happening beneath the
              surface. Whether working with individuals, teams, or
              organizations, the work is designed to support clarity,
              resilience, and meaningful progress.
            </Typography>
            <Typography
              variant="body"
              as="p"
              className="text-foreground-dark/80"
            >
              If you are curious about working together, the first step is a
              conversation.
            </Typography>
          </div>
          <Button variant="primary" size="lg" href="/contact">
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  )
}
