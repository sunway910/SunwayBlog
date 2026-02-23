# Codemaps Index

**Last Updated:** 2025-02-23
**Repository:** SunwayBlog
**Version:** 2.4.0

## Overview

SunwayBlog is a Next.js 15 personal blog built with React 19, featuring static site generation, MDX content support, and a modern developer experience. The blog focuses on Life, Development, and Operations topics.

## Codemap Documents

| Codemap | Description | Focus Area |
|---------|-------------|------------|
| [architecture.md](architecture.md) | Overall system architecture | High-level structure, technologies, data flow |
| [frontend.md](frontend.md) | Frontend components and pages | UI, layouts, Next.js App Router |
| [data.md](data.md) | Content models and schemas | MDX posts, authors, site metadata |
| [backend.md](backend.md) | Build and API configuration | Next.js config, API routes, content processing |

## Quick Statistics

- **Total Blog Posts:** 152 MDX files
- **App Routes:** 22 pages
- **Components:** 23 React components
- **Blog Years:** 2023-2026
- **Content Types:** Blog posts, Author profiles

## Technology Stack

### Core Framework
- **Next.js 15.2.6** - React framework with App Router
- **React 19.0.1** - UI library
- **TypeScript 5.1.3** - Type safety

### Content Management
- **Contentlayer 0.5.5** - MDX/Markdown processing
- **MDX** - JSX in Markdown
- **gray-matter** - Frontmatter parsing
- **reading-time** - Post reading time calculation

### Styling
- **Tailwind CSS 4.0.5** - Utility-first CSS
- **@tailwindcss/typography** - Content styling
- **next-themes** - Dark/light mode

### Search & Analytics
- **Pliny 0.4.1** - Search, analytics, newsletter utilities
- **Kbar** - Command palette search
- **Google Analytics** - Visitor tracking

### Comments & Newsletter
- **Giscus** - GitHub-based comments
- **Buttondown** - Newsletter subscription

## Directory Structure

```
SunwayBlog/
├── app/                    # Next.js App Router (22 routes)
│   ├── api/               # API routes (newsletter)
│   ├── blog/              # Blog listing and post pages
│   ├── tags/              # Tag filtering pages
│   ├── favorites/         # Favorite links pages
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── archive/           # Archive page
│   ├── privacy/           # Privacy policy
│   └── layout.tsx         # Root layout
├── components/            # React components (23 files)
│   ├── social-icons/      # Social media icons
│   ├── vercel_*/          # Vercel UI components
│   └── *.tsx              # Blog components
├── layouts/               # Page layouts (7 files)
│   ├── PostLayout.tsx     # Full blog post layout
│   ├── ListLayout.tsx     # List with sidebar
│   └── *.tsx              # Other layouts
├── data/                  # Content and data
│   ├── blog/              # MDX posts (152 files)
│   │   ├── 2023/          # Year 2023 posts
│   │   ├── 2024/          # Year 2024 posts (48 weeks)
│   │   ├── 2025/          # Year 2025 posts (26 weeks)
│   │   └── 2026/          # Year 2026 posts (8 weeks)
│   ├── authors/           # Author profiles
│   ├── siteMetadata.js    # Site configuration
│   ├── favoritesData.ts   # Favorite links
│   └── projectsData.ts    # Projects data
├── css/                   # Styles
│   ├── tailwind.css       # Main styles
│   └── prism.css          # Syntax highlighting
├── scripts/               # Build scripts
│   ├── rss.mjs            # RSS feed generation
│   └── postbuild.mjs      # Post-build processing
├── public/                # Static assets
│   └── static/            # Images, favicons
├── contentlayer.config.ts # Content configuration
├── next.config.js         # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```

## Data Flow Architecture

```
User Request
    ↓
Next.js App Router
    ↓
Contentlayer (MDX Processing)
    ↓
React Components (Rendering)
    ↓
Response (Static HTML)
```

## Content Processing Pipeline

1. **Build Time:**
   - MDX files parsed by Contentlayer
   - Frontmatter extracted (title, date, tags, etc.)
   - Computed fields generated (slug, readingTime, TOC)
   - Tag counts written to tag-data.json
   - Search index generated (search.json)

2. **Post-Build:**
   - RSS feeds generated (feed.xml + tag-specific feeds)
   - Sitemap generated

3. **Runtime:**
   - Static pages served from build output
   - Dynamic routes ([slug], [tag]) pre-rendered

## Key Features

- **Static Generation:** All pages pre-rendered at build time
- **Dynamic Routes:** Blog posts, tags, and pagination use dynamic segments
- **SEO Optimized:** Sitemap, RSS, meta tags, structured data
- **Search:** Local search via Kbar with JSON index
- **Comments:** Giscus integration (GitHub discussions)
- **Dark Mode:** System-aware theme switching
- **Newsletter:** Buttondown subscription
- **Analytics:** Google Analytics integration
- **Code Highlighting:** Prism+ with autolink headings
- **Math Support:** KaTeX rendering
- **Citations:** rehype-citation for academic references

## External Dependencies

### Production
- next, react, react-dom
- contentlayer2, next-contentlayer2
- tailwindcss, @tailwindcss/*
- pliny (search, analytics, newsletter, UI)
- dayjs, github-slugger, reading-time
- gray-matter, image-size
- lucide-react, @headlessui/react
- next-themes, body-scroll-lock

### Dev Dependencies
- TypeScript, ESLint, Prettier
- Husky, lint-staged
- @next/bundle-analyzer

## Related Areas

- [Frontend Codemap](frontend.md) - Component architecture and routing
- [Data Codemap](data.md) - Content models and MDX schema
- [Backend Codemap](backend.md) - Build process and API configuration

## Deployment

- **Build Output:** Static HTML (export mode)
- **Output Directory:** `build/` (configurable via BASE_PATH)
- **Deployment Targets:** Vercel, Netlify, GitHub Pages, self-hosted
- **CDN:** R2 (r2.sunway.run) for images
- **Web Server:** Nginx configuration included

## Maintenance Notes

- Blog posts organized by year in `data/blog/YYYY/`
- New tags automatically counted and indexed
- RSS feeds auto-generated on build
- Search index updated on content changes
- Sitemap auto-generated from published posts
