import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string().default("/og.jpg"),
    draft: z.boolean().default(true),
    editorial: z.boolean().default(false),
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
    editorial: z.boolean().default(false),
    kind: z.enum(["professional", "independent"]).default("professional"),
    visual: z.enum(["health", "ai", "altimeter", "bus"]).default("health"),
    eyebrow: z.string().default("Selected project"),
    summary: z.string().optional(),
    status: z.string().default("Case study"),
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
