# Sunway Blog - Life / Dev / Ops

This is the source code repository for [Sunway's personal blog](https://sunway.run), where I share insights and experiences across three main areas: Life, Development, and Operations.

## About This Blog

**Sunway Blog** is a personal space where I document my journey in technology and life. The content is organized around three core themes:

- **Life**: Personal experiences, reflections, and life lessons
- **Dev**: Software development, programming techniques, and technical insights
- **Ops**: DevOps practices, infrastructure management, cloud native technologies, and SRE

The blog covers topics such as:
- Web development and modern frameworks
- DevOps and SRE practices
- Cloud native technologies
- Infrastructure as Code
- System design and architecture
- Programming languages and tools
- Personal growth and professional development

## Technology Stack

This blog is built using:

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Contentlayer](https://www.contentlayer.dev/) - Content management
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [MDX](https://mdxjs.com/) - JSX in Markdown
- [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) - Base template

## Features

- Modern Next.js 15 with App Router and React Server Components
- Responsive design with Tailwind CSS
- Light and dark theme support
- SEO optimized with sitemaps and RSS feeds
- Syntax highlighting for code blocks
- Math display support with KaTeX
- MDX support for rich content
- Comment system integration
- Search functionality
- Analytics integration
- Newsletter subscription support

## Development

First, install the dependencies:

```bash
yarn
```

Please note, that if you are using Windows, you may need to run:

```bash
$env:PWD = $(Get-Location).Path
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This blog is designed to be easily deployed on various platforms:

- **Vercel**: The easiest option for Next.js applications
- **Netlify**: With Next.js runtime enabled
- **GitHub Pages**: Using static export
- **Self-hosting**: With Node.js or Docker

## Content Structure

Blog posts are stored in the `data/blog` directory as MDX files with the following frontmatter:

```
---
title: 'Post Title'
date: '2025-01-01'
tags: ['devops', 'kubernetes', 'cloud']
draft: false
summary: 'Brief summary of the post'
images: ['/static/images/post-image.jpg']
authors: ['default']
---
```

## About the Author

I'm Sunway, a software engineer and SRE passionate about cloud native technologies, DevOps practices, and modern web development. You can find me on:

- [GitHub](https://github.com/sunway910)
- [Twitter/X](https://x.com/sunwayz911)
- [LinkedIn](https://www.linkedin.com/in/sunway-zhong-47b94b257/)
- [Blog](https://sunway.run)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

While this is primarily a personal blog, if you find issues with the code or have suggestions for improvements, feel free to open an issue or submit a pull request.

## Acknowledgments

This blog is built on the excellent [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) template. Special thanks to the original authors for creating such a solid foundation.