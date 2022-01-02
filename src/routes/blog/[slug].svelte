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
  import MarkdownItAnchor from 'markdown-it-anchor';
  import MarkdownItAttrs from 'markdown-it-attrs';

  import type { Post } from '$lib/PostsDao';
  import { formatDateLong } from '$lib/time';

  export let post: Post;

  // TODO: abstract this init? move into $lib file?
  const renderer = new MarkdownIt()
    .use(MarkdownItAttrs)
    .use(MarkdownItAnchor);
</script>

<article class="pb-16">
  <header class="mb-10">
    <h1 class="text-3xl font-heading mb-6">{post.title}</h1>
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
