import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Typography from '../Typography'

const meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const FontFamilyDemo = () => (
  <div className="space-y-8">
    <div>
      <Typography variant="heading-2" as="h1" className="mb-4">
        Typography System
      </Typography>
      <Typography
        variant="body-large"
        as="p"
        className="mb-8 text-foreground-dark/80"
      >
        The typography system uses two font families: Cormorant Garamond for
        headings and Inter for body text. All typography variants are available
        through the Typography component.
      </Typography>
    </div>

    <div className="space-y-6">
      <Typography variant="heading-3" as="h2">
        Font Families
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-secondary rounded-lg">
          <Typography variant="heading-4" as="h3" className="mb-2">
            Cormorant Garamond
          </Typography>
          <Typography
            variant="body-small"
            as="p"
            className="mb-4 text-foreground-dark/70"
          >
            Display / Heading Font
          </Typography>
          <div className="space-y-2">
            <Typography variant="heading-1" as="p">
              Heading Sample
            </Typography>
            <Typography variant="heading-3" as="p">
              Medium Weight Sample
            </Typography>
            <Typography variant="quote" as="p">
              Italic Quote Sample
            </Typography>
          </div>
          <div className="mt-4 pt-4 border-t border-foreground-dark/10">
            <Typography variant="caption" as="p" className="font-mono">
              Weights: 400, 500
              <br />
              Styles: normal, italic
              <br />
              Variable: --font-heading
            </Typography>
          </div>
        </div>

        <div className="p-6 bg-secondary rounded-lg">
          <Typography variant="heading-4" as="h3" className="mb-2">
            Inter
          </Typography>
          <Typography
            variant="body-small"
            as="p"
            className="mb-4 text-foreground-dark/70"
          >
            Body / UI Font
          </Typography>
          <div className="space-y-2">
            <Typography variant="body-large" as="p">
              Body Large Sample
            </Typography>
            <Typography variant="body" as="p">
              Regular Body Text Sample
            </Typography>
            <Typography variant="body-small" as="p">
              Body Small Sample
            </Typography>
            <Typography variant="nav" as="p">
              Navigation Text Sample
            </Typography>
          </div>
          <div className="mt-4 pt-4 border-t border-foreground-dark/10">
            <Typography variant="caption" as="p" className="font-mono">
              Weights: 400, 500, 600
              <br />
              Variable: --font-body
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const FontFamilies: Story = {
  render: () => <FontFamilyDemo />,
}

const HeadingScale = () => (
  <div className="space-y-8">
    <div>
      <Typography variant="heading-2" as="h1" className="mb-4">
        Heading Scale
      </Typography>
      <Typography
        variant="body"
        as="p"
        className="mb-8 text-foreground-dark/80"
      >
        Six heading levels provide hierarchical structure. All headings use
        Cormorant Garamond with responsive font sizes.
      </Typography>
    </div>

    <div className="space-y-6">
      <div className="p-6 bg-secondary rounded-lg">
        <div className="mb-4">
          <Typography
            variant="caption"
            as="p"
            className="text-foreground-dark/60 font-mono mb-1"
          >
            heading-1 | Font: 64px (desktop) / 36px (mobile) | Weight: 500 |
            Line Height: 1.15
          </Typography>
        </div>
        <Typography variant="heading-1" as="h1">
          Heading 1
        </Typography>
      </div>

      <div className="p-6 bg-secondary rounded-lg">
        <div className="mb-4">
          <Typography
            variant="caption"
            as="p"
            className="text-foreground-dark/60 font-mono mb-1"
          >
            heading-2 | Font: 48px (desktop) / 30px (mobile) | Weight: 500 |
            Line Height: 1.15
          </Typography>
        </div>
        <Typography variant="heading-2" as="h2">
          Heading 2
        </Typography>
      </div>

      <div className="p-6 bg-secondary rounded-lg">
        <div className="mb-4">
          <Typography
            variant="caption"
            as="p"
            className="text-foreground-dark/60 font-mono mb-1"
          >
            heading-3 | Font: 40px (desktop) / 24px (mobile) | Weight: 400 |
            Line Height: 1.15
          </Typography>
        </div>
        <Typography variant="heading-3" as="h3">
          Heading 3
        </Typography>
      </div>

      <div className="p-6 bg-secondary rounded-lg">
        <div className="mb-4">
          <Typography
            variant="caption"
            as="p"
            className="text-foreground-dark/60 font-mono mb-1"
          >
            heading-4 | Font: 32px (desktop) / 20px (mobile) | Weight: 400 |
            Line Height: 1.15
          </Typography>
        </div>
        <Typography variant="heading-4" as="h4">
          Heading 4
        </Typography>
      </div>

      <div className="p-6 bg-secondary rounded-lg">
        <div className="mb-4">
          <Typography
            variant="caption"
            as="p"
            className="text-foreground-dark/60 font-mono mb-1"
          >
            heading-5 | Font: 24px (desktop) / 18px (mobile) | Weight: 400 |
            Line Height: 1.15
          </Typography>
        </div>
        <Typography variant="heading-5" as="h5">
          Heading 5
        </Typography>
      </div>

      <div className="p-6 bg-secondary rounded-lg">
        <div className="mb-4">
          <Typography
            variant="caption"
            as="p"
            className="text-foreground-dark/60 font-mono mb-1"
          >
            heading-6 | Font: 20px (desktop) / 16px (mobile) | Weight: 400 |
            Line Height: 1.15
          </Typography>
        </div>
        <Typography variant="heading-6" as="h6">
          Heading 6
        </Typography>
      </div>
    </div>
  </div>
)

export const HeadingScaleStory: Story = {
  render: () => <HeadingScale />,
}

const BodyVariants = () => (
  <div className="space-y-8">
    <div>
      <Typography variant="heading-2" as="h1" className="mb-4">
        Body Variants
      </Typography>
      <Typography
        variant="body"
        as="p"
        className="mb-8 text-foreground-dark/80"
      >
        Body text variants provide flexibility for different content types and
        hierarchies.
      </Typography>
    </div>

    <div className="space-y-6">
      <div className="p-6 bg-secondary rounded-lg">
        <div className="mb-4">
          <Typography
            variant="caption"
            as="p"
            className="text-foreground-dark/60 font-mono mb-1"
          >
            body-large | Font: 20px (desktop) / 18px (mobile) | Weight: 400 |
            Line Height: 1.65
          </Typography>
        </div>
        <Typography variant="body-large" as="p">
          Body large text is used for emphasis or introductory paragraphs. It
          provides greater visual weight while maintaining readability across
          longer passages of text.
        </Typography>
      </div>

      <div className="p-6 bg-secondary rounded-lg">
        <div className="mb-4">
          <Typography
            variant="caption"
            as="p"
            className="text-foreground-dark/60 font-mono mb-1"
          >
            body | Font: 16px | Weight: 400 | Line Height: 1.65
          </Typography>
        </div>
        <Typography variant="body" as="p">
          Body text is the default for paragraphs and general content. It
          balances readability with density, making it suitable for extended
          reading experiences.
        </Typography>
      </div>

      <div className="p-6 bg-secondary rounded-lg">
        <div className="mb-4">
          <Typography
            variant="caption"
            as="p"
            className="text-foreground-dark/60 font-mono mb-1"
          >
            body-small | Font: 14px | Weight: 400 | Line Height: 1.65
          </Typography>
        </div>
        <Typography variant="body-small" as="p">
          Body small is used for supporting information, captions, and secondary
          content that doesn&apos;t require as much visual prominence.
        </Typography>
      </div>

      <div className="p-6 bg-secondary rounded-lg">
        <div className="mb-4">
          <Typography
            variant="caption"
            as="p"
            className="text-foreground-dark/60 font-mono mb-1"
          >
            body-muted | Font: 16px | Weight: 400 | Line Height: 1.65 | Opacity:
            70%
          </Typography>
        </div>
        <Typography variant="body-muted" as="p">
          Body muted provides de-emphasized text for secondary information,
          metadata, or supporting content.
        </Typography>
      </div>

      <div className="p-6 bg-fifth rounded-lg">
        <div className="mb-4">
          <Typography
            variant="caption"
            as="p"
            className="text-foreground-light/60 font-mono mb-1"
          >
            body-light | Font: 18px (desktop) / 16px (mobile) | Weight: 400 |
            Color: Light
          </Typography>
        </div>
        <Typography variant="body-light" as="p">
          Body light is used for text on dark backgrounds, ensuring optimal
          contrast and readability.
        </Typography>
      </div>

      <div className="p-6 bg-secondary rounded-lg">
        <div className="mb-4">
          <Typography
            variant="caption"
            as="p"
            className="text-foreground-dark/60 font-mono mb-1"
          >
            body-semibold | Font: 16px | Weight: 600 | Line Height: 1.65
          </Typography>
        </div>
        <Typography variant="body-semibold" as="p">
          Body semibold provides emphasis within body text without changing the
          font size.
        </Typography>
      </div>
    </div>
  </div>
)

export const BodyVariantsStory: Story = {
  render: () => <BodyVariants />,
}

const NavigationAndButton = () => (
  <div className="space-y-8">
    <div>
      <Typography variant="heading-2" as="h1" className="mb-4">
        Navigation & Button Typography
      </Typography>
      <Typography
        variant="body"
        as="p"
        className="mb-8 text-foreground-dark/80"
      >
        Typography variants specifically designed for navigation and interactive
        elements.
      </Typography>
    </div>

    <div className="space-y-6">
      <div className="p-6 bg-secondary rounded-lg">
        <div className="mb-4">
          <Typography
            variant="caption"
            as="p"
            className="text-foreground-dark/60 font-mono mb-1"
          >
            nav | Font: 16px | Weight: 500 | Letter Spacing: 0.04em
          </Typography>
        </div>
        <Typography variant="nav" as="p">
          Navigation Text
        </Typography>
      </div>

      <div className="p-6 bg-secondary rounded-lg">
        <div className="mb-4">
          <Typography
            variant="caption"
            as="p"
            className="text-foreground-dark/60 font-mono mb-1"
          >
            button | Font: 16px | Weight: 600 | Letter Spacing: 0.04em
          </Typography>
        </div>
        <Typography variant="button" as="p">
          Button Text
        </Typography>
      </div>

      <div className="p-6 bg-secondary rounded-lg">
        <div className="mb-4">
          <Typography
            variant="caption"
            as="p"
            className="text-foreground-dark/60 font-mono mb-1"
          >
            caption | Font: 12px | Weight: 400 | Line Height: 1.5
          </Typography>
        </div>
        <Typography variant="caption" as="p">
          Caption text for labels and metadata
        </Typography>
      </div>
    </div>
  </div>
)

export const NavigationAndButtonStory: Story = {
  render: () => <NavigationAndButton />,
}

const QuoteTypography = () => (
  <div className="space-y-8">
    <div>
      <Typography variant="heading-2" as="h1" className="mb-4">
        Quote Typography
      </Typography>
      <Typography
        variant="body"
        as="p"
        className="mb-8 text-foreground-dark/80"
      >
        Quote variant uses the heading font in italic for emphasis.
      </Typography>
    </div>

    <div className="p-6 bg-secondary rounded-lg">
      <div className="mb-4">
        <Typography
          variant="caption"
          as="p"
          className="text-foreground-dark/60 font-mono mb-1"
        >
          quote | Font: 20px | Weight: 400 | Style: Italic | Font: Cormorant
          Garamond | Line Height: 1.65
        </Typography>
      </div>
      <Typography variant="quote" as="blockquote">
        This is a quote that demonstrates the quote typography style. It uses
        the heading font family in italic to create visual distinction and
        emphasis.
      </Typography>
    </div>
  </div>
)

export const QuoteTypographyStory: Story = {
  render: () => <QuoteTypography />,
}

const TypographyCombinations = () => (
  <div className="space-y-8">
    <div>
      <Typography variant="heading-2" as="h1" className="mb-4">
        Typography Combinations
      </Typography>
      <Typography
        variant="body"
        as="p"
        className="mb-8 text-foreground-dark/80"
      >
        Examples of typography hierarchies and combinations used throughout the
        application.
      </Typography>
    </div>

    <div className="space-y-8">
      {/* Article/Content Block */}
      <div className="p-8 bg-secondary rounded-lg">
        <Typography variant="heading-3" as="h2" className="mb-4">
          Article Title
        </Typography>
        <Typography variant="body-muted" as="p" className="mb-6">
          Published on January 1, 2024
        </Typography>
        <Typography variant="body-large" as="p" className="mb-4">
          This is an introductory paragraph using body-large to draw attention
          and provide context for the article content.
        </Typography>
        <Typography variant="body" as="p" className="mb-4">
          Body paragraphs follow the introduction, providing detailed
          information and context. The typography hierarchy guides readers
          through the content naturally.
        </Typography>
        <Typography variant="body" as="p">
          Multiple paragraphs create rhythm and pacing, making longer content
          more digestible and engaging for readers.
        </Typography>
      </div>

      {/* Card Content */}
      <div className="p-6 bg-secondary rounded-lg">
        <Typography variant="heading-4" as="h3" className="mb-2">
          Card Title
        </Typography>
        <Typography
          variant="body-small"
          as="p"
          className="text-foreground-dark/70 mb-4"
        >
          Supporting information
        </Typography>
        <Typography variant="body" as="p">
          Card content uses a more compact typography scale to fit within card
          layouts while maintaining readability.
        </Typography>
      </div>

      {/* Section with Quote */}
      <div className="p-8 bg-secondary rounded-lg">
        <Typography variant="heading-3" as="h2" className="mb-6">
          Section with Quote
        </Typography>
        <Typography variant="body" as="p" className="mb-6">
          The following quote demonstrates how quotes integrate with body
          content.
        </Typography>
        <Typography variant="quote" as="blockquote" className="mb-6">
          This is an example quote that stands out from the surrounding body
          text, using the quote typography variant for visual emphasis.
        </Typography>
        <Typography variant="body" as="p">
          Content continues after the quote, maintaining the flow of the
          narrative.
        </Typography>
      </div>
    </div>
  </div>
)

export const TypographyCombinationsStory: Story = {
  render: () => <TypographyCombinations />,
}

const FontWeightScale = () => (
  <div className="space-y-8">
    <div>
      <Typography variant="heading-2" as="h1" className="mb-4">
        Font Weight Scale
      </Typography>
      <Typography
        variant="body"
        as="p"
        className="mb-8 text-foreground-dark/80"
      >
        Available font weights in the design system.
      </Typography>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 bg-secondary rounded-lg">
        <Typography variant="heading-4" as="h3" className="mb-2">
          400 (Regular)
        </Typography>
        <Typography variant="body" as="p" style={{ fontWeight: 400 }}>
          Regular weight text sample
        </Typography>
        <Typography
          variant="caption"
          as="p"
          className="mt-4 text-foreground-dark/60"
        >
          Used for: Body text, headings (heading-3 through heading-6)
        </Typography>
      </div>

      <div className="p-6 bg-secondary rounded-lg">
        <Typography variant="heading-4" as="h3" className="mb-2">
          500 (Medium)
        </Typography>
        <Typography variant="body" as="p" style={{ fontWeight: 500 }}>
          Medium weight text sample
        </Typography>
        <Typography
          variant="caption"
          as="p"
          className="mt-4 text-foreground-dark/60"
        >
          Used for: Navigation, headings (heading-1, heading-2)
        </Typography>
      </div>

      <div className="p-6 bg-secondary rounded-lg">
        <Typography variant="heading-4" as="h3" className="mb-2">
          600 (Semibold)
        </Typography>
        <Typography variant="body" as="p" style={{ fontWeight: 600 }}>
          Semibold weight text sample
        </Typography>
        <Typography
          variant="caption"
          as="p"
          className="mt-4 text-foreground-dark/60"
        >
          Used for: Buttons, emphasized text (body-semibold)
        </Typography>
      </div>
    </div>
  </div>
)

export const FontWeightScaleStory: Story = {
  render: () => <FontWeightScale />,
}
