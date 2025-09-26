# Tailwind UI Plus Component Import Guide

This guide shows you how to systematically import and organize all 500+ Tailwind UI Plus components for AI-assisted development.

## 🎯 Quick Start

1. **Download component from Tailwind UI Plus**
2. **Convert to React component** (if needed)
3. **Place in correct folder**
4. **Register in component registry**
5. **AI can now reference it!**

## 📁 Folder Structure

```
src/components/ui/
├── page-sections/
│   ├── hero-sections/          # Landing heroes
│   ├── feature-sections/       # Feature showcases
│   ├── cta-sections/          # Call-to-actions
│   ├── bento-grids/           # Modern grid layouts
│   ├── pricing-sections/       # Pricing tables
│   ├── header-sections/        # Page headers
│   ├── newsletter-sections/    # Email signups
│   ├── stats/                 # Statistics displays
│   ├── testimonials/          # Customer reviews
│   ├── blog-sections/         # Blog layouts
│   ├── contact-sections/      # Contact forms
│   ├── team-sections/         # Team showcases
│   ├── content-sections/      # Content layouts
│   ├── logo-clouds/           # Company logos
│   ├── faqs/                  # FAQ sections
│   └── footers/              # Page footers
├── elements/
│   ├── headers/               # Navigation headers
│   ├── flyout-menus/         # Dropdown menus
│   ├── banners/              # Notification banners
│   ├── feedback/             # User feedback
│   └── 404-pages/            # Error pages
├── page-examples/
│   ├── landing-pages/         # Complete landing pages
│   ├── pricing-pages/         # Pricing page templates
│   └── about-pages/          # About page templates
└── application-ui/
    ├── forms/                # Form components
    ├── tables/               # Data tables
    ├── navigation/           # App navigation
    ├── layout/              # Layout components
    ├── overlays/            # Modals & overlays
    ├── lists/               # List components
    ├── headings/            # Heading components
    └── cards/               # Card components
```

## 🚀 Import Workflow

### Step 1: Create React Component

```tsx
// src/components/ui/hero-sections/ModernHero.tsx
interface ModernHeroProps {
  title?: string;
  subtitle?: string;
  // ... more props
}

export default function ModernHero({ title = 'Default title', subtitle = 'Default subtitle' }: ModernHeroProps) {
  return <div className="bg-white dark:bg-gray-900">{/* Your Tailwind UI Plus component code */}</div>;
}
```

### Step 2: Register in Component Registry

```ts
// src/lib/component-registry.ts
export const COMPONENT_REGISTRY: ComponentInfo[] = [
  // ... existing components
  {
    id: 'modern-hero',
    name: 'Modern Hero',
    description: 'Modern hero with animated elements',
    category: 'page-sections',
    subcategory: 'hero-sections',
    tags: ['hero', 'modern', 'animated', 'landing'],
    complexity: 'medium',
    responsive: true,
    darkMode: true,
    filePath: 'src/components/ui/hero-sections/ModernHero.tsx',
  },
];
```

### Step 3: Add to Showcase Page

```astro
---
import ModernHero from '~/components/ui/hero-sections/ModernHero';
// ... other imports
---

<!-- src/pages/dev-components/hero-sections.astro --><!-- Add to the component showcase -->
<section class="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
  <div class="border-b border-gray-200 dark:border-gray-700">
    <ModernHero client:load />
  </div>
  <!-- Component info section -->
</section>
```

## 🤖 AI-Friendly Naming Conventions

### Component IDs

- Use kebab-case: `simple-hero`, `modern-pricing`, `contact-form-basic`
- Be descriptive: `testimonials-grid-3col` not `testimonials1`
- Include variants: `hero-split-image`, `hero-centered-video`

### Component Names

- Use PascalCase: `SimpleHero`, `ModernPricing`, `ContactFormBasic`
- Match the ID but in PascalCase
- Be consistent across similar components

### Tags

Include relevant tags for AI discovery:

```ts
tags: ['hero', 'landing', 'cta', 'gradient', 'animated', 'video', 'split-layout'];
```

## 📊 Tracking Progress

The component registry automatically tracks:

- Total components per category
- Completion status
- Component complexity levels
- Tags for easy searching

## 🔍 AI Usage Examples

Once imported, AI can reference components like:

```
"Use the modern-hero component"
"Make a pricing section like SimplePricing but with 4 tiers"
"Create a hero similar to split-hero but with a video background"
"Find all components tagged with 'animated'"
```

## 📋 Import Checklist

For each new component:

- [ ] ✅ Downloaded from Tailwind UI Plus
- [ ] ✅ Converted to React with TypeScript interfaces
- [ ] ✅ Added to correct folder structure
- [ ] ✅ Uses consistent naming conventions
- [ ] ✅ Supports dark mode
- [ ] ✅ Responsive design
- [ ] ✅ Added to component registry
- [ ] ✅ Added to showcase page
- [ ] ✅ Tagged appropriately for AI discovery
- [ ] ✅ Tested in development

## 🎨 Component Standards

### Required Features

- **TypeScript interfaces** for all props
- **Dark mode support** using Tailwind's `dark:` prefix
- **Responsive design** with mobile-first approach
- **Accessibility** following WCAG guidelines
- **Customizable props** for flexibility

### Example Template

```tsx
interface ComponentNameProps {
  title?: string;
  subtitle?: string;
  className?: string;
  // ... more props
}

export default function ComponentName({
  title = 'Default title',
  subtitle = 'Default subtitle',
  className = '',
}: ComponentNameProps) {
  return <div className={`base-styles dark:dark-styles ${className}`}>{/* Component content */}</div>;
}
```

## 🚀 Getting Started

1. Start with the most common components first:
   - Hero sections
   - Pricing sections
   - Feature sections
   - CTA sections

2. Use this workflow to systematically import all 500+ components

3. Your AI assistant will have access to the complete Tailwind UI Plus library!

## 📝 Notes

- Components are hidden from production via middleware
- All components use Tailwind UI Plus licensing
- Registry system makes components discoverable by AI
- Clear naming conventions enable natural language references
