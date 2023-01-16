import { sveltekit } from "@sveltejs/kit/vite";
import { resolve } from "path";

/** @type {import('vite').UserConfig} */
const config = {
  resolve: {
    alias: {
      $constants: resolve("./src/constants"),
    },
  },
  plugins: [sveltekit()],
};

export default config;
