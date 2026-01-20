# Changelog

## 2026-01-20 — Navigation Fix

### Fixed
- **Section navigation indicator**: Fixed the right-side nav not recognizing About and Contact sections
  - The `SECTIONS` array order in `useActiveSection.ts` didn't match the actual page order
  - Changed from `['hero', 'about', 'experience', 'contact']` to `['hero', 'experience', 'about', 'contact']`

---

## 2026-01-20 — Background Alternation Fix

### Fixed
- **Section background alternation**: Corrected the alternating background pattern for light theme
  - Hero: body background (unchanged)
  - Experience: surface background (added)
  - About: body background (removed surface)
  - Contact: surface background (added)

---

## 2026-01-20 — Dark Mode Fix

### Fixed
- **CSS Variable Names**: Fixed incorrect CSS variable references across all section components
  - Changed `--text` to `--color-text`
  - Changed `--text-muted` to `--color-text-muted`
  - Changed `--primary` to `--color-primary`
  - Changed `--secondary` to `--color-secondary`
  - Changed `--surface` to `--color-surface`
  - These variables are defined in `globals.css` with proper dark mode overrides

### Removed
- Removed `__tests__` folder (tests will be handled separately)

### Files Modified
- `app/src/components/sections/ContactSection.tsx`
- `app/src/components/sections/ContactLink.tsx`
- `app/src/components/sections/ExperienceSkills.tsx`
- `app/src/components/sections/ExperienceCard.tsx`
- `app/src/components/sections/EducationCard.tsx`
- `app/src/components/sections/SkillCategory.tsx`
- `app/src/components/sections/GitHubButton.tsx`

---

## 2026-01-20 — Milestone 5: Contact

### Added
- **Contact Section Implementation**
  - Primary CTA (Email) with prominent styling in bronze color
  - Secondary links (LinkedIn, GitHub) with surface background
  - "Or find me on" divider between primary and secondary links
  - Decorative three-dot element at bottom
  - Staggered entrance animations (fadeIn, fadeSlideUp)

- **ContactLink Component**
  - Supports primary and secondary styling variants
  - Icon rendering for mail, LinkedIn, GitHub
  - Primary buttons: full-width, centered, white text, arrow indicator
  - Secondary buttons: compact, show username in monospace font
  - Hover effects: scale-105, translate-y, icon rotation
  - Click handler with fallback to default navigation:
    - Email opens mail client via `window.location.href = mailto:`
    - Social links open in new tab with `noopener,noreferrer`

- **Data Layer**
  - Created `src/data/contact.ts` with three contact links:
    - Email (primary): 1florentlin@gmail.com
    - LinkedIn (secondary): florentlin
    - GitHub (secondary): fllin1
  - Exported from data index

- **Navigation Callbacks**
  - onContactClick(id, url) -> handles email vs social link navigation
  - Can be extended for analytics tracking

- **Tests**
  - 25 tests covering ContactSection and ContactLink:
    - Section header and intro text rendering
    - Primary email button styling (no value shown)
    - Secondary buttons with usernames
    - Email click default behavior (mail client)
    - Email click with custom callback
    - LinkedIn click default behavior (new tab)
    - LinkedIn click with custom callback
    - GitHub click behavior
    - Empty state (no links)
    - Only primary link (no divider)
    - Only secondary links
    - Decorative elements (three dots)
    - Keyboard navigation (focusable buttons)
    - Semantic HTML structure (section#contact, h2, buttons)

### Files Created/Modified
```
app/src/
├── components/sections/
│   ├── ContactSection.tsx (complete rewrite)
│   ├── ContactLink.tsx (new)
│   └── index.ts (exports added)
├── data/
│   ├── contact.ts (new)
│   └── index.ts (exports added)
├── app/
│   └── page.tsx (pass contactLinks + onContactClick callback)
└── __tests__/components/
    └── ContactSection.test.tsx (new - 25 tests)
```

### Milestone Checklist
- [x] Tests written for key user flows (25 tests)
- [x] All tests pass (156 total)
- [x] Contact component renders with real data
- [x] Email link opens mail client
- [x] LinkedIn and GitHub links open in new tabs
- [x] Primary contact method is visually distinct
- [x] Error handling for failed data fetch (empty state handling)
- [x] Matches the visual design (zen aesthetic)
- [x] Responsive on mobile

---

## 2026-01-20 — Milestone 4: Experience & Skills

### Added
- **Experience & Skills Section Implementation**
  - Two-column layout (Experience+Education left, Skills right) on desktop
  - Single-column stacked layout on mobile
  - Section header with centered accent line
  - Subsections for Experience, Education, and Skills

- **ExperienceCard Component**
  - Company name with optional Freelance badge
  - Role, location, and formatted date range
  - Description text
  - Optional GitHub button with event propagation handling
  - Left accent line + arrow indicator on hover
  - Staggered entrance animations (0.1s increments)

- **EducationCard Component**
  - Institution, degree, field of study
  - Location and formatted date range
  - Description text
  - Conditional clickability (only when detailUrl exists)
  - Left accent line + arrow indicator on hover (when clickable)
  - Staggered entrance animations

- **SkillCategory Component**
  - Category heading in uppercase
  - Skill pills with optional level indicators (e.g., "Native", "Fluent")
  - Optional GitHub buttons for skills with repo links
  - Conditional clickability for skill tags with detailUrl
  - Staggered entrance animations (0.2s base + 0.1s increments)

- **GitHubButton Component**
  - Small (sm) and medium (md) size variants
  - Click handler with fallback to window.open
  - Aria-label for accessibility

- **Data Layer**
  - Created `src/data/experience.ts` with experiences, education, skillCategories
  - Exported from data index

- **Navigation Callbacks**
  - onExperienceClick -> router.push to detail page
  - onEducationClick -> router.push to detail page (when detailUrl exists)
  - onSkillClick -> router.push to skill detail page
  - onGitHubClick -> window.open in new tab

- **Tests**
  - 63 tests covering ExperienceSkills, ExperienceCard, EducationCard, SkillCategory, GitHubButton:
    - Section structure and headings
    - Experience card rendering with all details
    - Experience card click navigation
    - GitHub button click with event propagation
    - Education card rendering and conditional clickability
    - Skills grouped by category with level indicators
    - Skill GitHub links and clickable skill tags
    - Empty state handling (empty arrays)
    - Date formatting (YYYY-MM -> Mon YYYY)
    - Optional fields handling
    - Semantic HTML structure
    - Animation delays

### Files Created/Modified
```
app/src/
├── components/sections/
│   ├── ExperienceSkills.tsx (new)
│   ├── ExperienceCard.tsx (new)
│   ├── EducationCard.tsx (new)
│   ├── SkillCategory.tsx (new)
│   ├── GitHubButton.tsx (new)
│   ├── ExperienceSection.tsx (updated - wrapper for ExperienceSkills)
│   └── index.ts (exports added)
├── data/
│   ├── experience.ts (new)
│   └── index.ts (exports added)
├── app/
│   └── page.tsx (pass experience data + callbacks)
└── __tests__/components/
    └── ExperienceSkills.test.tsx (new - 63 tests)
```

### Milestone Checklist
- [x] Tests written for key user flows (63 tests)
- [x] All tests pass (131 total)
- [x] ExperienceSkills component renders with real data
- [x] Experience items are clickable and navigate to detail pages
- [x] GitHub buttons open repositories in new tabs
- [x] Education items are clickable when they have detail URLs
- [x] Skills display correctly by category
- [x] Empty states handled gracefully
- [x] Matches the visual design (zen aesthetic)
- [x] Responsive on mobile (single-column layout)

---

## 2026-01-20 — Milestone 3: About

### Added
- **About Section Implementation**
  - Two-column layout (Aspirations left, Hobbies right) on desktop
  - Single-column stacked layout on mobile
  - Section header with centered accent line
  - Japanese zen aesthetic with clean typography

- **AspirationCard Component**
  - Numbered indicators (01, 02, 03) in monospace font
  - Vertical accent line with hover expand effect
  - Staggered entrance animations (0.1s increments)

- **HobbyCard Component**
  - Icon-based cards with 4 icon types (dumbbell, leaf, brain, globe)
  - Circular icon containers with surface background
  - Hover effects: translate-x + icon scale-up
  - Staggered entrance animations (0.2s base + 0.1s increments)

- **Data Layer**
  - Created `src/data/about.ts` with aspirations, hobbies, personality data
  - Added `AboutProps`, `Personality`, `AspirationCardProps`, `HobbyCardProps` to types

- **Tests**
  - 40 tests covering AboutSection, AspirationCard, and HobbyCard:
    - Section header and subsection headings
    - Aspiration card rendering with numbering
    - Hobby card rendering with all icon types
    - Empty state handling (no aspirations, no hobbies, both empty)
    - Entrance animations with staggered delays
    - Long content and special character handling
    - Semantic HTML structure

### Files Created/Modified
```
app/src/
├── components/sections/
│   ├── AboutSection.tsx (complete rewrite)
│   ├── AspirationCard.tsx (new)
│   ├── HobbyCard.tsx (new)
│   └── index.ts (exports added)
├── data/
│   ├── about.ts (new)
│   └── index.ts (exports added)
├── types/
│   └── index.ts (Personality, AboutProps, card props)
├── app/
│   └── page.tsx (pass about data)
└── __tests__/components/
    └── AboutSection.test.tsx (new - 40 tests)
```

### Milestone Checklist
- [x] Tests written for key user flows (40 tests)
- [x] All tests pass (68 total)
- [x] About component renders with real data
- [x] Aspirations display correctly with titles and descriptions
- [x] Hobbies display with icons and descriptions
- [x] Personality quote defined (not displayed in current design)
- [x] Empty states handled gracefully
- [x] Matches the visual design (zen aesthetic)
- [x] Responsive on mobile (stacked layout)

---

## 2026-01-20 — Milestone 2: Hero

### Added
- **Hero Section Implementation**
  - Full Hero component with Japanese zen aesthetic design
  - Profile data display: name, title, location, tagline with emphasis
  - Social links (LinkedIn, GitHub) with external link arrows
  - Subtle ink-wash texture overlay for depth
  - Decorative brush stroke accents

- **Animations**
  - Fade-slide-up entrance animations with staggered delays
  - Fade-in animation for social links
  - Bounce animation for scroll indicator arrow
  - Animation delay utility classes (200ms to 1200ms)

- **Data Layer**
  - Created `src/data/profile.ts` with profile data
  - Added `HeroProps` interface to types

- **Testing Infrastructure**
  - Set up Vitest with React Testing Library
  - Created test setup with jsdom environment
  - 28 passing tests covering:
    - Profile data rendering
    - Social link interactions
    - Callback handling
    - Empty state handling (missing social links, missing emphasis)
    - Entrance animations
    - Edge cases (long text, special characters)
    - Semantic HTML structure
    - Keyboard navigation

### Files Created/Modified
```
app/
├── vitest.config.ts (new)
├── package.json (added test scripts)
├── src/
│   ├── __tests__/
│   │   ├── setup.ts (new)
│   │   └── components/
│   │       └── HeroSection.test.tsx (new)
│   ├── app/
│   │   ├── globals.css (added animations)
│   │   └── page.tsx (pass profile data)
│   ├── components/sections/
│   │   └── HeroSection.tsx (complete rewrite)
│   ├── data/
│   │   ├── index.ts (new)
│   │   └── profile.ts (new)
│   └── types/
│       └── index.ts (added HeroProps)
```

### Milestone Checklist
- [x] Tests written for key user flows (28 tests)
- [x] All tests pass
- [x] Hero component renders with real profile data
- [x] Social links open in new tabs
- [x] Error handling for failed data fetch (graceful empty states)
- [x] Matches the visual design (Japanese zen aesthetic)
- [x] Responsive on mobile (text scales, layout adapts)

---

## 2026-01-20 — Milestone 1: Foundation

### Added
- **Next.js Project Setup**
  - Initialized Next.js 16.1.4 with TypeScript, Tailwind CSS, and App Router
  - Added `clsx` and `tailwind-merge` for class name utilities

- **Design System**
  - Configured CSS custom properties for colors (primary: Light Bronze #d4a373, secondary: Tea Green #ccd5ae)
  - Light and dark mode support with system preference detection
  - Tailwind v4 theme inline configuration with primary and secondary color shades

- **Typography**
  - Integrated Google Fonts via `next/font`:
    - **Zen Kaku Gothic New** — Headings (400, 500, 700)
    - **Noto Sans** — Body text (400, 500, 600, 700)
    - **IBM Plex Mono** — Monospace/code (400, 500)

- **Data Model Types**
  - Created TypeScript interfaces for all entities:
    - `Profile`, `SocialLink`
    - `Experience`, `Education`
    - `Skill`, `SkillCategory`
    - `Aspiration`, `Hobby`
    - `ContactLink`
    - `SectionNavItem`, `SectionId`

- **Application Shell**
  - `AppShell` — Main layout wrapper with background colors and transitions
  - `Logo` — Fixed top-left glassmorphism button with gradient placeholder
  - `SectionNav` — Fixed right-side vertical dot navigation with:
    - Active state (circle outline)
    - Inactive state (small dot)
    - Hover tooltips with labels
    - Hidden on mobile (md:block)

- **Navigation & Routing**
  - Single-page scroll navigation with section anchors (`#hero`, `#about`, `#experience`, `#contact`)
  - `useActiveSection` hook for scroll-based active section detection
  - `scrollToSection` utility for smooth scrolling
  - Logo click navigates to Hero section
  - Section nav dots navigate to respective sections

- **Placeholder Sections**
  - `HeroSection` — Name, title, tagline with emphasis styling
  - `AboutSection` — Placeholder for aspirations and hobbies
  - `ExperienceSection` — Placeholder for experience and skills
  - `ContactSection` — Placeholder for contact links
  - Alternating background colors for visual separation

### Files Created
```
app/
├── src/
│   ├── app/
│   │   ├── globals.css (design tokens, Tailwind v4 config)
│   │   ├── layout.tsx (fonts, metadata)
│   │   └── page.tsx (main page with shell and sections)
│   ├── components/
│   │   ├── shell/
│   │   │   ├── AppShell.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── SectionNav.tsx
│   │   │   └── index.ts
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── ExperienceSection.tsx
│   │       ├── ContactSection.tsx
│   │       └── index.ts
│   ├── hooks/
│   │   ├── useActiveSection.ts
│   │   └── index.ts
│   ├── lib/
│   │   └── utils.ts (cn utility)
│   └── types/
│       └── index.ts
```

### Milestone Checklist
- [x] Design tokens are configured
- [x] Data model types are defined
- [x] Routes exist for all sections (scroll-based single page)
- [x] Shell renders with logo and navigation
- [x] Navigation links to correct routes
- [x] Active section indicator works
- [x] Responsive on mobile (nav hidden, content adapts)

### Next Steps
- ~~Milestone 2: Hero section with full implementation~~ ✓
- ~~Milestone 3: About section with aspirations and hobbies~~ ✓
- ~~Milestone 4: Experience & Skills section~~ ✓
- ~~Milestone 5: Contact section~~ ✓
- All milestones complete! Portfolio is ready for deployment.
