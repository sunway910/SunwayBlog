const {withContentlayer} = require('next-contentlayer2')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app www.googletagmanager.com analytics.umami.is;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src 'self';
  frame-src giscus.app player.bilibili.com www.youtube.com
`

const output = process.env.EXPORT || 'export'
const basePath = process.env.BASE_PATH || "build"
const unoptimized = process.env.UNOPTIMIZED ? true : undefined

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = () => {
    const plugins = [withContentlayer, withBundleAnalyzer]
    return plugins.reduce((acc, next) => next(acc), {
        output: output,
        distDir: basePath,
        reactStrictMode: true,
        trailingSlash: true,
        turbopack: {
            root: process.cwd(),
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
        pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
        eslint: {
            ignoreDuringBuilds: true,
            dirs: ['app', 'components', 'layouts', 'scripts'],
        },
        images: {
            domains: [
                'r2.sunway.run',
            ],
            unoptimized,
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'picsum.photos',
                },
            ],
        },
        webpack: (config, options) => {
            config.module.rules.push({
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            })

            return config
        },
    })
}
