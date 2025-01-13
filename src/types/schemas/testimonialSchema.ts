import { z } from 'astro:content';

export const testimonialSchema = z.object({
  author: z.string(),
  role: z.string(),
  company: z.string(),
  content: z.string(),
  date: z.date(),
});