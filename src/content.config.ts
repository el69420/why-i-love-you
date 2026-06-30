import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum([
      'sticky-yellow', 'sticky-rose', 'sticky-blue', 'sticky-sage', 'sticky-peach',
      'note', 'letter', 'washi-blue', 'washi-sage', 'washi-peach', 'washi-rose'
    ]),
    body: z.string(),
    tag: z.string().optional(),
    order: z.number().optional(),
    wide: z.boolean().optional(),
  }),
});

export const collections = { pages };
