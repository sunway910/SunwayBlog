# Frontend Codemap

**Last Updated:** 2025-02-23
**Framework:** Next.js 15.2.6 (App Router)
**Rendering:** Static Site Generation (SSG)
**Entry Point:** app/layout.tsx

## App Router Structure

```
app/
├── layout.tsx              # Root layout (metadata, fonts, providers)
├── page.tsx                # Homepage (imports Main.tsx)
├── Main.tsx                # Home content component
├── not-found.tsx           # 404 error page
├── seo.tsx                 # SEO metadata exports
├── robots.ts               # robots.txt generator
├── sitemap.ts              # Sitemap generator
├── theme-providers.tsx     # Theme context wrapper
├── utils.ts                # Utility functions
├── tag-data.json           # Tag counts (auto-generated)
│
├── api/                    # API Routes
│   └── newsletter/
│       └── route.ts        # Newsletter subscription (GET/POST)
│
├── blog/                   # Blog Routes
│   ├── page.tsx            # Blog listing (all posts)
│   ├── page/[page]/        # Paginated listing
│   │   └── page.tsx
│   └── [...slug]/          # Single blog post
│       └── page.tsx
│
├── tags/                   # Tag Routes
│   ├── page.tsx            # All tags listing
│   └── [tag]/              # Tag-specific posts
│       └── page/
│           ├── page.tsx    # First page
│           └── [page]/     # Paginated
│               └── page.tsx
│
├── favorites/              # Favorites Routes
│   ├── page.tsx            # Main favorites page
│   ├── blog/               # Blog favorites
│   ├── tech/               # Tech website favorites
│   ├── tool/               # Tools favorites
│   ├── fun/                # Fun stuff favorites
│   └── media/              # Media favorites
│       └── page.tsx
│
├── about/
│   └── page.tsx            # About page
├── projects/
│   └── page.tsx            # Projects page
├── archive/
│   └── page.tsx            # Archive page
└── privacy/
    └── page.tsx            # Privacy policy
```

## Component Library (23 components)

### Core Components

| Component | Purpose | Location |
|-----------|---------|----------|
| Header | Site navigation, mobile menu | components/Header.tsx |
| Footer | Site footer, links | components/Footer.tsx |
| ThemeSwitch | Dark/light mode toggle | components/ThemeSwitch.tsx |
| SearchButton | Search trigger (Kbar) | components/SearchButton.tsx |
| MobileNav | Mobile navigation menu | components/MobileNav.tsx |

### Content Components

| Component | Purpose | Location |
|-----------|---------|----------|
| Card | Generic card container | components/Card.tsx |
| PageTitle | Page heading | components/PageTitle.tsx |
| SectionContainer | Content wrapper | components/SectionContainer.tsx |
| LayoutWrapper | Layout boundary | components/LayoutWrapper.tsx |
| Link | Custom Link component | components/Link.tsx |
| Image | Custom Image component | components/Image.tsx |
| Tag | Tag display with link | components/Tag.tsx |
| TableWrapper | Table styling | components/TableWrapper.tsx |

### Blog Components

| Component | Purpose | Location |
|-----------|---------|----------|
| MDXComponents | MDX component mapping | components/MDXComponents.tsx |
| Comments | Giscus comments | components/Comments.tsx |
| ScrollTopAndComment | Scroll to top + comment button | components/ScrollTopAndComment.tsx |
| FavoriteCard | Favorite link card | components/FavoriteCard.tsx |

### Media Components

| Component | Purpose | Location |
|-----------|---------|----------|
| VideoEmbed | Generic video embed | components/VideoEmbed.tsx |
| YoutubeEmbed | YouTube embed | components/YoutubeEmbed.tsx |
| BilibiliEmbed | Bilibili embed | components/BilibiliEmbed.tsx |

### Social Icons

```
components/social-icons/
├── index.tsx               # Social icon component
└── icons.tsx               # Icon mappings (RSS, Mail, etc.)
```

## Layouts (7 layouts)

```
layouts/
├── PostLayout.tsx          # Full blog post layout
├── PostSimple.tsx          # Simplified post layout
├── PostBanner.tsx          # Post with banner
├── ListLayout.tsx          # List with sidebar
├── ListLayoutWithTags.tsx  # List with tag filtering
├── ArchiveLayout.tsx       # Archive listing
└── AuthorLayout.tsx        # Author profile
```

### Layout Features

| Layout | Features |
|--------|----------|
| PostLayout | Full content, TOC, comments, scroll top |
| PostSimple | Minimal post layout |
| ListLayout | Sidebar navigation, pagination |
| ListLayoutWithTags | Tag filtering sidebar |
| ArchiveLayout | Year-based grouping |
| AuthorLayout | Author info, avatar, social links |

## Key Routes

### Homepage (/)
- **Component:** Main.tsx
- **Features:** Latest 8 posts, newsletter signup
- **Dynamic:** Uses contentlayer allBlogs

### Blog Routes
- **Listing:** /blog (paginated)
- **Single Post:** /blog/[slug]
- **Features:** Reading time, tags, comments, TOC

### Tag Routes
- **All Tags:** /tags
- **Tag Filter:** /tags/[tag]
- **Pagination:** /tags/[tag]/page/[page]

### Favorites Routes
- **Main:** /favorites (category grid)
- **Categories:** /favorites/{blog,tech,tool,fun,media}
- **Data:** favoritesData.ts

## Data Access Patterns

### Contentlayer Access
```typescript
import { allBlogs } from 'contentlayer/generated'
import { allAuthors } from 'contentlayer/generated'
```

### Site Metadata
```typescript
import siteMetadata from '@/data/siteMetadata'
```

### Site Metadata Properties
- title, author, headerTitle, description
- siteUrl, siteRepo, siteLogo
- email, github, twitter, linkedin
- analytics, newsletter, comments, search
- keywords, locale, openGraph

## Styling System

### Tailwind Configuration
- **Framework:** Tailwind CSS 4.0.5
- **Plugins:** @tailwindcss/forms, @tailwindcss/typography
- **Custom CSS:** css/tailwind.css
- **Prism Theme:** css/prism.css

### Theme System
- **Provider:** next-themes
- **Modes:** system, dark, light
- **Storage:** localStorage
- **Component:** ThemeSwitch.tsx

### Font
- **Font:** Space Grotesk (Google Fonts)
- **Display:** swap
- **CSS Variable:** --font-space-grotesk

## Third-Party UI Libraries

### Vercel Components (embedded)
```
components/
├── vercel_component/       # Vercel-specific components
├── vercel_lib/             # Vercel utilities
└── vercel_ui/              # Vercel UI primitives
```

### Pliny UI Components
- NewsletterForm
- Analytics wrapper
- Search provider (Kbar)

### Headless UI
- Menu components (mobile nav)
- Accessible primitives

## Search Implementation

### Kbar Integration
```typescript
// Search Provider in layout.tsx
<SearchProvider searchConfig={siteMetadata.search}>
  {/* app content */}
</SearchProvider>
```

### Search Index
- **File:** search.json (generated at build)
- **Content:** All published posts
- **Fields:** title, slug, date, summary, tags

## Comments System

### Giscus Configuration
```typescript
// In Comments.tsx
<Giscus
  repo={process.env.NEXT_PUBLIC_GISCUS_REPO}
  repoId={process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID}
  category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY}
  categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
  mapping="pathname"
  theme="light"
  darkTheme="transparent_dark"
/>
```

## Metadata & SEO

### Root Metadata (app/layout.tsx)
- Title template
- Description, keywords
- OpenGraph (title, description, images, locale)
- Twitter card
- Robots (index, follow)
- Alternates (languages, canonical, RSS)

### Per-Page Metadata
- Blog posts: structuredData (BlogPosting schema)
- Dynamic OG images
- Canonical URLs

### Sitemap (app/sitemap.ts)
```typescript
// Routes included
- ['', 'blog', 'favorites', 'tags']
- All published blog posts
```

### Robots.txt (app/robots.ts)
- Generated from config
- Allows all bots
- Sitemap reference

## Build Output

### Static Generation
- **Mode:** export (static HTML)
- **Output:** build/ directory
- **Optimization:** HTML minified

### Client-Side JavaScript
- React hydration
- Theme switching
- Search (Kbar)
- Comments (Giscus)
- Analytics

## Performance Features

1. **Font Optimization:** next/font/google
2. **Image Optimization:** CDN (R2), unoptimized in Next.js
3. **Static Generation:** Pre-rendered HTML
4. **Code Splitting:** Automatic (Next.js)
5. **CSS Purging:** Tailwind JIT

## Responsive Design

### Breakpoints
- Mobile: default
- Tablet: md (768px)
- Desktop: xl (1280px)

### Mobile Optimizations
- Collapsible navigation (MobileNav)
- Touch-friendly buttons
- Responsive layouts

## Related Areas

- [Architecture Codemap](architecture.md) - Overall system architecture
- [Data Codemap](data.md) - Content models and structure
- [Backend Codemap](backend.md) - Build and API configuration
