// @ts-nocheck
// TODO: fix type errors

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  integrations: [tailwind(), svelte(), mdx()],
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
    ],
  },
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-light",
          onVisitHighlightedLine(node) {
            // Add 'highlighted' class to selected code block lines
            node.properties.className.push("highlighted");
          },
        },
      ],
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
  },
});
