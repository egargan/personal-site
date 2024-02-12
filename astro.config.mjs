import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import svelte from "@astrojs/svelte";

export default defineConfig({
  integrations: [tailwind(), svelte()],
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
});

