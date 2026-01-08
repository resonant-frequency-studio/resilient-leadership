import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Typography from '../Typography'

const meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// Color data extracted from globals.css
const colorCategories = {
  backgrounds: [
    {
      name: 'main',
      hex: '#f7f7f2',
      variable: '--color-main',
      class: 'bg-main',
    },
    {
      name: 'secondary',
      hex: '#f0eee9',
      variable: '--color-secondary',
      class: 'bg-secondary',
    },
    {
      name: 'third',
      hex: '#ebe7e1',
      variable: '--color-third',
      class: 'bg-third',
    },
    {
      name: 'fourth',
      hex: '#e0dcd5',
      variable: '--color-fourth',
      class: 'bg-fourth',
    },
    {
      name: 'fifth',
      hex: '#1a1818',
      variable: '--color-fifth',
      class: 'bg-fifth',
    },
  ],
  text: [
    {
      name: 'foreground-dark',
      hex: '#373240',
      variable: '--color-foreground-dark',
      class: 'text-foreground-dark',
    },
    {
      name: 'foreground-light',
      hex: '#f7f7f2',
      variable: '--color-foreground-light',
      class: 'text-foreground-light',
    },
    {
      name: 'placeholder',
      hex: '#9a9690',
      variable: '--color-placeholder',
      class: 'text-placeholder',
    },
  ],
  buttons: [
    {
      name: 'button-primary',
      hex: '#201b29',
      variable: '--color-button-primary',
      class: 'bg-button-primary',
    },
    {
      name: 'button-primary-hover',
      hex: '#2a2433',
      variable: '--color-button-primary-hover',
      class: 'bg-button-primary-hover',
    },
    {
      name: 'button-inverse',
      hex: '#f7f7f2',
      variable: '--color-button-inverse',
      class: 'bg-button-inverse',
    },
    {
      name: 'button-inverse-hover',
      hex: '#f0eee9',
      variable: '--color-button-inverse-hover',
      class: 'bg-button-inverse-hover',
    },
    {
      name: 'button-outline-border',
      hex: '#d3d3d0',
      variable: '--color-button-outline-border',
      class: 'border-button-outline',
    },
    {
      name: 'button-glass',
      hex: '#201b29',
      variable: '--color-button-glass',
      class: 'bg-button-glass',
    },
  ],
  forms: [
    {
      name: 'input-bg',
      hex: '#f7f7f2',
      variable: '--color-input-bg',
      class: 'bg-input-bg',
    },
    {
      name: 'input-border',
      hex: 'transparent',
      variable: '--color-input-border',
      class: 'border-input-border',
    },
    {
      name: 'input-focus-ring',
      hex: '#373240',
      variable: '--color-input-focus-ring',
      class: 'ring-input-focus-ring',
    },
  ],
  checkboxes: [
    {
      name: 'checkbox-border',
      hex: '#d3d3d0',
      variable: '--color-checkbox-border',
      class: 'border-checkbox-border',
    },
    {
      name: 'checkbox-bg',
      hex: '#f7f7f2',
      variable: '--color-checkbox-bg',
      class: 'bg-checkbox-bg',
    },
    {
      name: 'checkbox-checked',
      hex: '#201b29',
      variable: '--color-checkbox-checked',
      class: 'bg-checkbox-checked',
    },
    {
      name: 'checkbox-checkmark',
      hex: '#f7f7f2',
      variable: '--color-checkbox-checkmark',
      class: 'text-checkbox-checkmark',
    },
  ],
  tags: [
    {
      name: 'tags-pills',
      hex: '#efede7',
      variable: '--color-tags-pills',
      class: 'bg-tags-pills',
    },
    {
      name: 'tags-pills-dark',
      hex: '#9a9690',
      variable: '--color-tags-pills-dark',
      class: 'bg-tags-pills-dark',
    },
  ],
}

const ColorSwatch = ({
  name,
  hex,
  variable,
  className,
}: {
  name: string
  hex: string
  variable: string
  className: string
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`w-full h-24 rounded-lg border border-foreground-dark/10 ${className}`}
        style={{ backgroundColor: hex === 'transparent' ? 'transparent' : hex }}
      >
        {hex === 'transparent' && (
          <div
            className="w-full h-full rounded-lg"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0), repeating-linear-gradient(-45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0)',
              backgroundSize: '20px 20px',
            }}
          ></div>
        )}
      </div>
      <div>
        <Typography variant="body-small" as="p" className="font-semibold">
          {name}
        </Typography>
        <Typography
          variant="body-small"
          as="p"
          className="text-foreground-dark/70"
        >
          {hex}
        </Typography>
        <Typography
          variant="caption"
          as="span"
          className="block mt-1 text-foreground-dark/60 font-mono"
        >
          {variable}
        </Typography>
        <Typography
          variant="caption"
          as="span"
          className="block text-foreground-dark/60 font-mono"
        >
          {className}
        </Typography>
      </div>
    </div>
  )
}

const ColorCategory = ({
  title,
  description,
  colors,
}: {
  title: string
  description: string
  colors: typeof colorCategories.backgrounds
}) => (
  <div className="mb-12">
    <Typography variant="heading-3" as="h2" className="mb-2">
      {title}
    </Typography>
    <Typography variant="body" as="p" className="mb-6 text-foreground-dark/80">
      {description}
    </Typography>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {colors.map(color => (
        <ColorSwatch
          key={color.name}
          name={color.name}
          hex={color.hex}
          variable={color.variable}
          className={(color as { class: string }).class}
        />
      ))}
    </div>
  </div>
)

export const BackgroundColors: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Typography variant="heading-2" as="h1" className="mb-4">
          Color Palette
        </Typography>
        <Typography
          variant="body-large"
          as="p"
          className="mb-8 text-foreground-dark/80"
        >
          The color system is built on a foundation of neutral tones with accent
          colors for interactive elements. All colors are defined as CSS
          variables in{' '}
          <code className="px-1.5 py-0.5 bg-secondary rounded text-sm">
            globals.css
          </code>{' '}
          and available as Tailwind utility classes.
        </Typography>
      </div>

      <ColorCategory
        title="Background Colors"
        description="Background colors provide the foundation of the design system, ranging from light to dark."
        colors={colorCategories.backgrounds}
      />
    </div>
  ),
}

export const TextColors: Story = {
  render: () => (
    <ColorCategory
      title="Text Colors"
      description="Text colors ensure optimal contrast and readability across different backgrounds."
      colors={colorCategories.text}
    />
  ),
}

export const ButtonColors: Story = {
  render: () => (
    <ColorCategory
      title="Button Colors"
      description="Button colors define the interactive elements, with hover states for enhanced user feedback."
      colors={colorCategories.buttons}
    />
  ),
}

export const FormColors: Story = {
  render: () => (
    <ColorCategory
      title="Form Colors"
      description="Form colors are used for inputs, textareas, and form controls throughout the application."
      colors={colorCategories.forms}
    />
  ),
}

export const CheckboxColors: Story = {
  render: () => (
    <ColorCategory
      title="Checkbox Colors"
      description="Checkbox colors provide visual feedback for checkbox states and interactions."
      colors={colorCategories.checkboxes}
    />
  ),
}

export const TagColors: Story = {
  render: () => (
    <ColorCategory
      title="Tag & Pill Colors"
      description="Tag and pill colors are used for labels, badges, and categorical indicators."
      colors={colorCategories.tags}
    />
  ),
}

export const ColorUsageExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <Typography variant="heading-2" as="h1" className="mb-4">
        Color Usage Examples
      </Typography>

      {/* Background examples */}
      <div className="space-y-4">
        <Typography variant="heading-4" as="h3">
          Background Combinations
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-main p-6 rounded-lg border border-foreground-dark/10">
            <Typography variant="heading-4" as="h4" className="mb-2">
              Main Background
            </Typography>
            <Typography variant="body" as="p">
              Primary page background with dark text for optimal readability.
            </Typography>
          </div>
          <div className="bg-secondary p-6 rounded-lg border border-foreground-dark/10">
            <Typography variant="heading-4" as="h4" className="mb-2">
              Secondary Background
            </Typography>
            <Typography variant="body" as="p">
              Used for card backgrounds and elevated content areas.
            </Typography>
          </div>
          <div className="bg-fifth p-6 rounded-lg">
            <Typography
              variant="heading-4"
              as="h4"
              className="mb-2 text-foreground-light"
            >
              Fifth Background
            </Typography>
            <Typography variant="body" as="p" className="text-foreground-light">
              Dark background used for footers and contrast sections with light
              text.
            </Typography>
          </div>
        </div>
      </div>

      {/* Text on backgrounds */}
      <div className="space-y-4">
        <Typography variant="heading-4" as="h3">
          Text Contrast Examples
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-main p-6 rounded-lg">
            <Typography variant="body" as="p" className="text-foreground-dark">
              Dark text on light background (main)
            </Typography>
          </div>
          <div className="bg-fifth p-6 rounded-lg">
            <Typography variant="body" as="p" className="text-foreground-light">
              Light text on dark background (fifth)
            </Typography>
          </div>
        </div>
      </div>
    </div>
  ),
}
