# AI Component Import Automation Prompts

Use these prompts to automate importing Tailwind UI Plus components. Just paste the React component code and specify the category.

## 🚀 Single Component Import Prompt

````
I have a Tailwind UI Plus React component that I want to add to my component library. Please:

1. **Create the component file** in the correct folder based on the category
2. **Add it to the component registry** with proper metadata
3. **Generate the showcase page entry** if needed

**Component Details:**
- **Category:** [hero-sections/pricing-sections/feature-sections/etc]
- **Name:** [Brief descriptive name]
- **Description:** [What this component does]
- **Complexity:** [simple/medium/complex]

**Component Code:**
```tsx
[PASTE YOUR TAILWIND UI PLUS REACT COMPONENT HERE]
````

**Instructions:**

- Follow the existing folder structure in src/components/ui/
- Use kebab-case for component ID (e.g., "modern-hero-video")
- Add appropriate tags for AI discovery
- Ensure TypeScript interfaces are included
- Add to component registry with proper metadata
- Follow the naming conventions from existing components

**Expected Output:**

1. Component file path and code
2. Registry entry to add
3. Showcase page updates (if new category)

```

## 🔄 Batch Component Import Prompt

```

I have multiple Tailwind UI Plus components to import. Please process them all systematically:

**Components to Import:**

**Component 1:**

- Category: [category]
- Name: [name]
- Description: [description]
- Code: [React component code]

**Component 2:**

- Category: [category]
- Name: [name]
- Description: [description]
- Code: [React component code]

[Continue for all components...]

**Instructions:**

- Process each component following the established patterns
- Create all necessary files
- Update the component registry with all new entries
- Generate or update showcase pages as needed
- Maintain consistent naming conventions
- Add appropriate tags for AI discovery

**Expected Output:**

- All component files with correct paths
- Complete registry updates
- Showcase page updates
- Summary of what was added

```

## 📋 Category-Specific Import Prompts

### Hero Sections
```

Import these hero section components from Tailwind UI Plus:

**Category:** hero-sections
**Components:** [List component names and code]

Follow the pattern from SimpleHero and SplitHero. Each should:

- Be in src/components/ui/page-sections/hero-sections/
- Have clear prop interfaces
- Include default values
- Support dark mode
- Be fully responsive
- Have descriptive tags like: ['hero', 'landing', 'cta', etc.]

```

### Pricing Sections
```

Import these pricing components:

**Category:** pricing-sections
**Components:** [List component names and code]

Follow the SimplePricing pattern. Each should:

- Be in src/components/ui/page-sections/pricing-sections/
- Have PricingPlan interface
- Support multiple tiers
- Include popular highlighting
- Have tags like: ['pricing', 'plans', 'subscription', etc.]

```

## 🤖 Smart Component Analysis Prompt

```

Analyze this Tailwind UI Plus component and automatically determine:

1. **Best category/subcategory** based on the component's purpose
2. **Appropriate component name** following naming conventions
3. **Complexity level** (simple/medium/complex)
4. **Relevant tags** for AI discovery
5. **Key props** that should be configurable

**Component Code:**

```tsx
[PASTE COMPONENT CODE HERE]
```

**Then create:**

1. Component file in correct location
2. Registry entry with auto-generated metadata
3. Usage example with realistic props

**Auto-analyze and suggest:**

- What category this belongs in
- What makes this component unique
- What tags would help AI find it
- What props should be customizable

```

## 📦 Bulk Text File Processor Prompt

```

I have a text file with multiple Tailwind UI Plus components. Please process the entire file and:

1. **Parse each component** (separated by comments or file markers)
2. **Auto-categorize** each component based on its purpose
3. **Generate appropriate names** following conventions
4. **Create all files** in correct folder structure
5. **Update registry** with all entries
6. **Generate showcase pages** for new categories

**Text File Content:**

```
[PASTE ENTIRE TEXT FILE WITH MULTIPLE COMPONENTS HERE]
```

**File Format Expected:**

- Components separated by comments like `// Component: Hero Section 1`
- Or file markers like `--- ComponentName.tsx ---`
- Or any other clear separation you specify

**Auto-generate:**

- File paths and names
- Component IDs (kebab-case)
- Registry entries
- Tags based on component analysis
- Showcase page updates

**Output:**

- Complete file structure
- All component code
- Registry updates
- Summary report of what was added

```

## ⚡ Speed Optimization Tips

### For Maximum Speed:
1. **Batch process** 10-20 components at once
2. **Use category-specific prompts** for similar components
3. **Provide clear naming hints** to avoid back-and-forth
4. **Include context** about what each component does

### Example Super-Fast Batch:
```

Process these 15 hero section components:

1. **modern-hero-split** - Split layout with image: [code]
2. **hero-video-bg** - Video background hero: [code]
3. **hero-gradient-center** - Centered with gradient: [code]
   [...continue with all 15]

Auto-create everything following hero-sections patterns.

```

## 🎯 Expected Workflow

1. **Copy components** from Tailwind UI Plus (React format)
2. **Use appropriate prompt** above
3. **Paste component code**
4. **AI processes everything** automatically
5. **Components are immediately available** for AI reference!

This approach will let you import 500+ components in a fraction of the time! 🚀
```
