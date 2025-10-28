# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js, showcasing projects, resume, and professional experience. It features Server-Side Rendering (SSR) and provides API endpoints for accessing data programmatically.

- **Live Demo**: https://benben-portfolio.vercel.app/
- **Stack**: Next.js 14.2, React 18.3, Emotion 11.14 (CSS-in-JS), react-icons

## Development Commands

```bash
# Start development server (port 3000 by default)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Architecture Overview

### Pages Structure (Next.js App Router)

- **Homepage**: `/` (English), `/tw` (Traditional Chinese)
  - Displays personal card with contact info
  - Links to resume and projects
  - Uses `getStaticProps` to fetch data from `/data/benben.en.js` or `/data/benben.tw.js`

- **Resume Pages**: `/resume/en`, `/resume/tw`
  - Printable layout for professional resume
  - Data sourced from `/data/benben.*.js`

- **Projects Pages**:
  - `/projects` - List all projects
  - `/projects/[id]` - Individual project detail pages
  - Data sourced from `/data/data.*.js`

### API Routes

All API routes are in `/pages/api/`:
- `/api/benben` - Returns resume/personal data (TW version)
- `/api/projects` - Returns list of all projects
- `/api/projects/[id]` - Returns single project by ID

API handlers import data directly from `/data/` directory.

### Data Layer

The `/data/` directory contains all content:
- `benben.en.js` / `benben.tw.js` - Personal information, experience, education, skills
- `data.en.js` / `data.tw.js` - Project listings with descriptions, demos, repos, tech stacks

**Important**: Content is duplicated for i18n (English/Traditional Chinese). When updating content, modify both language versions.

### Styling Architecture

Uses **Emotion** for CSS-in-JS:
- `/shared/styles.js` - Exports styled components used across pages (SectionWrapper, Card, Button, etc.)
- `/shared/backgroundStyles.js` - Styles for background effects
- `/shared/renderer.js` - Server-side Emotion rendering setup for critical CSS extraction

**Critical Setup**: The `_document.js` uses `renderStatic()` to extract critical CSS during SSR, preventing flash of unstyled content.

### Components

Located in `/components/`:
- `Layout.js` - Main layout wrapper (Navbar + children + Footer)
- `Navbar.js` - Navigation component
- `Footer.js` - Footer component
- `MyHead.js` - Custom Head component for SEO/metadata
- `BackgroundEffect.js` - Animated canvas background (dynamically imported)
- `ProjectList.js` / `ProjectItem.js` - Project display components

**Note**: `BackgroundEffect` uses dynamic import without SSR to avoid canvas issues during server rendering.

### Configuration Files

- `/config/index.js` - Configuration constants (if any)
- `/helper/index.js` - Utility helper functions

## Key Technical Patterns

1. **Emotion SSR Setup**: Custom `_document.js` with `renderStatic()` extracts critical CSS
2. **i18n**: Manual duplication in data files (en/tw variants)
3. **Static Generation**: Uses `getStaticProps` for data fetching at build time
4. **Dynamic Imports**: Background effects use `dynamic()` with `ssr: false` to prevent server-side canvas errors
5. **Data as Code**: All content stored as JavaScript modules, not JSON or CMS

## Common Modifications

- **Adding a new project**: Update both `/data/data.en.js` and `/data/data.tw.js`
- **Updating personal info**: Modify `/data/benben.en.js` and `/data/benben.tw.js`
- **Adding new styled components**: Export from `/shared/styles.js` for reusability
- **Creating new pages**: Add to `/pages/` directory (follows Next.js conventions)

## Deployment

Deployed on Vercel. The build command is `npm run build` and start command is `npm start`.
