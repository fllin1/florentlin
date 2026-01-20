# Milestone 3: About

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) and Milestone 2 (Hero) complete

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
