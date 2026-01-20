# Experience & Skills Section — Test Specifications

## Overview

These are framework-agnostic test instructions. Adapt them to your testing framework (Jest, Vitest, Playwright, Cypress, RSpec, Minitest, PHPUnit, etc.).

The Experience & Skills section displays professional history, education, and technical skills. Tests should verify data rendering, click interactions, GitHub button behavior, and conditional rendering based on URLs.

## Test Data

Use sample data from `product/sections/experience-and-skills/data.json` (abbreviated here for brevity):

```json
{
  "experiences": [
    {
      "id": "exp-001",
      "company": "SNCF",
      "role": "Data Scientist",
      "location": "Saint-Denis, France",
      "startDate": "2025-01",
      "endDate": null,
      "current": true,
      "description": "Critical defect detection, model explainability...",
      "detailUrl": "/projects/sncf",
      "githubUrl": null
    },
    {
      "id": "exp-004",
      "company": "MEWE Architects",
      "role": "AI Engineer",
      "type": "Freelance",
      "location": "Grenoble, France",
      "startDate": "2024-09",
      "endDate": "2024-12",
      "current": false,
      "description": "Multimodal RAG pipeline...",
      "detailUrl": "/projects/mewe",
      "githubUrl": "https://github.com/fllin1/mawa"
    }
  ],
  "education": [
    {
      "id": "edu-001",
      "institution": "ENSAE Paris",
      "degree": "Engineering Degree (Master's level)",
      "field": "Statistics, Machine Learning, Deep Learning",
      "location": "Palaiseau, France",
      "startDate": "2021-09",
      "endDate": "2024-06",
      "description": "Transport optimization with JAX...",
      "detailUrl": "/projects/ensae"
    },
    {
      "id": "edu-002",
      "institution": "Lycée Saint-Louis",
      "degree": "Preparatory Classes (PC*)",
      "field": "Mathematics, Physics, Chemistry, Computer Science",
      "location": "Paris, France",
      "startDate": "2019-09",
      "endDate": "2021-06",
      "description": "Intensive preparation...",
      "detailUrl": null
    }
  ],
  "skillCategories": [
    {
      "id": "cat-001",
      "name": "ML & Stats",
      "skills": [
        { "id": "skill-001", "name": "Python", "detailUrl": null, "githubUrl": null },
        { "id": "skill-002", "name": "PyTorch", "detailUrl": null, "githubUrl": null }
      ]
    },
    {
      "id": "cat-004",
      "name": "Gen AI",
      "skills": [
        { "id": "skill-014", "name": "RAG", "detailUrl": null, "githubUrl": "https://github.com/fllin1/hoopla" }
      ]
    },
    {
      "id": "cat-005",
      "name": "Languages",
      "skills": [
        { "id": "skill-019", "name": "French", "level": "Native", "detailUrl": null, "githubUrl": null }
      ]
    }
  ]
}
```

---

## User Flow Tests

### Test 1: Section Renders with All Subsections

**Setup:**
- Render the ExperienceSkills component with sample data

**Verify:**
- Page displays "Experience & Skills" as section heading
- Centered accent line appears below heading
- "EXPERIENCE" subsection heading is visible
- "EDUCATION" subsection heading is visible
- "SKILLS" subsection heading is visible

**Expected Result:** All three subsections are present with proper headings

---

### Test 2: Experience Cards Display Correctly

**Setup:**
- Render with 2 experience items (SNCF and MEWE)

**Verify:**
- **SNCF card shows:**
  - Company: "SNCF"
  - Role: "Data Scientist"
  - Location: "Saint-Denis, France"
  - Dates: "Jan 2025 — Present"
  - Description includes "Critical defect detection"
  - No GitHub button (githubUrl is null)
  - No "Freelance" badge (type is undefined)

- **MEWE card shows:**
  - Company: "MEWE Architects"
  - Role: "AI Engineer"
  - "Freelance" badge is visible
  - Location: "Grenoble, France"
  - Dates: "Sep 2024 — Dec 2024"
  - Description includes "Multimodal RAG pipeline"
  - GitHub button is visible (githubUrl exists)

**Expected Result:** Experience cards render with all details and conditional elements

---

### Test 3: Experience Card Click Navigation

**Setup:**
- Create mock function for `onExperienceClick`
- Render with SNCF experience
- Locate the SNCF card

**Interaction:**
- Click anywhere on the SNCF card (but not the GitHub button area)

**Verify:**
- `onExperienceClick` was called once
- First argument is "exp-001"
- Second argument is "/projects/sncf"

**Expected Result:** Clicking experience card triggers navigation callback

---

### Test 4: GitHub Button on Experience Card

**Setup:**
- Create mock function for `onGitHubClick`
- Render with MEWE experience (has githubUrl)
- Locate the GitHub button on MEWE card

**Interaction:**
- Click the GitHub button

**Verify:**
- `onGitHubClick` was called once with "https://github.com/fllin1/mawa"
- `onExperienceClick` was NOT called (event propagation stopped)

**Expected Result:** GitHub button click doesn't trigger card click

---

### Test 5: Education Cards Display Correctly

**Setup:**
- Render with 2 education items (ENSAE Paris and Lycée Saint-Louis)

**Verify:**
- **ENSAE card shows:**
  - Institution: "ENSAE Paris"
  - Degree: "Engineering Degree (Master's level)"
  - Field: "Statistics, Machine Learning, Deep Learning"
  - Location: "Palaiseau, France"
  - Dates: "Sep 2021 — Jun 2024"
  - Description includes "Transport optimization with JAX"
  - Card is clickable (has cursor-pointer class)
  - Hover shows accent line and arrow

- **Lycée card shows:**
  - Institution: "Lycée Saint-Louis"
  - All other fields rendered
  - Card is NOT clickable (no cursor-pointer class)
  - No hover effects visible

**Expected Result:** Education cards render with conditional clickability

---

### Test 6: Clickable Education Card Interaction

**Setup:**
- Create mock function for `onEducationClick`
- Render with ENSAE education (detailUrl exists)

**Interaction:**
- Click the ENSAE card

**Verify:**
- `onEducationClick` was called once
- First argument is "edu-001"
- Second argument is "/projects/ensae"

**Expected Result:** Clickable education cards trigger callback

---

### Test 7: Non-Clickable Education Card

**Setup:**
- Create mock function for `onEducationClick`
- Render with Lycée education (detailUrl is null)

**Interaction:**
- Click the Lycée card

**Verify:**
- `onEducationClick` was NOT called
- No navigation occurs
- Card does not have hover effects

**Expected Result:** Non-clickable education cards don't respond to clicks

---

### Test 8: Skills Display by Category

**Setup:**
- Render with skill categories: ML & Stats, Gen AI, Languages

**Verify:**
- "ML & STATS" category heading is visible
- Skills within category: "Python", "PyTorch" are displayed as pill tags
- "GEN AI" category heading is visible
- "RAG" skill is displayed
- GitHub button appears next to "RAG" skill
- "LANGUAGES" category heading is visible
- "French" skill displays with "(Native)" level indicator

**Expected Result:** Skills are grouped by category with proper formatting

---

### Test 9: Skill with GitHub Link

**Setup:**
- Create mock function for `onGitHubClick`
- Render with Gen AI category containing "RAG" skill

**Interaction:**
- Click the GitHub button next to "RAG" skill

**Verify:**
- `onGitHubClick` was called with "https://github.com/fllin1/hoopla"
- Skill tag itself was not clicked (event propagation stopped)

**Expected Result:** GitHub button on skills works independently

---

### Test 10: Skill Tag Clickability

**Setup:**
- Render with a skill that has `detailUrl: "/skills/pytorch"`
- Create mock function for `onSkillClick`

**Interaction:**
- Click the "PyTorch" skill tag

**Verify:**
- `onSkillClick` was called with skill id and "/skills/pytorch"
- Tag has hover effect (scale-105)

**Setup 2:**
- Render with a skill that has `detailUrl: null`

**Interaction:**
- Click the skill tag

**Verify:**
- `onSkillClick` was NOT called
- Tag does not have hover scaling effect

**Expected Result:** Only skills with detailUrl are clickable

---

## Empty State Tests

### Test 11: Empty Experience Array

**Setup:**
- Render with `experiences: []`

**Verify:**
- "EXPERIENCE" heading still displays
- No experience cards are rendered
- No errors occur
- Education and Skills sections render normally

**Expected Result:** Empty experience list handled gracefully

---

### Test 12: Empty Education Array

**Setup:**
- Render with `education: []`

**Verify:**
- "EDUCATION" heading still displays
- No education cards are rendered
- Experience and Skills sections render normally

**Expected Result:** Empty education list handled gracefully

---

### Test 13: Empty Skills Array

**Setup:**
- Render with `skillCategories: []` or categories with empty skills arrays

**Verify:**
- "SKILLS" heading still displays
- No skill tags are rendered
- Experience and Education sections render normally

**Expected Result:** Empty skills list handled gracefully

---

## Component Interaction Tests

### Test 14: Experience Card Hover Effects

**Setup:**
- Render with SNCF experience
- Locate the card

**Interaction:**
- Hover over the experience card

**Verify:**
- Card translates to the right (hover:translate-x-1)
- Left accent line appears with primary color
- Right arrow indicator becomes visible
- Transitions are smooth (duration-300)

**Expected Result:** Hover provides clear visual feedback

---

### Test 15: Entrance Animations Present

**Setup:**
- Render with 3 experiences, 2 education items, 3 skill categories

**Verify:**
- **Experience cards:**
  - Card 1 animation delay ~0.1s
  - Card 2 animation delay ~0.2s
  - Card 3 animation delay ~0.3s
- **Education cards:**
  - Card 1 animation delay ~0.1s
  - Card 2 animation delay ~0.2s
- **Skill categories:**
  - Category 1 animation delay ~0.2s
  - Category 2 animation delay ~0.3s
  - Category 3 animation delay ~0.4s

**Expected Result:** Staggered animations create smooth entrance

---

### Test 16: Date Formatting

**Setup:**
- Render with various date formats

**Verify:**
- "2025-01" displays as "Jan 2025"
- "2024-06" displays as "Jun 2024"
- `endDate: null` with `current: true` displays as "Present"
- Date range displays as "Start — End" with proper spacing

**Expected Result:** Dates are formatted in human-readable format

---

## Edge Cases

### Test 17: Experience with Missing Optional Fields

**Setup:**
- Render experience with:
  - `type: undefined` (no freelance badge)
  - `githubUrl: null` (no GitHub button)
  - `description: ""` (empty description)

**Verify:**
- Card renders without errors
- No freelance badge appears
- No GitHub button appears
- Empty description doesn't break layout

**Expected Result:** Optional fields are truly optional

---

### Test 18: Very Long Company/Role Names

**Setup:**
- Render experience with 50+ character company name and role

**Verify:**
- Text wraps appropriately
- Card expands to fit content
- No horizontal overflow
- Layout remains intact

**Expected Result:** Long text handled gracefully

---

### Test 19: Many Skills in One Category

**Setup:**
- Render skill category with 20+ skills

**Verify:**
- Skills wrap to multiple rows (flex-wrap)
- All skills are visible
- No horizontal overflow
- Spacing between tags is consistent

**Expected Result:** Large skill lists displayed properly

---

### Test 20: Special Characters in Descriptions

**Setup:**
- Render experience/education with special characters: `<script>`, `"quotes"`, `&symbols`

**Verify:**
- Special characters are escaped and display correctly
- No XSS vulnerabilities
- HTML tags are not interpreted

**Expected Result:** Content is properly sanitized

---

## Responsive Design Tests

### Test 21: Mobile Layout (< 1024px)

**Setup:**
- Render full section
- Set viewport to 768px or 375px

**Verify:**
- Experience and Education stack vertically (1 column)
- Skills appear below Experience/Education
- All cards remain readable
- GitHub buttons stay accessible
- No horizontal scrolling

**Expected Result:** Mobile layout uses single-column design

---

### Test 22: Desktop Layout (>= 1024px)

**Setup:**
- Render full section
- Set viewport to 1440px

**Verify:**
- Experience + Education in left column
- Skills in right column (side-by-side layout)
- Content max-width constraint applies (max-w-6xl)
- Visual balance between columns
- Proper gap between columns (gap-16 or similar)

**Expected Result:** Desktop uses two-column layout effectively

---

## Accessibility Tests

### Test 23: Keyboard Navigation

**Setup:**
- Render section
- Use Tab key to navigate

**Verify:**
- Experience cards are focusable
- Education cards (with detailUrl) are focusable
- Skill tags (with detailUrl) are focusable
- GitHub buttons are focusable
- Enter key triggers click handlers
- Focus indicators are visible

**Expected Result:** All interactive elements are keyboard accessible

---

### Test 24: Semantic HTML Structure

**Setup:**
- Render section

**Verify:**
- Section uses `<section>` tag
- Headings use proper hierarchy (h2 → h3)
- Cards use button/link roles appropriately
- Date ranges have semantic markup

**Expected Result:** Proper HTML semantics for accessibility

---

## Sample Test Code Structure

**Example (pseudo-code):**

```javascript
describe('Experience & Skills Section', () => {
  it('renders experience cards with all details', () => {
    const onExperienceClick = jest.fn()
    render(<ExperienceSkills experiences={sampleData} onExperienceClick={onExperienceClick} />)

    expect(screen.getByText('SNCF')).toBeVisible()
    expect(screen.getByText('Data Scientist')).toBeVisible()

    fireEvent.click(screen.getByText('SNCF'))
    expect(onExperienceClick).toHaveBeenCalledWith('exp-001', '/projects/sncf')
  })

  it('GitHub button stops event propagation', () => {
    const onGitHubClick = jest.fn()
    const onExperienceClick = jest.fn()
    render(<ExperienceSkills {...props} onGitHubClick={onGitHubClick} onExperienceClick={onExperienceClick} />)

    const githubButton = screen.getByLabelText('View on GitHub')
    fireEvent.click(githubButton)

    expect(onGitHubClick).toHaveBeenCalledWith('https://github.com/fllin1/mawa')
    expect(onExperienceClick).not.toHaveBeenCalled()
  })

  it('non-clickable education card does not respond to clicks', () => {
    const onEducationClick = jest.fn()
    render(<ExperienceSkills education={lyceeData} onEducationClick={onEducationClick} />)

    fireEvent.click(screen.getByText('Lycée Saint-Louis'))
    expect(onEducationClick).not.toHaveBeenCalled()
  })
})
```

Adapt this structure to your testing framework.
