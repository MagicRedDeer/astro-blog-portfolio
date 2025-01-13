import type { CollectionEntry } from 'astro:content';
import type { BlogPost } from '../types/blog';

export function transformBlogPosts(posts: CollectionEntry<'blog'>[]): BlogPost[] {
  return posts.map(post => ({
    title: post.data.title,
    description: post.data.description,
    publishDate: post.data.publishDate,
    author: post.data.author,
    tags: post.data.tags,
    slug: post.slug,
    featured: post.data.featured,
    image: post.data.image,
    relatedLinks: post.data.relatedLinks,
  }));
}

export function sortBlogPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => 
    b.publishDate.getTime() - a.publishDate.getTime()
  );
}