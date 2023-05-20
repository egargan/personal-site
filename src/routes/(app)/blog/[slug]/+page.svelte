<script lang="ts">
  import { onMount } from "svelte";

  import ArrowIcon from "$lib/components/ArrowIcon.svelte";
  import { formatDateLong } from "$lib/time";
  // import { initialisePrism } from "$lib/highlight/prism";
  import type { PageData } from "./$types";

  export let data: PageData;

  onMount(() => {
    // Apply highlighting to all <pre><code>... elements
    // initialisePrism().highlightAll();
  });

  function backToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

<svelte:head>
  <title>{data.properties.title}</title>
  <meta name="description" content={data.properties.intro} />
</svelte:head>

<article class="md:pb-80 pb-16 mt-12 sm:mt-18">
  <header class="mb-10">
    <a href="/blog" class="text-red font-medium stroke-red flex gap-x-1">
      <ArrowIcon />
      All Posts
    </a>
    <h1 class="text-3xl font-heading mb-4 mt-8">{data.properties.title}</h1>
    <p class="mb-4 text-grey">
      <span class="inline-block mr-1"
        >{formatDateLong(new Date(data.properties.created))}</span
      >
      <span class="inline-block mr-1">·</span>
      <span class="inline-block"
        >{data.properties.readTimeMins} minute read</span
      >
    </p>
    {#each data.properties.tags as tag}
      <span class="bg-red-light text-red text-sm px-1.5 mr-1 rounded-sm"
        >{tag}</span
      >
    {/each}
  </header>
  <div class="post-content w-full">
    {@html data.content}
  </div>
  <footer class="w-full mt-16 flex justify-between text-grey text-sm">
    <p class="my-0">Thanks for reading!</p>
    <div class="flex gap-x-6 whitespace-nowrap">
      <button class="underline" on:click={backToTop}>Back to Top</button>
      <a class="underline" href="/">Back Home</a>
    </div>
  </footer>
</article>
