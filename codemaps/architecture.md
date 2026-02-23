# Architecture Codemap

**Last Updated:** 2025-02-23
**Framework:** Next.js 15.2.6 (App Router)
**Entry Point:** app/layout.tsx

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        User Browser                          │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    Next.js App Router                        │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────────┐   │
│  │ Static Pages│  │Dynamic Routes│  │   API Routes     │   │
│  │  (/blog)    │  │([...slug])   │  │  (/api/newsletter)│  │
│  └─────────────┘  └──────────────┘  └──────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    Contentlayer Layer                        │
│  ┌──────────────┐  ┌─────────────┐  ┌──────────────────┐   │
│  │ MDX Parser   │  │Frontmatter  │  │ Computed Fields  │   │
│  │ (remark/rehype)│  │Extractor    │  │ (slug, toc, etc) │  │
│  └──────────────┘  └─────────────┘  └──────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                   React Components Layer                     │
│  ┌──────────────┐  ┌─────────────┐  ┌──────────────────┐   │
│  │ Layouts      │  │ Components  │  │     Pliny UI     │   │
│  │ (7 layouts)  │  │ (23 comps)  │  │  (Search, etc)   │   │
│  └──────────────┘  └─────────────┘  └──────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                   Static Build Output                        │
│                   (build/ directory)                         │
└─────────────────────────────────────────────────────────────┘
```

## Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.2.6 | React framework with App Router |
| React | 19.0.1 | UI library |
| TypeScript | 5.1.3 | Type safety |
| Contentlayer | 0.5.5 | MDX content processing |
| Tailwind CSS | 4.0.5 | Styling |
| Pliny | 0.4.1 | Blog utilities (search, analytics) |

## Key Modules

### App Structure (app/)
```
app/
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Homepage
├── Main.tsx                # Home content component
├── not-found.tsx           # 404 page
├── seo.tsx                 # SEO metadata
├── robots.ts               # Robots.txt generation
├── sitemap.ts              # Sitemap generation
├── theme-providers.tsx     # Theme wrapper
├── utils.ts                # Utility functions
├── tag-data.json           # Tag counts (generated)
├── api/newsletter/route.ts # Newsletter API
├── blog/                   # Blog routes
│   ├── page.tsx            # Blog listing
│   ├── page/[page]/page.tsx # Pagination
│   └── [...slug]/page.tsx  # Single post
├── tags/                   # Tag routes
│   ├── page.tsx            # All tags
│   └── [tag]/page/         # Tag filtering
├── favorites/              # Favorite links
│   ├── page.tsx            # Main favorites
│   ├── blog/               # Blog favorites
│   ├── tech/               # Tech favorites
│   ├── tool/               # Tool favorites
│   ├── fun/                # Fun favorites
│   └── media/              # Media favorites
├── about/page.tsx          # About page
├── projects/page.tsx       # Projects page
├── archive/page.tsx        # Archive page
└── privacy/page.tsx        # Privacy policy
```

### Data Flow

1. **Content Processing:**
   ```
   MDX Files → Contentlayer → Parsed Content → JSON Index
   ```

2. **Build Process:**
   ```
   next build → Contentlayer Import → Plugin Processing → Static HTML
   ```

3. **Post-Build:**
   ```
   postbuild.mjs → RSS Generation → Tag Feeds → Sitemap
   ```

## External Dependencies

### Content Processing
- **contentlayer2** - MDX/Markdown to JSON
- **gray-matter** - Frontmatter parsing
- **reading-time** - Reading time calculation
- **github-slugger** - URL-friendly slugs
- **image-size** - Image dimensions

### Markdown Processing (Remark/Rehype)
- **remark-gfm** - GitHub Flavored Markdown
- **remark-math** - Math notation
- **remark-github-blockquote-alert** - Alert callouts
- **pliny/mdx-plugins** - Custom plugins (frontmatter, code titles, images, TOC)
- **rehype-slug** - Heading anchors
- **rehype-autolink-headings** - Auto-link headings
- **rehype-katex** - Math rendering
- **rehype-katex-notranslate** - Math translation control
- **rehype-citation** - Academic citations
- **rehype-prism-plus** - Syntax highlighting
- **rehype-preset-minify** - HTML minification

### UI Components
- **@headlessui/react** - Accessible UI primitives
- **lucide-react** - Icon library
- **next-themes** - Theme switching
- **body-scroll-lock** - Scroll locking
- **dayjs** - Date formatting

### Utilities
- **pliny** - Blog utilities (search, analytics, newsletter)
- **tailwind-merge** - Tailwind class merging
- **hast-util-from-html-isomorphic** - HTML to AST

## Build Configuration

### Next.js Config (next.config.js)
```javascript
{
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  output: 'export',           // Static export
  distDir: 'build',           // Build directory
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ['r2.sunway.run'],
    unoptimized: true
  }
}
```

### Contentlayer Config (contentlayer.config.ts)
- **Content Directory:** `data/`
- **Document Types:** Blog, Authors
- **MDX Plugins:** 6 remark plugins, 6 rehype plugins
- **Computed Fields:** readingTime, slug, path, filePath, toc, structuredData
- **On Success:** Generate tag counts, search index

### Content Security Policy
```
default-src 'self';
script-src 'self' giscus.app www.googletagmanager.com;
img-src * blob: data:;
frame-src giscus.app player.bilibili.com www.youtube.com
```

## Integration Points

### Search Integration
- **Provider:** Kbar (local search)
- **Index:** `search.json` (generated at build)
- **Indexed Content:** All published blog posts

### Analytics Integration
- **Provider:** Google Analytics
- **Environment Variable:** `GOOGLE_ANALYTICS_ID`

### Comments Integration
- **Provider:** Giscus (GitHub Discussions)
- **Config:** repo, category, theme mapping
- **Environment Variables:** GISCUS_REPO, GISCUS_REPOSITORY_ID, etc.

### Newsletter Integration
- **Provider:** Buttondown
- **API Route:** `/api/newsletter`
- **Methods:** GET, POST

### Deployment
- **Target:** Static hosting (Vercel, Netlify, GitHub Pages)
- **Build Output:** `build/` directory
- **CDN:** R2 for images
- **Web Server:** Nginx config provided

## Performance Optimizations

1. **Static Generation:** All pages pre-rendered
2. **Image Optimization:** Disabled (uses CDN)
3. **Bundle Analysis:** Available via `ANALYZE=true`
4. **CSS Purging:** Tailwind JIT
5. **Font Optimization:** next/font/google with display swap

## Related Areas

- [Frontend Codemap](frontend.md) - Components and layouts
- [Data Codemap](data.md) - Content models
- [Backend Codemap](backend.md) - Build and API

## Environment Variables

```bash
# Required
GOOGLE_ANALYTICS_ID         # Google Analytics tracking ID

# Optional (Giscus comments)
NEXT_PUBLIC_GISCUS_REPO
NEXT_PUBLIC_GISCUS_REPOSITORY_ID
NEXT_PUBLIC_GISCUS_CATEGORY
NEXT_PUBLIC_GISCUS_CATEGORY_ID

# Optional (Newsletter)
# Buttondown API key handled by Pliny

# Build Configuration
EXPORT=export               # Export mode
BASE_PATH=build            # Build directory
ANALYZE=true               # Bundle analysis
```
