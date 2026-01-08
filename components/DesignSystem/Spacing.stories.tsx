import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Typography from '../Typography'

const meta = {
  title: 'Design System/Spacing',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// Tailwind spacing scale (0-128 in rem)
const spacingScale = [
  { value: 0, rem: '0', px: '0px' },
  { value: 1, rem: '0.25rem', px: '4px' },
  { value: 2, rem: '0.5rem', px: '8px' },
  { value: 4, rem: '1rem', px: '16px' },
  { value: 6, rem: '1.5rem', px: '24px' },
  { value: 8, rem: '2rem', px: '32px' },
  { value: 12, rem: '3rem', px: '48px' },
  { value: 16, rem: '4rem', px: '64px' },
  { value: 20, rem: '5rem', px: '80px' },
  { value: 24, rem: '6rem', px: '96px' },
  { value: 32, rem: '8rem', px: '128px' },
  { value: 40, rem: '10rem', px: '160px' },
  { value: 48, rem: '12rem', px: '192px' },
  { value: 64, rem: '16rem', px: '256px' },
  { value: 80, rem: '20rem', px: '320px' },
  { value: 96, rem: '24rem', px: '384px' },
  { value: 128, rem: '32rem', px: '512px' },
]

const SpacingSwatch = ({
  value,
  rem,
  px,
}: {
  value: number
  rem: string
  px: string
}) => (
  <div className="flex items-center gap-4 py-2">
    <div className="w-24 shrink-0">
      <Typography variant="body-small" as="span" className="font-mono">
        {value}
      </Typography>
    </div>
    <div className="flex-1 flex items-center gap-2">
      <div
        className="bg-foreground-dark h-4 rounded"
        style={{ width: `calc(${rem} * 4)` }}
      />
      <div className="w-32 shrink-0">
        <Typography
          variant="caption"
          as="span"
          className="text-foreground-dark/60 font-mono"
        >
          {rem}
        </Typography>
      </div>
      <div className="w-20 shrink-0">
        <Typography
          variant="caption"
          as="span"
          className="text-foreground-dark/60 font-mono"
        >
          {px}
        </Typography>
      </div>
    </div>
  </div>
)

const SpacingScale = () => (
  <div className="space-y-8">
    <div>
      <Typography variant="heading-2" as="h1" className="mb-4">
        Spacing Scale
      </Typography>
      <Typography
        variant="body-large"
        as="p"
        className="mb-2 text-foreground-dark/80"
      >
        The spacing system uses Tailwind&apos;s spacing scale, based on a 4px
        (0.25rem) base unit. Each spacing value represents multiples of this
        base unit.
      </Typography>
      <Typography
        variant="body"
        as="p"
        className="mb-8 text-foreground-dark/80"
      >
        Use Tailwind utility classes like{' '}
        <code className="px-1.5 py-0.5 bg-secondary rounded text-sm">p-4</code>,{' '}
        <code className="px-1.5 py-0.5 bg-secondary rounded text-sm">
          gap-8
        </code>
        , or{' '}
        <code className="px-1.5 py-0.5 bg-secondary rounded text-sm">
          mb-12
        </code>{' '}
        to apply spacing.
      </Typography>
    </div>

    <div className="p-6 bg-secondary rounded-lg overflow-x-auto">
      <div className="min-w-[600px]">
        <div className="grid grid-cols-[100px_1fr_120px_80px] gap-4 mb-4 pb-2 border-b border-foreground-dark/10">
          <Typography variant="body-small" as="div" className="font-semibold">
            Value
          </Typography>
          <Typography variant="body-small" as="div" className="font-semibold">
            Visual
          </Typography>
          <Typography variant="body-small" as="div" className="font-semibold">
            Rem
          </Typography>
          <Typography variant="body-small" as="div" className="font-semibold">
            Pixels
          </Typography>
        </div>
        {spacingScale.map(spacing => (
          <SpacingSwatch key={spacing.value} {...spacing} />
        ))}
      </div>
    </div>
  </div>
)

export const SpacingScaleStory: Story = {
  render: () => <SpacingScale />,
}

const CommonSpacingPatterns = () => (
  <div className="space-y-8">
    <div>
      <Typography variant="heading-2" as="h1" className="mb-4">
        Common Spacing Patterns
      </Typography>
      <Typography
        variant="body"
        as="p"
        className="mb-8 text-foreground-dark/80"
      >
        Frequently used spacing patterns throughout the application.
      </Typography>
    </div>

    {/* Component Padding */}
    <div className="space-y-4">
      <Typography variant="heading-4" as="h3">
        Component Padding
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-secondary rounded-lg border border-foreground-dark/10">
          <Typography
            variant="body-small"
            as="p"
            className="mb-2 font-mono text-foreground-dark/60"
          >
            p-4 (16px)
          </Typography>
          <Typography variant="body" as="p">
            Compact padding for small components
          </Typography>
        </div>
        <div className="p-6 bg-secondary rounded-lg border border-foreground-dark/10">
          <Typography
            variant="body-small"
            as="p"
            className="mb-2 font-mono text-foreground-dark/60"
          >
            p-6 (24px)
          </Typography>
          <Typography variant="body" as="p">
            Standard padding for cards and containers
          </Typography>
        </div>
        <div className="p-8 bg-secondary rounded-lg border border-foreground-dark/10">
          <Typography
            variant="body-small"
            as="p"
            className="mb-2 font-mono text-foreground-dark/60"
          >
            p-8 (32px)
          </Typography>
          <Typography variant="body" as="p">
            Comfortable padding for larger components
          </Typography>
        </div>
        <div className="p-12 bg-secondary rounded-lg border border-foreground-dark/10">
          <Typography
            variant="body-small"
            as="p"
            className="mb-2 font-mono text-foreground-dark/60"
          >
            p-12 (48px)
          </Typography>
          <Typography variant="body" as="p">
            Generous padding for prominent sections
          </Typography>
        </div>
      </div>
    </div>

    {/* Section Spacing */}
    <div className="space-y-4">
      <Typography variant="heading-4" as="h3">
        Section Spacing (Vertical)
      </Typography>
      <div className="space-y-6">
        <div className="py-8 bg-secondary rounded-lg border border-foreground-dark/10">
          <Typography
            variant="body-small"
            as="p"
            className="mb-2 font-mono text-foreground-dark/60 text-center"
          >
            py-8 / py-16 (32px / 64px)
          </Typography>
          <Typography variant="body" as="p" className="text-center">
            Standard section padding
          </Typography>
        </div>
        <div className="py-16 bg-secondary rounded-lg border border-foreground-dark/10">
          <Typography
            variant="body-small"
            as="p"
            className="mb-2 font-mono text-foreground-dark/60 text-center"
          >
            py-16 / py-32 (64px / 128px)
          </Typography>
          <Typography variant="body" as="p" className="text-center">
            Large section padding (responsive)
          </Typography>
        </div>
      </div>
    </div>

    {/* Gap Spacing */}
    <div className="space-y-4">
      <Typography variant="heading-4" as="h3">
        Gap Spacing (Flex/Grid)
      </Typography>
      <div className="space-y-6">
        <div className="flex gap-2 p-4 bg-secondary rounded-lg border border-foreground-dark/10">
          <div className="p-3 bg-main rounded">gap-2</div>
          <div className="p-3 bg-main rounded">(8px)</div>
        </div>
        <div className="flex gap-4 p-4 bg-secondary rounded-lg border border-foreground-dark/10">
          <div className="p-3 bg-main rounded">gap-4</div>
          <div className="p-3 bg-main rounded">(16px)</div>
        </div>
        <div className="flex gap-6 p-4 bg-secondary rounded-lg border border-foreground-dark/10">
          <div className="p-3 bg-main rounded">gap-6</div>
          <div className="p-3 bg-main rounded">(24px)</div>
        </div>
        <div className="flex gap-8 p-4 bg-secondary rounded-lg border border-foreground-dark/10">
          <div className="p-3 bg-main rounded">gap-8</div>
          <div className="p-3 bg-main rounded">(32px)</div>
        </div>
        <div className="flex gap-12 p-4 bg-secondary rounded-lg border border-foreground-dark/10">
          <div className="p-3 bg-main rounded">gap-12</div>
          <div className="p-3 bg-main rounded">(48px)</div>
        </div>
      </div>
    </div>

    {/* Margin Patterns */}
    <div className="space-y-4">
      <Typography variant="heading-4" as="h3">
        Margin Patterns
      </Typography>
      <div className="space-y-6">
        <div className="bg-secondary rounded-lg border border-foreground-dark/10">
          <div className="p-4 mb-4 bg-main rounded">
            <Typography
              variant="body-small"
              as="p"
              className="font-mono text-foreground-dark/60 mb-1"
            >
              mb-4 (16px)
            </Typography>
            <Typography variant="body" as="p">
              Standard margin bottom
            </Typography>
          </div>
          <div className="p-4">
            <Typography
              variant="body"
              as="p"
              className="text-foreground-dark/60"
            >
              Following content
            </Typography>
          </div>
        </div>
        <div className="bg-secondary rounded-lg border border-foreground-dark/10">
          <div className="p-4 mb-8 bg-main rounded">
            <Typography
              variant="body-small"
              as="p"
              className="font-mono text-foreground-dark/60 mb-1"
            >
              mb-8 (32px)
            </Typography>
            <Typography variant="body" as="p">
              Larger margin bottom for section separation
            </Typography>
          </div>
          <div className="p-4">
            <Typography
              variant="body"
              as="p"
              className="text-foreground-dark/60"
            >
              Following content
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const CommonSpacingPatternsStory: Story = {
  render: () => <CommonSpacingPatterns />,
}

const ContainerSpacing = () => (
  <div className="space-y-8">
    <div>
      <Typography variant="heading-2" as="h1" className="mb-4">
        Container Spacing
      </Typography>
      <Typography
        variant="body"
        as="p"
        className="mb-8 text-foreground-dark/80"
      >
        The max-width container uses responsive horizontal padding for
        consistent content alignment.
      </Typography>
    </div>

    <div className="space-y-6">
      <div className="bg-secondary rounded-lg p-6">
        <Typography variant="heading-4" as="h3" className="mb-4">
          Max-Width Container
        </Typography>
        <div className="space-y-4">
          <div>
            <Typography
              variant="body-small"
              as="p"
              className="mb-2 font-mono text-foreground-dark/60"
            >
              Mobile (&lt; 1280px): padding-left: 16px, padding-right: 16px
            </Typography>
            <div className="max-width-container bg-main p-6 rounded border border-foreground-dark/10">
              <Typography variant="body" as="p">
                Content with mobile padding (16px on each side)
              </Typography>
            </div>
          </div>
          <div>
            <Typography
              variant="body-small"
              as="p"
              className="mb-2 font-mono text-foreground-dark/60"
            >
              Desktop (≥ 1280px): padding-left: 24px, padding-right: 24px
            </Typography>
            <div className="max-width-container bg-main p-6 rounded border border-foreground-dark/10">
              <Typography variant="body" as="p">
                Content with desktop padding (24px on each side)
              </Typography>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-foreground-dark/10">
          <Typography
            variant="body-small"
            as="p"
            className="mb-2 font-semibold"
          >
            Container Properties:
          </Typography>
          <ul className="space-y-1">
            <li>
              <Typography
                variant="body-small"
                as="span"
                className="font-mono text-foreground-dark/60"
              >
                max-width: 1728px
              </Typography>
            </li>
            <li>
              <Typography
                variant="body-small"
                as="span"
                className="font-mono text-foreground-dark/60"
              >
                margin-left: auto, margin-right: auto
              </Typography>
            </li>
            <li>
              <Typography
                variant="body-small"
                as="span"
                className="font-mono text-foreground-dark/60"
              >
                padding-left/right: 16px (mobile) / 24px (desktop)
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export const ContainerSpacingStory: Story = {
  render: () => <ContainerSpacing />,
}

const ResponsiveSpacing = () => (
  <div className="space-y-8">
    <div>
      <Typography variant="heading-2" as="h1" className="mb-4">
        Responsive Spacing
      </Typography>
      <Typography
        variant="body"
        as="p"
        className="mb-8 text-foreground-dark/80"
      >
        Spacing can be adjusted responsively using Tailwind&apos;s breakpoint
        prefixes.
      </Typography>
    </div>

    <div className="space-y-6">
      <div className="bg-secondary rounded-lg p-6 border border-foreground-dark/10">
        <Typography variant="heading-4" as="h3" className="mb-4">
          Responsive Padding Example
        </Typography>
        <div className="bg-main p-4 md:p-8 lg:p-12 rounded">
          <Typography
            variant="body-small"
            as="p"
            className="mb-2 font-mono text-foreground-dark/60"
          >
            p-4 md:p-8 lg:p-12
          </Typography>
          <Typography variant="body" as="p">
            This element has different padding at different breakpoints:
            <br />
            Mobile: 16px (p-4)
            <br />
            Tablet (md): 32px (p-8)
            <br />
            Desktop (lg): 48px (p-12)
          </Typography>
        </div>
      </div>

      <div className="bg-secondary rounded-lg p-6 border border-foreground-dark/10">
        <Typography variant="heading-4" as="h3" className="mb-4">
          Responsive Gap Example
        </Typography>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
          <div className="p-4 bg-main rounded">
            <Typography
              variant="caption"
              as="p"
              className="font-mono text-foreground-dark/60"
            >
              gap-4 md:gap-8 lg:gap-12
            </Typography>
          </div>
          <div className="p-4 bg-main rounded">
            <Typography
              variant="caption"
              as="p"
              className="font-mono text-foreground-dark/60"
            >
              16px / 32px / 48px
            </Typography>
          </div>
          <div className="p-4 bg-main rounded">
            <Typography
              variant="caption"
              as="p"
              className="font-mono text-foreground-dark/60"
            >
              Responsive
            </Typography>
          </div>
        </div>
      </div>

      <div className="bg-secondary rounded-lg p-6 border border-foreground-dark/10">
        <Typography variant="heading-4" as="h3" className="mb-4">
          Responsive Margin Example
        </Typography>
        <div className="space-y-4">
          <div className="bg-main p-4 mb-4 md:mb-8 lg:mb-12 rounded">
            <Typography
              variant="body-small"
              as="p"
              className="font-mono text-foreground-dark/60 mb-1"
            >
              mb-4 md:mb-8 lg:mb-12
            </Typography>
            <Typography variant="body" as="p">
              Element with responsive bottom margin
            </Typography>
          </div>
          <div className="bg-main p-4 rounded">
            <Typography
              variant="body"
              as="p"
              className="text-foreground-dark/60"
            >
              Following content
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const ResponsiveSpacingStory: Story = {
  render: () => <ResponsiveSpacing />,
}
