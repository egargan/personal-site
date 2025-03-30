import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import {
  transformerNamedMetaHighlight,
  transformerNamedHighlight,
} from "./src/lib/shiki";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

export default defineConfig({
  integrations: [
    svelte(),
    mdx({
      shikiConfig: {
        themes: {
          dark: "github-dark",
          light: "github-light",
        },
        transformers: [
          {
            pre(hast) {
              hast.properties["data-meta"] = this.options.meta?.__raw;
            },
          },
          transformerNamedHighlight(),
          transformerNamedMetaHighlight(),
        ],
      },
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
      ],
    }),
  ],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
