import { z } from 'astro:content';

export const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  year: z.number(),
  repository: z.string().url().optional(),
  homepage: z.string().url().optional(),
  skills: z.array(z.string()),
});