import { z } from 'astro:content';

export const educationSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  description: z.string(),
  projects: z.array(z.string()).optional(),
});