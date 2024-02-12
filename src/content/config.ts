import { defineCollection, z } from "astro:content";

const labs = defineCollection({
  type: "data",
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
  }),
});

export const collections = { labs };
