import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./posts" }),
  schema: z.object({
    title: z.string(),
    created: z.string().date(),
    updated: z.string().date(),
    tags: z.array(z.string()),
    readTimeMins: z.number(),
    intro: z.string(),
    status: z.enum(["draft", "live"]),
  }),
});

export const collections = { posts };
