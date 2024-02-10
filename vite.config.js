import { sveltekit } from "@sveltejs/kit/vite";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

const labs = ["flipboard", "handshake", "record-stack"];

const labsAssetsCopyTargets = labs.map((name) => ({
  src: `node_modules/${name}/assets/*`,
  dest: `labs/${name}/package`,
}));

/** @type {import('vite').UserConfig} */
const config = {
  resolve: {
    alias: {
      $constants: resolve("./src/constants"),
      $components: resolve("./src/lib/components"),
      $lib: resolve("./src/lib"),
      "@": resolve("./"),
    },
  },
  define: {
    "import.meta.env.VERCEL_ANALYTICS_ID": JSON.stringify(
      process.env.VERCEL_ANALYTICS_ID,
    ),
  },
  plugins: [
    viteStaticCopy({
      targets: [...labsAssetsCopyTargets],
    }),
    sveltekit(),
  ],
};

export default config;
