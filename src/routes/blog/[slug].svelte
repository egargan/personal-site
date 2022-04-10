<script context="module" lang="ts">
  export async function load({ page, fetch }) {
    const url = `/blog/${page.params.slug}.json`;
    const response = await fetch(url);

    const post = await response.json();

    if (response.ok) {
      return {
        props: {
          post,
        }
      };
    }

    return {
      status: response.status,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';

  import type MarkdownIt from 'markdown-it';

  import type { Post } from '$lib/notion/page';
  import { formatDateLong } from '$lib/time';
  import { initialisePrism } from '$lib/highlight/prism';
  import { initialiseRenderer } from '$lib/markdown';

  export let post: Post;

  const renderer: MarkdownIt = initialiseRenderer();

  onMount(() => {
    // Apply highlighting to all <pre><code>... elements
    initialisePrism().highlightAll();
  });

  function backToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<article class="pb-96">
  <header class="mb-10">
    <h1 class="text-3xl font-heading mb-4">{post.properties.title}</h1>
    <p class="mb-4 text-grey">
      <span class="inline-block mr-1">{formatDateLong(new Date(post.properties.created))}</span>
      <span class="inline-block mr-1">·</span>
      <span class="inline-block">{post.properties.readTimeMins} minute read</span>
    </p>
    {#each post.properties.tags as tag}
      <span class="bg-red-light text-red text-sm px-1.5 mr-1 rounded-sm">{tag}</span>
    {/each}
  </header>
  <div class="post-content">
    {@html renderer.render(post.content)}
  </div>
  <footer class="w-full mt-16 flex justify-between text-grey text-sm">
    <p>Thanks for reading!</p>
    <div class="flex gap-x-6 whitespace-nowrap">
      <a class="underline" href="/me">Talk to Me</a>
      <button class="underline" on:click={backToTop}>Back to Top</button>
    </div>
  </footer>
</article>
