# Milestone 4: Experience & Skills

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation), Milestone 2 (Hero), and Milestone 3 (About) complete

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
