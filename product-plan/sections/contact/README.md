# Contact

## Overview

Simple contact links section with clear call-to-action. No contact form — just clean, direct ways for recruiters and collaborators to get in touch. The section features a primary email CTA followed by secondary social links (LinkedIn and GitHub), creating a clear hierarchy of contact preferences. The design emphasizes simplicity and ease of access while maintaining the zen aesthetic throughout.

## User Flows

- User scrolls to the Contact section at the bottom of the page
- Section header "Get in Touch" appears with centered accent line
- Brief introductory text invites visitors to reach out
- Primary contact method (Email) is displayed as a prominent button/card
- Visual divider separates primary CTA from secondary options
- Two secondary contact options (LinkedIn, GitHub) appear as smaller buttons
- Clicking Email opens the user's default mail client with pre-filled recipient
- Clicking LinkedIn/GitHub opens the profile in a new tab
- Hover effects on all buttons provide clear interactive feedback
- Decorative dots at the bottom add a subtle finishing touch

## Design Decisions

### Visual Hierarchy
- **Primary CTA (Email):** Large, full-width button in primary accent color (bronze)
  - White text for high contrast
  - Icon + label + arrow indicator
  - Most prominent element in the section
- **Secondary CTAs (LinkedIn, GitHub):** Smaller, side-by-side buttons
  - Surface background color (beige)
  - Icon + label + username
  - Less visually dominant but still accessible

### Three-Tier Layout
1. **Section header:** Title + accent line + introductory text
2. **Primary action:** Email button (standalone, centered)
3. **Visual divider:** Line + "or find me on" text + line
4. **Secondary actions:** LinkedIn and GitHub buttons (side-by-side)
5. **Decorative element:** Three dots at the bottom

### Button Design Patterns
- **Primary button:**
  - Full-width with centered content
  - Icon in circular background (20% white opacity)
  - Label only (no username displayed)
  - Arrow indicator on right edge
  - Hover: scale-105 + translate-y-[-2px] for lift effect

- **Secondary buttons:**
  - Compact width with flex layout
  - Icon without special background
  - Label + username/handle in monospace
  - No arrow indicator
  - Hover: scale-105 + translate-y-[-2px]

### Interaction Patterns
- All buttons are properly focusable with keyboard
- Hover effects: scale up + lift slightly (transform)
- Icon rotation on hover (subtle 6-degree rotate)
- Smooth transitions (duration-300) for all effects
- Email uses `mailto:` link to open mail client
- Social links open in new tabs with `noopener,noreferrer` for security

### Animation Timing
- Introductory text fades in at 0.1s
- Primary email button animates at 0.2s
- Divider appears at 0.4s
- Secondary buttons animate at 0.5s+ (staggered)
- Decorative dots fade in at 0.8s
- All use fade-slide-up animation for consistency

### Typography & Color
- Section title: Large, bold, Zen Kaku Gothic New
- Introductory text: Regular, Noto Sans, muted color
- Button labels: Medium weight, Zen Kaku Gothic New
- Usernames/handles: Small, IBM Plex Mono, 70% opacity
- Primary button: Bronze background (#d4a373) with white text
- Secondary buttons: Beige surface (#faedcd) with charcoal text

## Data Used

**Entities:** ContactLink

**From global model:**
- **ContactLink** — Direct contact methods (id, type, label, value, url, icon, primary)
  - `type`: 'email' | 'linkedin' | 'github'
  - `label`: Display name (e.g., "Email", "LinkedIn")
  - `value`: Actual contact info (email address, username)
  - `url`: Full URL or mailto link
  - `icon`: Which icon to display ('mail', 'linkedin', 'github')
  - `primary`: Boolean flag to identify the primary CTA

The Contact section expects an array of ContactLink objects. One should be marked as `primary: true` (typically email) for special visual treatment.

## Visual Reference

See `screenshot.png` for the target UI design (if exists).

## Components Provided

- **Contact.tsx** — Main contact section component
  - Renders section header with title and intro text
  - Separates primary and secondary contact links
  - Displays primary CTA prominently
  - Renders divider with "or find me on" text
  - Displays secondary links in horizontal layout
  - Includes decorative dot elements at bottom

- **ContactLink.tsx** — Individual contact link button component
  - Handles both primary and secondary styling variants
  - Renders appropriate icon (mail, LinkedIn, GitHub)
  - Displays label and optionally value (username)
  - Different layouts for primary vs secondary
  - Implements hover effects (scale, translate, icon rotate)
  - Handles click events with default and custom behaviors
  - Entrance animation with index-based delay

## Callback Props

| Callback | Description |
|----------|-------------|
| `onContactClick` | Called when user clicks any contact link button. Receives `(id: string, url: string)` as parameters. Use this to track contact link clicks for analytics or implement custom navigation. If not provided, default behavior applies: email links use `window.location.href = url` (opens mail client), social links use `window.open(url, '_blank', 'noopener,noreferrer')` (opens in new tab). |

**Note:** The `onContactClick` callback is optional. When omitted, the component handles navigation automatically based on the link type. This allows the component to work standalone while still providing hooks for analytics tracking or custom behaviors when needed.
