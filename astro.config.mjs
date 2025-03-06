import { defineConfig } from "astro/config";
import vercelStatic from "@astrojs/vercel";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [
    svelte(),
    mdx({
      shikiConfig: {
        theme: "catppuccin-mocha",
      },
    }),
  ],
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
});
