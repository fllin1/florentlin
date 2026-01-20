# Experience & Skills

## Overview

Professional background, education, and technical skills with links to detailed project pages. This section showcases Florent's career trajectory and technical expertise through an interactive, clickable interface. The layout uses a two-column design on desktop: **Experience + Education** on the left and **Skills** on the right. Each experience and education item is a clickable card that redirects to dedicated project detail pages, while skills are displayed as categorized tags. GitHub buttons provide direct access to relevant repositories.

## User Flows

- User scrolls to the Experience & Skills section
- Section header appears with centered accent line
- Two-column layout displays (desktop) or stacks (mobile):
  - **Left column:** Experience items followed by Education items
  - **Right column:** Skills organized by category
- Experience cards are clickable and navigate to project detail pages
- Each experience shows company, role, location, dates, description, and optional GitHub link
- Freelance work is marked with a badge
- Hovering over experience cards shows visual feedback (accent line, arrow indicator)
- Education cards follow similar design, clickable if they have a detail URL
- Skills are displayed as pill-shaped tags grouped by category
- Skills with GitHub links show a small GitHub button next to the tag
- Clicking a GitHub button opens the repository in a new tab

## Design Decisions

### Two-Column Layout Strategy
- **Left column:** Chronological timeline (Experience → Education)
- **Right column:** Skills taxonomy (categorized for quick scanning)
- Balanced content distribution between career history and technical capabilities
- On mobile, content stacks with experience/education first, then skills

### Experience Card Design
- **Clickable cards** with hover feedback (translate-x-1, accent line appears)
- **Card structure:**
  - Company name + Freelance badge (if applicable)
  - Role in primary accent color
  - Location + date range in monospace font
  - Brief description highlighting key achievements
  - Optional GitHub button in top-right corner (separate click area)
  - Arrow indicator on right edge (appears on hover)
- **Surface background color** with primary accent line on left edge (hover state)
- Cards have individual entrance animations with staggered delays

### Education Card Design
- Similar to experience cards but with:
  - Institution name as the primary heading
  - Degree type and field of study
  - Only clickable if `detailUrl` is not null
  - **Secondary accent color** (green) for hover effects instead of primary (bronze)
- Non-clickable education items don't show hover effects or arrow indicators

### Skills Organization
- **Category-based grouping:**
  - ML & Stats
  - MLOps
  - Cloud
  - Gen AI
  - Languages (with proficiency levels)
- **Pill-shaped tags** with surface background color
- Skills with `detailUrl` scale up on hover (interactive)
- Skills with `githubUrl` show a small GitHub button adjacent to the tag
- Language skills display proficiency levels in parentheses (Native, Fluent, Basic)

### GitHub Integration
- **GitHubButton component** provides consistent design across experience and skills
- Two sizes: small (for skills) and medium (for experience cards)
- Hover effect: scale-110 for button feedback
- Default behavior: opens URL in new tab with `noopener,noreferrer`
- Custom callback allows analytics tracking or custom behavior

### Interactive Elements
- **Experience cards:** Full card clickable except for GitHub button
- **Education cards:** Full card clickable only if `detailUrl` exists
- **Skill tags:** Clickable only if `detailUrl` exists
- **GitHub buttons:** Always clickable, separate from parent card/tag clicks
- Event propagation properly handled (e.stopPropagation on GitHub clicks)

## Data Used

**Entities:** Experience, Education, Skill, SkillCategory

**From global model:**
- **Experience** — Professional history including jobs, internships, and freelance work (id, company, role, type, location, startDate, endDate, current, description, detailUrl, githubUrl)
- **Education** — Educational background (id, institution, degree, field, location, startDate, endDate, description, detailUrl)
- **Skill** — Individual technical competencies (id, name, level, detailUrl, githubUrl)
- **SkillCategory** — Grouped skills by domain (id, name, skills[])

Each Experience item must have a `detailUrl` to link to project pages. Education and Skill items have optional `detailUrl` fields. GitHub repository links are optional for both Experience and Skill entities.

## Visual Reference

See `screenshot.png` for the target UI design (if exists).

## Components Provided

- **ExperienceSkills.tsx** — Main section component with two-column layout
  - Renders section header with accent line
  - Creates grid layout (1 column mobile, 2 columns desktop)
  - Displays three subsections: Experience, Education, Skills
  - Passes callbacks down to child components

- **ExperienceCard.tsx** — Individual experience item card
  - Displays company name with optional freelance badge
  - Shows role, location, dates, and description
  - Includes GitHub button if `githubUrl` exists
  - Click handler for navigation to detail page
  - Hover effects: accent line, arrow indicator, translate-x
  - Date formatting utility (converts YYYY-MM to "Mon YYYY")

- **EducationCard.tsx** — Individual education item card
  - Displays institution, degree, field, and description
  - Only clickable if `detailUrl` is not null
  - Uses secondary accent color (green) for hover effects
  - Similar hover behavior to experience cards when clickable
  - Date formatting utility

- **SkillCategory.tsx** — Skills group component
  - Renders category heading with border
  - Displays skills as pill-shaped tags in flex-wrap layout
  - Handles clickable vs non-clickable skills
  - Shows GitHub button next to skills with `githubUrl`
  - Language skills display proficiency levels

- **GitHubButton.tsx** — Reusable GitHub link button
  - Circular button with GitHub icon
  - Two size variants: sm (24px) and md (32px)
  - Default behavior: opens URL in new tab
  - Optional custom callback for tracking/analytics
  - Hover effect: scale-110 with smooth transition

## Callback Props

| Callback | Description |
|----------|-------------|
| `onExperienceClick` | Called when user clicks an experience card. Receives `(id: string, detailUrl: string)`. Use this to navigate to the project detail page or trigger custom navigation. If not provided, default behavior should handle the navigation. |
| `onEducationClick` | Called when user clicks an education card (only if it has a `detailUrl`). Receives `(id: string, detailUrl: string)`. Similar to experience click handling. |
| `onSkillClick` | Called when user clicks a skill tag that has a `detailUrl`. Receives `(id: string, detailUrl: string)`. Use this to show skill details or related projects. |
| `onGitHubClick` | Called when user clicks any GitHub button (on experience cards or skill tags). Receives `(url: string)`. Use this to track GitHub link clicks or implement custom behavior. If not provided, opens link in new tab with `window.open(url, '_blank', 'noopener,noreferrer')`. |

**Note:** All callbacks are optional. The components have default behaviors when callbacks are not provided, ensuring they work out-of-the-box while still being customizable for analytics, routing, or other needs.
