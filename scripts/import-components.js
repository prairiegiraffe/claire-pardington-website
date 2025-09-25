#!/usr/bin/env node

/**
 * Automated Component Import Script
 *
 * Usage:
 * node scripts/import-components.js --file components.txt
 * node scripts/import-components.js --single --category hero-sections --name ModernHero --code "component-code"
 */

const fs = require('fs');
const path = require('path');
const { program } = require('commander');

// Category mappings for auto-detection
const CATEGORY_KEYWORDS = {
  'hero-sections': ['hero', 'landing', 'banner', 'header', 'main'],
  'pricing-sections': ['pricing', 'plan', 'subscription', 'tier', 'price'],
  'feature-sections': ['feature', 'benefit', 'highlight', 'showcase'],
  'cta-sections': ['cta', 'call-to-action', 'signup', 'conversion'],
  'testimonials': ['testimonial', 'review', 'feedback', 'quote'],
  'stats': ['stat', 'metric', 'number', 'count', 'analytics'],
  'forms': ['form', 'input', 'field', 'contact', 'login', 'register'],
  'navigation': ['nav', 'menu', 'breadcrumb', 'sidebar'],
  'cards': ['card', 'tile', 'item', 'post'],
  'buttons': ['button', 'btn', 'action'],
};

// Component template generator
function generateComponent(name, code, category, description = '') {
  const componentName = toPascalCase(name);
  const componentId = toKebabCase(name);

  // Extract props from the component code (basic parsing)
  const propsInterface = extractPropsInterface(code);

  return {
    componentName,
    componentId,
    category,
    description: description || generateDescription(code, category),
    filePath: getFilePath(category, componentName),
    code: processComponentCode(code, componentName, propsInterface),
    registryEntry: generateRegistryEntry(componentId, componentName, category, description),
    tags: generateTags(code, category)
  };
}

// Auto-detect category from component code
function detectCategory(code, name = '') {
  const text = (code + ' ' + name).toLowerCase();

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    for (const keyword of keywords) {
      if (text.includes(keyword)) {
        return category;
      }
    }
  }

  // Default fallback based on common patterns
  if (text.includes('section') || text.includes('div class')) {
    return 'content-sections';
  }

  return 'misc';
}

// Generate component description
function generateDescription(code, category) {
  const descriptions = {
    'hero-sections': 'Hero section for landing pages',
    'pricing-sections': 'Pricing component with subscription plans',
    'feature-sections': 'Feature showcase section',
    'cta-sections': 'Call-to-action section',
    'testimonials': 'Customer testimonial component',
    'stats': 'Statistics display component',
    'forms': 'Form component with validation',
    'navigation': 'Navigation component',
    'cards': 'Card component for content display',
    'buttons': 'Button component with variants'
  };

  return descriptions[category] || 'UI component';
}

// Extract props interface from component code
function extractPropsInterface(code) {
  // Basic regex to find interface definitions
  const interfaceMatch = code.match(/interface\s+(\w+Props)\s*{([^}]+)}/);

  if (interfaceMatch) {
    return {
      name: interfaceMatch[1],
      content: interfaceMatch[2]
    };
  }

  // Generate basic interface if none found
  return {
    name: 'ComponentProps',
    content: `
  title?: string;
  subtitle?: string;
  className?: string;`
  };
}

// Process component code to ensure standards
function processComponentCode(code, componentName, propsInterface) {
  let processedCode = code;

  // Ensure TypeScript interface exists
  if (!code.includes('interface')) {
    processedCode = `interface ${propsInterface.name} {${propsInterface.content}
}

${processedCode}`;
  }

  // Ensure dark mode classes
  processedCode = processedCode.replace(
    /className="([^"]*?)"/g,
    (match, classes) => {
      if (!classes.includes('dark:')) {
        return match; // Keep as is if already has dark mode
      }
      return match;
    }
  );

  return processedCode;
}

// Generate registry entry
function generateRegistryEntry(id, name, category, description) {
  const subcategory = getSubcategory(category);
  const complexity = detectComplexity(name);
  const tags = generateTags(name + ' ' + description, category);

  return `  {
    id: '${id}',
    name: '${name}',
    description: '${description}',
    category: '${category.includes('-') ? category.split('-')[0] : 'page-sections'}',
    subcategory: '${subcategory}',
    tags: [${tags.map(tag => `'${tag}'`).join(', ')}],
    complexity: '${complexity}',
    responsive: true,
    darkMode: true,
    filePath: 'src/components/ui/${subcategory}/${name}.tsx'
  }`;
}

// Utility functions
function toPascalCase(str) {
  return str.replace(/(^\w|[-_]\w)/g, (match) =>
    match.replace(/[-_]/, '').toUpperCase()
  );
}

function toKebabCase(str) {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')
    .replace(/\s+/g, '-');
}

function getFilePath(category, componentName) {
  const subcategory = getSubcategory(category);
  return `src/components/ui/${subcategory}/${componentName}.tsx`;
}

function getSubcategory(category) {
  const mapping = {
    'hero-sections': 'page-sections/hero-sections',
    'pricing-sections': 'page-sections/pricing-sections',
    'feature-sections': 'page-sections/feature-sections',
    'cta-sections': 'page-sections/cta-sections',
    'testimonials': 'page-sections/testimonials',
    'stats': 'page-sections/stats',
    'forms': 'application-ui/forms',
    'navigation': 'application-ui/navigation',
    'cards': 'application-ui/cards',
    'buttons': 'elements/buttons'
  };

  return mapping[category] || 'page-sections/content-sections';
}

function detectComplexity(name) {
  const text = name.toLowerCase();

  if (text.includes('simple') || text.includes('basic')) return 'simple';
  if (text.includes('advanced') || text.includes('complex')) return 'complex';

  return 'medium';
}

function generateTags(text, category) {
  const allTags = [];
  const lowerText = text.toLowerCase();

  // Category-specific tags
  if (category.includes('hero')) allTags.push('hero', 'landing');
  if (category.includes('pricing')) allTags.push('pricing', 'plans');
  if (category.includes('feature')) allTags.push('features', 'showcase');

  // Pattern-based tags
  if (lowerText.includes('gradient')) allTags.push('gradient');
  if (lowerText.includes('split')) allTags.push('split-layout');
  if (lowerText.includes('video')) allTags.push('video');
  if (lowerText.includes('image')) allTags.push('image');
  if (lowerText.includes('animated') || lowerText.includes('motion')) allTags.push('animated');
  if (lowerText.includes('responsive')) allTags.push('responsive');

  return [...new Set(allTags)]; // Remove duplicates
}

// File operations
function writeComponentFile(component) {
  const fullPath = path.join(process.cwd(), component.filePath);
  const dir = path.dirname(fullPath);

  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(fullPath, component.code);
  console.log(`✅ Created: ${component.filePath}`);
}

function updateRegistry(components) {
  const registryPath = path.join(process.cwd(), 'src/lib/component-registry.ts');
  let registryContent = fs.readFileSync(registryPath, 'utf8');

  // Find the COMPONENT_REGISTRY array and add new entries
  const registryEntries = components.map(c => c.registryEntry).join(',\n');

  // Insert before the closing bracket
  registryContent = registryContent.replace(
    /(\];[\s]*$)/m,
    `,\n${registryEntries}\n$1`
  );

  fs.writeFileSync(registryPath, registryContent);
  console.log(`✅ Updated registry with ${components.length} components`);
}

// Main processing functions
function processSingleComponent(options) {
  const component = generateComponent(
    options.name,
    options.code,
    options.category,
    options.description
  );

  writeComponentFile(component);
  updateRegistry([component]);

  console.log(`\n🎉 Successfully imported: ${component.componentName}`);
  console.log(`📁 File: ${component.filePath}`);
  console.log(`🏷️  Tags: ${component.tags.join(', ')}`);
  console.log(`🤖 AI Reference: ${component.componentId}`);
}

function processBatchFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const components = parseBatchFile(content);

  console.log(`Processing ${components.length} components...`);

  const processedComponents = components.map(comp =>
    generateComponent(comp.name, comp.code, comp.category, comp.description)
  );

  // Write all files
  processedComponents.forEach(writeComponentFile);

  // Update registry
  updateRegistry(processedComponents);

  console.log(`\n🎉 Successfully imported ${components.length} components!`);
  processedComponents.forEach(comp => {
    console.log(`- ${comp.componentName} (${comp.componentId})`);
  });
}

function parseBatchFile(content) {
  // Parse file format like:
  // --- ComponentName | category | description ---
  // [component code]
  // --- NextComponent | category | description ---
  // [component code]

  const components = [];
  const sections = content.split('---').filter(section => section.trim());

  for (let i = 0; i < sections.length; i += 2) {
    const header = sections[i]?.trim();
    const code = sections[i + 1]?.trim();

    if (header && code) {
      const [name, category, description] = header.split('|').map(s => s.trim());

      components.push({
        name: name || `Component${i/2 + 1}`,
        category: category || detectCategory(code, name),
        description: description || '',
        code
      });
    }
  }

  return components;
}

// CLI Setup
program
  .name('import-components')
  .description('Automated Tailwind UI Plus component importer')
  .version('1.0.0');

program
  .command('single')
  .description('Import a single component')
  .option('-c, --category <category>', 'Component category')
  .option('-n, --name <name>', 'Component name')
  .option('-d, --description <description>', 'Component description')
  .option('--code <code>', 'Component code')
  .action(processSingleComponent);

program
  .command('batch')
  .description('Import components from a batch file')
  .option('-f, --file <file>', 'Path to batch file')
  .action((options) => {
    if (!options.file) {
      console.error('Please provide a file path with --file');
      process.exit(1);
    }
    processBatchFile(options.file);
  });

program.parse();

// Export for use as a module
module.exports = {
  generateComponent,
  detectCategory,
  processSingleComponent,
  processBatchFile
};