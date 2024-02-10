<script lang="ts">
  import PostListItem from "$components/PostListItem.svelte";
  import { fly } from "svelte/transition";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Blog</title>
  <meta name="description" content="Blog posts written by Ed Gargan" />
</svelte:head>

<section class="mt-14 pb-20 md:mt-20">
  <ul class="list-outside px-0">
    {#each data.posts as post, i}
      <li in:fly={{ y: 15, delay: i * 30 }}>
        <PostListItem {post} />
      </li>
    {/each}
  </ul>
</section>
