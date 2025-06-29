import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./content/blog" }),
  schema: z.object({
    title: z.string(),
    created: z.string().date(),
    updated: z.string().date(),
    tags: z.array(z.string()),
    readTimeMins: z.number(),
    intro: z.string(),
    status: z.enum(["draft", "live"]),
    type: z.literal("blog").default("blog"),
  }),
});

// TODO: can we just define this in the lab directories themselves?
const labs = defineCollection({
  loader: glob({ pattern: "*.yml", base: "./content/labs" }),
  schema: z.object({
    title: z.string(),
    created: z.string().date(),
    tags: z.array(z.string()),
    description: z.string(),
    status: z.enum(["draft", "live"]),
    type: z.literal("lab").default("lab"),
  }),
});

export const collections = { blog, labs };
