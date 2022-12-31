<script lang="ts">
  import { onMount } from 'svelte';

  import type MarkdownIt from 'markdown-it';

  import { formatDateLong } from '$lib/time';
  import { initialisePrism } from '$lib/highlight/prism';
  import { initialiseRenderer } from '$lib/markdown';
  import type { PageData } from './$types';

  export let data: PageData;

  const renderer: MarkdownIt = initialiseRenderer();

  onMount(() => {
    // Apply highlighting to all <pre><code>... elements
    initialisePrism().highlightAll();
  });

  function backToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<article class="md:pb-80 pb-16">
  <header class="mb-10">
    <h1 class="text-3xl font-heading mb-4">{data.post.properties.title}</h1>
    <p class="mb-4 text-grey">
      <span class="inline-block mr-1">{formatDateLong(new Date(data.post.properties.created))}</span>
      <span class="inline-block mr-1">·</span>
      <span class="inline-block">{data.post.properties.readTimeMins} minute read</span>
    </p>
    {#each data.post.properties.tags as tag}
      <span class="bg-red-light text-red text-sm px-1.5 mr-1 rounded-sm">{tag}</span>
    {/each}
  </header>
  <div class="post-content w-full">
    {@html renderer.render(data.post.content)}
  </div>
  <footer class="w-full mt-16 flex justify-between text-grey text-sm">
    <p>Thanks for reading!</p>
    <div class="flex gap-x-6 whitespace-nowrap">
      <a class="underline" href="/about">Talk to Me</a>
      <button class="underline" on:click={backToTop}>Back to Top</button>
    </div>
  </footer>
</article>
