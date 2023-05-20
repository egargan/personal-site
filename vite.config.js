import { sveltekit } from "@sveltejs/kit/vite";
import { resolve } from "path";

/** @type {import('vite').UserConfig} */
const config = {
  resolve: {
    alias: {
      $constants: resolve("./src/constants"),
      $components: resolve("./src/lib/components"),
    },
  },
  define: {
    'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
  },
  plugins: [sveltekit()],
};

export default config;
