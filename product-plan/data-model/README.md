# Data Model

## Overview

The data model defines the core entities and their relationships for Florent Lin's portfolio. All entities relate to a single Profile that represents Florent's professional identity.

## Entity Relationships

```
Profile (root)
  ├── experiences[] (1:many)
  ├── education[] (1:many)
  ├── skills[] (grouped in categories) (1:many)
  ├── aspirations[] (1:many)
  └── hobbies[] (1:many)
```

## Core Entities

### Profile
The root entity representing personal identity. Contains name, title, location, tagline, and optional social links.

**Used in:** Hero section

### Experience
Professional and educational work history entries. Each experience can link to a dedicated project detail page and optionally include a GitHub repository.

**Used in:** Experience & Skills section

### Education
Educational background including degrees, certifications, and academic achievements.

**Used in:** Experience & Skills section

### Skill
Technical competencies and tools, grouped by category (ML & Stats, MLOps, Cloud, Gen AI, Languages).

**Used in:** Experience & Skills section

### Aspiration
Professional goals and ambitions that drive career direction.

**Used in:** About section

### Hobby
Personal interests and activities outside of work that showcase personality.

**Used in:** About section

## Type Definitions

See `types.ts` for complete TypeScript interface definitions.

## Sample Data

See `sample-data.json` for example data that can be used for testing before real backend data is available.
