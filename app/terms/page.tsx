import type { Metadata } from 'next'
import Typography from '@/components/Typography'
import { Pill } from '@/components'

export const metadata: Metadata = {
  title: 'Terms of Service | Resilient Leadership',
  description:
    'Resilient Leadership terms of service. Review the terms and conditions for using our website and services. California governing law.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <section className="min-h-screen bg-main pt-32 pb-16 md:py-32">
      <div className="max-width-container">
        <div className="max-w-4xl mx-auto">
          <Pill>Legal</Pill>

          <Typography variant="heading-2" as="h1" className="mt-6 mb-8">
            Terms of Service
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
                These Terms of Service (&quot;Terms&quot;) govern your access to
                and use of the Resilient Leadership website (the
                &quot;Website&quot;) and services (the &quot;Services&quot;)
                operated by Resilient Leadership (&quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;). Please read these Terms
                carefully before using our Website or Services.
              </Typography>
            </div>

            {/* Acceptance of Terms */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Acceptance of Terms
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                By accessing or using our Website or Services, you agree to be
                bound by these Terms and our{' '}
                <a href="/privacy" className="underline hover:no-underline">
                  Privacy Policy
                </a>
                . If you do not agree to these Terms, you may not access or use
                our Website or Services.
              </Typography>
            </div>

            {/* Services Description */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Services Description
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                Resilient Leadership provides executive coaching, team coaching,
                leadership development, change management, 360-degree feedback,
                surveys and assessments, and custom engagement services. Our
                Services are designed to help leaders and teams grow through
                change with greater self-awareness, resilience, and
                effectiveness.
              </Typography>
            </div>

            {/* Use of Website */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Use of Website
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                You agree to use our Website only for lawful purposes and in
                accordance with these Terms. You agree not to:
              </Typography>

              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Use the Website in any way that violates any applicable
                    federal, state, local, or international law or regulation
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Transmit any material that is defamatory, obscene,
                    offensive, or otherwise objectionable
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Attempt to gain unauthorized access to any portion of the
                    Website or any systems or networks connected to the Website
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Use any robot, spider, or other automatic device to access
                    the Website for any purpose without our express written
                    permission
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Interfere with or disrupt the Website or servers or networks
                    connected to the Website
                  </Typography>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Contact Form
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                When you submit information through our contact form, you agree
                to:
              </Typography>

              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Provide accurate, current, and complete information
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Maintain and promptly update your information as necessary
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Not submit any false, misleading, or fraudulent information
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Not use the contact form for any unlawful or unauthorized
                    purpose
                  </Typography>
                </li>
              </ul>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80 mt-4"
              >
                By submitting our contact form, you acknowledge that you have
                read and agree to our{' '}
                <a href="/privacy" className="underline hover:no-underline">
                  Privacy Policy
                </a>
                .
              </Typography>
            </div>

            {/* Intellectual Property */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Intellectual Property Rights
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                The Website and its original content, features, and
                functionality are owned by Resilient Leadership and are
                protected by United States and international copyright,
                trademark, patent, trade secret, and other intellectual property
                laws.
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                You may not reproduce, distribute, modify, create derivative
                works of, publicly display, publicly perform, republish,
                download, store, or transmit any of the material on our Website
                without our prior written consent, except for your own personal,
                non-commercial use.
              </Typography>
            </div>

            {/* No Professional Advice */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                No Professional Advice
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                The information on this Website is provided for general
                informational purposes only and does not constitute professional
                advice. While we provide coaching and consulting services, the
                content on this Website is not intended to replace professional
                advice tailored to your specific situation.
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                Any engagement for professional services requires a separate
                agreement and will be subject to its own terms and conditions.
              </Typography>
            </div>

            {/* Limitation of Liability */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Limitation of Liability
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, RESILIENT
                LEADERSHIP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
                PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR
                ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
                RESULTING FROM YOUR USE OF OR INABILITY TO USE THE WEBSITE OR
                SERVICES.
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                TO THE FULLEST EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY OF
                RESILIENT LEADERSHIP FOR ANY CLAIM ARISING OUT OF OR RELATING TO
                THESE TERMS OR THE WEBSITE OR SERVICES SHALL NOT EXCEED THE
                AMOUNT YOU PAID TO US, IF ANY, FOR THE SERVICES IN THE TWELVE
                MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
              </Typography>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Disclaimer of Warranties
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                THE WEBSITE AND SERVICES ARE PROVIDED ON AN &quot;AS IS&quot;
                AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY
                KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                We do not warrant that the Website will be available at any
                particular time or location, that any defects or errors will be
                corrected, or that the Website is free of viruses or other
                harmful components.
              </Typography>
            </div>

            {/* Indemnification */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Indemnification
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                You agree to defend, indemnify, and hold harmless Resilient
                Leadership and its officers, directors, employees, and agents
                from and against any claims, liabilities, damages, losses, and
                expenses, including without limitation reasonable legal and
                accounting fees, arising out of or in any way connected with
                your access to or use of the Website or Services, or your
                violation of these Terms.
              </Typography>
            </div>

            {/* Governing Law */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Governing Law and Jurisdiction
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                These Terms shall be governed by and construed in accordance
                with the laws of the State of California, without regard to its
                conflict of law provisions. You agree to submit to the personal
                and exclusive jurisdiction of the courts located in Sonoma
                County, California for the resolution of any disputes arising
                out of or relating to these Terms or the Website or Services.
              </Typography>
            </div>

            {/* Changes to Terms */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Changes to Terms
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                We reserve the right to modify these Terms at any time. We will
                notify you of any changes by posting the new Terms on this page
                and updating the &quot;Last Updated&quot; date. Your continued
                use of the Website or Services after any such changes
                constitutes your acceptance of the new Terms.
              </Typography>
            </div>

            {/* Severability */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Severability
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision will be limited or eliminated to the
                minimum extent necessary so that these Terms will otherwise
                remain in full force and effect and enforceable.
              </Typography>
            </div>

            {/* Entire Agreement */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Entire Agreement
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                These Terms, together with our Privacy Policy, constitute the
                entire agreement between you and Resilient Leadership regarding
                the use of the Website and Services and supersede all prior
                agreements and understandings.
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
                If you have any questions about these Terms of Service, please
                contact us:
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
