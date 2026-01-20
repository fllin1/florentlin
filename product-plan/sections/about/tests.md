# About Section — Test Specifications

## Overview

These are framework-agnostic test instructions. Adapt them to your testing framework (Jest, Vitest, Playwright, Cypress, RSpec, Minitest, PHPUnit, etc.).

The About section displays professional aspirations and personal hobbies in a two-column layout. Tests should verify data rendering, animations, and hover interactions.

## Test Data

Use the sample data from `product/sections/about/data.json`:

```json
{
  "aspirations": [
    {
      "id": "asp-001",
      "title": "End-to-End Ownership",
      "description": "Create real-world applications with full MLOps pipeline ownership — from research to production."
    },
    {
      "id": "asp-002",
      "title": "Team Leadership",
      "description": "Become a driving force for the team, enabling others to grow and deliver."
    },
    {
      "id": "asp-003",
      "title": "Measurable Impact",
      "description": "Demonstrate real-world value through improved sales, ROI, and customer retention."
    }
  ],
  "hobbies": [
    {
      "id": "hobby-001",
      "name": "Fitness",
      "description": "Working out consistently for 4 years",
      "icon": "dumbbell"
    },
    {
      "id": "hobby-002",
      "name": "Nutrition",
      "description": "Optimizing health through diet and lifestyle",
      "icon": "leaf"
    },
    {
      "id": "hobby-003",
      "name": "AI & Society",
      "description": "Exploring the impact of AI on society and individuals",
      "icon": "brain"
    },
    {
      "id": "hobby-004",
      "name": "Cultures",
      "description": "Interest in diverse cultures and perspectives",
      "icon": "globe"
    }
  ],
  "personality": {
    "quote": "I learn from others, and share what I know. Knowledge goes both ways."
  }
}
```

---

## User Flow Tests

### Test 1: About Section Renders with Header

**Setup:**
- Render the About component with sample aspirations and hobbies

**Verify:**
- Page displays "About" as the section heading
- Centered accent line appears below the heading (16px width, 2px height)
- Section uses proper spacing (py-24 or equivalent)

**Expected Result:** Section header renders with proper styling and layout

---

### Test 2: Aspirations Subsection Displays All Items

**Setup:**
- Render the About component with 3 aspirations

**Verify:**
- "ASPIRATIONS" subsection heading is displayed in uppercase
- Three aspiration cards are rendered
- Card 1 shows:
  - Number "01" on the left
  - Title "End-to-End Ownership"
  - Description "Create real-world applications with full MLOps pipeline ownership — from research to production."
- Card 2 shows:
  - Number "02"
  - Title "Team Leadership"
  - Description "Become a driving force for the team, enabling others to grow and deliver."
- Card 3 shows:
  - Number "03"
  - Title "Measurable Impact"
  - Description "Demonstrate real-world value through improved sales, ROI, and customer retention."

**Expected Result:** All aspirations render with correct numbering and content

---

### Test 3: Hobbies Subsection Displays All Items

**Setup:**
- Render the About component with 4 hobbies

**Verify:**
- "HOBBIES" subsection heading is displayed in uppercase
- Four hobby cards are rendered
- Card 1 shows:
  - Dumbbell icon
  - Name "Fitness"
  - Description "Working out consistently for 4 years"
- Card 2 shows:
  - Leaf icon
  - Name "Nutrition"
  - Description "Optimizing health through diet and lifestyle"
- Card 3 shows:
  - Brain icon
  - Name "AI & Society"
  - Description "Exploring the impact of AI on society and individuals"
- Card 4 shows:
  - Globe icon
  - Name "Cultures"
  - Description "Interest in diverse cultures and perspectives"

**Expected Result:** All hobbies render with correct icons and content

---

### Test 4: Aspiration Card Hover Interaction

**Setup:**
- Render the About component with sample aspirations
- Locate the first aspiration card ("End-to-End Ownership")

**Interaction:**
- Hover over the aspiration card

**Verify:**
- Vertical accent line on the left expands to fill the full card height
- Transition is smooth (duration-300 or similar)

**Expected Result:** Hover provides visual feedback on aspiration cards

---

### Test 5: Hobby Card Hover Interaction

**Setup:**
- Render the About component with sample hobbies
- Locate the first hobby card ("Fitness")

**Interaction:**
- Hover over the hobby card

**Verify:**
- Card translates to the right (hover:translate-x-1 or equivalent)
- Icon scales up (group-hover:scale-110 or equivalent)
- Background color remains transparent
- Transitions are smooth (duration-300)

**Expected Result:** Hover provides visual feedback on hobby cards

---

## Empty State Tests

### Test 6: About with No Aspirations

**Setup:**
- Render the About component with `aspirations` set to `[]`
- Provide sample hobbies

**Verify:**
- "ASPIRATIONS" heading still renders
- No aspiration cards appear
- No errors or broken UI
- Hobbies section renders normally

**Expected Result:** Empty aspirations array is handled gracefully

---

### Test 7: About with No Hobbies

**Setup:**
- Render the About component with `hobbies` set to `[]`
- Provide sample aspirations

**Verify:**
- "HOBBIES" heading still renders
- No hobby cards appear
- No errors or broken UI
- Aspirations section renders normally

**Expected Result:** Empty hobbies array is handled gracefully

---

### Test 8: About with No Data

**Setup:**
- Render the About component with both `aspirations` and `hobbies` set to `[]`

**Verify:**
- Section header "About" still renders
- Both subsection headings render
- Empty content areas are displayed (no cards)
- No errors or crashes

**Expected Result:** Component handles empty state without breaking

---

## Component Interaction Tests

### Test 9: Aspiration Card Entrance Animations

**Setup:**
- Render the About component with 3 aspirations

**Verify:**
- All aspiration cards have entrance animation class (`animate-[fadeSlideUp_...]`)
- First card has delay of ~0.1s
- Second card has delay of ~0.2s
- Third card has delay of ~0.3s
- Cards start with opacity 0 and translate from below

**Expected Result:** Aspirations animate in sequence with staggered delays

---

### Test 10: Hobby Card Entrance Animations

**Setup:**
- Render the About component with 4 hobbies

**Verify:**
- All hobby cards have entrance animation class (`animate-[fadeSlideUp_...]`)
- First card has delay of ~0.2s
- Second card has delay of ~0.3s
- Third card has delay of ~0.4s
- Fourth card has delay of ~0.5s
- Cards start with opacity 0 and translate from below

**Expected Result:** Hobbies animate in sequence with staggered delays after aspirations

---

## Edge Cases

### Test 11: Very Long Aspiration Description

**Setup:**
- Render About component with an aspiration containing 500+ character description

**Verify:**
- Description text wraps properly
- Card expands vertically to accommodate text
- No text overflow or truncation
- Vertical accent line still aligns correctly

**Expected Result:** Long descriptions are handled gracefully

---

### Test 12: Hobby with Invalid Icon Type

**Setup:**
- Render About component with a hobby having `icon: "invalid-icon"`

**Verify:**
- Component either:
  - Falls back to a default icon, OR
  - Doesn't render the icon but still shows name/description, OR
  - Throws a helpful error in development mode
- Rest of the section remains functional

**Expected Result:** Invalid icon types don't break the entire section

---

### Test 13: Special Characters in Aspiration/Hobby Content

**Setup:**
- Render About component with special characters in titles/descriptions:
  - `"ML & AI <Research>"`
  - `"\"Innovative\" solutions"`

**Verify:**
- Special characters render correctly
- No HTML injection or XSS vulnerabilities
- Quotes and symbols display as intended

**Expected Result:** Special characters are properly escaped and displayed

---

## Responsive Design Tests

### Test 14: Mobile Layout (< 1024px)

**Setup:**
- Render the About component
- Set viewport to 768px width (tablet) or 375px (mobile)

**Verify:**
- Aspirations and Hobbies stack vertically (1 column)
- Aspirations appear above Hobbies
- Spacing between sections is appropriate (gap-12 or similar)
- All cards are readable and not cramped
- Icons remain visible and properly sized

**Expected Result:** Single-column layout works on mobile devices

---

### Test 15: Desktop Layout (>= 1024px)

**Setup:**
- Render the About component
- Set viewport to 1440px width (desktop)

**Verify:**
- Aspirations and Hobbies appear side-by-side (2 columns)
- Both columns have equal width (lg:grid-cols-2)
- Gap between columns is appropriate (gap-16 or similar)
- Max-width constraint centers content (max-w-5xl mx-auto)
- Decorative accents and spacing look balanced

**Expected Result:** Two-column layout utilizes desktop space effectively

---

## Accessibility Tests

### Test 16: Semantic HTML Structure

**Setup:**
- Render the About component

**Verify:**
- Main container uses `<section>` tag
- Section heading uses `<h2>` tag
- Subsection headings use `<h3>` tags
- Aspiration titles use `<h4>` tags
- Hobby names use `<h4>` tags
- Descriptions use `<p>` tags

**Expected Result:** Proper heading hierarchy for screen readers

---

### Test 17: Icon Accessibility

**Setup:**
- Render the About component with hobbies

**Verify:**
- Each hobby icon is decorative (not interactive)
- Icons use SVG with proper attributes
- No focusable elements unless intentionally interactive
- Color contrast meets WCAG standards

**Expected Result:** Icons enhance visual design without hindering accessibility

---

## Sample Test Code Structure

**Example (pseudo-code for framework-agnostic reference):**

```javascript
describe('About Section', () => {
  const sampleAspirations = [
    { id: "asp-001", title: "End-to-End Ownership", description: "..." },
    { id: "asp-002", title: "Team Leadership", description: "..." },
    { id: "asp-003", title: "Measurable Impact", description: "..." }
  ]

  const sampleHobbies = [
    { id: "hobby-001", name: "Fitness", description: "...", icon: "dumbbell" },
    { id: "hobby-002", name: "Nutrition", description: "...", icon: "leaf" }
  ]

  it('renders all aspirations with correct numbering', () => {
    render(<About aspirations={sampleAspirations} hobbies={sampleHobbies} />)

    expect(screen.getByText('01')).toBeVisible()
    expect(screen.getByText('End-to-End Ownership')).toBeVisible()
    expect(screen.getByText('02')).toBeVisible()
    expect(screen.getByText('Team Leadership')).toBeVisible()
    expect(screen.getByText('03')).toBeVisible()
    expect(screen.getByText('Measurable Impact')).toBeVisible()
  })

  it('renders all hobbies with icons', () => {
    render(<About aspirations={sampleAspirations} hobbies={sampleHobbies} />)

    expect(screen.getByText('Fitness')).toBeVisible()
    expect(screen.getByText('Nutrition')).toBeVisible()
    // Verify icons are present (check for SVG elements or specific classes)
  })

  it('handles empty aspirations gracefully', () => {
    render(<About aspirations={[]} hobbies={sampleHobbies} />)

    expect(screen.getByText('ASPIRATIONS')).toBeVisible()
    expect(screen.queryByText('End-to-End Ownership')).not.toBeInTheDocument()
  })
})
```

Adapt this structure to your testing framework and environment.
