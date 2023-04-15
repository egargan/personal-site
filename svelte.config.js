import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        "default-src": ["self"],
        "connect-src": [
          "self",
          "vitals.vercel-insights.com",
          "vitals.vercel-analytics.com",
          "cdn.vercel-insights.com",
        ],
        "style-src": ["self", "unsafe-inline"],
      },
    },
  },
};

export default config;
