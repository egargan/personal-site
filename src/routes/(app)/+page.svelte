<script lang="ts">
  import { fly } from "svelte/transition";

  import PostListItem from "$components/PostListItem.svelte";
  import CopyOnClick from "$lib/components/CopyOnClick.svelte";
  import InlineLink from "$lib/components/InlineLink.svelte";

  import type { PageData } from "./$types";
  import ArrowIcon from "$lib/components/ArrowIcon.svelte";

  export let data: PageData;

  const delayUnitMs = 30;
</script>

<svelte:head>
  <title>Ed Gargan</title>
  <meta name="description" content="Personal website and blog for Ed Gargan" />
</svelte:head>

<section class="text-lg mt-14 md:mt-20">
  <h1
    in:fly={{ y: 15, delay: delayUnitMs }}
    class="font-lato font-bold text-2xl mb-8"
  >
    Hi, I'm Ed 👋
  </h1>

  <p in:fly={{ y: 15, delay: delayUnitMs * 2 }}>
    I’m a full-stack engineer living in London, working with the lovely folk at
    the <InlineLink href="https://ft.com">Financial Times</InlineLink> on shiny new
    Enterprise features.
  </p>

  <p in:fly={{ y: 15, delay: delayUnitMs * 2 }}>
    These days I'm focused on web development, but in the past I've spent lots
    of time with Android, mobile automation, and building backends in Rust.
  </p>

  <p in:fly={{ y: 15, delay: delayUnitMs * 2 }}>
    In my spare time I like to doodle with web tech — <InlineLink
      openInSameTab
      href="/labs">see my labs projects</InlineLink
    >.
  </p>

  <p in:fly={{ y: 15, delay: delayUnitMs * 2 }}>
    Say hi at <CopyOnClick text="edwgargan@gmail.com" />, or find me on <InlineLink
      href="https://github.com/egargan">GitHub</InlineLink
    >
    and
    <InlineLink href="https://www.linkedin.com/in/edward-gargan-7a0016130/"
      >LinkedIn</InlineLink
    >.
  </p>
</section>

<section class="mt-16 pb-32">
  <div in:fly={{ y: 15, delay: delayUnitMs * 3 }} class="flex mb-6 gap-x-10">
    <h1 class="font-lato font-bold text-2xl">Recent Posts</h1>
    <a
      href="/blog"
      class="text-red font-medium text-md stroke-red flex gap-x-1 items-center"
    >
      See All
      <ArrowIcon class="scale-90" points="right" />
    </a>
  </div>

  <ul class="list-outside px-0">
    {#each data.posts as post, i}
      <li in:fly={{ y: 15, delay: delayUnitMs * 3 + i * delayUnitMs }}>
        <PostListItem {post} />
      </li>
    {/each}
  </ul>
</section>
