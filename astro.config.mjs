import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import { codeHandler } from "./src/lib/remark-rehype";
import {
  transformerNamedMetaHighlight,
  transformerNamedHighlight,
} from "./src/lib/shiki";

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
          transformerNamedHighlight(),
          transformerNamedMetaHighlight(),
        ],
      },
      remarkRehype: {
        handlers: {
          code: codeHandler,
        },
      },
    }),
  ],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
