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
      class="font-noto-sans text-xl mb-3 hover-color-transition font-medium"
      class:text-red={isHovering}
      class:text-black={!isHovering}
    >
      {post.title}
    </h2>
    <p class="mb-3">{post.intro}</p>
    <p class="mb-3 text-grey">
      <span class="inline-block mr-1"
        >{formatDateLong(new Date(post.created))}</span
      >
      <span class="inline-block mr-1">·</span>
      <span class="inline-block">{post.readTimeMins} minute read</span>
    </p>
    {#each post.tags as tag}
      <span class="bg-red-light text-red text-sm px-1.5 mr-1 rounded-sm"
        >{tag}</span
      >
    {/each}
  </a>
</article>
