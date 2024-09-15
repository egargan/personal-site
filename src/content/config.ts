import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    intro: z.string(),
    created: z.string().datetime({ offset: true }),
    updated: z.string(),
    readTimeMins: z.number(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};
