export type BlogPost = {
  title: string;
  description: string;
  publishDate: Date;
  author: string;
  tags: string[];
  slug: string;
  featured?: boolean;
  image?: string;
  relatedLinks?: string[];
};