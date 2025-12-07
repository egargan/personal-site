import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import { getShikiConfig } from "./src/lib/shiki";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { FontaineTransform } from "fontaine";

export default defineConfig({
  markdown: {
    shikiConfig: getShikiConfig(),
  },
  integrations: [
    svelte(),
    mdx({
      shikiConfig: getShikiConfig(),
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
  redirects: {
    "/blog/svelte-d3": "/posts/svelte-d3",
    "/blog/adding-redux-to-svelte": "/posts/adding-redux-to-svelte",
    "/blog/better-errors-ts": "/posts/better-errors-ts",
    "/blog/fzf-yank": "/posts/fzf-yank",
  },
  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: {
          "Atkinson Hyperlegible": ["Arial", "Helvetica Neue", "sans-serif"],
          "Atkinson Hyperlegible Mono": ["Courier New", "monospace"],
        },
      }),
    ],
  },
});
