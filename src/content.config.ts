import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    tags: z.array(z.string()),
  }),
});

const drafts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/drafts' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    tags: z.array(z.string()),
  }),
});

const scratch = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/scratch' }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { posts, drafts, scratch };
