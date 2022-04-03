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
  import type { PostProperties } from '$lib/notion/page';
  import { formatDateLong } from '$lib/time';

  export let posts: PostProperties[];
</script>

<ul>
  {#each posts as post}
    <div class="mb-12">
      <article>
        <h2 class="font-heading text-2xl pb-3">
          <a class="text-black transition-colors duration-[50ms] hover:text-red" href="{`blog/${post.slug}`}">
            {post.title}
          </a>
        </h2>
        <p class="mb-3">{post.intro}</p>
        <p class="mb-3 text-grey">
          <span class="inline-block mr-1">{formatDateLong(new Date(post.created))}</span>
          <span class="inline-block mr-1">·</span>
          <span class="inline-block">{post.readTimeMins} minute read</span>
        </p>
        {#each post.tags as tag}
          <span class="bg-red-light text-red text-sm px-1.5 mr-1 rounded-sm">{tag}</span>
        {/each}
      </article>
    </div>
  {/each}
</ul>
