import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared optional SEO override block. Adjustable at A5.
const seo = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
  })
  .optional();

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(), // = page H1
    order: z.number(),
    summary: z.string(),
    icon: z.string().optional(),
    seo,
    draft: z.boolean().default(false),
  }),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/locations' }),
  schema: z.object({
    city: z.string(),
    state: z.string().default('ID'),
    order: z.number(),
    summary: z.string(),
    seo,
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    reviewedBy: z.string().optional(), // YMYL expert reviewer, doc 08
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    aiDisclosure: z.boolean().default(false),
    seo,
    draft: z.boolean().default(true),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(), // answer lives in the markdown body (renders + feeds FAQPage at A5)
    order: z.number().default(0),
    relatedService: z.string().optional(),
    relatedLocation: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    author: z.string(),
    rating: z.number().min(1).max(5),
    source: z.string().default('Google'),
    date: z.coerce.date().optional(),
    relatedService: z.string().optional(),
    consentVerified: z.boolean().default(false), // display only w/ permission
    draft: z.boolean().default(true),
  }),
});

export const collections = { services, locations, blog, faqs, testimonials };
