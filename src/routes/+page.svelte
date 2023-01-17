<script lang="ts">
  import PostListItem from "./_PostListItem.svelte";
  import CopyOnClickLink from "$lib/CopyOnClickLink.svelte";

  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<section class="text-lg mt-32 md:mt-56">
  <h1 class="font-lato font-bold text-2xl mb-8">Hi, I'm Ed 👋</h1>

  <p>
    I’m a full-stack engineer living in London, working with the lovely folk at
    the <a class="text-red underline" href="https://ft.com">Financial Times</a>.
  </p>

  <p>
    I’ve spent the last six or so years of my life building things with code.
    Have a look at
    <a class="text-red underline" href="https://github.com/egargan">my GitHub</a
    > for a feel of the things I like to write in my spare time, or read my posts
    below.
  </p>

  <p>
    Say <CopyOnClickLink text="hello@edwardgargan" />, or reach me on
    <a
      class="text-red underline"
      href="https://linkedin.com/in/edward-gargan-7a0016130">LinkedIn</a
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
