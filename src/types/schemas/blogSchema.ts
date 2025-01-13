import { z } from 'astro:content';

export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.date(),
  author: z.string(),
  tags: z.array(z.string()),
  featured: z.boolean().optional(),
  image: z.string().optional(),
  relatedLinks: z.array(z.string()).optional(),
});