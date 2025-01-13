import { defineCollection } from 'astro:content';
import {
  skillSchema,
  workHistorySchema,
  educationSchema,
  projectSchema,
  testimonialSchema,
  certificationSchema
} from '../types/schemas';

const skills = defineCollection({
  type: 'content',
  schema: skillSchema,
});

const workHistory = defineCollection({
  type: 'content',
  schema: workHistorySchema,
});

const education = defineCollection({
  type: 'content',
  schema: educationSchema,
});

const projects = defineCollection({
  type: 'content',
  schema: projectSchema,
});

const testimonials = defineCollection({
  type: 'content',
  schema: testimonialSchema,
});

const certifications = defineCollection({
  type: 'content',
  schema: certificationSchema,
});

export const collections = {
  skills,
  workHistory,
  education,
  projects,
  testimonials,
  certifications,
};