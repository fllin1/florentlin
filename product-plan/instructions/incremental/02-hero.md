# Milestone 2: Hero

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete

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
