# Milestone 5: Contact

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation), Milestone 2 (Hero), Milestone 3 (About), and Milestone 4 (Experience & Skills) complete

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
