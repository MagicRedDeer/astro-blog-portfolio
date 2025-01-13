import { z } from 'astro:content';

export const skillSchema = z.object({
  name: z.string(),
  description: z.string(),
  proficiency: z.number().min(0).max(100),
  category: z.enum(['Technical', 'Soft', 'Other']),
  subcategory: z.string(),
  links: z.array(z.string()).optional(),
  yearsOfExperience: z.number().optional(),
  certifications: z.array(z.string()).optional(),
});