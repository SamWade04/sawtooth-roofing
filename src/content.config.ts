import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared optional SEO override block. Adjustable at A5.
const seo = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
  })
  .optional();

// Shared image-array shape: an ARRAY, not a single field, because a ground-level
// image must be able to join an aerial later as a data edit with no markup change.
// sourceFile is the provenance key back to the source archive — NO coordinates,
// NO addresses, ever, in this repo.
const images = ({ image }) =>
  z
    .array(
      z.object({
        src: image(),
        alt: z.string(),
        role: z.enum(['aerial', 'ground']),
        source: z.enum(['own', 'stock', 'ai']).default('own'),
        sourceFile: z.string(),
      })
    )
    .default([]);

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(), // = page H1
      shortTitle: z.string().optional(),
      order: z.number(),
      summary: z.string(),
      icon: z.string().optional(),
      seo,
      draft: z.boolean().default(false),
      // Parks an entry out of public listings (e.g. the /services tile grid)
      // without removing it from the collection or its routing/draft state —
      // for copy that stays canon but shouldn't currently be discoverable.
      hidden: z.boolean().default(false),
      financingBand: z.boolean().default(false),
      images: images({ image }),
    }),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/locations' }),
  schema: ({ image }) =>
    z.object({
      city: z.string(),
      state: z.string().default('ID'),
      order: z.number(),
      summary: z.string(),
      seo,
      draft: z.boolean().default(false),
      images: images({ image }),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string(),
      reviewedBy: z.string().optional(), // YMYL expert reviewer, doc 08
      category: z.string().optional(),
      tags: z.array(z.string()).default([]),
      image: image().optional(),
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
