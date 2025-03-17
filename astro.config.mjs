import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
} from "@shikijs/transformers";
import { codeHandler } from "./src/lib/remark-rehype";

export default defineConfig({
  integrations: [
    svelte(),
    mdx({
      shikiConfig: {
        themes: {
          dark: "github-dark",
          light: "catppuccin-latte",
        },
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

