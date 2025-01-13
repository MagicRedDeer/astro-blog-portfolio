// Common types for content collections
export type BaseContent = {
  slug: string;
};

export type EducationContent = BaseContent & {
  institution: string;
  degree: string;
  startDate: Date;
  endDate: Date;
  description: string;
  projects?: string[];
};

export type ProjectContent = BaseContent & {
  name: string;
  description: string;
  year: number;
  repository?: string;
  homepage?: string;
  skills: string[];
};

export type WorkContent = BaseContent & {
  designation: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  skills: string[];
};