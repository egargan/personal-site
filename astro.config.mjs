import { defineConfig } from "astro/config";
import vercelStatic from "@astrojs/vercel/static";
import svelte from "@astrojs/svelte";

export default defineConfig({
  integrations: [svelte()],
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
});
