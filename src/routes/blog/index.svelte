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
        <h2>
          <a class="text-black" href="{`blog/${post.slug}`}">
            {post.title}
          </a>
        </h2>
        <h4 class="mb-2">{post.header}</h4>
        <div class="mb-2 text-grey">
          <h4 class="inline-block mr-1">{formatDateLong(new Date(post.created))}</h4>
          <div class="inline-block mr-1">·</div>
          <h4 class="inline-block">{post.readTimeMins} minute read</h4>
        </div>
        <h4 class="text-red">{post.tags.join(', ')}</h4>
      </article>
    </div>
  {/each}
</ul>
