import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    category: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    company: z.string(),
    duration: z.string(),
    team: z.string().optional(),
    category: z.string(),
    cover: z.string().optional(),
    video: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    outcome: z.string(),
    protected: z.boolean().default(false),
    draft: z.boolean().default(false),
    order: z.number().optional(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

export const collections = { blog, work };
