import type { Metadata } from 'next'
import Typography from '@/components/Typography'
import Pill from '@/components/Pill'

export const metadata: Metadata = {
  title: 'Cookie Policy | Resilient Leadership',
  description:
    'Resilient Leadership cookie policy. Learn about the cookies we use, including Google reCAPTCHA, and how to manage your cookie preferences.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiePolicyPage() {
  return (
    <section className="min-h-screen bg-main pt-32 pb-16 md:py-32">
      <div className="max-width-container">
        <div className="max-w-4xl mx-auto">
          <Pill>Legal</Pill>

          <Typography variant="heading-2" as="h1" className="mt-6 mb-8">
            Cookie Policy
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
                This Cookie Policy explains how Resilient Leadership
                (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses
                cookies and similar tracking technologies on our website. By
                using our website, you consent to the use of cookies as
                described in this policy.
              </Typography>
            </div>

            {/* What Are Cookies */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                What Are Cookies?
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                Cookies are small text files that are placed on your device
                (computer, tablet, or mobile) when you visit a website. Cookies
                are widely used to make websites work more efficiently and
                provide information to the website owners.
              </Typography>
            </div>

            {/* How We Use Cookies */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                How We Use Cookies
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                We use cookies on our website for the following purposes:
              </Typography>

              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    <strong>Security and Spam Prevention:</strong> We use Google
                    reCAPTCHA v3 to protect our contact form from spam and
                    abuse. reCAPTCHA analyzes website traffic to identify
                    potential bots and fraudulent activity.
                  </Typography>
                </li>
              </ul>
            </div>

            {/* Types of Cookies We Use */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Types of Cookies We Use
              </Typography>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <Typography
                    variant="body-semibold"
                    as="p"
                    className="text-foreground-dark/80"
                  >
                    Essential/Functional Cookies
                  </Typography>

                  <Typography
                    variant="body"
                    as="p"
                    className="text-foreground-dark/80"
                  >
                    These cookies are necessary for the website to function
                    properly. They enable core functionality such as security,
                    spam prevention, and form submission.
                  </Typography>

                  <div className="bg-secondary rounded-lg p-4 mt-2">
                    <Typography
                      variant="body-small"
                      as="p"
                      className="text-foreground-dark/80 font-semibold mb-2"
                    >
                      Google reCAPTCHA v3 Cookies
                    </Typography>
                    <Typography
                      variant="body-small"
                      as="p"
                      className="text-foreground-dark/70 mb-2"
                    >
                      <strong>Purpose:</strong> Security and spam prevention
                    </Typography>
                    <Typography
                      variant="body-small"
                      as="p"
                      className="text-foreground-dark/70 mb-2"
                    >
                      <strong>Provider:</strong> Google LLC
                    </Typography>
                    <Typography
                      variant="body-small"
                      as="p"
                      className="text-foreground-dark/70 mb-2"
                    >
                      <strong>Duration:</strong> These cookies are session-based
                      and may persist for varying periods as determined by
                      Google
                    </Typography>
                    <Typography
                      variant="body-small"
                      as="p"
                      className="text-foreground-dark/70"
                    >
                      <strong>More Information:</strong>{' '}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:no-underline"
                      >
                        Google Privacy Policy
                      </a>
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Third-Party Cookies
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                Some cookies are placed by third-party services that appear on
                our website. We use Google reCAPTCHA v3, which is provided by
                Google LLC. These third parties may use cookies to collect
                information about your online activities across different
                websites.
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                Google reCAPTCHA may collect the following information:
              </Typography>

              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Device and browser information
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    IP address
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Mouse movements and touch events
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    Information about your interactions with our website
                  </Typography>
                </li>
              </ul>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80 mt-4"
              >
                For more information about how Google uses your data, please
                visit{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Google&apos;s Privacy Policy
                </a>{' '}
                and{' '}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Google&apos;s Terms of Service
                </a>
                .
              </Typography>
            </div>

            {/* Managing Cookies */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Managing Cookies
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                You can control and manage cookies in several ways:
              </Typography>

              <Typography
                variant="body-semibold"
                as="p"
                className="text-foreground-dark/80 mt-4"
              >
                Browser Settings
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                Most web browsers allow you to control cookies through their
                settings preferences. You can set your browser to refuse cookies
                or delete certain cookies. However, if you choose to disable
                cookies, some features of our website may not function properly.
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80 mt-4"
              >
                Here are links to instructions for managing cookies in popular
                browsers:
              </Typography>

              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-foreground-dark/60 mt-1">•</span>
                  <Typography
                    variant="body"
                    as="span"
                    className="text-foreground-dark/80"
                  >
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Google Chrome
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
                    <a
                      href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Mozilla Firefox
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
                    <a
                      href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Safari
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
                    <a
                      href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Microsoft Edge
                    </a>
                  </Typography>
                </li>
              </ul>

              <Typography
                variant="body-semibold"
                as="p"
                className="text-foreground-dark/80 mt-6"
              >
                Google reCAPTCHA
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                If you do not want reCAPTCHA to collect and use information
                about you, you can opt out by visiting{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Google&apos;s Privacy Policy
                </a>
                . However, please note that disabling reCAPTCHA may prevent you
                from submitting our contact form.
              </Typography>
            </div>

            {/* Do Not Track */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Do Not Track Signals
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                Some browsers incorporate a &quot;Do Not Track&quot; (DNT)
                feature that signals to websites you visit that you do not want
                to have your online activity tracked. Currently, there is no
                standard for how DNT signals should be interpreted, and we do
                not respond to DNT signals at this time.
              </Typography>
            </div>

            {/* Changes to This Cookie Policy */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-4" as="h2">
                Changes to This Cookie Policy
              </Typography>

              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/80"
              >
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any changes by posting
                the new Cookie Policy on this page and updating the &quot;Last
                Updated&quot; date.
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
                If you have any questions about this Cookie Policy, please
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
