import { z } from 'astro:content';

export const workHistorySchema = z.object({
  designation: z.string(),
  company: z.string(),
  location: z.string(),
  startDate: z.date(),
  endDate: z.date().optional(),
  description: z.string(),
  skills: z.array(z.string()),
});