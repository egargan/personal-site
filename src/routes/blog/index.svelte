<script context="module" lang="ts">
  export async function load({ fetch }) {
    const url = '/blog.json';
    const response = await fetch(url);

    if (response.ok) {
      return {
        props: {
          posts: await response.json()
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
  import type { Post } from '$lib/PostsDao';
  import { formatDateLong } from '$lib/time';

  export let posts: Post[];
</script>

<ul>
  {#each posts as post}
    <div class="mb-12">
      <article>
        <h2 class="font-heading text-xl pb-2">
          <a class="text-black underline decoration-grey-light" href="{`blog/${post.slug}`}">
            {post.title}
          </a>
        </h2>
        <p class="mb-2">{post.header}</p>
        <p class="mb-2 text-grey">
          <span class="inline-block mr-1">{formatDateLong(new Date(post.created))}</span>
          <span class="inline-block mr-1">·</span>
          <span class="inline-block">{post.readTimeMins} minute read</span>
        </p>
        <p class="text-red">{post.tags.join(', ')}</p>
      </article>
    </div>
  {/each}
</ul>
