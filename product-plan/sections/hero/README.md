# Hero

## Overview

Personal introduction with name, title, and a brief tagline. This is the first section visitors see when they land on the portfolio, designed to make a strong impression using a Japanese zen aesthetic with clean lines, generous negative space, and subtle animations. The hero section establishes Florent's professional identity as a Data Scientist and communicates career aspirations through a concise, impactful tagline.

## User Flows

- User lands on the page and immediately sees the hero section
- Name (Florent Lin) is displayed prominently with a large, clean typography
- Professional title (Data Scientist) appears below the name with an elegant underline accent
- Location (Paris, France) is shown subtly above the name in small, tracked uppercase letters
- A brief tagline captures professional aspirations with emphasis on key words
- Social links (LinkedIn, GitHub) appear in the top-right corner for quick access
- Subtle entrance animations draw attention without being distracting (fade-in, slide-up effects)
- Animated scroll arrow at the bottom indicates more content below
- Clicking social links opens profiles in new tabs (or triggers custom callback)

## Design Decisions

### Visual Hierarchy
- **Location first** (subtle, uppercase) → **Name** (largest, bold) → **Title** (medium, colored) → **Tagline** (readable, emphasized)
- Progressive disclosure through staggered animations (0.2s to 1.2s delays)
- Center-aligned layout for maximum impact and balance

### Japanese Zen Aesthetic
- Generous negative space (whitespace breathing room)
- Subtle ink-wash texture overlay (3-5% opacity) adds depth without distraction
- Muted earth tones: charcoal text, warm bronze accents, soft beige highlights
- Minimal decorative elements: asymmetric brush stroke accents positioned off-canvas
- Clean lines throughout with rounded accent bars

### Typography & Animation
- Three font families working together:
  - **Zen Kaku Gothic New** for name/headings (Japanese aesthetic)
  - **Noto Sans** for body text and location
  - **IBM Plex Mono** implicit for technical details
- Cascading fade-slide-up animations create a natural reading flow
- Bounce animation on scroll arrow draws attention to continue scrolling

### Social Integration
- Social links positioned top-right (non-intrusive but accessible)
- Icon + label design with external link arrow indicator
- Hover effects: opacity reduction + arrow movement for interactive feedback

## Data Used

**Entities:** Profile, SocialLink

**From global model:**
- **Profile** — Core personal identity (name, title, location, tagline, taglineEmphasis)
- **SocialLink** — External profile links (type, url, label) for LinkedIn and GitHub

The Profile entity serves as the root data for this section. It's a singleton entity (only one profile per portfolio).

## Visual Reference

See `screenshot.png` for the target UI design (if exists).

## Components Provided

- **Hero.tsx** — Main hero section component that orchestrates the entire layout
  - Renders profile information with styled typography
  - Displays social links with hover effects
  - Includes subtle background texture overlay
  - Animated entrance for all elements
  - Scroll indicator with bounce animation
  - Decorative brush stroke accents

## Callback Props

| Callback | Description |
|----------|-------------|
| `onSocialClick` | Called when user clicks a social link (LinkedIn or GitHub). Receives the URL as a parameter. If not provided, opens link in new tab with `window.open(url, '_blank', 'noopener,noreferrer')`. Use this to track analytics or implement custom navigation. |
