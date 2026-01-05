import type { Metadata } from 'next'
import Typography from '@/components/Typography'
import Pill from '@/components/Pill'

export const metadata: Metadata = {
  title: 'Privacy Policy | Resilient Leadership',
  description:
    'Resilient Leadership privacy policy. Learn how we collect, use, and protect your personal information. CCPA compliant privacy practices for California residents.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-main pt-32 pb-16 md:py-32">
      <div className="max-width-container">
        <div className="max-w-4xl mx-auto">
          <Pill>Legal</Pill>

          <Typography variant="heading-2" as="h1" className="mt-6 mb-8">
            Privacy Policy
          </Typography>

          <Typography
            variant="body-small"
            as="p"
            className="text-foreground-dark/60 mb-12"
          >
            Last Updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Typography>

          <div className="flex flex-col gap-8 md:gap-12">
            {/* Introduction */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                Resilient Leadership (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;) is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or use our
                contact form. Please read this privacy policy carefully. If you
                do not agree with the terms of this privacy policy, please do
                not access the site.
              </Typography>
            </div>

            {/* Information We Collect */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Information We Collect
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                We collect information that you provide directly to us through
                our contact form. The types of personal information we may
                collect include:
              </Typography>

              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    <strong>Name:</strong> Your full name as provided in the
                    contact form
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    <strong>Email Address:</strong> Your email address for
                    communication purposes
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    <strong>Topic:</strong> The subject matter of your inquiry
                    (e.g., Executive Coaching, Team Coaching, etc.)
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    <strong>Message:</strong> Any additional information you
                    choose to provide in your message
                  </Typography>
                </li>
              </ul>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80 mt-4"
              >
                Additionally, we automatically collect certain information when
                you visit our website through cookies and similar tracking
                technologies, including information collected through Google
                reCAPTCHA v3. For more details, please see our{' '}
                <a href="/cookies" className="underline hover:no-underline">
                  Cookie Policy
                </a>
                .
              </Typography>
            </div>

            {/* How We Use Your Information */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                How We Use Your Information
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                We use the information we collect to:
              </Typography>

              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Respond to your inquiries and provide information about our
                    services
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Communicate with you via email regarding your inquiries
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Protect against spam and fraudulent activity through
                    reCAPTCHA verification
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Improve our website and services
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Comply with legal obligations
                  </Typography>
                </li>
              </ul>
            </div>

            {/* Disclosure of Your Information */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Disclosure of Your Information
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                We may share your information with third-party service providers
                who perform services on our behalf:
              </Typography>

              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    <strong>Resend:</strong> We use Resend to send and manage
                    email communications. Resend processes your email address
                    and message content to deliver emails. You can learn more
                    about Resend&apos;s privacy practices at{' '}
                    <a
                      href="https://resend.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      https://resend.com/legal/privacy-policy
                    </a>
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    <strong>Google reCAPTCHA:</strong> We use Google reCAPTCHA
                    v3 to protect against spam and abuse. Google may collect
                    information about your device and browsing behavior. You can
                    learn more about Google&apos;s privacy practices at{' '}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      https://policies.google.com/privacy
                    </a>
                  </Typography>
                </li>
              </ul>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80 mt-4"
              >
                We do not sell, rent, or trade your personal information to
                third parties for their marketing purposes.
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                We may also disclose your information if required by law or in
                response to valid requests by public authorities (e.g., a court
                or government agency).
              </Typography>
            </div>

            {/* California Privacy Rights */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                California Privacy Rights
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                If you are a California resident, you have certain rights under
                the California Consumer Privacy Act (CCPA) and the California
                Privacy Rights Act (CPRA):
              </Typography>

              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    <strong>Right to Know:</strong> You have the right to
                    request information about the categories and specific pieces
                    of personal information we have collected about you, the
                    categories of sources from which we collected it, the
                    purposes for collecting it, and the categories of third
                    parties with whom we share it.
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    <strong>Right to Delete:</strong> You have the right to
                    request deletion of your personal information, subject to
                    certain exceptions.
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    <strong>Right to Opt-Out:</strong> You have the right to
                    opt-out of the sale or sharing of your personal information.
                    We do not sell your personal information.
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    <strong>Right to Non-Discrimination:</strong> We will not
                    discriminate against you for exercising your privacy rights.
                  </Typography>
                </li>
              </ul>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80 mt-4"
              >
                To exercise these rights, please contact us at{' '}
                <a
                  href="mailto:info@resilientleadership.us"
                  className="underline hover:no-underline"
                >
                  info@resilientleadership.us
                </a>
                . We will respond to your request within 45 days, as required by
                California law. We may need to verify your identity before
                processing your request.
              </Typography>
            </div>

            {/* Data Retention */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Data Retention
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, unless a
                longer retention period is required or permitted by law. When we
                no longer need your personal information, we will securely
                delete or anonymize it.
              </Typography>
            </div>

            {/* Security */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Security
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the Internet or electronic storage
                is 100% secure, and we cannot guarantee absolute security.
              </Typography>
            </div>

            {/* Children&apos;s Privacy */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Children&apos;s Privacy
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                Our website is not intended for children under 13 years of age.
                We do not knowingly collect personal information from children
                under 13. If you believe we have collected information from a
                child under 13, please contact us immediately.
              </Typography>
            </div>

            {/* Changes to This Privacy Policy */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Changes to This Privacy Policy
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last Updated&quot; date. You
                are advised to review this Privacy Policy periodically for any
                changes.
              </Typography>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Contact Us
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                If you have any questions about this Privacy Policy or wish to
                exercise your privacy rights, please contact us:
              </Typography>

              <div className="flex flex-col gap-2 mt-2">
                <Typography
                  variant="body"
                  as="p"
                  className="text-foreground-dark/80"
                >
                  <strong>Resilient Leadership</strong>
                </Typography>
                <Typography
                  variant="body"
                  as="p"
                  className="text-foreground-dark/80"
                >
                  2743 Treetops Way
                </Typography>
                <Typography
                  variant="body"
                  as="p"
                  className="text-foreground-dark/80"
                >
                  Santa Rosa, CA 95404
                </Typography>
                <Typography
                  variant="body"
                  as="p"
                  className="text-foreground-dark/80"
                >
                  Email:{' '}
                  <a
                    href="mailto:info@resilientleadership.us"
                    className="underline hover:no-underline"
                  >
                    info@resilientleadership.us
                  </a>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
