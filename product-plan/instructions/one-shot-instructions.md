# Florent Lin — Complete Implementation Instructions

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Data model definitions (TypeScript types and sample data)
- UI/UX specifications (user flows, requirements, screenshots)
- Design system tokens (colors, typography, spacing)
- Test-writing instructions for each section (for TDD approach)

**What you need to build:**
- Backend API endpoints and database schema
- Authentication and authorization
- Data fetching and state management
- Business logic and validation
- Integration of the provided UI components with real data

**Important guidelines:**
- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** wire up the callback props to your routing and API calls
- **DO** replace sample data with real data from your backend
- **DO** implement proper error handling and loading states
- **DO** implement empty states when no records exist (first-time users, after deletions)
- **DO** use test-driven development — write tests first using `tests.md` instructions
- The components are props-based and ready to integrate — focus on the backend and data layer

---

## Test-Driven Development

Each section includes a `tests.md` file with detailed test-writing instructions. These are **framework-agnostic** — adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, RSpec, Minitest, PHPUnit, etc.).

**For each section:**
1. Read `product-plan/sections/[section-id]/tests.md`
2. Write failing tests for key user flows (success and failure paths)
3. Implement the feature to make tests pass
4. Refactor while keeping tests green

The test instructions include:
- Specific UI elements, button labels, and interactions to verify
- Expected success and failure behaviors
- Empty state handling (when no records exist yet)
- Data assertions and state validations

---

# Product Overview

## Summary

A minimalist portfolio website for a Junior Data Scientist, designed to impress recruiters with clean presentation, clear project showcases, and an AI-powered chatbot that lets visitors explore your work conversationally.

## Planned Sections

1. **Hero** — Personal introduction with name, title, and a brief tagline
2. **About** — Aspirations, hobbies, and personality showcase that humanizes you beyond just skills
3. **Experience & Skills** — Technical skills and professional background with links to detailed project sub-pages
4. **Contact** — Clear call-to-action with easy ways for recruiters to reach you

## Data Model

Core entities:
- **Profile** — Personal identity (name, title, introduction, photo)
- **Experience** — Professional and educational history
- **Skill** — Technical competencies and tools
- **Project** — Data science portfolio pieces
- **Hobby** — Personal interests and aspirations

## Design System

**Colors:**
- Primary: #d4a373 (Light Bronze)
- Secondary: #ccd5ae (Tea Green)
- Background (Light): #fefae0 (Cornsilk)
- Background (Dark): #1a1a1a (Dark Stone)

**Typography:**
- Heading: Zen Kaku Gothic New
- Body: Noto Sans
- Mono: IBM Plex Mono

## Implementation Sequence

Build this product in milestones:

1. **Foundation** — Set up design tokens, data model types, and application shell
2. **Hero** — Personal introduction with striking first impression
3. **About** — Aspirations, hobbies, and personality showcase
4. **Experience & Skills** — Professional background and technical expertise
5. **Contact** — Simple contact links

Each milestone has a dedicated instruction document in `product-plan/instructions/`.

---

# Milestone 1: Foundation

## Goal

Set up the foundational elements: design tokens, data model types, routing structure, and application shell.

## What to Implement

### 1. Design Tokens

Configure your styling system with these tokens:

- See `product-plan/design-system/tokens.css` for CSS custom properties
- See `product-plan/design-system/tailwind-colors.md` for Tailwind configuration
- See `product-plan/design-system/fonts.md` for Google Fonts setup

### 2. Data Model Types

Create TypeScript interfaces for your core entities:

- See `product-plan/data-model/types.ts` for interface definitions
- See `product-plan/data-model/README.md` for entity relationships

### 3. Routing Structure

Create placeholder routes for each section:

- `/` → Hero section
- `/about` or `/#about` → About section
- `/experience` or `/#experience` → Experience & Skills section
- `/contact` or `/#contact` → Contact section

### 4. Application Shell

Copy the shell components from `product-plan/shell/components/` to your project:

- `AppShell.tsx` — Main layout wrapper
- `SectionNav.tsx` — Section navigation with dot indicators
- `Logo.tsx` — Logo component

**Wire Up Navigation:**

Connect navigation to your routing:

- Logo → Navigate to Hero/home
- Section Nav Dot 1 → Navigate to Hero
- Section Nav Dot 2 → Navigate to About
- Section Nav Dot 3 → Navigate to Experience & Skills
- Section Nav Dot 4 → Navigate to Contact

The SectionNav component uses a dot-to-circle indicator pattern. The active section should be tracked based on scroll position or route.

## Files to Reference

- `product-plan/design-system/` — Design tokens
- `product-plan/data-model/` — Type definitions
- `product-plan/shell/README.md` — Shell design intent
- `product-plan/shell/components/` — Shell React components
- `product-plan/shell/screenshot.png` — Shell visual reference (if exists)

## Done When

- [ ] Design tokens are configured
- [ ] Data model types are defined
- [ ] Routes exist for all sections (can be placeholder pages)
- [ ] Shell renders with logo and navigation
- [ ] Navigation links to correct routes
- [ ] Active section indicator works
- [ ] Responsive on mobile

---

# Milestone 2: Hero

## Goal

Implement the Hero feature — the personal introduction with name, title, location, and tagline that forms the first impression.

## Overview

The Hero section is the landing point for the portfolio. It displays Florent's name, professional title, location, and a compelling tagline that immediately communicates who he is as a Data Scientist / ML Engineer. The design follows a Japanese zen aesthetic with clean lines and generous negative space.

**Key Functionality:**
- Display profile information prominently (name, title, location, tagline)
- Show social links (LinkedIn, GitHub) with click handling
- Subtle entrance animation for visual interest
- Responsive layout for mobile and desktop

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/hero/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

The test instructions are framework-agnostic — adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, RSpec, Minitest, PHPUnit, etc.).

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the section components from `product-plan/sections/hero/components/`:

- `Hero.tsx` — Main hero section component

### Data Layer

The component expects this data shape:

```typescript
interface Profile {
  id: string
  name: string
  title: string
  location: string
  tagline: string
  taglineEmphasis?: string
  socialLinks?: SocialLink[]
}

interface SocialLink {
  type: 'linkedin' | 'github'
  url: string
  label: string
}
```

You'll need to:
- Create API endpoint or data fetching logic for profile data
- Fetch and provide profile data to the Hero component

### Callbacks

Wire up these user actions:

- `onSocialClick(url: string)` — Called when user clicks LinkedIn or GitHub link. Opens the URL in a new tab.

### Empty States

This section displays a single profile, so empty state handling is minimal. If profile data fails to load, show an error message or fallback UI.

## Files to Reference

- `product-plan/sections/hero/README.md` — Feature overview and design intent
- `product-plan/sections/hero/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/hero/components/` — React components
- `product-plan/sections/hero/types.ts` — TypeScript interfaces
- `product-plan/sections/hero/sample-data.json` — Test data
- `product-plan/sections/hero/screenshot.png` — Visual reference

## Expected User Flows

When fully implemented, users should be able to complete these flows:

### Flow 1: View Profile Information

1. User lands on the page
2. User sees the hero section with name, title, location, and tagline
3. Profile information is displayed prominently with clean typography
4. **Outcome:** User immediately understands who Florent is and what he does

### Flow 2: Navigate to Social Links

1. User sees social links (LinkedIn, GitHub) in the hero section
2. User clicks on a social link
3. **Outcome:** Link opens in a new tab to the appropriate social profile

## Done When

- [ ] Tests written for key user flows (success and failure paths)
- [ ] All tests pass
- [ ] Hero component renders with real profile data
- [ ] Social links open in new tabs
- [ ] Error handling for failed data fetch
- [ ] Matches the visual design
- [ ] Responsive on mobile

---

# Milestone 3: About

## Goal

Implement the About feature — aspirations, hobbies, and personality showcase that humanizes beyond just skills.

## Overview

The About section presents three subsections: Aspirations (professional goals), Hobbies (personal interests), and Personality (core values). This section humanizes the portfolio by showing what drives Florent professionally and personally.

**Key Functionality:**
- Display professional aspirations with titles and descriptions
- Show personal hobbies with icons and descriptions
- Present a personality quote that captures core values
- Clean, scannable layout with consistent zen aesthetic

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/about/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

The test instructions are framework-agnostic — adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, RSpec, Minitest, PHPUnit, etc.).

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the section components from `product-plan/sections/about/components/`:

- `About.tsx` — Main about section component
- `AspirationCard.tsx` — Individual aspiration card
- `HobbyCard.tsx` — Individual hobby card

### Data Layer

The components expect these data shapes:

```typescript
interface Aspiration {
  id: string
  title: string
  description: string
}

interface Hobby {
  id: string
  name: string
  description: string
  icon: 'dumbbell' | 'leaf' | 'brain' | 'globe'
}

interface Personality {
  quote: string
}
```

You'll need to:
- Create API endpoints or data fetching logic for aspirations, hobbies, and personality
- Fetch and provide data to the About component

### Callbacks

The About component is primarily display-focused and doesn't have interactive callbacks beyond basic rendering.

### Empty States

If any of the data arrays are empty, handle gracefully:
- **No aspirations:** Show a message or skip the aspirations section
- **No hobbies:** Show a message or skip the hobbies section
- **No personality quote:** Show a default message or skip

## Files to Reference

- `product-plan/sections/about/README.md` — Feature overview and design intent
- `product-plan/sections/about/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/about/components/` — React components
- `product-plan/sections/about/types.ts` — TypeScript interfaces
- `product-plan/sections/about/sample-data.json` — Test data
- `product-plan/sections/about/screenshot.png` — Visual reference

## Expected User Flows

When fully implemented, users should be able to complete these flows:

### Flow 1: View Professional Aspirations

1. User scrolls to the About section
2. User sees the Aspirations subsection with 3 goal cards
3. Each card displays a title and description
4. **Outcome:** User understands Florent's professional goals and ambitions

### Flow 2: Explore Personal Hobbies

1. User scrolls to the Hobbies subsection
2. User sees 4 hobby cards with icons and descriptions
3. **Outcome:** User gets a sense of Florent's personality and interests outside of work

### Flow 3: Read Personality Quote

1. User scrolls to the Personality subsection
2. User sees a prominent quote: "I learn from others, and share what I know. Knowledge goes both ways."
3. **Outcome:** User understands Florent's core values and approach to collaboration

## Done When

- [ ] Tests written for key user flows (success and failure paths)
- [ ] All tests pass
- [ ] About component renders with real data
- [ ] Aspirations display correctly with titles and descriptions
- [ ] Hobbies display with icons and descriptions
- [ ] Personality quote is prominently displayed
- [ ] Empty states handled gracefully
- [ ] Matches the visual design
- [ ] Responsive on mobile

---

# Milestone 4: Experience & Skills

## Goal

Implement the Experience & Skills feature — professional background, education, and technical skills with links to detailed project pages.

## Overview

The Experience & Skills section showcases career trajectory and technical expertise. Experience items are clickable and redirect to dedicated project detail pages. Education items and skills are also displayed, with optional detail pages and GitHub repository links.

**Key Functionality:**
- Display experience items as clickable cards with company, role, dates, and description
- Show GitHub buttons for experiences with repository links
- Display education items with institution, degree, dates, and description
- Organize technical skills by category (ML & Stats, MLOps, Cloud, Gen AI, Languages)
- Handle clicks on experience, education, and skill items to navigate to detail pages
- Open GitHub repository links in new tabs

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/experience-and-skills/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

The test instructions are framework-agnostic — adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, RSpec, Minitest, PHPUnit, etc.).

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the section components from `product-plan/sections/experience-and-skills/components/`:

- `ExperienceSkills.tsx` — Main section component
- `ExperienceCard.tsx` — Individual experience item
- `EducationCard.tsx` — Individual education item
- `SkillCategory.tsx` — Skill category grouping
- `GitHubButton.tsx` — GitHub repository link button

### Data Layer

The components expect these data shapes:

```typescript
interface Experience {
  id: string
  company: string
  role: string
  type?: 'Freelance'
  location: string
  startDate: string
  endDate: string | null
  current: boolean
  description: string
  detailUrl: string
  githubUrl: string | null
}

interface Education {
  id: string
  institution: string
  degree: string
  field: string
  location: string
  startDate: string
  endDate: string
  description: string
  detailUrl: string | null
}

interface Skill {
  id: string
  name: string
  level?: string
  detailUrl: string | null
  githubUrl: string | null
}

interface SkillCategory {
  id: string
  name: string
  skills: Skill[]
}
```

You'll need to:
- Create API endpoints or data fetching logic for experiences, education, and skill categories
- Fetch and provide data to the ExperienceSkills component

### Callbacks

Wire up these user actions:

- `onExperienceClick(id: string, detailUrl: string)` — Called when user clicks an experience card. Navigate to the detail page at `detailUrl`.
- `onEducationClick(id: string, detailUrl: string)` — Called when user clicks an education card. Navigate to the detail page at `detailUrl`.
- `onSkillClick(id: string, detailUrl: string)` — Called when user clicks a skill with a detail URL. Navigate to the detail page.
- `onGitHubClick(url: string)` — Called when user clicks a GitHub button. Open the repository URL in a new tab.

### Empty States

Implement empty state UI for when no records exist yet:

- **No experiences:** Show a message "No professional experience yet"
- **No education:** Show a message "No education history yet"
- **No skills:** Show a message "No skills added yet"

The provided components should handle empty arrays gracefully, but ensure your implementation shows helpful messages rather than blank screens.

## Files to Reference

- `product-plan/sections/experience-and-skills/README.md` — Feature overview and design intent
- `product-plan/sections/experience-and-skills/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/experience-and-skills/components/` — React components
- `product-plan/sections/experience-and-skills/types.ts` — TypeScript interfaces
- `product-plan/sections/experience-and-skills/sample-data.json` — Test data
- `product-plan/sections/experience-and-skills/screenshot.png` — Visual reference

## Expected User Flows

When fully implemented, users should be able to complete these flows:

### Flow 1: View and Navigate to Experience Details

1. User scrolls to the Experience & Skills section
2. User sees a list of experience items (SNCF, Aubay, Deloitte, MEWE, Franchises Global)
3. User clicks on an experience card (e.g., "MEWE Architects")
4. **Outcome:** User is navigated to the project detail page for that experience

### Flow 2: Open GitHub Repository

1. User sees an experience item with a GitHub button (e.g., "MEWE Architects")
2. User clicks the GitHub button
3. **Outcome:** GitHub repository opens in a new tab

### Flow 3: View Education History

1. User scrolls to the Education subsection
2. User sees education items (ENSAE Paris, Lycée Saint-Louis)
3. User clicks on "ENSAE Paris"
4. **Outcome:** User is navigated to the project detail page for ENSAE

### Flow 4: Browse Technical Skills

1. User scrolls to the Skills subsection
2. User sees skills grouped by category (ML & Stats, MLOps, Cloud, Gen AI, Languages)
3. Each skill displays its name and optional proficiency level
4. **Outcome:** User understands Florent's technical competencies

## Done When

- [ ] Tests written for key user flows (success and failure paths)
- [ ] All tests pass
- [ ] ExperienceSkills component renders with real data
- [ ] Experience items are clickable and navigate to detail pages
- [ ] GitHub buttons open repositories in new tabs
- [ ] Education items are clickable when they have detail URLs
- [ ] Skills display correctly by category
- [ ] Empty states display properly when no records exist
- [ ] Matches the visual design
- [ ] Responsive on mobile

---

# Milestone 5: Contact

## Goal

Implement the Contact feature — simple links to reach Florent via email, LinkedIn, and GitHub.

## Overview

The Contact section provides clear, minimal ways for recruiters and collaborators to reach Florent. No contact form — just direct links that open in the appropriate applications or new tabs.

**Key Functionality:**
- Display three contact options: Email, LinkedIn, GitHub
- Email link opens the user's mail client
- LinkedIn and GitHub links open in new tabs
- Email is marked as the primary contact method

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/contact/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

The test instructions are framework-agnostic — adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, RSpec, Minitest, PHPUnit, etc.).

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the section components from `product-plan/sections/contact/components/`:

- `Contact.tsx` — Main contact section component
- `ContactLink.tsx` — Individual contact link

### Data Layer

The components expect this data shape:

```typescript
interface ContactLink {
  id: string
  type: 'email' | 'linkedin' | 'github'
  label: string
  value: string
  url: string
  icon: 'mail' | 'linkedin' | 'github'
  primary: boolean
}
```

You'll need to:
- Create API endpoint or data fetching logic for contact links
- Fetch and provide contact links data to the Contact component

### Callbacks

Wire up these user actions:

- `onContactClick(id: string, url: string)` — Called when user clicks a contact link. For email, this opens the mail client (`mailto:`). For LinkedIn and GitHub, open in a new tab.

### Empty States

This section displays contact links, which should always exist. If contact links fail to load, show an error message or fallback UI.

## Files to Reference

- `product-plan/sections/contact/README.md` — Feature overview and design intent
- `product-plan/sections/contact/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/contact/components/` — React components
- `product-plan/sections/contact/types.ts` — TypeScript interfaces
- `product-plan/sections/contact/sample-data.json` — Test data
- `product-plan/sections/contact/screenshot.png` — Visual reference

## Expected User Flows

When fully implemented, users should be able to complete these flows:

### Flow 1: Send an Email

1. User scrolls to the Contact section at the bottom of the page
2. User sees the Email link marked as primary
3. User clicks the Email link
4. **Outcome:** User's default mail client opens with `1florentlin@gmail.com` as the recipient

### Flow 2: Visit LinkedIn Profile

1. User sees the LinkedIn link
2. User clicks the LinkedIn link
3. **Outcome:** LinkedIn profile opens in a new tab

### Flow 3: Visit GitHub Profile

1. User sees the GitHub link
2. User clicks the GitHub link
3. **Outcome:** GitHub profile opens in a new tab

## Done When

- [ ] Tests written for key user flows (success and failure paths)
- [ ] All tests pass
- [ ] Contact component renders with real data
- [ ] Email link opens mail client
- [ ] LinkedIn and GitHub links open in new tabs
- [ ] Primary contact method is visually distinct
- [ ] Error handling for failed data fetch
- [ ] Matches the visual design
- [ ] Responsive on mobile
