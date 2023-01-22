<script lang="ts">
  import PostListItem from "./_PostListItem.svelte";
  import CopyOnClick from "$lib/CopyOnClick.svelte";

  import type { PageData } from "./$types";
  import InlineLink from "$lib/InlineLink.svelte";
  import GitHubIcon from "$lib/GitHubIcon.svelte";
  import LinkedInIcon from "$lib/LinkedInIcon.svelte";
  import MailIcon from "$lib/MailIcon.svelte";

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
    the <InlineLink href="https://ft.com">Financial Times</InlineLink> on shiny new Enterprise features.
  </p>

  <p>
    These days I'm focused on web development, but in the past I've spent lots of time with Android,
    mobile automation, and building backends in Rust. In my spare time I like to doodle with web
    tech, <InlineLink href="https://github.com/egargan/flipboard">like this</InlineLink>.
  </p>

  <ul class="px-0 mt-5">
    <li class="flex gap-x-2 items-center">
      <MailIcon class="fill-red scale-90" />
      <CopyOnClick text="hello@edwardgargan.com">
        hello@edwardgargan.com
      </CopyOnClick>
    </li>
    <li class="flex gap-x-2 items-center">
      <GitHubIcon class="fill-black mr-0.5 scale-90" />
      <InlineLink href="https://github.com/egargan">egargan</InlineLink>
    </li>
    <li class="flex gap-x-2 items-center">
      <LinkedInIcon class="fill-[#4466bb] scale-[0.89]" />
      <InlineLink href="https://www.linkedin.com/in/edward-gargan-7a0016130/"
        >Edward Gargan</InlineLink
      >
    </li>
    <li />
  </ul>
</section>

<section class="mt-16 pb-20">
  <h1 class="font-lato font-bold text-2xl mb-6">Posts</h1>

  <ul class="list-outside px-0">
    {#each data.posts as post}
      <li>
        <PostListItem {post} />
      </li>
    {/each}
  </ul>
</section>
