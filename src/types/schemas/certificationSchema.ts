import { z } from 'astro:content';

export const certificationSchema = z.object({
  name: z.string(),
  issuer: z.string(),
  issueDate: z.date(),
  expiryDate: z.date().optional(),
  credentialUrl: z.string().url().optional(),
  description: z.string(),
});