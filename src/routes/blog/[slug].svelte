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

<article>
  <header class="mb-4">
    <h1>{post.title}</h1>
    <div class="mb-2 text-grey">
      <h3 class="inline-block mr-1">{formatDateLong(new Date(post.created))}</h3>
      <div class="inline-block mr-1">·</div>
      <h3 class="inline-block">{post.readTimeMins} minute read</h3>
    </div>
    <h3 class="text-red">{post.tags.join(', ')}</h3>
  </header>
</article>
