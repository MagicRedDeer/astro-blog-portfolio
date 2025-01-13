export const POSTS_PER_PAGE = 6;

export const BLOG_SORT_OPTIONS = {
  DATE_DESC: 'date-desc',
  DATE_ASC: 'date-asc',
  TITLE_ASC: 'title-asc',
  TITLE_DESC: 'title-desc',
} as const;

export type BlogSortOption = typeof BLOG_SORT_OPTIONS[keyof typeof BLOG_SORT_OPTIONS];