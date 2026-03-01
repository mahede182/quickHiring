# React Developer Guide - Quickhire Landing Page

## 🎯 Quick Start for React Developers

This document provides a concise overview of the component structure and best practices used in the Quickhire landing page.

---

## 📐 Component Structure Overview

```
┌─────────────────────────────────────────────┐
│              Page Container                  │
│            (app/page.tsx)                    │
└─────────────────────────────────────────────┘
                      │
        ┌─────────────┼─────────────┐
        │             │             │
   ┌────▼────┐  ┌────▼────┐  ┌────▼──────┐
   │  Header │  │   Hero   │  │ Companies │
   │Component│  │ Section  │  │ Section   │
   └─────────┘  └──────────┘  └───────────┘
        │             │             │
   [Nav Links]  [Search Bar]  [Logo Grid]
        │        [CTA Button]       │
   [Auth Btns]  [Decorative]  [Company Info]
        │        [Image]            │
        
        │
        ├─────────────────────────────────────┐
        │         Categories Section           │
        ├─────────────────────────────────────┤
        │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
        │  │ Card │ │ Card │ │ Card │ │ Card │
        │  └──────┘ └──────┘ └──────┘ └──────┘
        │  (8 category cards in grid)
        │
        ├─────────────────────────────────────┐
        │      CTA Section (Employers)         │
        ├─────────────────────────────────────┤
        │  [Primary CTA] │ [Dashboard Mock]   │
        │
        ├─────────────────────────────────────┐
        │    Featured Jobs Section             │
        ├─────────────────────────────────────┤
        │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
        │  │ Card │ │ Card │ │ Card │ │ Card │
        │  └──────┘ └──────┘ └──────┘ └──────┘
        │  (8 job cards in 4-column grid)
        │
        ├─────────────────────────────────────┐
        │    Latest Jobs Section               │
        ├─────────────────────────────────────┤
        │  ┌────────────┐ ┌────────────┐
        │  │   Card     │ │   Card     │
        │  └────────────┘ └────────────┘
        │  (8 job cards in 2-column grid)
        │
        └──────────────────────────┬───────────┘
                                   │
                              ┌────▼────┐
                              │  Footer  │
                              │Component │
                              └──────────┘
```

---

## 🧩 Component Anatomy

### **Pattern 1: Header Component**
```typescript
// Sticky header with navigation
<header className="sticky top-0 z-50">
  <nav className="flex items-center justify-between">
    {/* Logo */}
    {/* Nav Links */}
    {/* Auth Buttons */}
  </nav>
</header>
```

### **Pattern 2: Section Components with Grid Layout**
```typescript
// Reusable section wrapper
<section className="py-12 sm:py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4">
    {/* Header with Title + Show All Link */}
    <div className="flex justify-between mb-12">
      <h2>Section Title</h2>
      <Link>Show all jobs →</Link>
    </div>
    
    {/* Responsive Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map(item => <Card key={item.id} {...item} />)}
    </div>
  </div>
</section>
```

### **Pattern 3: Card Component (Reused)**
```typescript
// JobCard pattern used in multiple sections
<div className="border border-border rounded-lg p-6 hover:shadow-lg">
  {/* Header with Logo/Icon */}
  <div className="flex gap-3 mb-4">
    <div className="w-10 h-10 bg-muted rounded-lg">Logo</div>
    <div>
      <h3 className="font-semibold">Title</h3>
      <p className="text-sm text-muted-foreground">Subtitle</p>
    </div>
  </div>
  
  {/* Content */}
  <p className="text-sm mb-4">Description</p>
  
  {/* Tags */}
  <div className="flex gap-2">
    {tags.map(tag => <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary/10">{tag}</span>)}
  </div>
</div>
```

---

## 🎨 Key Design Tokens

### Color Palette
```typescript
// Primary Brand Color
--primary: oklch(0.45 0.3 260);           // Deep Blue
--primary-foreground: oklch(0.98 0 0);    // White

// Neutral Colors
--background: oklch(1 0 0);               // White
--foreground: oklch(0.16 0 0);           // Dark Gray/Black
--card: oklch(0.98 0.003 253.268);       // Off-white
--muted: oklch(0.92 0 0);                // Light Gray
--border: oklch(0.92 0 0);               // Light Border
```

### Spacing Scale (Tailwind)
```
p-4   = 16px     (padding)
gap-6 = 24px     (gap between items)
py-12 = 48px     (vertical padding)
```

### Responsive Breakpoints
```
Mobile:  < 640px    (sm:)
Tablet:  640-1024px (md:)
Desktop: > 1024px   (lg:)
```

---

## 🔧 Component Props & Data Structures

### Companies Section
```typescript
interface Company {
  name: string;
  initial: string;
}

const companies: Company[] = [
  { name: 'Vodafone', initial: 'V' },
  // ...
];
```

### Categories Section
```typescript
interface Category {
  icon: LucideIcon;
  title: string;
  jobs: number;
  color: string;
  textColor?: string;
}
```

### Job Card (Featured & Latest)
```typescript
interface Job {
  id: number;
  company: string;
  location: string;
  title: string;
  description: string;
  tags: string[];
  logo: string;
  badge?: string;  // For Latest Jobs only
}
```

---

## 🎯 Common Implementation Patterns

### 1. **Responsive Grid**
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {items.map(item => (
    <Card key={item.id} {...item} />
  ))}
</div>
// Mobile: 1 column
// Tablet: 2 columns
// Desktop: 4 columns
```

### 2. **Flexbox Navigation**
```typescript
<nav className="flex items-center justify-between">
  {/* Left side */}
  <Logo />
  
  {/* Center (hidden on mobile) */}
  <div className="hidden md:flex items-center gap-8">
    <Link>Link 1</Link>
    <Link>Link 2</Link>
  </div>
  
  {/* Right side */}
  <div className="flex items-center gap-4">
    <Button>Action</Button>
  </div>
</nav>
```

### 3. **Icon + Input Field**
```typescript
<div className="flex items-center gap-2 border border-border rounded-lg px-4 py-3">
  <SearchIcon className="h-5 w-5 text-muted-foreground" />
  <input 
    type="text" 
    placeholder="Search..."
    className="flex-1 bg-transparent outline-none"
  />
</div>
```

### 4. **Card with Hover Effects**
```typescript
<div className="border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all">
  {/* Content */}
</div>
```

### 5. **Tag Rendering**
```typescript
<div className="flex flex-wrap gap-2">
  {tags.map(tag => (
    <span 
      key={tag}
      className={`px-3 py-1 text-xs rounded-full ${
        tag === 'Full Time'
          ? 'border border-primary/30 text-primary'
          : 'bg-primary/10 text-primary'
      }`}
    >
      {tag}
    </span>
  ))}
</div>
```

---

## 🚀 Performance Considerations

### Memoization
```typescript
// For frequently re-rendered components
import { memo } from 'react';

export const JobCard = memo(function JobCard({ job }) {
  return (/* JSX */);
});
```

### Image Optimization
```typescript
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/jobs-hero.jpg"
  alt="Job search hero"
  width={500}
  height={400}
  priority
/>
```

### List Rendering Best Practices
```typescript
// Always use unique keys
{jobs.map(job => (
  <div key={job.id}>  // ✓ Use ID, not index
    {/* Content */}
  </div>
))}
```

---

## 📊 State Management Strategy

### Current Approach (Static)
- All components use static data
- No client-side state management needed
- Perfect for a static landing page

### For Future Interactivity
```typescript
// Use React hooks for filtering
import { useState } from 'react';

export function CategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  return (
    // Filter jobs based on selectedCategory
  );
}
```

---

## 🔗 Component Integration Checklist

- [x] **Header** - Navigation and branding
- [x] **Hero Section** - Main CTA and search
- [x] **Companies Section** - Social proof
- [x] **Categories Section** - Job browsing
- [x] **CTA Section** - Employer conversion
- [x] **Featured Jobs** - Showcase listings
- [x] **Latest Jobs** - Recent openings
- [x] **Footer** - Legal and newsletter

---

## 🛠️ Common Modifications

### Change Primary Color
```typescript
// In globals.css
:root {
  --primary: oklch(0.45 0.3 260);  // Change this color value
}
```

### Adjust Grid Columns
```typescript
// Before: 4 columns on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

// After: 3 columns on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### Modify Spacing
```typescript
// Before
<div className="py-12 sm:py-16 lg:py-20">

// After (more compact)
<div className="py-8 sm:py-12 lg:py-16">
```

### Add New Section
```typescript
export function MyNewSection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Content */}
      </div>
    </section>
  );
}

// Add to page.tsx
import { MyNewSection } from '@/components/my-new-section';

export default function Home() {
  return (
    <main>
      {/* ... existing sections ... */}
      <MyNewSection />
    </main>
  );
}
```

---

## 📚 Resources

- **Tailwind CSS**: https://tailwindcss.com
- **shadcn/ui**: https://ui.shadcn.com
- **Lucide Icons**: https://lucide.dev
- **Next.js Docs**: https://nextjs.org/docs

---

## ✅ Code Quality Standards

- Use semantic HTML elements
- Maintain consistent component naming (PascalCase)
- Add proper TypeScript types
- Include ARIA labels for accessibility
- Use Tailwind's responsive prefixes
- Keep components under 300 lines
- Extract reusable patterns

