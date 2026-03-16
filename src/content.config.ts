import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    tags: z.array(z.string()),
    description: z.string().optional(),
    project: z.string().optional(),
  }),
});

const drafts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/drafts' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    tags: z.array(z.string()),
    description: z.string().optional(),
  }),
});

const scratch = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/scratch' }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    status: z.string(),
    url: z.string().optional(),
    repo: z.string().optional(),
    tags: z.array(z.string()),
    started: z.number(),
    ended: z.number().optional(),
  }),
});

export const collections = { posts, drafts, scratch, projects };
