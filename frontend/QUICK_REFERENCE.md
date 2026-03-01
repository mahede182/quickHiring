# Quickhire Quick Reference Card

**Print this for your desk!** 📌

---

## 🏗️ Component Quick Map

| Component | File | Purpose | Data |
|---|---|---|---|
| Header | `header.tsx` | Navigation + Auth | Static |
| Hero | `hero-section.tsx` | Main CTA + Search | Static |
| Companies | `companies-section.tsx` | Social proof | `companies[]` |
| Categories | `categories-section.tsx` | Job filtering | `categories[]` |
| CTA | `cta-section.tsx` | Employer signup | Static |
| Featured Jobs | `featured-jobs-section.tsx` | Showcase jobs | `jobs[]` |
| Latest Jobs | `latest-jobs-section.tsx` | Recent jobs | `jobs[]` |
| Footer | `footer.tsx` | Site info | Static |

---

## 🎨 Color Quick Reference

```
Primary Blue:     #4C5AFF  (oklch(0.45 0.3 260))  → Use for CTAs
White:            #FFFFFF  (oklch(1 0 0))        → Background
Dark Gray:        #262626  (oklch(0.16 0 0))     → Text
Light Gray:       #EBEBEB  (oklch(0.92 0 0))     → Borders
```

---

## 🔤 Typography Quick Reference

| Element | Size | Weight | Usage |
|---------|------|--------|-------|
| H1 (Hero) | 48-60px | Bold | Main headline |
| H2 (Section) | 30-36px | Bold | Section titles |
| H3 (Card) | 16px | Semibold | Card titles |
| Body | 14-16px | Regular | Description text |
| Small | 12px | Regular | Labels, tags |
| Muted | 14px | Regular | Gray text |

---

## 📐 Spacing Quick Reference

```
Padding:       p-4 (16px), p-6 (24px), p-8 (32px)
Gap:           gap-4 (16px), gap-6 (24px)
Section Py:    py-12 sm:py-16 lg:py-20
Card Gap:      gap-6
```

---

## 📱 Responsive Quick Reference

```
Mobile:  < 640px   (grid-cols-1)
Tablet:  640-1024  (md: grid-cols-2)
Desktop: > 1024px  (lg: grid-cols-4)
```

**Common Pattern:**
```typescript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
```

---

## 🔧 Copy-Paste Components

### Section Wrapper (Template)
```typescript
export function NewSection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Title <span className="text-primary">Accent</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Items */}
        </div>
      </div>
    </section>
  );
}
```

### Card Component (Template)
```typescript
<div className="border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all bg-card">
  <div className="flex gap-3 mb-4">
    <div className="w-10 h-10 bg-muted rounded-lg">Icon</div>
    <div>
      <h3 className="font-semibold">Title</h3>
      <p className="text-sm text-muted-foreground">Subtitle</p>
    </div>
  </div>
  <p className="text-sm mb-4">Description</p>
  <div className="flex gap-2">
    {/* Tags */}
  </div>
</div>
```

### Button Pattern
```typescript
<button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
  Click me
</button>
```

---

## ⚡ Common Tasks

### Change Primary Color
1. Open `app/globals.css`
2. Find `--primary: oklch(0.45 0.3 260)`
3. Change the color value
4. Done! All components update automatically

### Add New Section
1. Create `components/new-section.tsx`
2. Use section template above
3. Import in `app/page.tsx`
4. Add to component composition

### Modify Grid Columns
```
Before:  lg:grid-cols-4  (4 columns)
After:   lg:grid-cols-3  (3 columns)
```

### Adjust Spacing
```
Compact:   py-8 sm:py-12 lg:py-16
Normal:    py-12 sm:py-16 lg:py-20
Spacious:  py-16 sm:py-20 lg:py-24
```

---

## 🚀 File Locations

```
Main Page:        app/page.tsx
Layout:           app/layout.tsx
Globals:          app/globals.css
Components:       components/*.tsx
Utilities:        lib/utils.ts
Tailwind Config:  tailwind.config.ts
```

---

## ✅ Before You Deploy

- [ ] `npm run build` succeeds
- [ ] No console errors
- [ ] Tested on mobile (375px)
- [ ] Tested on desktop (1024px)
- [ ] All links work
- [ ] Images load
- [ ] No broken components

---

## 🔗 Key Imports

```typescript
// Components
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Icons
import { Search, MapPin, ArrowRight, Briefcase } from 'lucide-react';

// Next.js
import Link from 'next/link';
import Image from 'next/image';

// Utilities
import { cn } from '@/lib/utils';
```

---

## 🎯 Component Data Structure

### Job Card Data
```typescript
interface Job {
  id: number;
  company: string;
  location: string;
  title: string;
  description: string;
  tags: string[];
  logo: string;
}
```

### Category Data
```typescript
interface Category {
  icon: LucideIcon;
  title: string;
  jobs: number;
  color: string;
}
```

### Company Data
```typescript
interface Company {
  name: string;
  initial: string;
}
```

---

## 🎨 CSS Classes Cheat Sheet

```
Layout:
  flex items-center justify-between
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
  max-w-7xl mx-auto px-4

Spacing:
  p-4 p-6 p-8          (padding)
  gap-4 gap-6          (grid/flex gap)
  py-12 sm:py-16 lg:py-20  (section padding)

Typography:
  text-xs text-sm text-base text-lg text-xl text-2xl text-3xl text-4xl text-5xl text-6xl
  font-regular font-medium font-semibold font-bold
  text-foreground text-muted-foreground text-primary

Colors:
  bg-background bg-card bg-primary
  text-foreground text-muted-foreground text-primary-foreground
  border border-border
  hover:shadow-lg hover:border-primary

Visual:
  rounded-lg rounded-full
  border border-border
  transition-all
```

---

## 📊 Responsive Breakpoints Reference

```
Prefix    │ Width    │ Default → Mobile
──────────┼──────────┼──────────────────
(none)    │ 0px      │ Mobile styles
sm:       │ 640px    │ 
md:       │ 768px    │ 
lg:       │ 1024px   │ Desktop styles
xl:       │ 1280px   │ Large desktop
```

**Example:** `text-sm md:text-base lg:text-lg`
- Small on mobile
- Base on tablet
- Large on desktop

---

## 🔄 Data Flow Pattern

```
Static Data (Current):
  Component → data = [...]  → .map() → JSX

API Integration (Future):
  fetch('/api/jobs')
  → useState(jobs)
  → useEffect()
  → .map() → JSX

Server Component (Alternative):
  async function Component()
  const data = await db.query()
  return JSX
```

---

## 🛠️ Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Lint and fix code
npm run lint

# Format with Prettier (if configured)
npm run format
```

---

## 📚 Documentation Files

Created 4 comprehensive guides:

1. **COMPONENT_BREAKDOWN.md** (404 lines)
   - Detailed component documentation
   - Feature descriptions
   - Data structures
   - Styling patterns

2. **REACT_DEVELOPER_GUIDE.md** (421 lines)
   - React patterns and best practices
   - Component anatomy
   - Code examples
   - Performance tips

3. **PROJECT_ARCHITECTURE.md** (531 lines)
   - File structure
   - Data flow
   - Integration points
   - Security considerations

4. **DESIGN_SYSTEM_SUMMARY.md** (515 lines)
   - Color palette
   - Typography system
   - Component patterns
   - Accessibility features

5. **QUICK_REFERENCE.md** (This file)
   - Quick lookup reference
   - Copy-paste templates
   - Common tasks

---

## 💡 Pro Tips

1. **Always use `key={item.id}` in maps** - Never use index!
2. **Use `cn()` for conditional classes** - `cn(baseClass, isFocused && 'ring-2')`
3. **Component files = PascalCase** - `JobCard.tsx` not `job-card.tsx`
4. **Keep components under 300 lines** - Split if longer
5. **Use semantic HTML** - `<button>` not `<div onClick>`
6. **Test on mobile** - Always check responsive!
7. **Use `next/image`** - For optimization
8. **Reuse patterns** - DRY principle
9. **Check contrast** - WCAG AA minimum
10. **Document components** - Help future you!

---

## 🎉 You're Ready!

You now have a complete landing page with:
- ✅ 8 well-structured components
- ✅ Responsive design (mobile-first)
- ✅ Accessible markup
- ✅ Consistent styling
- ✅ Reusable patterns
- ✅ Production-ready code

**Happy coding!** 🚀

