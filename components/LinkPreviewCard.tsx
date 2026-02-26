import React from 'react'
import CustomLink from './Link'

interface LinkPreviewCardProps {
  title: string
  description?: string
  image?: string
  url: string
  siteName?: string
  favicon?: string
}

const LinkPreviewCard: React.FC<LinkPreviewCardProps> = ({
  title,
  description,
  image,
  url,
  siteName,
  favicon,
}) => {
  const domain = siteName || new URL(url).hostname
  const hasImage = image && image.length > 0

  return (
    <CustomLink
      href={url}
      className="not-prose group block my-6 no-underline"
      aria-label={`Preview of ${title}`}
    >
      <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all duration-200">
        <div className="flex flex-col sm:flex-row">
          {hasImage && (
            <div className="sm:w-1/3 h-48 sm:h-auto relative overflow-hidden bg-gray-100 dark:bg-gray-900">
              <img
                src={image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />
            </div>
          )}
          <div
            className={`flex-1 p-4 flex flex-col justify-between ${
              hasImage ? 'sm:w-2/3' : 'w-full'
            }`}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                {favicon && (
                  <img
                    src={favicon}
                    alt=""
                    className="w-4 h-4 flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                )}
                <span className="text-xs text-gray-500 dark:text-gray-400 truncate font-medium">
                  {domain}
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {title}
              </h3>
              {description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </CustomLink>
  )
}

export default LinkPreviewCard
