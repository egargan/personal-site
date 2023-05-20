<script lang="ts">
  import { browser, dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import { webVitals } from "$lib/vitals";
  import { page } from "$app/stores";

  import "../app.css";
    import Nav from "$lib/components/nav/Nav.svelte";

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
  class="flex flex-col items-stretch container:items-center font-noto-sans text-base h-screen"
>
  <main class="container:w-[840px] h-full w-full px-5 sm:px-8">
    <Nav/>
    <slot />
  </main>
</div>
