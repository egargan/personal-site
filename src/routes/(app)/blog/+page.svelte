<script lang="ts">
  import PostListItem from './_PostListItem.svelte';

  import { fly } from 'svelte/transition';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<ul>
  {#each data.posts as post, i}
    <li in:fly={{ y: 15, delay: i * 30 }}>
      <PostListItem {post}/>
    </li>
  {/each}
</ul>
