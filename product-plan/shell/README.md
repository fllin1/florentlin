# Application Shell

## Overview

A minimalist, zen-inspired application shell featuring a fixed logo in the top-left corner and a distinctive sticky side navigation with dot-to-circle indicators. The design uses glassmorphism (frosted glass effect) for an elegant, modern feel that works in both light and dark modes.

## Components

- **AppShell.tsx** — Main layout wrapper that provides the foundation, logo, navigation, and content container
- **Logo.tsx** — Circular logo button with glassmorphism effect (top-left, fixed position)
- **SectionNav.tsx** — Vertical dot navigation with circle indicators (right side, fixed position)

## Navigation Structure

- **Logo (Top Left)** → Navigates to Home / Hero section
- **Section Nav (Right Side)** → Vertical dots indicating current section
  - Dot 1 → Hero
  - Dot 2 → About
  - Dot 3 → Experience & Skills
  - Dot 4 → Contact

## Section Navigation Behavior

- **Inactive state:** Small filled dot (2px diameter)
- **Active state:** Larger circle outline (16px diameter) with border ring
- **Hover state:** Dots scale up and show tooltip label
- **Transition:** Smooth scale and opacity animation
- **Interaction:** Click to scroll/navigate to section

## Layout Pattern

- **Logo:** Fixed position, top-left corner (24px from top and left)
- **Section Nav:** Fixed position, right side (24px from right), vertically centered
- **Content:** Full-width, scrollable, rendered inside `<main>` tag

## Glassmorphism Style

Applied to both Logo and SectionNav:
- Semi-transparent background with backdrop blur
- Subtle border for definition
- Soft shadow for depth
- Works seamlessly in both light and dark modes

## Responsive Behavior

- **Desktop:** Logo top-left, section nav right side (as designed)
- **Tablet:** Same as desktop, slightly smaller elements
- **Mobile:** Logo top-left, section nav may become bottom navigation or hidden with gesture hints (implementation choice)

## Design Tokens Applied

- **Colors:** Light Bronze (#d4a373) for primary accents, Tea Green (#ccd5ae) for secondary accents, Cornsilk/Stone for backgrounds
- **Typography:** Noto Sans for body text (tooltip labels)
- **Mode:** Full light and dark mode support with automatic transitions

## Wiring Up Navigation

The shell components expect callbacks for navigation:

```typescript
<AppShell
  sections={[
    { id: 'hero', label: 'Hero', isActive: currentSection === 'hero' },
    { id: 'about', label: 'About', isActive: currentSection === 'about' },
    { id: 'experience', label: 'Experience', isActive: currentSection === 'experience' },
    { id: 'contact', label: 'Contact', isActive: currentSection === 'contact' },
  ]}
  onNavigateHome={() => {
    // Navigate to hero/home
  }}
  onNavigateSection={(id) => {
    // Navigate to section by id (scroll or route change)
  }}
>
  {children}
</AppShell>
```

Track the active section based on scroll position or route, and update the `isActive` flag accordingly.
