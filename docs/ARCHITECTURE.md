# Portfolio — Full Documentation

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Component Architecture](#component-architecture)
- [Data & State Management](#data--state-management)
- [Styling](#styling)
- [Animations](#animations)
- [Assets](#assets)
- [Firebase Configuration](#firebase-configuration)
- [Getting Started](#getting-started)
- [Deployment](#deployment)

---

## Overview

A personal portfolio website for Matthew Iwane, deployed at [matt-iwane.web.app](https://matt-iwane.web.app). The site showcases professional experience, projects, technical skills, resume, and certifications. Built as a single-page application with React and Vite, hosted on Firebase.

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18.3.1 |
| Build Tool | Vite 5.4.1 |
| Routing | React Router DOM 6.26.2 |
| Animations | Framer Motion 11.9.0 |
| Icons | React Icons 5.3.0 |
| Database | Cloud Firestore |
| Hosting | Firebase Hosting |
| Linting | ESLint (React, React Hooks, React Refresh plugins) |

---

## Project Structure

```
Portfolio/
├── README.md
├── docs/
│   └── ARCHITECTURE.md          # This file
└── frontend/
    ├── index.html                # HTML entry point
    ├── package.json              # Dependencies & scripts
    ├── vite.config.js            # Vite bundler config
    ├── eslint.config.js          # Linting rules
    ├── firebase.config.js        # Firebase SDK initialization
    ├── firebase.json             # Firebase Hosting config
    ├── .firebaserc               # Firebase project reference
    ├── dist/                     # Production build output
    ├── public/
    │   ├── code.png              # Favicon
    │   └── images/
    │       └── experience/       # Tech skill icons (16 icons)
    └── src/
        ├── main.jsx              # React DOM render entry
        ├── index.css             # Global styles
        ├── App.jsx               # Router setup
        ├── layouts/
        │   └── root.jsx          # Root layout (Navigation + Outlet)
        ├── pages/
        │   ├── Home.jsx
        │   ├── Resume.jsx
        │   ├── About.jsx
        │   ├── Work.jsx
        │   └── Error.jsx
        ├── components/
        │   ├── nav/              # Responsive navigation
        │   ├── home/
        │   │   ├── hero/         # Hero section with animated GIF
        │   │   └── portfolio/
        │   │       ├── projects/ # Firestore-fetched project cards
        │   │       └── experience/ # Tech skill icons grid
        │   ├── resume/
        │   │   ├── hero/         # Resume hero with social links
        │   │   ├── info/         # Resume preview + certifications
        │   │   └── school/       # Education + draggable coursework
        │   ├── about/
        │   │   ├── hero/         # FAQ cards (expandable Q&A)
        │   │   └── personal/     # Draggable personal info items
        │   ├── work/
        │   │   └── hero/         # Work experience timeline
        │   ├── Error/            # 404 error display
        │   └── shared/
        │       ├── loader/       # Loading spinner
        │       └── grabbableItems/ # Reusable drag-to-reorder components
        └── assets/
            ├── *.svg             # Illustrations
            ├── resume.png        # Resume image
            ├── resume_pdf.pdf    # Downloadable resume
            ├── gifs/             # Animated GIFs (dance, look, sad)
            ├── pfp/              # Profile images, BU emblem
            ├── certifications/   # Certification badge images
            └── projects/         # Project screenshots (8+ projects)
```

---

## Pages & Routes

Routing is configured in `App.jsx` using React Router v6 with `createBrowserRouter`.

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero section + tabbed Projects/Experience view |
| `/resume` | Resume | Resume preview, download link, certifications, education |
| `/about` | About | FAQ-style Q&A cards + draggable personal info |
| `/work` | Work | Scroll-driven timeline of 5 work experiences |
| `/*` | Error | 404 catch-all |

All routes are wrapped in a root layout (`layouts/root.jsx`) that renders the `Navigation` header above the page content via React Router's `Outlet`.

---

## Component Architecture

```
App (Router)
└── Root (Layout)
    ├── Navigation (responsive header + mobile hamburger)
    └── Outlet (page content)
        ├── Home
        │   ├── HeroSection (cursor-tracking animated GIF)
        │   └── Portfolio (tab switcher)
        │       ├── ProjectSection (Firestore query → project cards)
        │       └── Experience (static tech icon grid)
        ├── Resume
        │   ├── ResumeHeroSection (social links)
        │   ├── ResumeInformationSection (resume image + certifications)
        │   └── School (BU info + draggable coursework list)
        ├── About
        │   ├── AboutHeroSection → AboutCard (expandable Q&A)
        │   └── PersonalInfo (draggable items)
        ├── Work
        │   └── WorkHeroSection (alternating timeline + scroll progress)
        └── Error
            └── ErrorPage
```

### Shared Components

- **Loader** — Loading spinner shown during data fetches
- **Item / Icon** — Reusable drag-to-reorder list items powered by Framer Motion's `Reorder` API

---

## Data & State Management

### State

All state is managed with React's `useState` hook at the component level. There is no global state library (no Redux, no Context API). State is used for:

- Tab selection (Projects vs Experience)
- Mobile menu open/close toggle
- Cursor position tracking (for animated GIFs)
- Expandable card open/close
- Drag-to-reorder item ordering

### Data Fetching

**Projects** are fetched from Cloud Firestore in `Portfolio.jsx`:

```
Collection: "projects"
Order: orderBy("order", "asc")
Fields: { id, link, name, tools }
```

**Work experience** data is hardcoded directly in `WorkHeroSection.jsx` (5 entries with company, position, dates, location, description, learnings, technologies, and achievements).

**Tech skill icons** are loaded as static images from `/public/images/experience/`.

---

## Styling

- **CSS Modules** — Each component has a scoped stylesheet following the naming convention `module.<ComponentName>.css`. There are 16 module files across the project.
- **Global CSS** — `index.css` sets the base font (Poppins via Google Fonts), hides scrollbars cross-browser, and enables smooth scrolling.
- **No CSS framework** — No Tailwind, Bootstrap, or CSS-in-JS libraries are used.

---

## Animations

Framer Motion is used extensively throughout the site:

| Pattern | Usage |
|---------|-------|
| `whileInView` | Scroll-triggered reveal animations on cards and sections |
| `whileHover` / `whileTap` | Interactive hover and press states |
| `variants` | Reusable animation definitions for staggered children |
| `motion.div` / `motion.a` / `motion.img` | Animated wrappers on standard elements |
| `Reorder` | Drag-to-reorder lists (coursework, personal info) |
| Spring physics | Navigation hamburger menu transitions |
| Cursor tracking | Animated GIF follows mouse position on hero sections |
| Scroll progress | Work page timeline progress bar synced to scroll |

---

## Assets

| Directory | Contents |
|-----------|----------|
| `src/assets/*.svg` | Illustrations (programming, code thinking, healthy lifestyle) |
| `src/assets/gifs/` | Animated GIFs for hero sections |
| `src/assets/pfp/` | Profile images, BU emblem |
| `src/assets/certifications/` | Meta Frontend and DeepLearning.AI cert badges |
| `src/assets/projects/` | Screenshots for 8+ portfolio projects |
| `src/assets/resume.png` | Resume image preview |
| `src/assets/resume_pdf.pdf` | Downloadable resume PDF |
| `public/images/experience/` | 16 tech skill icons (React, AWS, Python, etc.) |
| `public/code.png` | Favicon |

---

## Firebase Configuration

### Environment Variables

Defined in a `.env` file (gitignored) and accessed via Vite's `import.meta.env`:

```
VITE_FIREBASE_API_KEY
VITE_STORAGE_BUCKET
VITE_MESSAGING_SENDER_ID
VITE_APP_ID
VITE_MEASUREMENT_ID
VITE_STORAGE_URL
```

### Hosting

Configured in `firebase.json`:
- Public directory: `dist` (Vite build output)
- SPA rewrite: all routes serve `index.html` for client-side routing
- Firebase project ID: `matt-iwane` (defined in `.firebaserc`)

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm
- A Firebase project with Firestore enabled

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module replacement.

### Production Build

```bash
npm run build
```

Outputs to `frontend/dist/`.

### Preview Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## Deployment

The site is deployed to Firebase Hosting. From the `frontend/` directory:

```bash
npm run build
firebase deploy
```

This builds the app with Vite and deploys the `dist/` folder to Firebase Hosting at [matt-iwane.web.app](https://matt-iwane.web.app).
