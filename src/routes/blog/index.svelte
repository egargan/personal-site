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
  import PostListItem from './_PostListItem.svelte';

  import { fly } from 'svelte/transition';

  export let posts: PostProperties[];
</script>

<ul>
  {#each posts as post, i}
    <li in:fly={{ y: 15, delay: i * 30 }}>
      <PostListItem {post}/>
    </li>
  {/each}
</ul>
