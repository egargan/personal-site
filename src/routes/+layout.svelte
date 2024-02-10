<script lang="ts">
  import { browser, dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import { webVitals } from "$lib/vitals";
  import { page } from "$app/stores";

  import "../app.css";

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  // Send web vitals data to Vercel
  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId,
    });
  }

  // Send audience data to Vercel
  inject({ mode: dev ? "development" : "production" });
</script>

<div
  class="flex h-screen flex-col items-stretch font-noto-sans text-base container:items-center"
>
  <slot />
</div>
