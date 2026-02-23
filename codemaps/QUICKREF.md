# Quick Reference Guide

**Last Updated:** 2025-02-23

## File Locations

| What You Need | Location |
|---------------|----------|
| Add blog post | `data/blog/YYYY/post-name.mdx` |
| Add author | `data/authors/author-name.mdx` |
| Site config | `data/siteMetadata.js` |
| Add favorite link | `data/favoritesData.ts` |
| Add project | `data/projectsData.ts` |
| Add page | `app/page-name/page.tsx` |
| Add component | `components/ComponentName.tsx` |
| Build config | `next.config.js` |
| Content config | `contentlayer.config.ts` |

## Common Tasks

### Add a Blog Post

1. Create file: `data/blog/YYYY/Post-Name.mdx`
2. Add frontmatter:
```yaml
---
title: 'Post Title'
date: '2025-01-01'
tags: ['tag1', 'tag2']
draft: false
summary: 'Brief summary'
images: ['/static/images/image.jpg']
authors: ['default']
---
```
3. Run `yarn build`

### Add a Route

1. Create directory: `app/route-name/`
2. Create file: `app/route-name/page.tsx`
3. Export default component
4. Rebuild

### Add a Component

1. Create: `components/ComponentName.tsx`
2. Export: `export default function ComponentName() {}`
3. Import where needed: `import ComponentName from '@/components/ComponentName'`

### Update Site Config

Edit `data/siteMetadata.js`:
- title, description, author
- siteUrl, siteRepo
- email, social links
- analytics, comments, search, newsletter

## Build Commands

```bash
# Development
yarn dev                    # Start dev server (localhost:3000)

# Build
yarn build                  # Build static site
ANALYZE=true yarn build     # Build with bundle analysis

# Lint
yarn lint                   # Lint and fix code

# Deploy
# Push to GitHub (Vercel auto-deploys)
# Or manually deploy build/ directory
```

## Environment Variables

Create `.env`:
```bash
# Required
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Optional (Comments)
NEXT_PUBLIC_GISCUS_REPO=owner/repo
NEXT_PUBLIC_GISCUS_REPOSITORY_ID=R_kgDO...
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDO...

# Optional (Build)
EXPORT=export
BASE_PATH=build
```

## Content Structure

### Blog Post Frontmatter
- **title** (required): Post title
- **date** (required): Publication date (ISO 8601)
- **tags** (optional): Array of tags
- **draft** (optional): true/false (default: false)
- **summary** (optional): Post summary
- **images** (optional): Array of image paths
- **authors** (optional): Array of author slugs
- **lastmod** (optional): Last modified date

### Author Frontmatter
- **name** (required): Author name
- **avatar** (optional): Avatar image path
- **occupation** (optional): Job title
- **company** (optional): Company name
- **email** (optional): Email address
- **twitter** (optional): Twitter username
- **github** (optional): GitHub username
- **linkedin** (optional): LinkedIn URL

## Key Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, metadata, providers |
| `app/page.tsx` | Homepage |
| `app/Main.tsx` | Home content component |
| `app/sitemap.ts` | Sitemap generator |
| `contentlayer.config.ts` | Content processing config |
| `next.config.js` | Next.js configuration |
| `scripts/postbuild.mjs` | Post-build processing |
| `scripts/rss.mjs` | RSS feed generation |

## Common Imports

```typescript
// Content
import { allBlogs, allAuthors } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

// Components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from '@/components/Link'
import Tag from '@/components/Tag'

// Utilities
import { sortPosts } from 'pliny/utils/contentlayer'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Auto-deploys on push

### Netlify
1. Connect GitHub repo
2. Build command: `yarn build`
3. Publish directory: `build`

### GitHub Pages
1. Build: `yarn build`
2. Deploy `build/` to `gh-pages` branch

### Self-Hosted
1. Build: `yarn build`
2. Upload `build/` directory
3. Configure web server (see `deploy/nginx.conf`)

## Troubleshooting

### Build Fails
- Check MDX frontmatter syntax
- Verify contentlayer.config.ts
- Clear cache: `rm -rf .next build .contentlayer`

### Content Not Appearing
- Check `draft: false` in frontmatter
- Run `yarn build` to regenerate
- Clear browser cache

### Search Not Working
- Verify `public/search.json` exists
- Check kbar configuration
- Rebuild site

### RSS Not Generating
- Check `scripts/postbuild.mjs` runs
- Verify `app/tag-data.json` exists
- Check build output

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Contentlayer Docs](https://www.contentlayer.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDX Docs](https://mdxjs.com/)
- [Pliny Docs](https://github.com/timlrx/pliny)

## Full Documentation

- [INDEX.md](INDEX.md) - Overview
- [architecture.md](architecture.md) - System architecture
- [frontend.md](frontend.md) - Components and routing
- [data.md](data.md) - Content models
- [backend.md](backend.md) - Build and API
