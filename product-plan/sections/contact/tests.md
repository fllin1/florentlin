# Contact Section — Test Specifications

## Overview

These are framework-agnostic test instructions. Adapt them to your testing framework (Jest, Vitest, Playwright, Cypress, RSpec, Minitest, PHPUnit, etc.).

The Contact section displays contact links with a primary CTA (email) and secondary options (LinkedIn, GitHub). Tests should verify rendering, click behaviors, visual hierarchy, and animations.

## Test Data

Use the sample data from `product/sections/contact/data.json`:

```json
{
  "contactLinks": [
    {
      "id": "contact-001",
      "type": "email",
      "label": "Email",
      "value": "1florentlin@gmail.com",
      "url": "mailto:1florentlin@gmail.com",
      "icon": "mail",
      "primary": true
    },
    {
      "id": "contact-002",
      "type": "linkedin",
      "label": "LinkedIn",
      "value": "florentlin",
      "url": "https://www.linkedin.com/in/florentlin",
      "icon": "linkedin",
      "primary": false
    },
    {
      "id": "contact-003",
      "type": "github",
      "label": "GitHub",
      "value": "fllin1",
      "url": "https://github.com/fllin1",
      "icon": "github",
      "primary": false
    }
  ]
}
```

---

## User Flow Tests

### Test 1: Contact Section Renders with Header

**Setup:**
- Render the Contact component with sample contact links

**Verify:**
- Page displays "Get in Touch" as section heading
- Centered accent line appears below heading (16px width, 2px height)
- Introductory text displays: "Interested in working together or have a question? I'd love to hear from you."
- Text has proper line break on larger screens

**Expected Result:** Section header and intro text render correctly

---

### Test 2: Primary Contact Link (Email) Displays Correctly

**Setup:**
- Render the Contact component with sample data

**Verify:**
- Email button is displayed prominently
- Button shows mail icon (envelope SVG)
- Button shows "Email" label
- Button does NOT show email address value (primary buttons hide value)
- Button has arrow indicator on the right
- Button has primary accent background color (bronze)
- Button has white text color
- Button is full-width with centered content

**Expected Result:** Primary email CTA has distinct styling

---

### Test 3: Secondary Contact Links Display Correctly

**Setup:**
- Render the Contact component with sample data

**Verify:**
- Divider section displays with "OR FIND ME ON" text
- Two buttons appear side-by-side below divider
- **LinkedIn button shows:**
  - LinkedIn icon
  - "LinkedIn" label
  - "florentlin" username in smaller, monospace font
  - Surface background color (beige)
  - No arrow indicator
- **GitHub button shows:**
  - GitHub icon
  - "GitHub" label
  - "fllin1" username in smaller, monospace font
  - Surface background color (beige)
  - No arrow indicator

**Expected Result:** Secondary links have different styling from primary

---

### Test 4: Email Link Click Behavior (Default)

**Setup:**
- Render Contact component WITHOUT `onContactClick` callback
- Mock `window.location.href` to capture navigation

**Interaction:**
- Click the Email button

**Verify:**
- `window.location.href` was set to "mailto:1florentlin@gmail.com"
- Mail client would open (in real environment)

**Expected Result:** Email link opens mail client by default

---

### Test 5: Email Link Click Behavior (Custom Callback)

**Setup:**
- Create mock function for `onContactClick`
- Render Contact component with the callback

**Interaction:**
- Click the Email button

**Verify:**
- `onContactClick` was called once
- First argument is "contact-001"
- Second argument is "mailto:1florentlin@gmail.com"
- Default navigation does NOT occur (callback takes precedence)

**Expected Result:** Custom callback intercepts default email behavior

---

### Test 6: LinkedIn Link Click Behavior (Default)

**Setup:**
- Render Contact component WITHOUT `onContactClick` callback
- Mock `window.open` to capture navigation

**Interaction:**
- Click the LinkedIn button

**Verify:**
- `window.open` was called with:
  - URL: "https://www.linkedin.com/in/florentlin"
  - Target: "_blank"
  - Features: "noopener,noreferrer"

**Expected Result:** LinkedIn opens in new tab with security attributes

---

### Test 7: LinkedIn Link Click Behavior (Custom Callback)

**Setup:**
- Create mock function for `onContactClick`
- Render Contact component with the callback

**Interaction:**
- Click the LinkedIn button

**Verify:**
- `onContactClick` was called once
- First argument is "contact-002"
- Second argument is "https://www.linkedin.com/in/florentlin"
- `window.open` was NOT called

**Expected Result:** Custom callback intercepts default LinkedIn behavior

---

### Test 8: GitHub Link Click Behavior

**Setup:**
- Create mock function for `onContactClick`
- Render Contact component with the callback

**Interaction:**
- Click the GitHub button

**Verify:**
- `onContactClick` was called once
- First argument is "contact-003"
- Second argument is "https://github.com/fllin1"

**Expected Result:** GitHub link triggers callback correctly

---

## Empty State Tests

### Test 9: Contact with No Links

**Setup:**
- Render Contact component with `contactLinks: []`

**Verify:**
- Section header "Get in Touch" still displays
- Introductory text still renders
- No buttons appear
- No divider appears (conditional rendering)
- No errors or crashes

**Expected Result:** Empty contact links handled gracefully

---

### Test 10: Contact with Only Primary Link

**Setup:**
- Render Contact component with only email (primary: true), no secondary links

**Verify:**
- Email button renders correctly
- Divider section does NOT render (no secondary links)
- No layout errors

**Expected Result:** Section works with only primary link

---

### Test 11: Contact with Only Secondary Links

**Setup:**
- Render Contact component with only LinkedIn and GitHub (primary: false)

**Verify:**
- No primary button section renders
- Divider still appears (if there are secondary links)
- LinkedIn and GitHub buttons render side-by-side
- Section remains functional

**Expected Result:** Section works with only secondary links

---

## Component Interaction Tests

### Test 12: Primary Button Hover Effects

**Setup:**
- Render Contact component with email link
- Locate the Email button

**Interaction:**
- Hover over the Email button

**Verify:**
- Button scales up (hover:scale-105)
- Button lifts upward (hover:translate-y-[-2px])
- Icon rotates slightly (group-hover:rotate-6)
- Transitions are smooth (duration-300)

**Expected Result:** Primary button provides visual hover feedback

---

### Test 13: Secondary Button Hover Effects

**Setup:**
- Render Contact component with LinkedIn link
- Locate the LinkedIn button

**Interaction:**
- Hover over the LinkedIn button

**Verify:**
- Button scales up (hover:scale-105)
- Button lifts upward (hover:translate-y-[-2px])
- Icon rotates slightly (group-hover:rotate-6)
- Transitions are smooth (duration-300)

**Expected Result:** Secondary buttons provide visual hover feedback

---

### Test 14: Entrance Animations Present

**Setup:**
- Render Contact component with all links

**Verify:**
- Introductory text has fade-in animation with ~0.1s delay
- Primary email button has fade-slide-up animation with ~0.2s delay
- Divider has fade-in animation with ~0.4s delay
- LinkedIn button has fade-slide-up animation with ~0.35s delay
- GitHub button has fade-slide-up animation with ~0.5s delay
- Decorative dots have fade-in animation with ~0.8s delay

**Expected Result:** Staggered animations create smooth entrance

---

### Test 15: Decorative Elements Render

**Setup:**
- Render Contact component

**Verify:**
- Three decorative dots appear at bottom of section
- Dots are small circles (w-1 h-1)
- Outer dots use secondary color (green)
- Center dot uses primary color (bronze)
- Dots are horizontally centered with gap between them

**Expected Result:** Decorative elements add visual polish

---

## Edge Cases

### Test 16: Multiple Primary Links

**Setup:**
- Render Contact component with TWO links marked as `primary: true`

**Verify:**
- Only the first primary link gets primary styling (or both, depending on implementation)
- No layout breaks or overlapping elements
- Secondary links still render correctly below

**Expected Result:** Component handles unexpected data gracefully

---

### Test 17: Very Long Email Address

**Setup:**
- Render Contact with email value: "verylongemailaddress@example.com"

**Verify:**
- Primary button doesn't show the email value (only label)
- Button remains properly sized
- No text overflow or horizontal scrolling

**Expected Result:** Long email addresses don't break layout

---

### Test 18: Special Characters in Values

**Setup:**
- Render Contact with username containing special characters: `"user+name@test"`

**Verify:**
- Special characters are properly encoded in URLs
- No broken links or errors
- Characters display correctly if shown

**Expected Result:** Special characters are handled properly

---

### Test 19: Missing Icon Type

**Setup:**
- Render Contact with a link that has `icon: "invalid-icon"`

**Verify:**
- Component either:
  - Falls back to a default icon, OR
  - Doesn't render the icon but still shows label, OR
  - Throws a helpful error in development
- Rest of the section remains functional

**Expected Result:** Invalid icon types don't crash the component

---

## Responsive Design Tests

### Test 20: Mobile Viewport (< 640px)

**Setup:**
- Render Contact component
- Set viewport to 375px width

**Verify:**
- Section title font size scales appropriately
- Introductory text line break works on mobile
- Primary email button is full-width
- Secondary buttons stack vertically or remain side-by-side (depending on design)
- All buttons remain clickable and accessible
- No horizontal scrolling

**Expected Result:** Contact section fully functional on mobile

---

### Test 21: Tablet Viewport (640px - 1024px)

**Setup:**
- Render Contact component
- Set viewport to 768px width

**Verify:**
- Layout transitions smoothly from mobile
- Text sizes are readable
- Button spacing is appropriate
- Content remains centered with max-width constraint

**Expected Result:** Good experience on tablet devices

---

### Test 22: Desktop Viewport (> 1024px)

**Setup:**
- Render Contact component
- Set viewport to 1440px width

**Verify:**
- Content is centered with max-width (max-w-xl)
- Section uses appropriate padding
- Font sizes are at maximum scale
- Decorative elements are positioned correctly
- Visual hierarchy is clear

**Expected Result:** Contact section uses desktop space effectively

---

## Accessibility Tests

### Test 23: Keyboard Navigation

**Setup:**
- Render Contact component
- Use Tab key to navigate

**Verify:**
- All contact link buttons are focusable with Tab
- Focus order: Email → LinkedIn → GitHub
- Enter key triggers button click (calls callback or navigates)
- Focus indicators are visible (outline or ring)

**Expected Result:** Keyboard users can access all contact methods

---

### Test 24: Screen Reader Compatibility

**Setup:**
- Render Contact component
- Test with screen reader (or verify attributes)

**Verify:**
- Buttons have descriptive labels
- Icons are decorative (aria-hidden or ignored)
- Section has proper heading hierarchy (h2)
- Link purposes are clear from labels

**Expected Result:** Screen readers can navigate section effectively

---

### Test 25: Semantic HTML Structure

**Setup:**
- Render Contact component

**Verify:**
- Section uses `<section>` tag
- Heading uses `<h2>` tag
- Contact links use `<button>` tags (not divs)
- Decorative elements use appropriate markup

**Expected Result:** Proper semantic HTML improves accessibility

---

## Sample Test Code Structure

**Example (pseudo-code for framework-agnostic reference):**

```javascript
describe('Contact Section', () => {
  const sampleLinks = [
    { id: "1", type: "email", label: "Email", value: "test@example.com", url: "mailto:test@example.com", icon: "mail", primary: true },
    { id: "2", type: "linkedin", label: "LinkedIn", value: "username", url: "https://linkedin.com/in/username", icon: "linkedin", primary: false }
  ]

  it('renders primary email button with correct styling', () => {
    render(<Contact contactLinks={sampleLinks} />)

    const emailButton = screen.getByText('Email').closest('button')
    expect(emailButton).toBeVisible()
    expect(emailButton).toHaveStyle({ backgroundColor: 'var(--primary, #d4a373)' })
    expect(screen.queryByText('test@example.com')).not.toBeInTheDocument() // value not shown on primary
  })

  it('calls onContactClick when email is clicked', () => {
    const onContactClick = jest.fn()
    render(<Contact contactLinks={sampleLinks} onContactClick={onContactClick} />)

    fireEvent.click(screen.getByText('Email'))
    expect(onContactClick).toHaveBeenCalledWith('1', 'mailto:test@example.com')
  })

  it('opens email in mail client when no callback provided', () => {
    const setHref = jest.fn()
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: setHref }
    })

    render(<Contact contactLinks={sampleLinks} />)
    fireEvent.click(screen.getByText('Email'))

    expect(window.location.href).toHaveBeenCalledWith('mailto:test@example.com')
  })

  it('renders secondary links with usernames', () => {
    render(<Contact contactLinks={sampleLinks} />)

    expect(screen.getByText('LinkedIn')).toBeVisible()
    expect(screen.getByText('username')).toBeVisible() // value shown on secondary
  })
})
```

Adapt this structure to your testing framework and environment.
