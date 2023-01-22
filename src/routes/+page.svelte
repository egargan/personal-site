<script lang="ts">
  import PostListItem from "./_PostListItem.svelte";
  import CopyOnClickLink from "$lib/CopyOnClickLink.svelte";

  import type { PageData } from "./$types";
  import InlineLink from "$lib/InlineLink.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <title>Ed Gargan</title>
  <meta name="description" content="Personal website and blog for Ed Gargan" />
</svelte:head>

<section class="text-lg mt-24 md:mt-36">
  <h1 class="font-lato font-bold text-2xl mb-8">Hi, I'm Ed 👋</h1>

  <p>
    I’m a full-stack engineer living in London, working with the lovely folk at
    the <InlineLink href="https://ft.com">Financial Times</InlineLink>.
  </p>

  <p>
    I’ve spent the last six or so years of my life building things with code.
    Have a look at
    <InlineLink href="https://github.com/egargan">my GitHub</InlineLink>
    for a feel of the things I like to write in my spare time, or read my posts below.
  </p>

  <p>
    Say <CopyOnClickLink text="hello@edwardgargan" />, or reach me on
    <InlineLink href="https://linkedin.com/in/edward-gargan-7a0016130"
      >LinkedIn</InlineLink
    >.
  </p>
</section>

<section class="mt-20 pb-20">
  <h1 class="font-lato font-bold text-2xl mb-6">Posts</h1>

  <ul class="list-outside px-0">
    {#each data.posts as post}
      <li>
        <PostListItem {post} />
      </li>
    {/each}
  </ul>
</section>
