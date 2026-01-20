# Hero Section — Test Specifications

## Overview

These are framework-agnostic test instructions. Adapt them to your testing framework (Jest, Vitest, Playwright, Cypress, RSpec, Minitest, PHPUnit, etc.).

The Hero section displays profile information with social links. Tests should verify data rendering, animation presence, and interaction behaviors.

## Test Data

Use the sample data from `product/sections/hero/data.json`:

```json
{
  "profile": {
    "id": "florent-lin",
    "name": "Florent Lin",
    "title": "Data Scientist",
    "location": "Paris, France",
    "tagline": "Building real-world ML systems with measurable",
    "taglineEmphasis": "impact",
    "socialLinks": [
      {
        "type": "linkedin",
        "url": "https://www.linkedin.com/in/florentlin",
        "label": "LinkedIn"
      },
      {
        "type": "github",
        "url": "https://github.com/fllin1",
        "label": "GitHub"
      }
    ]
  }
}
```

---

## User Flow Tests

### Test 1: Hero Section Renders with Profile Data

**Setup:**
- Render the Hero component with the sample profile data

**Verify:**
- Page displays "PARIS, FRANCE" in uppercase (location)
- Page displays "Florent Lin" (name)
- Page displays "Data Scientist" (title)
- Page displays "Building real-world ML systems with measurable impact" (tagline with emphasis)
- The word "impact" has different styling (italic, emphasized color)

**Expected Result:** All profile information renders correctly with proper hierarchy and styling

---

### Test 2: Social Links Render and Are Clickable

**Setup:**
- Render the Hero component with the sample profile data

**Verify:**
- Page displays "LinkedIn" link button in top-right corner
- Page displays "GitHub" link button in top-right corner
- Both buttons contain the link label text
- Both buttons have an external link arrow icon

**Click Interaction:**
- Click the "LinkedIn" button
- Verify either:
  - `onSocialClick` callback was called with `"https://www.linkedin.com/in/florentlin"`, OR
  - New window opened with the LinkedIn URL (if no callback provided)

- Click the "GitHub" button
- Verify either:
  - `onSocialClick` callback was called with `"https://github.com/fllin1"`, OR
  - New window opened with the GitHub URL (if no callback provided)

**Expected Result:** Social links are visible, clickable, and trigger appropriate navigation

---

### Test 3: Social Links Hover Behavior

**Setup:**
- Render the Hero component with the sample profile data
- Locate the "LinkedIn" button

**Interaction:**
- Hover over the "LinkedIn" button

**Verify:**
- Button opacity changes (reduced to 70%)
- Arrow icon within button translates right and up (diagonal movement)

**Expected Result:** Hover effects provide visual feedback for interactivity

---

### Test 4: Scroll Indicator Animation

**Setup:**
- Render the Hero component with the sample profile data

**Verify:**
- Scroll arrow icon is present at the bottom of the section
- Arrow has a bounce animation (verify CSS animation or check for transform changes over time)

**Expected Result:** Animated scroll indicator draws attention to continue scrolling

---

## Empty State Tests

### Test 5: Hero with Missing Social Links

**Setup:**
- Render the Hero component with profile data but `socialLinks` set to `[]` or `undefined`

**Verify:**
- Profile information (name, title, location, tagline) still renders correctly
- Social links section in top-right corner does NOT render
- No errors or broken UI

**Expected Result:** Hero gracefully handles missing social links

---

### Test 6: Hero with Missing Optional Emphasis

**Setup:**
- Render the Hero component with profile data but `taglineEmphasis` set to `null` or `undefined`

**Verify:**
- Tagline renders without the emphasized portion
- No empty span elements or broken styling
- Rest of the hero section renders normally

**Expected Result:** Tagline works without emphasis

---

## Component Interaction Tests

### Test 7: Custom onSocialClick Callback

**Setup:**
- Create a mock function for `onSocialClick`
- Render the Hero component with the mock callback

**Interaction:**
- Click the "LinkedIn" button

**Verify:**
- `onSocialClick` was called exactly once
- First argument is `"https://www.linkedin.com/in/florentlin"`
- No new window/tab was opened (callback takes precedence)

**Expected Result:** Custom callback intercepts default navigation behavior

---

### Test 8: Entrance Animations Present

**Setup:**
- Render the Hero component with the sample profile data

**Verify:**
- Location element has `animate-[fadeSlideUp_...]` class or similar
- Name element has `animate-[fadeSlideUp_...]` class with delay
- Title element has `animate-[fadeSlideUp_...]` class with delay
- Tagline element has `animate-[fadeSlideUp_...]` class with delay
- Social links have `animate-[fadeIn_...]` class with delay
- Animation delays are staggered (0.2s, 0.4s, 0.6s, 0.8s progression)

**Expected Result:** All elements have entrance animations with proper delays

---

## Edge Cases

### Test 9: Very Long Name or Title

**Setup:**
- Render the Hero component with profile data where `name` is 50+ characters
- Render again with `title` being 50+ characters

**Verify:**
- Text doesn't overflow the viewport
- Layout remains centered and balanced
- No horizontal scrollbar appears
- Text wraps appropriately on mobile viewports

**Expected Result:** Long text is handled gracefully across screen sizes

---

### Test 10: Special Characters in Tagline

**Setup:**
- Render the Hero component with profile data containing special characters in tagline:
  - `"ML systems <with> measurable \"impact\" & 'results'"`

**Verify:**
- All special characters render correctly (not escaped or broken)
- HTML entities are displayed properly
- No XSS vulnerabilities (if testing security)

**Expected Result:** Special characters are properly handled and displayed

---

## Accessibility Tests

### Test 11: Semantic HTML Structure

**Setup:**
- Render the Hero component

**Verify:**
- Main container uses `<section>` tag
- Name uses `<h1>` tag (highest heading level)
- Title uses `<h2>` tag
- Social links use `<button>` tags (not just divs)
- Buttons have proper `onClick` handlers

**Expected Result:** Semantic HTML improves accessibility and SEO

---

### Test 12: Keyboard Navigation

**Setup:**
- Render the Hero component
- Use keyboard to navigate (Tab key)

**Verify:**
- Social link buttons are focusable with Tab key
- Enter key triggers button click (calls `onSocialClick` or opens URL)
- Focus indicators are visible (outline or similar)

**Expected Result:** Keyboard users can interact with social links

---

## Responsive Design Tests

### Test 13: Mobile Viewport (< 640px)

**Setup:**
- Render the Hero component
- Set viewport to 375px width (mobile)

**Verify:**
- Name font size scales down (text-5xl or similar on mobile)
- Location is still visible and readable
- Social links remain accessible in top-right
- Scroll arrow is centered and visible
- No horizontal overflow

**Expected Result:** Hero section is fully functional on mobile devices

---

### Test 14: Desktop Viewport (> 1024px)

**Setup:**
- Render the Hero component
- Set viewport to 1440px width (desktop)

**Verify:**
- Name font size is at maximum (text-7xl or text-8xl)
- Content is centered with appropriate max-width
- Social links positioned in top-right corner
- Decorative brush strokes are visible (positioned off-canvas edges)
- Background texture is present

**Expected Result:** Hero section uses full desktop space effectively

---

## Sample Test Code Structure

**Example (pseudo-code for framework-agnostic reference):**

```javascript
describe('Hero Section', () => {
  it('renders profile data correctly', () => {
    const profile = {
      name: "Florent Lin",
      title: "Data Scientist",
      location: "Paris, France",
      tagline: "Building real-world ML systems with measurable",
      taglineEmphasis: "impact",
      socialLinks: [...]
    }

    render(<Hero profile={profile} />)

    expect(screen.getByText('PARIS, FRANCE')).toBeVisible()
    expect(screen.getByText('Florent Lin')).toBeVisible()
    expect(screen.getByText('Data Scientist')).toBeVisible()
    expect(screen.getByText(/Building real-world ML systems/)).toBeVisible()
  })

  it('calls onSocialClick when LinkedIn is clicked', () => {
    const onSocialClick = jest.fn()
    render(<Hero profile={profile} onSocialClick={onSocialClick} />)

    const linkedInButton = screen.getByText('LinkedIn')
    fireEvent.click(linkedInButton)

    expect(onSocialClick).toHaveBeenCalledWith('https://www.linkedin.com/in/florentlin')
  })
})
```

Adapt this structure to your testing framework and environment.
