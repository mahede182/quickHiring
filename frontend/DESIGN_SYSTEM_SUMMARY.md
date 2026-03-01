# Quickhire Design System Summary

## 🎯 Visual Design Overview

### Color Palette

```
┌─────────────────────────────────────────────────────────────┐
│                    PRIMARY COLOR                             │
│                                                              │
│  oklch(0.45 0.3 260) - Deep Blue #4C5AFF                  │
│  ████████████████████████████████████████████████            │
│                                                              │
│  Used for: CTAs, Links, Accents, Highlights               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   NEUTRAL COLORS                             │
│                                                              │
│  Background:        oklch(1 0 0)        - White           │
│  Foreground:        oklch(0.16 0 0)     - Dark Gray        │
│  Card:              oklch(0.98 0.003)   - Off-white        │
│  Border:            oklch(0.92 0 0)     - Light Gray       │
│  Muted:             oklch(0.92 0 0)     - Gray             │
│                                                              │
│  Usage: Text, backgrounds, borders, separators             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              SEMANTIC COLORS                                 │
│                                                              │
│  Primary Foreground:  oklch(0.98 0 0) - White (on Primary)│
│  Muted Foreground:    oklch(0.55 0)   - Gray Text         │
│  Accent:              oklch(0.45 0.3 260) - Same as Primary│
│                                                              │
│  Destructive:         oklch(0.577 0.245 27.325) - Red     │
│  Success:             oklch(0.72 0.155 142.5) - Green     │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔤 Typography System

### Font Stack
```
Primary Font:   Geist (sans-serif)
Fallback:       -apple-system, BlinkMacSystemFont, "Segoe UI"
Monospace:      Geist Mono
```

### Font Sizes & Line Heights
```
┌────────────────────────────────────────────────────────────┐
│ SIZE        │ USAGE               │ LINE-HEIGHT            │
├────────────────────────────────────────────────────────────┤
│ 12px (xs)   │ Small labels, tags   │ 16px (1.33)           │
│ 14px (sm)   │ Body text, helpers   │ 20px (1.43)           │
│ 16px (base) │ Default text        │ 24px (1.5)            │
│ 18px (lg)   │ Subheadings         │ 28px (1.56)           │
│ 20px (xl)   │ Headings            │ 28px (1.4)            │
│ 24px (2xl)  │ Section titles      │ 32px (1.33)           │
│ 30px (3xl)  │ Page titles         │ 36px (1.2)            │
│ 36px (4xl)  │ Hero headlines      │ 40px (1.11)           │
│ 48px (5xl)  │ Large hero text     │ 1 (tight)             │
│ 60px (6xl)  │ Extra large hero    │ 1 (tight)             │
└────────────────────────────────────────────────────────────┘

Font Weights:
  - Regular: 400 (body text)
  - Medium:  500 (labels, UI)
  - Semibold: 600 (component headings)
  - Bold:    700 (section titles, emphasis)
```

### Text Styles By Component

```
Header
  Logo:       24px Semibold
  Nav Links:  14px Regular
  Buttons:    14px Semibold

Hero
  Main H1:    48-60px Bold with primary accent
  Subtitle:   16-18px Regular muted
  CTA:        14px Semibold primary

Sections
  Titles:     30-36px Bold
  Highlights: Same size, primary color
  Cards:      16px Semibold (title), 14px Regular (desc)
  Tags:       12px Semibold

Footer
  Headers:    16px Semibold
  Links:      14px Regular
  Copyright:  12px Muted
```

---

## 📐 Spacing & Layout

### Spacing Scale (Tailwind)
```
0px   → 0
4px   → 1
8px   → 2
12px  → 3
16px  → 4 (base unit)
20px  → 5
24px  → 6
28px  → 7
32px  → 8
36px  → 9
40px  → 10
...
64px  → 16
...
96px  → 24
```

### Section Padding
```
Mobile:  px-4 (16px sides)   py-8 (32px top/bottom)
Tablet:  px-6 (24px sides)   py-12 (48px top/bottom)
Desktop: px-8 (32px sides)   py-16-20 (64-80px top/bottom)

Standard section: py-12 sm:py-16 lg:py-20
Compact section:  py-8 sm:py-12 lg:py-16
Spacious section: py-16 sm:py-20 lg:py-24
```

### Component Spacing
```
Card padding:        6 (24px)
Card gap:           6 (24px)
Grid gap:           6 (24px)
Input padding:      12px x 16px
Button padding:     8-12px x 16-24px
```

---

## 🎨 Component Styling Patterns

### 1. **Card Pattern**
```typescript
Base:
  border: 1px solid --border
  border-radius: 0.5rem
  padding: 24px
  background: --card

Interactive:
  hover:shadow-lg
  hover:border-primary
  transition-all (200ms)

States:
  disabled: opacity-50
  focused: ring-2 ring-primary
```

### 2. **Button Pattern**
```typescript
Primary Button:
  background: --primary
  color: --primary-foreground
  border-radius: 0.5rem
  padding: 10px 24px
  font-weight: 600
  
  hover: brightness(0.9)
  active: brightness(0.8)
  disabled: opacity-50

Ghost Button:
  background: transparent
  color: --foreground
  border: 1px solid --border
  
  hover: background-color: --muted
```

### 3. **Input Pattern**
```typescript
Container:
  display: flex
  align-items: center
  gap: 8px
  padding: 12px 16px
  border: 1px solid --border
  border-radius: 0.5rem
  background: --card

States:
  focus: ring-2 ring-primary
  disabled: opacity-50
  error: border-red-500
```

### 4. **Tag/Badge Pattern**
```typescript
Filled Tag:
  background: oklch(0.45 0.3 260 / 0.1)
  color: --primary
  padding: 6px 12px
  border-radius: 9999px
  font-size: 12px

Outlined Tag:
  border: 1px solid --primary
  color: --primary
  background: transparent
  padding: 6px 12px
  border-radius: 9999px
```

---

## 📱 Responsive Design

### Breakpoints
```
Mobile:  0px - 639px   (sm:)
Tablet:  640px - 1023px (md:)
Desktop: 1024px+       (lg:)
Large:   1280px+       (xl:)

Ratios:
sm to md: 640/640 = 1
md to lg: 1024/640 = 1.6
lg to xl: 1280/1024 = 1.25
```

### Responsive Grid Examples
```
2-Column Grid:
  Mobile:  1 column
  Tablet:  1 column (md:grid-cols-1)
  Desktop: 2 columns (lg:grid-cols-2)

  className="grid grid-cols-1 lg:grid-cols-2 gap-6"

4-Column Grid:
  Mobile:  1 column
  Tablet:  2 columns (md:grid-cols-2)
  Desktop: 4 columns (lg:grid-cols-4)

  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"

8-Column Masonry:
  Mobile:  1 column
  Tablet:  2 columns (md:grid-cols-2)
  Desktop: 4 columns (lg:grid-cols-4)

  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
```

### Responsive Typography
```
Mobile:  text-3xl (30px)
Tablet:  sm:text-4xl (36px)
Desktop: lg:text-5xl (48px)

className="text-3xl sm:text-4xl lg:text-5xl font-bold"
```

---

## 🎯 Visual Hierarchy

### Information Priority

**Level 1 (Highest Priority)**
- Large headlines (36-60px)
- Primary color accents
- Hero images
- Main CTA buttons

**Level 2**
- Section headings (24-36px)
- Secondary descriptions
- Category icons
- Featured content

**Level 3**
- Body text (14-16px)
- Job descriptions
- Helper text
- Tags and metadata

**Level 4 (Lowest Priority)**
- Small labels (12px)
- Muted text
- Footer information
- Secondary links

### Visual Weight
```
Element          │ Weight │ How Achieved
─────────────────┼────────┼──────────────────────
H1 Hero          │  10    │ 48-60px, Bold, Primary
Section H2       │  8     │ 30-36px, Bold
Card Title       │  7     │ 16px, Semibold
Body Text        │  5     │ 14-16px, Regular
Muted Text       │  3     │ 14px, Gray color
Small Label      │  1     │ 12px, Muted
```

---

## ✨ Interactive Effects

### Transitions
```css
Standard Transition:
  transition: all 200ms ease-out

Properties to Animate:
  - shadow (hover)
  - border-color (hover)
  - background-color (hover)
  - color (hover)
  - transform (hover/active)
```

### Hover States
```
Card:
  shadow: 0 0 0 → shadow-lg
  border: border-color → border-primary
  time: 200ms

Button:
  background: primary → primary-dark
  time: 100ms

Link:
  color: foreground → primary
  time: 150ms
```

### Loading & Disabled States
```
Disabled:
  opacity: 0.5
  cursor: not-allowed
  pointer-events: none

Loading:
  opacity: 0.6
  animation: pulse 2s infinite
```

---

## 🔐 Accessibility Features

### Color Contrast
```
Text on Primary:        white (#FFFFFF) on blue - 7.5:1 ✓
Text on White:          dark (#262626) on white - 9.7:1 ✓
Muted Text on White:    gray (#6B7280) on white - 5.1:1 ✓
Links:                  primary blue - 4.5:1 minimum ✓
```

### Interactive Elements
```
Button Size:     min 44px x 44px
Link Size:       min 24px height
Target Size:     min 24px x 24px
Focus Ring:      2px primary color
Outline:         2px solid primary

Focus Visible:
  :focus-visible {
    outline: 2px solid --ring
    outline-offset: 2px
  }
```

### ARIA & Semantics
```
Landmarks:
  <header>      Navigation
  <main>        Page content
  <section>     Content sections
  <footer>      Footer content

Labels:
  <button aria-label="Close menu">×</button>
  <img alt="Description" />
  <input aria-label="Search" />

Live Regions:
  aria-live="polite"      (updates announced)
  aria-live="assertive"   (urgent updates)
```

---

## 🎨 Component Library Reference

### Shadcn/UI Components Used
```
- Button
- Input
- Card
- Badge (Tags)
- Icons (via lucide-react)
```

### Icon Set
- **Library**: lucide-react
- **Size**: 16px, 20px, 24px
- **Color**: Inherit or muted-foreground
- **Usage**: Navigation, inputs, badges

### Example Icons
```
Search          → 20px
MapPin          → 20px
ArrowRight      → 16px
Briefcase       → 20px
Mail            → 20px
BarChart3       → 24px
```

---

## 🎯 Design Principles

### 1. **Consistency**
- Reuse components and patterns
- Maintain spacing scales
- Keep color palette limited (3-5 colors)
- Use same typography weights/sizes

### 2. **Clarity**
- Clear hierarchy with size differences
- Descriptive headings and labels
- Sufficient whitespace
- Meaningful icon usage

### 3. **Accessibility**
- Min 4.5:1 contrast ratio
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly

### 4. **Performance**
- CSS reuse with Tailwind
- Minimal custom CSS
- Optimized images
- Fast load times

### 5. **Responsiveness**
- Mobile-first approach
- Flexible layouts
- Touch-friendly targets (44px min)
- Scalable typography

---

## 📋 QA Checklist

### Visual QA
- [ ] Colors match design tokens
- [ ] Typography sizes are consistent
- [ ] Spacing follows scale (4, 8, 12, 16px units)
- [ ] Buttons are 44px minimum height
- [ ] Cards have consistent padding/borders
- [ ] Shadows are subtle and consistent
- [ ] Icons are properly sized and aligned
- [ ] Borders and separators use --border color

### Responsive QA
- [ ] Mobile layout (375px width)
- [ ] Tablet layout (768px width)
- [ ] Desktop layout (1024px width)
- [ ] Large desktop (1280px width)
- [ ] No horizontal scrolling on mobile
- [ ] Text is readable on all sizes
- [ ] Images scale properly

### Accessibility QA
- [ ] Color contrast passes WCAG AA (4.5:1)
- [ ] Focus visible on all interactive elements
- [ ] Keyboard navigation works (Tab, Enter)
- [ ] Images have alt text
- [ ] Form inputs have labels
- [ ] Error messages are clear
- [ ] Page structure is semantic (h1, h2, etc.)

### Performance QA
- [ ] Lighthouse score > 90
- [ ] First paint < 1s
- [ ] Time to interactive < 3s
- [ ] No layout shifts
- [ ] CSS is minified
- [ ] Images are optimized

---

## 📚 Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **OKLCH Colors**: https://oklch.space/
- **Lucide Icons**: https://lucide.dev/
- **WCAG 2.1**: https://www.w3.org/WAI/WCAG21/quickref/

