# Data Codemap

**Last Updated:** 2025-02-23
**Content Management:** Contentlayer 0.5.5
**Content Types:** MDX (Blog posts, Authors)
**Data Directory:** data/

## Content Structure

```
data/
├── blog/                   # Blog posts (152 MDX files)
│   ├── 2023/               # Year 2023 (4 posts)
│   │   ├── 2023-Year-Summary.mdx
│   │   └── 2023-WeeklyReport-{1-4}.mdx
│   ├── 2024/               # Year 2024 (48 posts)
│   │   ├── 2024-WeeklyReport-{1-48}.mdx
│   │   └── (weekly reports)
│   ├── 2025/               # Year 2025 (27 posts)
│   │   ├── 2025-Review.mdx
│   │   └── 2025-WeeklyReport-{1-26}.mdx
│   └── 2026/               # Year 2026 (8 posts)
│       └── 2026-WeeklyReport-{1-8}.mdx
│
├── authors/                # Author profiles
│   ├── default.mdx
│   └── sparrowhawk.mdx
│
├── siteMetadata.js         # Site configuration
├── favoritesData.ts        # Favorite links data
├── projectsData.ts         # Projects data
├── headerNavLinks.ts       # Navigation links
├── logo.svg                # Site logo
└── references-data.bib     # Academic bibliography
```

## Blog Post Schema

### Frontmatter Fields

```yaml
---
title: 'Post Title'           # Required: string
date: '2025-01-01'            # Required: date (ISO 8601)
tags: ['tag1', 'tag2']         # Optional: array of strings
draft: false                   # Optional: boolean (default: false)
summary: 'Brief summary'      # Optional: string
images: ['/path/to/img.jpg']  # Optional: array of strings
authors: ['default']           # Optional: array of strings
layout: 'PostLayout'          # Optional: string
bibliography: 'references'    # Optional: string
canonicalUrl: 'https://...'   # Optional: string
lastmod: '2025-01-02'         # Optional: date (ISO 8601)
---
```

### Computed Fields (Auto-generated)

| Field | Type | Description | Source |
|-------|------|-------------|--------|
| readingTime | json | {text, minutes, time, words} | reading-time package |
| slug | string | URL-friendly path | Flattened path (year/filename) |
| path | string | Full content path | Flattened path |
| filePath | string | File system path | Source file path |
| toc | json | Table of contents | extractTocHeadings (pliny) |
| structuredData | json | Schema.org BlogPosting | Title, date, summary, images |

### MDX Features

**Supported Components:**
- `<TOCInline toc={props.toc} />` - Table of contents
- Standard MDX syntax (JSX in Markdown)
- Embed components (YouTube, Bilibili, Video)
- Custom React components

**Markdown Extensions:**
- GitHub Flavored Markdown (GFM)
- Math notation (KaTeX)
- Code blocks with syntax highlighting (Prism+)
- Alert callouts ([!NOTE], [!TIP], [!WARNING], etc.)
- Citations (@cite keys)
- Auto-linked headings

## Author Schema

### Frontmatter Fields

```yaml
---
name: 'Author Name'           # Required: string
avatar: '/path/to/avatar.jpg' # Optional: string
occupation: 'Job Title'       # Optional: string
company: 'Company Name'       # Optional: string
email: 'email@example.com'    # Optional: string
twitter: 'username'           # Optional: string
bluesky: 'username'           # Optional: string
linkedin: 'in/username'       # Optional: string
github: 'username'            # Optional: string
layout: 'AuthorLayout'        # Optional: string
---
```

### Computed Fields
Same as blog posts (readingTime, slug, path, filePath, toc)

## Site Metadata Structure

```javascript
// data/siteMetadata.js
{
  // Basic Info
  title: 'Sunway Blog',
  author: 'Sunway',
  headerTitle: 'Sunway Blog',
  description: 'Sunway Blog - Life / Dev / Ops',
  language: 'en-us',

  // URLs
  siteUrl: 'https://sunway.run',
  siteRepo: 'https://github.com/sunway910/SunwayBlog',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',

  // Contact
  email: 'sunwayz910@gmail.com',
  github: 'https://github.com/sunway910',
  twitter: 'https://x.com/sunwayz365',
  linkedin: 'https://www.linkedin.com/in/sunway-zhong-47b94b257/',

  // Configuration
  theme: 'system',              // system, dark, light
  stickyNav: false,
  keywords: 'Sunway, Sunway blog, blog, Dev, SRE, DevOps',
  locale: 'en-US',

  // Analytics
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID
    }
  },

  // Newsletter
  newsletter: {
    provider: 'buttondown'
  },

  // Comments
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      lang: 'en'
    }
  },

  // Search
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json'
    }
  },

  // OpenGraph
  openGraph: {
    type: 'website',
    title: 'Sunway Blog - Life / Dev / Ops',
    description: 'Sunway 的个人博客，分享日常生活、开发、运维等相关内容'
  }
}
```

## Favorites Data Structure

```typescript
// data/favoritesData.ts
interface FavoriteLink {
  title: string           // Link title
  description: string     // Link description
  href: string           // URL
  visit: string          // Button text (Visit X)
}

interface FavoriteCategory {
  title: string          // Category title
  linkList: FavoriteLink[]
  imgSrc: string         // (unused, reserved for future)
  extensions: string     // Route path
}

// Categories
- Tech (技术网站)           /favorites/tech
- Blog (技术博客)           /favorites/blog
- Tool (工具)              /favorites/tool
- Funny                   /favorites/fun
- Media (影视媒体)         /favorites/media
```

## Projects Data Structure

```typescript
// data/projectsData.ts
interface Project {
  title: string           // Project title
  description: string     // Project description
  href?: string          // Project URL
  imgSrc?: string        // Project image
}
```

## Content Processing Pipeline

### 1. Build-Time Processing

```
MDX Files (data/blog/**/*.mdx)
    ↓
Contentlayer Import
    ↓
Remark Plugins (Markdown processing)
    ├─ remarkExtractFrontmatter
    ├─ remarkGfm (GitHub Flavored Markdown)
    ├─ remarkCodeTitles (Code block titles)
    ├─ remarkMath (Math notation)
    ├─ remarkImgToJsx (Image to JSX)
    └─ remarkAlert (Alert callouts)
    ↓
Rehype Plugins (HTML processing)
    ├─ rehypeSlug (Heading anchors)
    ├─ rehypeAutolinkHeadings (Auto-link)
    ├─ rehypeKatex (Math rendering)
    ├─ rehypeKatexNoTranslate (Math translation)
    ├─ rehypeCitation (Bibliography)
    ├─ rehypePrismPlus (Syntax highlighting)
    └─ rehypePresetMinify (HTML minification)
    ↓
Computed Fields Generation
    ├─ readingTime (reading-time package)
    ├─ slug (github-slugger)
    ├─ path (file path)
    ├─ toc (extractTocHeadings)
    └─ structuredData (Schema.org)
    ↓
JSON Output (.contentlayer/generated/)
```

### 2. Post-Build Processing

```
Contentlayer Generated Data
    ↓
Tag Count Generation
    ├─ Count all tags across posts
    ├─ Write to app/tag-data.json
    └─ Format: { "tag-slug": count }
    ↓
Search Index Generation
    ├─ Collect all published posts
    ├─ Sort by date
    ├─ Write to public/search.json
    └─ Used by Kbar search
    ↓
RSS Feed Generation (scripts/rss.mjs)
    ├─ Main feed: public/feed.xml
    ├─ Tag feeds: public/tags/{tag}/feed.xml
    └─ RSS 2.0 format
    ↓
Sitemap Generation (app/sitemap.ts)
    ├─ Static routes: '', 'blog', 'favorites', 'tags'
    ├─ Blog routes: all published posts
    └─ XML sitemap format
```

## Contentlayer Configuration

### Document Types

**Blog:**
- **Pattern:** `blog/**/*.mdx`
- **Content Type:** MDX
- **Fields:** title, date, tags, lastmod, draft, summary, images, authors, layout, bibliography, canonicalUrl

**Authors:**
- **Pattern:** `authors/**/*.mdx`
- **Content Type:** MDX
- **Fields:** name, avatar, occupation, company, email, twitter, bluesky, linkedin, github, layout

### Success Callbacks

```typescript
onSuccess: async (importData) => {
  const { allBlogs } = await importData()

  // 1. Generate tag counts
  createTagCount(allBlogs)  // → app/tag-data.json

  // 2. Generate search index
  createSearchIndex(allBlogs)  // → public/search.json
}
```

## Content Access Patterns

### Import Generated Content

```typescript
// All blog posts
import { allBlogs } from 'contentlayer/generated'

// All authors
import { allAuthors } from 'contentlayer/generated'

// Type definitions
import type { Blog } from 'contentlayer/generated'
import type { Authors } from 'contentlayer/generated'
```

### Content Filtering

```typescript
// Filter out drafts
const publishedPosts = allBlogs.filter(post => !post.draft)

// Sort by date
import { sortPosts } from 'pliny/utils/contentlayer'
const sortedPosts = sortPosts(allBlogs)

// Filter by tag
const tagPosts = allBlogs.filter(post =>
  post.tags?.map(t => slug(t)).includes(tagSlug)
)
```

## Tag System

### Tag Processing
- **Slug Generation:** github-slugger
- **Counting:** Count occurrences across all posts
- **Storage:** app/tag-data.json (generated)

### Tag Routes
- **All Tags:** /tags (lists all tags with counts)
- **Tag Filter:** /tags/[tag] (posts with tag)
- **Tag RSS:** /tags/[tag]/feed.xml (tag-specific RSS)

## Image Management

### Image Storage
- **Location:** public/static/images/
- **CDN:** r2.sunway.run
- **Paths in MDX:** /static/images/YYYY-MM/filename.jpg

### Image Frontmatter
```yaml
images:
  - /static/images/2025-01/cover.jpg
```

## Bibliography System

### Citation Support
- **Format:** BibTeX
- **File:** data/references-data.bib
- **Syntax:** @cite_key in MDX
- **Processor:** rehype-citation

### Usage in MDX
```markdown
As discussed by @einstein1905, the theory...
```

## Related Areas

- [Architecture Codemap](architecture.md) - Content processing pipeline
- [Frontend Codemap](frontend.md) - How content is rendered
- [Backend Codemap](backend.md) - Build and content generation

## Content Statistics

**Current Content (as of 2025-02-23):**
- Total Blog Posts: 152
- Years Active: 2023-2026
- Authors: 2 (default, sparrowhawk)
- Tag Categories: ~50 unique tags
- Favorite Links: ~45 links across 5 categories
