# Quickhire - Visual Component Diagrams

All diagrams for understanding the component structure and data flow.

---

## 1️⃣ Page Composition - Component Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                      Landing Page                                │
│                    (app/page.tsx)                                │
│  Import all sections and compose into main                      │
└─────────────────────────────────────────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
    (sticky)          (content)           (footer)
        │                  │                  │
        ▼                  ▼                  ▼
    ┌────────┐      ┌────────────┐      ┌────────┐
    │ HEADER │      │ 6 SECTIONS │      │ FOOTER │
    ├────────┤      ├────────────┤      ├────────┤
    │ Logo   │──┐   │ Hero       │      │ 4 Cols │
    │ Nav    │  │   │ Companies  │      │ Links  │
    │ Auth   │  │   │ Categories │      │ Newsletter
    └────────┘  │   │ CTA        │      │ Social
                │   │ Featured   │      │ Copyright
                │   │ Latest     │      └────────┘
                │   └────────────┘
                │
                └─► Always visible
                    (top of page)
```

---

## 2️⃣ Component Breakdown - Internal Structure

### Header Component
```
┌─────────────────────────────────────────────────┐
│                    Header                        │
├─────────────────────────────────────────────────┤
│                                                 │
│  [Logo]      [Find Jobs] [Browse]     [L] [S]  │
│               Companies             Button     │
│                                                 │
└─────────────────────────────────────────────────┘

Directory Structure:
  components/
    └── header.tsx
        ├── Logo (icon + text)
        ├── Nav Links (hidden on mobile)
        └── Auth Buttons (Login, Sign Up)
```

### Hero Section
```
┌──────────────────────────────────────────────────────────┐
│                      Hero Section                         │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Discover more than 5000+ Jobs                          │
│  ▁▁▁▁▁▁ (decoration)                                     │
│                                                          │
│  Great platform for job seekers...                       │
│                                                          │
│  [Search] [Location] → [Search Button]                  │
│  Popular: UI Designer, UX...                             │
│                                                          │
│  ────────────────────────────────────────────            │
│  │                          │                           │
│  │ Left Content             │ Right Image               │
│  │ (1/2 width on desktop)   │ (1/2 width, hidden mobile)
│  │                          │                           │
│  ────────────────────────────────────────────            │
│                                                          │
└──────────────────────────────────────────────────────────┘

Directory Structure:
  components/
    └── hero-section.tsx
        ├── Headline (h1)
        ├── Subheading (p)
        ├── Search Box
        │   ├── Input 1 (Job title)
        │   ├── Input 2 (Location)
        │   └── Search Button
        ├── Popular Tags
        └── Right Image (decorative)
```

### Companies Section
```
┌──────────────────────────────────────────────────────────┐
│        Companies we helped grow                           │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  [V]Vodafone  [I]Intel  [T]Tesla  [A]AMD  [T]Talkit    │
│                                                          │
│  Horizontal layout with logos                            │
│                                                          │
└──────────────────────────────────────────────────────────┘

Directory Structure:
  components/
    └── companies-section.tsx
        └── Companies Grid
            └── 5x Company Items
                ├── Logo badge
                └── Company name
```

### Categories Section
```
┌──────────────────────────────────────────────────────────┐
│ Explore by category              [Show all jobs →]       │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐ ...       │
│  │  🎨       │  │  📊       │  │  💜 (alt)  │           │
│  │ Design    │  │ Sales     │  │ Marketing  │ ← Highlight
│  │ 235 jobs  │  │ 756 jobs  │  │ 140 jobs   │           │
│  └───────────┘  └───────────┘  └───────────┘           │
│                                                          │
│  4 rows of categories, 4 columns on desktop             │
│                                                          │
└──────────────────────────────────────────────────────────┘

Directory Structure:
  components/
    └── categories-section.tsx
        ├── Section Title
        ├── Show All Link
        └── Categories Grid (8 cards)
            └── Category Card x8
                ├── Icon
                ├── Title
                ├── Job count
                └── Arrow
```

### CTA Section (Employer)
```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ┌────────────────────┐    ┌──────────────────────┐    │
│  │ Blue Background    │    │ Dashboard Mock UI    │    │
│  │                    │    │                      │    │
│  │ Start posting      │    │ ┌──────────┐        │    │
│  │ jobs today         │    │ │ ┌─┐ ┌─┐ │        │    │
│  │                    │    │ │ │░│ │░│ │ Chart  │    │
│  │ Free for 30 days   │    │ │ └─┘ └─┘ │        │    │
│  │ [Sign Up Button]   │    │ │ Jobs: 12 │        │    │
│  │                    │    │ │ Apps: 67 │        │    │
│  └────────────────────┘    │ └──────────┘        │    │
│                            └──────────────────────┘    │
│                                                          │
└──────────────────────────────────────────────────────────┘

Directory Structure:
  components/
    └── cta-section.tsx
        ├── Left Column
        │   ├── Headline
        │   ├── Description
        │   └── Sign Up Button
        └── Right Column (hidden on mobile)
            └── Mock Dashboard
                ├── Header bar
                ├── Stats grid
                ├── Chart bars
                └── Metrics
```

### Featured Jobs Section
```
┌──────────────────────────────────────────────────────────┐
│ Featured jobs               [Show all jobs →]            │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ...        │
│  │ 📧       │  │ 🎨       │  │ 📈       │  ...        │
│  │ Email    │  │ Brand    │  │ Pitch    │             │
│  │ Marketing│  │ Designer │  │ Manager  │             │
│  │ Madrid   │  │ SF       │  │ Berlin   │             │
│  │          │  │          │  │          │             │
│  │ We are...│  │ Designer │  │ Pitch is │             │
│  │          │  │ to help  │  │ looking  │             │
│  │          │  │          │  │          │             │
│  │ #Mark #Dsg│  │ #Design  │  │ #Mark #Dsg           │
│  │ ┌Full Time┐ │ ┌Full Time┐ │ ┌Full Time┐           │
│  └──────────┘  └──────────┘  └──────────┘            │
│                                                          │
│  8 cards total (4 columns on desktop)                   │
│                                                          │
└──────────────────────────────────────────────────────────┘

Directory Structure:
  components/
    └── featured-jobs-section.tsx
        ├── Section Header
        ├── Show All Link
        └── Jobs Grid (8 cards)
            └── Job Card x8
                ├── Logo + Company Header
                ├── Title
                ├── Description
                ├── Tags/Skills
                └── Full Time Badge
```

### Latest Jobs Section
```
┌──────────────────────────────────────────────────────────┐
│ Latest jobs open            [Show all jobs →]            │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────────────────┐  ┌──────────────────────┐ │
│  │ 📱 Social Media Asst     │  │ 🎨 Brand Designer   │ │
│  │ Paris, France     [New]  │  │ San Francisco [New] │ │
│  │                          │  │                      │ │
│  │ [Full Time] #Mark #Design│  │ [Full Time] #Mark   │ │
│  │                          │  │                      │ │
│  └──────────────────────────┘  └──────────────────────┘ │
│                                                          │
│  [More cards below...]                                   │
│                                                          │
│  8 cards total (2 columns on desktop)                   │
│                                                          │
└──────────────────────────────────────────────────────────┘

Directory Structure:
  components/
    └── latest-jobs-section.tsx
        ├── Section Header
        ├── Show All Link
        └── Jobs Grid (2 columns)
            └── Job Card x8
                ├── Logo + Company Header
                ├── Location
                ├── "New" Badge
                └── Tags
```

### Footer
```
┌──────────────────────────────────────────────────────────┐
│ [Q] Quickhire    About        Resources    Newsletter    │
├──────────────────────────────────────────────────────────┤
│                                                          │
│ Great platform... Companies   Help Desk   The latest... │
│                   Pricing      Guide      [Email Input] │
│                   Terms        Updates    [Subscribe]   │
│                   Advice       Contact Us               │
│                                                          │
├──────────────────────────────────────────────────────────┤
│ © 2025 Quickhire    [f] [in] [tw] [ig]                 │
└──────────────────────────────────────────────────────────┘

Directory Structure:
  components/
    └── footer.tsx
        ├── Brand Section
        ├── About Links
        ├── Resources Links
        ├── Newsletter Form
        ├── Divider
        └── Bottom Section
            ├── Copyright
            └── Social Links
```

---

## 3️⃣ Data Flow Architecture

### Static Data Flow (Current)
```
┌─────────────────────────────────────────────────┐
│     Component Receives Data                      │
└────────────┬────────────────────────────────────┘
             │
             ▼
     ┌─────────────────┐
     │  Define Array   │
     │  of Data Items  │
     └────────┬────────┘
              │
              ▼
     ┌─────────────────┐
     │  .map(item =>   │
     │  <Card />)      │
     └────────┬────────┘
              │
              ▼
     ┌─────────────────┐
     │  Render to DOM  │
     │  (Browser)      │
     └─────────────────┘

Code Pattern:
  const items = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" }
  ];

  return (
    items.map(item => (
      <Card key={item.id} {...item} />
    ))
  );
```

### Future: API Integration Flow
```
┌──────────────────────────────┐
│  Component Mounts            │
└────────────┬─────────────────┘
             │
             ▼
     ┌───────────────────┐
     │  useState(data)   │
     │  setLoading(true) │
     └────────┬──────────┘
              │
              ▼
     ┌──────────────────────┐
     │  useEffect(() => {   │
     │  fetch('/api/jobs')  │
     └────────┬─────────────┘
              │
              ▼
     ┌──────────────────────┐
     │  Response arrives    │
     │  setData(response)   │
     │  setLoading(false)   │
     └────────┬─────────────┘
              │
              ▼
     ┌──────────────────────┐
     │  .map(item =>        │
     │  <Card />)           │
     └────────┬─────────────┘
              │
              ▼
     ┌──────────────────────┐
     │  Render to DOM       │
     └──────────────────────┘
```

---

## 4️⃣ Responsive Grid Breakdown

### 4-Column Grid (Most Common)
```
Desktop (1024px+):
┌──────┬──────┬──────┬──────┐
│ Card │ Card │ Card │ Card │
├──────┼──────┼──────┼──────┤
│ Card │ Card │ Card │ Card │
└──────┴──────┴──────┴──────┘
class: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4

Tablet (640px - 1024px):
┌──────────┬──────────┐
│  Card    │  Card    │
├──────────┼──────────┤
│  Card    │  Card    │
├──────────┼──────────┤
│  Card    │  Card    │
├──────────┼──────────┤
│  Card    │  Card    │
└──────────┴──────────┘

Mobile (< 640px):
┌──────────────────┐
│      Card        │
├──────────────────┤
│      Card        │
├──────────────────┤
│      Card        │
├──────────────────┤
│      Card        │
└──────────────────┘
```

### 2-Column Grid (Latest Jobs)
```
Desktop (1024px+):
┌──────────────┬──────────────┐
│   Job Card   │   Job Card   │
├──────────────┼──────────────┤
│   Job Card   │   Job Card   │
└──────────────┴──────────────┘
class: grid grid-cols-1 lg:grid-cols-2

Mobile:
┌──────────────────┐
│   Job Card       │
├──────────────────┤
│   Job Card       │
└──────────────────┘
```

---

## 5️⃣ Styling Layers (Tailwind)

```
┌─────────────────────────────────────────────────┐
│           Tailwind CSS Architecture              │
└─────────────────────────────────────────────────┘

Layer 1: Global Base
  - Reset styles
  - HTML, body defaults
  - Design tokens

Layer 2: Component Structure
  - flex, grid
  - p-4, m-0
  - w-full, h-auto

Layer 3: Typography
  - text-3xl, text-sm
  - font-bold, font-regular
  - text-foreground, text-muted

Layer 4: Colors & Visual
  - bg-card, bg-primary
  - border, border-border
  - text-primary-foreground

Layer 5: Interactive Effects
  - hover:shadow-lg
  - hover:border-primary
  - transition-all

Layer 6: Responsive
  - sm:, md:, lg:
  - Mobile first!
  - Cascade overrides
```

---

## 6️⃣ Color Application Map

```
┌─ Primary Blue (oklch 0.45 0.3 260) ─┐
│                                     │
│ Uses:                               │
│  • Section headings (highlights)    │
│  • CTA buttons                      │
│  • Links                            │
│  • Focus rings                      │
│  • Active states                    │
│  • Accent badges                    │
└─────────────────────────────────────┘

┌─ Neutral Colors ──────────────────┐
│                                   │
│ White (oklch 1 0 0):             │
│  • Background                     │
│  • Card backgrounds               │
│                                   │
│ Dark Gray (oklch 0.16 0 0):      │
│  • Body text                      │
│  • Headings                       │
│                                   │
│ Light Gray (oklch 0.92 0 0):     │
│  • Borders                        │
│  • Dividers                       │
│  • Card backgrounds               │
│                                   │
│ Muted Gray (oklch 0.92 0 0):     │
│  • Secondary text                 │
│  • Placeholder text               │
│  • Disabled states                │
└─────────────────────────────────────┘
```

---

## 7️⃣ Component State Changes

```
BUTTON States:
  Default      →  Hover        →  Active      →  Disabled
  ┌──────────┐    ┌──────────┐    ┌──────────┐   ┌──────────┐
  │ Primary  │    │ Darker   │    │ Darkest  │   │ Muted    │
  │ Color    │ ─→ │ Color    │ ─→ │ Color    │ → │ (50%)    │
  └──────────┘    └──────────┘    └──────────┘   └──────────┘

CARD States:
  Default      →  Hover            →  Focused
  ┌──────────┐    ┌──────────────┐    ┌──────────────┐
  │ Border   │    │ Border:      │    │ Border +     │
  │ Light    │ ─→ │ Primary,     │ ─→ │ Ring:        │
  │ Gray     │    │ Shadow       │    │ Primary      │
  └──────────┘    └──────────────┘    └──────────────┘

INPUT States:
  Default      →  Focus              →  Error
  ┌──────────┐    ┌──────────────┐    ┌──────────────┐
  │ Border:  │    │ Border:      │    │ Border:      │
  │ Light    │ ─→ │ Primary,     │ ─→ │ Red,         │
  │ Gray     │    │ Ring-2       │    │ Error text   │
  └──────────┘    └──────────────┘    └──────────────┘
```

---

## 8️⃣ Spacing Reference Map

```
                  ↑ Margin/Padding
                  │
         py-12    │  48px
         py-8     │  32px
         py-4     │  16px
                  │
Inline  ←─ px-4 ─ · ─ px-8 → Inline
(sides)      16px       32px   (sides)

  Gap Between Items (gap-6 = 24px)
  ┌────────────────────────────────────┐
  │ Item   gap-6   Item   gap-6   Item │
  │ 24px          24px          24px   │
  └────────────────────────────────────┘

  Section Vertical Rhythm
  ┌──────────────────────────────────────┐
  │  Header (navigation)                 │
  ├──────────────────────────────────────┤
  │  py-12  (content area padding)       │
  │  ┌────────────────────────────────┐  │
  │  │   Section Content              │  │
  │  └────────────────────────────────┘  │
  │  py-12  (bottom padding)             │
  ├──────────────────────────────────────┤
  │  Next Section                        │
  └──────────────────────────────────────┘
```

---

## 9️⃣ Accessibility Feature Map

```
┌────────────────────────────────────────┐
│     Accessibility Features             │
├────────────────────────────────────────┤
│                                        │
│  Color Contrast                        │
│  ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂                 │
│  Text: 7.5:1 ratio ✓                   │
│  Links: 4.5:1 ratio ✓                  │
│                                        │
│  Focus States                          │
│  ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂                 │
│  [Visible Ring] 2px primary ✓         │
│  Keyboard navigation ✓                │
│                                        │
│  Semantic HTML                         │
│  ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂                 │
│  <header>, <main>, <section> ✓       │
│  <button>, <a> proper elements ✓     │
│                                        │
│  ARIA Attributes                       │
│  ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂                 │
│  aria-label where needed ✓            │
│  alt text on images ✓                 │
│                                        │
└────────────────────────────────────────┘
```

---

## 🔟 Component Import Map

```
app/page.tsx
├── imports from components/
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── companies-section.tsx
│   ├── categories-section.tsx
│   ├── cta-section.tsx
│   ├── featured-jobs-section.tsx
│   ├── latest-jobs-section.tsx
│   └── footer.tsx
│
├── uses from components/ui/
│   ├── button.tsx (shadcn/ui)
│   ├── input.tsx (shadcn/ui)
│   └── card.tsx (shadcn/ui)
│
├── uses from lucide-react
│   ├── Search, MapPin, ArrowRight
│   ├── Briefcase, Mail, User, etc.
│   └── (40+ icons available)
│
└── uses from Next.js
    ├── Link
    ├── Image
    └── metadata
```

---

This visual guide helps you understand:
✅ Component hierarchy and relationships
✅ Data flow patterns
✅ Responsive design breakpoints
✅ Styling layer organization
✅ Color application
✅ State changes
✅ Spacing system
✅ Accessibility features
✅ Import structure

**Use these diagrams when explaining components to team members!**

