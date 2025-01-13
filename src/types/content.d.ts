import { z } from 'astro:content';

export const skillSchema = z.object({
  name: z.string(),
  description: z.string(),
  proficiency: z.number().min(0).max(100),
  category: z.enum(['Technical', 'Soft', 'Other']),
  links: z.array(z.string()).optional(),
});

export const workHistorySchema = z.object({
  designation: z.string(),
  company: z.string(),
  location: z.string(),
  startDate: z.date(),
  endDate: z.date().optional(),
  description: z.string(),
  skills: z.array(z.string()),
});

export const educationSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  description: z.string(),
  projects: z.array(z.string()).optional(),
});

export const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  year: z.number(),
  repository: z.string().url().optional(),
  homepage: z.string().url().optional(),
  skills: z.array(z.string()),
});

export const testimonialSchema = z.object({
  author: z.string(),
  role: z.string(),
  company: z.string(),
  content: z.string(),
  date: z.date(),
});