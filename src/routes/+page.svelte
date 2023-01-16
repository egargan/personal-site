<script lang="ts">
  import PostListItem from "./_PostListItem.svelte";

  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<section class="text-lg mt-40">
  <h1 class="font-lato font-bold text-2xl mb-8">Hi, I'm Ed 👋</h1>

  <p>
    I’m a full-stack engineer living in London, working with the lovely folk at
    the Financial Times.
  </p>

  <p>
    I’ve spent the last six or so years of my life writing code and building
    things. Have a look at my GitHub for a feel of the things I like to write,
    or read my ramblings below.
  </p>

  <p>Say hello@edwardgargan.com, or reach me on LinkedIn.</p>
</section>

<section class="mt-20">
  <h1 class="font-lato font-bold text-2xl mb-6">Posts</h1>

  <ul class="list-outside px-0">
    {#each data.posts as post, i}
      <li>
        <PostListItem {post} />
      </li>
    {/each}
  </ul>
</section>
