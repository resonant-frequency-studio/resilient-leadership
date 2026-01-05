import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Typography from '../Typography'
import Button from '../Button'

const meta = {
  title: 'Design System/Layout',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const MaxWidthContainer = () => (
  <div className="py-8 bg-main">
    <div className="space-y-8">
      <div className="max-width-container">
        <Typography variant="heading-2" as="h1" className="mb-4">
          Max-Width Container
        </Typography>
        <Typography
          variant="body-large"
          as="p"
          className="mb-2 text-foreground-dark/80"
        >
          The{' '}
          <code className="px-1.5 py-0.5 bg-secondary rounded text-sm">
            max-width-container
          </code>{' '}
          utility provides consistent content width and responsive padding.
        </Typography>
        <Typography
          variant="body"
          as="p"
          className="mb-8 text-foreground-dark/80"
        >
          Max width: 1728px | Mobile padding: 16px | Desktop padding: 24px
        </Typography>
      </div>

      <div className="bg-fifth py-8">
        <div className="max-width-container">
          <Typography
            variant="heading-3"
            as="h2"
            className="mb-4 text-foreground-light"
          >
            Container Example
          </Typography>
          <Typography variant="body-light" as="p" className="mb-6">
            This content is constrained by the max-width container, ensuring
            optimal line length and readability across all screen sizes. The
            container centers content and applies responsive horizontal padding.
          </Typography>
          <Button variant="inverse" size="md">
            Call to Action
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export const MaxWidthContainerStory: Story = {
  render: () => <MaxWidthContainer />,
}

const GridSystems = () => (
  <div className="py-8 bg-main">
    <div className="max-width-container space-y-12">
      <div>
        <Typography variant="heading-2" as="h1" className="mb-4">
          Grid Systems
        </Typography>
        <Typography
          variant="body"
          as="p"
          className="mb-8 text-foreground-dark/80"
        >
          Responsive grid layouts used throughout the application.
        </Typography>
      </div>

      {/* Single Column */}
      <div className="space-y-4">
        <Typography variant="heading-4" as="h3">
          Single Column Layout
        </Typography>
        <div className="bg-secondary p-6 rounded-lg">
          <Typography
            variant="body-small"
            as="p"
            className="mb-4 font-mono text-foreground-dark/60"
          >
            grid grid-cols-1
          </Typography>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-main rounded">Item 1</div>
            <div className="p-4 bg-main rounded">Item 2</div>
            <div className="p-4 bg-main rounded">Item 3</div>
          </div>
        </div>
      </div>

      {/* Two Column */}
      <div className="space-y-4">
        <Typography variant="heading-4" as="h3">
          Two Column Layout
        </Typography>
        <div className="bg-secondary p-6 rounded-lg">
          <Typography
            variant="body-small"
            as="p"
            className="mb-4 font-mono text-foreground-dark/60"
          >
            grid grid-cols-1 md:grid-cols-2
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-main rounded">
              <Typography variant="heading-4" as="h4" className="mb-2">
                Column 1
              </Typography>
              <Typography variant="body" as="p">
                Left column content stacks on mobile, displays side-by-side on
                medium screens and above.
              </Typography>
            </div>
            <div className="p-6 bg-main rounded">
              <Typography variant="heading-4" as="h4" className="mb-2">
                Column 2
              </Typography>
              <Typography variant="body" as="p">
                Right column content maintains the same responsive behavior.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Three Column */}
      <div className="space-y-4">
        <Typography variant="heading-4" as="h3">
          Three Column Layout
        </Typography>
        <div className="bg-secondary p-6 rounded-lg">
          <Typography
            variant="body-small"
            as="p"
            className="mb-4 font-mono text-foreground-dark/60"
          >
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-main rounded">Item 1</div>
            <div className="p-4 bg-main rounded">Item 2</div>
            <div className="p-4 bg-main rounded">Item 3</div>
          </div>
        </div>
      </div>

      {/* Four Column */}
      <div className="space-y-4">
        <Typography variant="heading-4" as="h3">
          Four Column Layout
        </Typography>
        <div className="bg-secondary p-6 rounded-lg">
          <Typography
            variant="body-small"
            as="p"
            className="mb-4 font-mono text-foreground-dark/60"
          >
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-main rounded text-center">1</div>
            <div className="p-4 bg-main rounded text-center">2</div>
            <div className="p-4 bg-main rounded text-center">3</div>
            <div className="p-4 bg-main rounded text-center">4</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const GridSystemsStory: Story = {
  render: () => <GridSystems />,
}

const ResponsiveBreakpoints = () => (
  <div className="py-8 bg-main">
    <div className="max-width-container space-y-8">
      <div>
        <Typography variant="heading-2" as="h1" className="mb-4">
          Responsive Breakpoints
        </Typography>
        <Typography
          variant="body"
          as="p"
          className="mb-8 text-foreground-dark/80"
        >
          Tailwind CSS breakpoints used for responsive design.
        </Typography>
      </div>

      <div className="bg-secondary p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-main rounded">
            <Typography variant="heading-5" as="h3" className="mb-2">
              Default
            </Typography>
            <Typography
              variant="body-small"
              as="p"
              className="mb-2 font-mono text-foreground-dark/60"
            >
              0px
            </Typography>
            <Typography
              variant="body-small"
              as="p"
              className="text-foreground-dark/70"
            >
              Mobile first base styles
            </Typography>
          </div>

          <div className="p-6 bg-main rounded">
            <Typography variant="heading-5" as="h3" className="mb-2">
              sm:
            </Typography>
            <Typography
              variant="body-small"
              as="p"
              className="mb-2 font-mono text-foreground-dark/60"
            >
              640px
            </Typography>
            <Typography
              variant="body-small"
              as="p"
              className="text-foreground-dark/70"
            >
              Small devices
            </Typography>
          </div>

          <div className="p-6 bg-main rounded">
            <Typography variant="heading-5" as="h3" className="mb-2">
              md:
            </Typography>
            <Typography
              variant="body-small"
              as="p"
              className="mb-2 font-mono text-foreground-dark/60"
            >
              768px
            </Typography>
            <Typography
              variant="body-small"
              as="p"
              className="text-foreground-dark/70"
            >
              Tablets and up
            </Typography>
          </div>

          <div className="p-6 bg-main rounded">
            <Typography variant="heading-5" as="h3" className="mb-2">
              lg:
            </Typography>
            <Typography
              variant="body-small"
              as="p"
              className="mb-2 font-mono text-foreground-dark/60"
            >
              1024px
            </Typography>
            <Typography
              variant="body-small"
              as="p"
              className="text-foreground-dark/70"
            >
              Desktops and up
            </Typography>
          </div>

          <div className="p-6 bg-main rounded">
            <Typography variant="heading-5" as="h3" className="mb-2">
              xl:
            </Typography>
            <Typography
              variant="body-small"
              as="p"
              className="mb-2 font-mono text-foreground-dark/60"
            >
              1280px
            </Typography>
            <Typography
              variant="body-small"
              as="p"
              className="text-foreground-dark/70"
            >
              Large desktops
            </Typography>
          </div>
        </div>
      </div>

      <div className="bg-secondary p-6 rounded-lg">
        <Typography variant="heading-4" as="h3" className="mb-4">
          Breakpoint Usage Example
        </Typography>
        <div className="space-y-4">
          <div className="p-4 bg-main rounded">
            <Typography
              variant="body-small"
              as="p"
              className="font-mono text-foreground-dark/60 mb-2"
            >
              Responsive text: text-base md:text-lg lg:text-xl
            </Typography>
            <Typography variant="body" as="p" className="md:text-lg lg:text-xl">
              This text scales up at md and lg breakpoints
            </Typography>
          </div>
          <div className="p-4 bg-main rounded">
            <Typography
              variant="body-small"
              as="p"
              className="font-mono text-foreground-dark/60 mb-2"
            >
              Responsive grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
              <div className="p-2 bg-secondary rounded text-center text-sm">
                1
              </div>
              <div className="p-2 bg-secondary rounded text-center text-sm">
                2
              </div>
              <div className="p-2 bg-secondary rounded text-center text-sm">
                3
              </div>
              <div className="p-2 bg-secondary rounded text-center text-sm">
                4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const ResponsiveBreakpointsStory: Story = {
  render: () => <ResponsiveBreakpoints />,
}

const CommonLayoutPatterns = () => (
  <div className="py-8 bg-main">
    <div className="max-width-container space-y-12">
      <div>
        <Typography variant="heading-2" as="h1" className="mb-4">
          Common Layout Patterns
        </Typography>
        <Typography
          variant="body"
          as="p"
          className="mb-8 text-foreground-dark/80"
        >
          Layout patterns commonly used throughout the application.
        </Typography>
      </div>

      {/* Hero Section */}
      <div className="space-y-4">
        <Typography variant="heading-4" as="h3">
          Hero Section Layout
        </Typography>
        <div className="bg-secondary p-8 md:p-12 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Typography variant="heading-1" as="h2" className="mb-4">
                Hero Title
              </Typography>
              <Typography variant="body-large" as="p" className="mb-6">
                Hero section description providing context and value
                proposition.
              </Typography>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="md">
                  Primary Action
                </Button>
                <Button variant="outline" size="md">
                  Secondary Action
                </Button>
              </div>
            </div>
            <div className="bg-main aspect-square rounded-lg flex items-center justify-center">
              <Typography
                variant="body"
                as="p"
                className="text-foreground-dark/40"
              >
                Hero Image
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Service Page Layout */}
      <div className="space-y-4">
        <Typography variant="heading-4" as="h3">
          Service Page Layout
        </Typography>
        <div className="bg-secondary p-8 rounded-lg">
          <div className="space-y-12">
            <div>
              <Typography variant="heading-2" as="h2" className="mb-4">
                Section Title
              </Typography>
              <Typography variant="body-large" as="p" className="mb-8">
                Section introduction text providing context.
              </Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-main p-6 rounded-lg">
                <Typography variant="heading-4" as="h3" className="mb-2">
                  Item 1
                </Typography>
                <Typography variant="body" as="p">
                  Content description
                </Typography>
              </div>
              <div className="bg-main p-6 rounded-lg">
                <Typography variant="heading-4" as="h3" className="mb-2">
                  Item 2
                </Typography>
                <Typography variant="body" as="p">
                  Content description
                </Typography>
              </div>
              <div className="bg-main p-6 rounded-lg">
                <Typography variant="heading-4" as="h3" className="mb-2">
                  Item 3
                </Typography>
                <Typography variant="body" as="p">
                  Content description
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Layout */}
      <div className="space-y-4">
        <Typography variant="heading-4" as="h3">
          Form Layout
        </Typography>
        <div className="bg-secondary p-8 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Typography variant="heading-3" as="h2" className="mb-4">
                Form Title
              </Typography>
              <Typography variant="body" as="p" className="mb-6">
                Form description and context information.
              </Typography>
            </div>
            <div className="bg-main p-6 rounded-lg">
              <div className="space-y-4">
                <div className="h-12 bg-secondary rounded"></div>
                <div className="h-12 bg-secondary rounded"></div>
                <div className="h-24 bg-secondary rounded"></div>
                <Button variant="primary" size="md" className="w-full">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Grid Layout */}
      <div className="space-y-4">
        <Typography variant="heading-4" as="h3">
          Card Grid Layout
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="bg-secondary p-6 rounded-lg">
              <div className="bg-main aspect-video rounded mb-4"></div>
              <Typography variant="heading-5" as="h3" className="mb-2">
                Card {i}
              </Typography>
              <Typography
                variant="body-small"
                as="p"
                className="text-foreground-dark/70"
              >
                Card description and content
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export const CommonLayoutPatternsStory: Story = {
  render: () => <CommonLayoutPatterns />,
}
