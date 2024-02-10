<script lang="ts">
  import type { PostProperties } from "$lib/blog/pageHeaders";
  import { formatDateLong } from "$lib/utils/time";

  export let post: PostProperties;

  let isHovering = false;
</script>

<article class="mb-10">
  <a
    on:mouseenter={() => {
      isHovering = true;
    }}
    on:mouseleave={() => {
      isHovering = false;
    }}
    href={`blog/${post.slug}`}
  >
    <h2
      class="hover-color-transition mb-3 font-noto-sans text-xl font-medium"
      class:text-red={isHovering}
      class:text-black={!isHovering}
    >
      {post.title}
    </h2>
    <p class="mb-3">{post.intro}</p>
    <p class="mb-3 text-grey">
      <span class="mr-1 inline-block"
        >{formatDateLong(new Date(post.created))}</span
      >
      <span class="mr-1 inline-block">·</span>
      <span class="inline-block">{post.readTimeMins} minute read</span>
    </p>
    {#each post.tags as tag}
      <span class="mr-1 rounded-sm bg-red-light px-1.5 text-sm text-red"
        >{tag}</span
      >
    {/each}
  </a>
</article>
