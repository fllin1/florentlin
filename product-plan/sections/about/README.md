# About

## Overview

Three-part section covering aspirations, hobbies, and personality. This section humanizes Florent beyond just technical skills by showcasing what drives him professionally and personally. The About section is split into two columns on desktop: **Aspirations** on the left and **Hobbies** on the right, creating a balanced view of professional goals and personal interests. The design maintains the zen aesthetic with numbered aspirations and icon-based hobby cards.

## User Flows

- User scrolls to the About section after the Hero
- Section header "About" appears with a centered underline accent
- Two distinct subsections are visible in a two-column layout (desktop) or stacked (mobile):
  - **Aspirations** — Professional goals and ambitions
  - **Hobbies** — Personal interests and activities
- Each subsection has an uppercase, tracked heading with a subtle border
- Aspirations are displayed as numbered cards (01, 02, 03) with titles and descriptions
- Hobbies are displayed as icon-based cards with names and descriptions
- User gains understanding of professional goals, personal interests, and values
- Hover interactions on cards provide subtle feedback (expand accent lines, translate position)

## Design Decisions

### Two-Column Layout
- **Left column:** Aspirations (professional focus)
- **Right column:** Hobbies (personal interests)
- On mobile, columns stack vertically for readability
- Equal visual weight between professional and personal content

### Aspiration Cards Design
- **Numbered indicators** (01, 02, 03) positioned to the left in monospace font
- **Vertical accent line** next to the number that expands on hover
- **Progressive animation** with staggered delays (0.1s increments per card)
- Hover effect expands the vertical line to fill the entire card height

### Hobby Cards Design
- **Icon-first design** with circular backgrounds in surface color
- Four icon types: dumbbell (fitness), leaf (nutrition), brain (AI & society), globe (cultures)
- **Horizontal layout** with icon on left, content on right
- Hover interaction: card translates right slightly + icon scales up
- Icons use consistent stroke width and color scheme

### Typography Hierarchy
- Section title: Large, bold, Zen Kaku Gothic New
- Subsection headers: Small uppercase, tracked, muted color
- Card titles: Medium weight, Zen Kaku Gothic New
- Descriptions: Regular weight, Noto Sans, muted color

### Animation Strategy
- Fade-slide-up animations for all cards
- Aspirations animate starting at 0.1s delay
- Hobbies animate starting at 0.2s delay (slightly after aspirations)
- Smooth transitions maintain zen aesthetic without being jarring

## Data Used

**Entities:** Aspiration, Hobby, Personality

**From global model:**
- **Aspiration** — Professional goals (id, title, description)
- **Hobby** — Personal interests (id, name, description, icon type)
- **Personality** — Core values (quote) — Note: Currently not displayed in the component but defined in types

The component receives arrays of aspirations and hobbies, allowing for flexible content management. The personality entity is defined but not currently rendered in the About component.

## Visual Reference

See `screenshot.png` for the target UI design (if exists).

## Components Provided

- **About.tsx** — Main about section component with two-column layout
  - Renders section header with centered accent line
  - Creates grid layout (1 column mobile, 2 columns desktop)
  - Displays "Aspirations" and "Hobbies" subsections
  - Passes data to child card components

- **AspirationCard.tsx** — Individual aspiration card component
  - Displays numbered indicator (01, 02, 03)
  - Vertical accent line with hover expand effect
  - Title and description with proper typography
  - Fade-slide-up entrance animation with index-based delay

- **HobbyCard.tsx** — Individual hobby card component
  - Icon with circular background
  - Name and description in horizontal layout
  - Hover effects: translate right + icon scale up
  - Four icon types supported (dumbbell, leaf, brain, globe)
  - Fade-slide-up entrance animation with index-based delay

## Callback Props

This section does not have callback props. The About section is purely presentational and does not require user interactions beyond visual feedback on hover. All data is displayed statically.

**Note:** The component signature shows `Omit<AboutProps, 'personality'>`, indicating that the personality prop is defined in the types but not currently used by the component. Future enhancements could add a personality quote display below the two columns.
