# Quickhire Project Architecture

## 📁 File Structure

```
quickhire/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main landing page (component composition)
│   ├── globals.css          # Global styles & design tokens
│   └── icon.svg             # App icon
│
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── ...
│   │
│   ├── header.tsx           # Navigation header
│   ├── hero-section.tsx     # Main hero with search
│   ├── companies-section.tsx # Partner companies
│   ├── categories-section.tsx # Job categories grid
│   ├── cta-section.tsx      # Employer call-to-action
│   ├── featured-jobs-section.tsx # Featured listings
│   ├── latest-jobs-section.tsx   # Latest jobs
│   └── footer.tsx           # Site footer
│
├── lib/
│   └── utils.ts             # Utility functions (cn function)
│
├── hooks/
│   ├── use-mobile.tsx       # Mobile detection hook
│   └── use-toast.ts         # Toast notifications
│
├── public/
│   └── [static assets]
│
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies
│
├── COMPONENT_BREAKDOWN.md       # 📋 Detailed component documentation
├── REACT_DEVELOPER_GUIDE.md     # 🧩 React patterns and best practices
└── PROJECT_ARCHITECTURE.md      # 🏗️ This file
```

---

## 🔄 Data Flow Architecture

```
┌─────────────────────────────────────────┐
│         Next.js App Router              │
│         (app/page.tsx)                  │
└─────────────────────────────────────────┘
              │
              ├── Metadata (SEO)
              └── Layout Wrapper
                      │
        ┌─────────────┼─────────────┐
        │             │             │
        ▼             ▼             ▼
    [Header]      [Sections]     [Footer]
        │          │  │  │
        │          │  │  └─► Layout Component
        │          │  │
        │          │  └─► Data: Static Arrays
        │          │       ├── jobs[]
        │          │       ├── categories[]
        │          │       └── companies[]
        │          │
        │          └─► Rendering Pattern:
        │              .map(item => <Card />)
        │
        └─► Navigation State (potential)
            ├── Active link tracking
            └── Mobile menu state
```

---

## 🎯 Component Responsibility Matrix

| Component | Responsibility | Props | State | Data |
|-----------|---|---|---|---|
| Header | Navigation & Auth | None | None | Static |
| HeroSection | Main CTA & Search | None | None | Static (inputs) |
| CompaniesSection | Social Proof | None | None | companies[] |
| CategoriesSection | Job Filtering | None | None | categories[] |
| CTASection | Employer Conversion | None | None | Static |
| FeaturedJobsSection | Showcase Jobs | None | None | jobs[] |
| LatestJobsSection | Recent Jobs | None | None | jobs[] |
| Footer | Site Info | None | None | Static |

---

## 🏃 Data Flow: How Components Use Data

### 1. Static Data Definition (Inside Component)
```typescript
export function CompaniesSection() {
  const companies = [
    { name: 'Vodafone', initial: 'V' },
    // ...
  ];
  
  return (
    <section>
      {companies.map(company => (
        <div key={company.name}>
          {/* Render company */}
        </div>
      ))}
    </section>
  );
}
```

### 2. Future API Integration Pattern
```typescript
'use client';

import { useEffect, useState } from 'react';

export function JobsSection() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch from API
    fetch('/api/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <section>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  );
}
```

### 3. Server Components with Database
```typescript
// app/jobs/page.tsx (Server Component)
import { getJobs } from '@/lib/db';
import { JobCard } from '@/components/job-card';

export default async function JobsPage() {
  const jobs = await getJobs();
  
  return (
    <section>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  );
}
```

---

## 🎨 Styling Architecture

### Design Tokens (CSS Variables)
```css
/* globals.css */
:root {
  /* Colors */
  --primary: oklch(0.45 0.3 260);           /* Deep Blue */
  --foreground: oklch(0.16 0 0);           /* Dark Text */
  --background: oklch(1 0 0);              /* White BG */
  --border: oklch(0.92 0 0);               /* Light Border */
  --muted: oklch(0.92 0 0);                /* Gray */
  
  /* Spacing */
  --radius: 0.5rem;                        /* 8px border radius */
}
```

### Tailwind Utility Classes (3-Tier System)

**Tier 1: Layout**
```typescript
className="flex items-center justify-between"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
```

**Tier 2: Sizing & Spacing**
```typescript
className="px-4 py-6 gap-4"
className="w-10 h-10 rounded-lg"
```

**Tier 3: Visual Effects**
```typescript
className="border border-border hover:shadow-lg transition-all"
className="bg-primary text-primary-foreground"
```

### Complete Card Example
```typescript
<div className="border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all bg-card text-card-foreground">
  {/* Content */}
</div>

// Breaks down to:
// Layout:     border rounded-lg p-6
// Interactive: hover:shadow-lg hover:border-primary transition-all
// Colors:      border-border bg-card text-card-foreground
```

---

## 🔗 Integration Points

### Future Features & Where to Add Them

#### 1. **Search/Filter Functionality**
```typescript
// Add to: components/categories-section.tsx
// Implement: useState + filter logic
// Data source: API or local state
```

#### 2. **Job Detail Page**
```typescript
// Add: app/jobs/[id]/page.tsx
// Pattern: Dynamic route + API fetch
// Components: Reuse JobCard, add detail view
```

#### 3. **Application Form**
```typescript
// Add: components/apply-form.tsx
// Pattern: Form component with validation
// Integration: POST to API endpoint
```

#### 4. **User Authentication**
```typescript
// Add: app/auth/* routes
// Library: NextAuth.js or Supabase
// Components: Login, Sign Up pages
```

#### 5. **Admin Dashboard**
```typescript
// Add: app/admin/* routes
// Pattern: Protected routes + data management
// Components: Job management UI
```

---

## 📊 Component Composition Pattern

### Base Pattern: Section Wrapper
```typescript
export function MySectionName() {
  // Data
  const data = [/* ... */];
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Title <span className="text-primary">Accent</span>
          </h2>
          <a href="#" className="text-primary text-sm">
            Show all →
          </a>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map(item => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 🔐 Security Considerations

### Current Implementation
- ✅ Static content (no security risk)
- ✅ No data persistence
- ✅ Client-side only

### For Production Features
```typescript
// ✅ DO: Validate on server
export async function POST(request: Request) {
  const data = await request.json();
  
  // Server-side validation
  if (!isValid(data)) {
    return Response.json({ error: 'Invalid' }, { status: 400 });
  }
  
  // Process safely
  return Response.json({ success: true });
}

// ❌ DON'T: Trust client input
const result = await api.submit(formData); // No validation!
```

### Authentication Pattern
```typescript
// Protect routes with middleware
import { auth } from '@/auth';

export async function GET(request: Request) {
  const session = await auth();
  
  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  // Continue with authenticated request
}
```

---

## 📈 Performance Optimization

### Current Optimizations
- ✅ Static site generation
- ✅ CSS class reuse (Tailwind)
- ✅ Component-level code splitting
- ✅ Semantic HTML

### Future Optimizations
```typescript
// 1. Image Optimization
import Image from 'next/image';

// 2. Code Splitting
const LatestJobsSection = dynamic(
  () => import('@/components/latest-jobs-section'),
  { loading: () => <div>Loading...</div> }
);

// 3. Memoization
import { memo } from 'react';
export const JobCard = memo(function JobCard(props) {
  return /* JSX */;
});

// 4. Preloading
<link rel="preload" as="image" href="/hero-image.jpg" />
```

---

## 🧪 Testing Structure (Recommended)

```
tests/
├── unit/
│   ├── components/
│   │   ├── header.test.tsx
│   │   ├── job-card.test.tsx
│   │   └── ...
│   └── lib/
│       └── utils.test.ts
│
├── integration/
│   └── pages/
│       └── home.test.tsx
│
└── e2e/
    └── landing-page.spec.ts
```

### Test Example
```typescript
import { render, screen } from '@testing-library/react';
import { Header } from '@/components/header';

describe('Header Component', () => {
  it('renders navigation links', () => {
    render(<Header />);
    
    expect(screen.getByText('Find Jobs')).toBeInTheDocument();
    expect(screen.getByText('Browse Companies')).toBeInTheDocument();
  });
  
  it('renders auth buttons', () => {
    render(<Header />);
    
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });
});
```

---

## 📝 Component Template (For New Sections)

```typescript
'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function NewSectionName() {
  // Data
  const items = [
    // ...
  ];
  
  // Render
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Section Title <span className="text-primary">Highlight</span>
          </h2>
          <Link 
            href="#" 
            className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-2"
          >
            Show all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 🚀 Deployment Checklist

- [ ] Build succeeds: `npm run build`
- [ ] No console errors
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] All links functional
- [ ] Images optimized
- [ ] SEO metadata set
- [ ] Performance tested
- [ ] Accessibility checked (a11y)
- [ ] Deploy to Vercel

```bash
# Build locally
npm run build

# Test production build
npm run start

# Deploy
git push origin main
```

---

## 📚 Component Dependencies

```
App
├── Header
│   └── Button (shadcn/ui)
├── HeroSection
│   ├── Input (shadcn/ui)
│   ├── Button (shadcn/ui)
│   └── Icons (lucide-react)
├── CompaniesSection
│   └── No dependencies
├── CategoriesSection
│   └── Icons (lucide-react)
├── CTASection
│   ├── Button (shadcn/ui)
│   └── No data dependencies
├── FeaturedJobsSection
│   └── Icons (lucide-react)
├── LatestJobsSection
│   └── Icons (lucide-react)
└── Footer
    ├── Button (shadcn/ui)
    └── Icons (lucide-react)
```

---

## ✨ Summary

This architecture provides:
- 📦 **Modular Components**: Easy to understand and modify
- 🎨 **Consistent Styling**: Design tokens + Tailwind
- 🔄 **Scalable Data Handling**: Static → API → Database patterns
- 🚀 **Performance**: Server components + static generation
- 🛠️ **Developer Experience**: Clear file structure + documentation
- ♿ **Accessibility**: Semantic HTML + ARIA labels

