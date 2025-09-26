# Bulk Component Import Examples

Here are different ways to batch import components super quickly:

## 🚀 Method 1: AI Mega-Prompt (Fastest)

Just paste this prompt with all your components:

````
BULK IMPORT: Process all these Tailwind UI Plus components automatically.

For each component:
1. Auto-detect the best category/subcategory
2. Generate appropriate component name and ID
3. Create the file in correct folder
4. Add to component registry
5. Generate showcase page entries

COMPONENTS:

=== COMPONENT 1 ===
NAME: [Optional hint, or let AI decide]
PURPOSE: [Optional: "hero with video" or let AI analyze]
CODE:
```tsx
[PASTE COMPONENT CODE HERE]
````

=== COMPONENT 2 ===
NAME: [Optional hint]
PURPOSE: [Optional hint]
CODE:

```tsx
[PASTE COMPONENT CODE HERE]
```

=== COMPONENT 3 ===
[Continue pattern for all components...]

AUTO-PROCESS ALL: Create files, update registry, generate showcase entries.

```

## 🔄 Method 2: Category Batches

Import by category for better organization:

```

IMPORT ALL HERO SECTIONS:

Process these 20 hero components for the hero-sections category:

HERO 1: Modern gradient hero

```tsx
[code];
```

HERO 2: Split layout with video

```tsx
[code];
```

[Continue for all 20...]

Create all files in src/components/ui/page-sections/hero-sections/
Update registry with hero-sections subcategory
All should have tags: ['hero', 'landing', plus specific tags]

```

## 📄 Method 3: File Format for Script

Create a text file like `hero-components.txt`:

```

--- ModernHero | hero-sections | Modern hero with gradient background ---
import React from 'react';

interface ModernHeroProps {
title?: string;
subtitle?: string;
}

export default function ModernHero({ title = "Default" }: ModernHeroProps) {
return <div>Hero content</div>;
}

--- SplitVideoHero | hero-sections | Split layout hero with video background ---
import React from 'react';

export default function SplitVideoHero() {
return <div>Video hero content</div>;
}

--- CenteredHero | hero-sections | Centered hero with call-to-action ---
[Component code here...]

````

Then run:
```bash
node scripts/import-components.js batch --file hero-components.txt
````

## ⚡ Method 4: Super Fast AI Workflow

**Step 1:** Copy all components from Tailwind UI (React format)
**Step 2:** Create one massive prompt:

```
MEGA IMPORT: I have 50 components from Tailwind UI Plus. Process them ALL:

1. Hero Sections (12 components):
[paste all hero component codes with separators]

2. Pricing Sections (8 components):
[paste all pricing component codes]

3. Feature Sections (15 components):
[paste all feature component codes]

4. CTA Sections (10 components):
[paste all CTA component codes]

5. Testimonial Sections (5 components):
[paste all testimonial component codes]

AUTO-PROCESS EVERYTHING:
- Create all files in correct folders
- Generate proper names and IDs
- Add to component registry
- Create showcase pages for new categories
- Use appropriate tags for AI discovery

EXPECTED OUTPUT:
- Complete file structure
- Registry updates
- Summary of all imported components
```

## 🎯 Method 5: AI Analysis + Batch

For components where you want AI to figure everything out:

````
SMART IMPORT: Analyze and import these components.

For each component, AI should:
1. Determine what type of component it is
2. Choose the best category/subcategory
3. Create an appropriate name
4. Generate relevant tags
5. Set complexity level
6. Create file and registry entry

COMPONENTS TO ANALYZE:

COMPONENT A:
```tsx
[Some complex component - let AI figure out what it is]
````

COMPONENT B:

```tsx
[Another component - let AI categorize it]
```

[Continue for all components...]

OUTPUT: Complete analysis + implementation for each component

```

## 📊 Expected Speed Improvements

| Method | Components | Time | Notes |
|--------|------------|------|-------|
| Manual | 1 | 10 min | Traditional approach |
| AI Single | 1 | 2 min | Using AI prompts |
| AI Batch 10 | 10 | 5 min | Batch processing |
| AI Mega 50 | 50 | 15 min | Bulk import |
| Script + AI | 100+ | 30 min | Hybrid approach |

## 🎨 Best Practices for Bulk Import

### For Maximum Speed:
1. **Group by category** - Import all heroes together, all pricing together
2. **Provide context** - "These are all hero sections with different layouts"
3. **Use clear separators** - Make it easy for AI to identify each component
4. **Include naming hints** - "modern", "simple", "advanced" helps with naming

### Example Super-Efficient Workflow:
```

Monday: Import all Page Sections (heroes, pricing, features, CTAs) - 100 components
Tuesday: Import all Elements (headers, menus, banners) - 50 components
Wednesday: Import all Application UI (forms, tables, navigation) - 200 components
Thursday: Import all Page Examples (complete pages) - 30 components

Total: 380 components in 4 days with AI automation!

```

## 🤖 AI Will Handle:
- ✅ Component categorization
- ✅ Naming conventions
- ✅ File structure
- ✅ Registry updates
- ✅ TypeScript interfaces
- ✅ Tag generation
- ✅ Complexity assessment
- ✅ Showcase page updates

## 🚀 Ready to Import 500+ Components?

Choose your preferred method above and let's automate this! AI can process components 10x faster than manual work.
```
