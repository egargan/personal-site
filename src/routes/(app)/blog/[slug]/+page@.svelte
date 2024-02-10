<script lang="ts">
  import { onMount } from "svelte";

  import ArrowIcon from "$lib/components/ArrowIcon.svelte";
  import { formatDateLong } from "$lib/utils/time";
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

<main class="h-full w-full px-5 sm:px-8 container:w-[840px]">
  <article class="mt-16 pb-16 sm:mt-28 md:pb-80">
    <header class="mb-10">
      <a href="/blog" class="flex gap-x-1 stroke-red font-medium text-red">
        <ArrowIcon />
        All Posts
      </a>
      <h1 class="font-heading mb-4 mt-8 text-3xl">{data.properties.title}</h1>
      <p class="mb-4 text-grey">
        <span class="mr-1 inline-block"
          >{formatDateLong(new Date(data.properties.created))}</span
        >
        <span class="mr-1 inline-block">·</span>
        <span class="inline-block"
          >{data.properties.readTimeMins} minute read</span
        >
      </p>
      {#each data.properties.tags as tag}
        <span class="mr-1 rounded-sm bg-red-light px-1.5 text-sm text-red"
          >{tag}</span
        >
      {/each}
    </header>
    <div class="post-content w-full">
      {@html data.content}
    </div>
    <footer class="mt-16 flex w-full justify-between text-sm text-grey">
      <p class="my-0">Thanks for reading!</p>
      <div class="flex gap-x-6 whitespace-nowrap">
        <button class="underline" on:click={backToTop}>Back to Top</button>
        <a class="underline" href="/">Back Home</a>
      </div>
    </footer>
  </article>
</main>
