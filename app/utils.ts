import type { Blog } from 'contentlayer/generated';

export function formatDate(date: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Date(date).toLocaleDateString('en-us', options);
}

export function sortPosts(blogs: Blog[]) {
  return blogs.sort((a, b) => a.date < b.date ? 1 : -1);
}

export function truncateSummary(blogSummary?: string, maxLength = 100) {
  if (!blogSummary) {
    return '';
  } else if (blogSummary.length <= maxLength) {
    return blogSummary;
  } else {
    return blogSummary.slice(0, maxLength) + '...';
  }
}
