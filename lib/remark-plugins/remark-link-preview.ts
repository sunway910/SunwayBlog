import { visit } from 'unist-util-visit'
import { getLinkPreview } from 'link-preview-js'
import type { Plugin } from 'unified'
import type { Root, Parent } from 'mdast'
import type { Paragraph } from 'mdast'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import path from 'path'

// Persistent cache file path
const CACHE_FILE = path.join(process.cwd(), '.link-preview-cache.json')

// Load cache from disk
function loadCache(): Map<string, any> {
  try {
    if (existsSync(CACHE_FILE)) {
      const data = JSON.parse(readFileSync(CACHE_FILE, 'utf-8'))
      return new Map(Object.entries(data))
    }
  } catch (error) {
    console.error('Failed to load link preview cache:', error)
  }
  return new Map()
}

// Save cache to disk
function saveCache(cache: Map<string, any>) {
  try {
    const obj = Object.fromEntries(cache)
    writeFileSync(CACHE_FILE, JSON.stringify(obj, null, 2))
  } catch (error) {
    console.error('Failed to save link preview cache:', error)
  }
}

// Check if a URL is valid for preview
function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

// Check if a paragraph contains only a link
function isSoloLinkParagraph(node: any): boolean {
  if (
    node.type !== 'paragraph' ||
    !node.children ||
    node.children.length !== 1
  ) {
    return false
  }

  const child = node.children[0]
  return child.type === 'link' && child.url && isValidUrl(child.url)
}

interface RemarkLinkPreviewOptions {
  enabled?: boolean
  cache?: boolean
  timeout?: number
  concurrency?: number
  debug?: boolean
}

export const remarkLinkPreview: Plugin<[RemarkLinkPreviewOptions?], Root> =
  (options = {}) => {
    const { 
      enabled = false,  // 默认禁用，避免影响构建性能
      cache = true, 
      timeout = 3000, 
      concurrency = 10,
      debug = false 
    } = options

    return async (tree: Root, file: any) => {
      if (!enabled) return

      const startTime = Date.now()
      const nodesToTransform: Array<{
        node: any
        parent: Parent
        index: number
        url: string
      }> = []

      // First pass: find all solo link paragraphs
      visit(
        tree as any,
        'paragraph',
        (node: Paragraph, index: number | undefined, parent: Parent | undefined) => {
          if (!isSoloLinkParagraph(node) || !parent || index === undefined) {
            return
          }

          const linkNode = node.children[0]
          const url = (linkNode as any).url

          nodesToTransform.push({
            node,
            parent,
            index,
            url,
          })
        }
      )

      if (nodesToTransform.length === 0) return

      if (debug) {
        console.log(`[LinkPreview] Found ${nodesToTransform.length} links in ${file.history[0] || 'unknown'}`)
      }

      // Load persistent cache
      const previewCache = cache ? loadCache() : new Map()

      // Second pass: fetch previews with concurrency limit
      const fetchPreview = async (url: string) => {
        // Check cache first
        if (cache && previewCache.has(url)) {
          if (debug) {
            console.log(`[LinkPreview] Cache hit: ${url}`)
          }
          return previewCache.get(url)
        }

        try {
          const preview = await getLinkPreview(url, {
            headers: {
              'User-Agent':
                'Mozilla/5.0 (compatible; LinkPreviewBot/1.0; +https://github.com)',
            },
            timeout,
          })

          // Cache successful previews
          if (cache && preview) {
            previewCache.set(url, preview)
          }

          return preview
        } catch (error: any) {
          // If fetch fails, use fallback
          if (debug) {
            console.error(`[LinkPreview] Failed to fetch ${url}:`, error.message)
          }
          return {
            title: url,
            url,
            siteName: new URL(url).hostname,
          }
        }
      }

      // Batch processing with concurrency limit
      const batchSize = concurrency
      for (let i = 0; i < nodesToTransform.length; i += batchSize) {
        const batch = nodesToTransform.slice(i, i + batchSize)
        const results = await Promise.all(
          batch.map(async (item) => fetchPreview(item.url))
        )

        // Apply results
        for (let j = 0; j < batch.length; j++) {
          const { parent, index } = batch[j]
          const preview = results[j]

          if (!preview) continue

          // Create custom MDX node for link preview
          // Using any to avoid complex type issues with mdxJsxFlowElement
          const previewNode: any = {
            type: 'mdxJsxFlowElement',
            name: 'LinkPreviewCard',
            attributes: [
              {
                type: 'mdxJsxAttribute',
                name: 'title',
                value: preview.title || '',
              },
              {
                type: 'mdxJsxAttribute',
                name: 'description',
                value: preview.description || '',
              },
              {
                type: 'mdxJsxAttribute',
                name: 'image',
                value: preview.images?.[0] || preview.favicon || '',
              },
              {
                type: 'mdxJsxAttribute',
                name: 'url',
                value: preview.url || batch[j].url,
              },
              {
                type: 'mdxJsxAttribute',
                name: 'siteName',
                value: preview.siteName || new URL(batch[j].url).hostname,
              },
              {
                type: 'mdxJsxAttribute',
                name: 'favicon',
                value: preview.favicon || '',
              },
            ],
            children: [],
          }

          parent.children[index] = previewNode
        }
      }

      // Save cache back to disk
      if (cache) {
        saveCache(previewCache)
      }

      if (debug) {
        console.log(`[LinkPreview] Processed ${nodesToTransform.length} links in ${Date.now() - startTime}ms`)
      }
    }
  }

export default remarkLinkPreview
