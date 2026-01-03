import Image from 'next/image'
import Typography from '@/components/Typography'
import SocialLinks from '@/components/SocialLinks'

export default function FounderSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-width-container px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Left Column - Portrait */}
          <div className="relative aspect-3/4 w-full lg:w-[40%] mx-auto lg:mx-0">
            <Image
              src="/resilient-charlene-wilson.avif"
              alt="Charlene Wilson"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col gap-6 w-full lg:w-[60%]">
            <div>
              <Typography variant="heading-2" as="h2" className="mb-2">
                Charlene Wilson
              </Typography>
              <Typography
                variant="body-semibold"
                as="p"
                className="text-foreground-dark/80 mb-6"
              >
                Founder, Executive Coach, Facilitator
              </Typography>
            </div>

            <div className="flex flex-col gap-4">
              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                Charlene supports executive clients as they navigate strategic,
                organizational, and interpersonal challenges and turn setbacks
                into meaningful learning opportunities. She is particularly
                skilled at helping senior leaders recognize blind spots that
                quietly limit effectiveness, presence, and growth.
              </Typography>
              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                With over 20 years of experience in leadership development,
                Charlene brings depth, clarity, and steadiness to complex work.
                Her clients have included leaders from Capital One, M&T Bank,
                NAVAIR, NASA, and the Heron Foundation.
              </Typography>
              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                Charlene holds a Master of Arts in Educational Administration
                and Leadership from the University of the Pacific. Her training
                includes Ontological Design, Positive Neuroplasticity, Somatic
                Leadership, and Ego Coaching. She is an ICF certified coach.
              </Typography>
              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                She is also a 360 Degree Feedback Specialist and has conducted
                more than 2,500 interviews across a wide range of industries.
                Her work spans VP and C level leaders in public and private
                companies, nonprofit executives, and senior civil servants. She
                has coached these leaders both individually and within teams.
              </Typography>
            </div>

            {/* Pull Quote */}
            <div className="bg-secondary rounded-2xl p-6 md:p-8 mt-4">
              <Typography variant="quote" as="blockquote" className="mb-4">
                I believe deeply in the power of coaching and the change it can
                bring. There is a deeper, wiser part of ourselves waiting to
                emerge. Coaching creates the space to hear that call and the
                skills to know what to do next.
              </Typography>
            </div>

            {/* Social Links */}
            <SocialLinks
              linkedin="https://www.linkedin.com/in/charlene-e-wilson-m-a-acc-8114283"
              facebook="https://www.facebook.com/resilientleadershipcoaching"
              instagram="https://www.instagram.com/resilient.leadership.us/"
              youtube="https://www.youtube.com/@resilientleadership"
              className="mt-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
