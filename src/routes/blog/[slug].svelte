<script context="module" lang="ts">
  export async function load({ page, fetch }) {
    const url = `/blog/${page.params.slug}.json`;
    const response = await fetch(url);

    if (response.ok) {
      return {
        props: {
          post: await response.json()
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
  import MarkdownIt from 'markdown-it';

  import type { Post } from '$lib/PostsDao';
  import { formatDateLong } from '$lib/time';

  const renderer = new MarkdownIt();

  export let post: Post;
</script>

<article class="pb-16">
  <header class="mb-6">
    <h1 class="text-2xl font-heading mb-6">{post.title}</h1>
    <p class="mb-2 text-grey">
      <span class="inline-block mr-1">{formatDateLong(new Date(post.created))}</span>
      <span class="inline-block mr-1">·</span>
      <span class="inline-block">{post.readTimeMins} minute read</span>
    </p>
    <p class="text-red">{post.tags.join(', ')}</p>
  </header>
  <div class="post-content">
    {@html renderer.render(post.content)}
  </div>
</article>
