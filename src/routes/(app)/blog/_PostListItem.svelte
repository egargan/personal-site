<script lang="ts">
  import type { PostProperties } from '$lib/notion/page';
  import { formatDateLong } from '$lib/time';
  import { COLOR_TRANS_DURATION_MILLIS as transDur } from '$constants/ui';

  export let post: PostProperties;

  let isHovering = false;
</script>

<article class="mb-12">
  <a
    on:mouseenter={() => { isHovering = true }}
    on:mouseleave={() => { isHovering = false }}
    href="{`blog/${post.slug}`}"
  >
    <h2
      class="font-heading text-2xl mb-2 hover-color-transition"
      class:text-red={isHovering}
      class:text-black={!isHovering}
    >
      {post.title}
    </h2>
    <p class="mb-3">{post.intro}</p>
    <p class="mb-3 text-grey">
      <span class="inline-block mr-1">{formatDateLong(new Date(post.created))}</span>
      <span class="inline-block mr-1">·</span>
      <span class="inline-block">{post.readTimeMins} minute read</span>
    </p>
    {#each post.tags as tag}
      <span class="bg-red-light text-red text-sm px-1.5 mr-1 rounded-sm">{tag}</span>
    {/each}
  </a>
</article>
