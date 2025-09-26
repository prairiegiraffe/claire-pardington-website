// Centralized configuration for dev-components navigation
import { getComponentsBySubcategory } from './component-registry';

export interface DevPage {
  name: string;
  href: string;
  id: string;
}

export interface PageComponent {
  id: string;
  name: string;
  title: string;
}

// Define all dev-component pages in one place
export const DEV_PAGES: DevPage[] = [
  { name: 'Styles Guide', href: '/styles-guide', id: 'styles-guide' },
  { name: 'Component Library', href: '/dev-components', id: 'index' },
  { name: 'Hero Sections', href: '/dev-components/hero-sections', id: 'hero-sections' },
  { name: 'Feature Sections', href: '/dev-components/feature-sections', id: 'feature-sections' },
  { name: 'Pricing Sections', href: '/dev-components/pricing-sections', id: 'pricing-sections' },
  { name: 'CTA Sections', href: '/dev-components/cta-sections', id: 'cta-sections' },
  { name: 'Content Sections', href: '/dev-components/content-sections', id: 'content-sections' },
  { name: 'Blog Sections', href: '/dev-components/blog-sections', id: 'blog-sections' },
  { name: 'Contact Sections', href: '/dev-components/contact-sections', id: 'contact-sections' },
  { name: 'Team Sections', href: '/dev-components/team-sections', id: 'team-sections' },
  { name: 'Testimonials', href: '/dev-components/testimonials', id: 'testimonials' },
  { name: 'Newsletter Sections', href: '/dev-components/newsletter-sections', id: 'newsletter-sections' },
  { name: 'FAQ Sections', href: '/dev-components/faqs', id: 'faqs' },
  { name: 'Stats', href: '/dev-components/stats', id: 'stats' },
  { name: 'Logo Clouds', href: '/dev-components/logo-clouds', id: 'logo-clouds' },
  { name: 'Bento Grids', href: '/dev-components/bento-grids', id: 'bento-grids' },
  { name: 'Headers', href: '/dev-components/headers', id: 'headers' },
  { name: 'Header Sections', href: '/dev-components/header-sections', id: 'header-sections' },
  { name: 'Footers', href: '/dev-components/footers', id: 'footers' },
  { name: 'Flyout Menus', href: '/dev-components/flyout-menus', id: 'flyout-menus' },
  { name: 'Banners', href: '/dev-components/banners', id: 'banners' },
  { name: 'Heroes', href: '/dev-components/heroes', id: 'heroes' },
  { name: 'Pricing', href: '/dev-components/pricing', id: 'pricing' },
  { name: 'Pricing Pages', href: '/dev-components/pricing-pages', id: 'pricing-pages' },
  { name: 'Landing Pages', href: '/dev-components/landing-pages', id: 'landing-pages' },
  { name: 'About Pages', href: '/dev-components/about-sections', id: 'about-sections' },
  { name: '404 Pages', href: '/dev-components/404-pages', id: '404-pages' },
];

// Define components for each page
export const PAGE_COMPONENTS: Record<string, PageComponent[]> = {
  'styles-guide': [
    { id: 'css-custom-properties', name: 'CSS Custom Properties', title: 'CSS Custom Properties' },
    { id: 'tailwind-utilities', name: 'Tailwind Utilities', title: 'Tailwind Utilities' },
    { id: 'button-components', name: 'Button Components', title: 'Button Components' },
    { id: 'configuration', name: 'Configuration', title: 'Configuration' },
    { id: 'typography', name: 'Typography', title: 'Typography' },
    { id: 'font-families', name: 'Font Families', title: 'Font Families' },
    { id: 'text-formats', name: 'Text Formats', title: 'Text Formats' },
    { id: 'shadows', name: 'Shadows', title: 'Shadows' },
    { id: 'border-radius', name: 'Border Radius', title: 'Border Radius' },
    { id: 'card-components', name: 'Card Components', title: 'Card Components' },
    { id: 'additional-styles', name: 'Additional Styles', title: 'Additional Styles' },
  ],
  heroes: [
    { id: 'simple-hero', name: 'SimpleHero', title: 'Simple Hero' },
    { id: 'split-hero', name: 'SplitHero', title: 'Split Hero' },
  ],
  pricing: [{ id: 'simple-pricing', name: 'SimplePricing', title: 'Simple Pricing' }],
};

const SUBCATEGORY_OVERRIDES: Record<string, string> = {
  pricing: 'pricing-sections',
  heroes: 'hero-sections',
};

// Utility function to get current page ID from URL
export function getCurrentPageId(pathname: string): string {
  if (pathname === '/dev-components' || pathname === '/dev-components/') {
    return 'index';
  }

  const match = pathname.match(/\/dev-components\/(.+)/);
  return match ? match[1] : 'index';
}

// Utility function to get page components
export function getPageComponents(pageId: string): PageComponent[] {
  const manualComponents = PAGE_COMPONENTS[pageId];
  if (manualComponents && manualComponents.length > 0) {
    return manualComponents;
  }

  if (pageId === 'index') {
    return [];
  }

  const subcategoryId = SUBCATEGORY_OVERRIDES[pageId] || pageId;
  const registryComponents = getComponentsBySubcategory(subcategoryId);

  return registryComponents.map(({ id, name }) => ({ id, name, title: name }));
}
