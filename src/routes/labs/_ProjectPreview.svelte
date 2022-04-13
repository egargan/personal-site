<script lang="ts">
  import { fade } from 'svelte/transition';

  import type { Project } from '$lib/labs';
  import { COLOR_TRANS_DURATION_MILLIS as transDur } from '$constants/ui';

  export let project: Project;

  let isHovering = false;
</script>

<article>
  <a
    on:mouseenter={() => { isHovering = true }}
    on:mouseleave={() => { isHovering = false }}
    href="{`blog/${project.slug}`}"
  >
    <div class="relative mb-4">
      <video autoplay loop muted class="rounded-sm">
        <source src="{project.image}" type="video/webm">
        <!-- TODO: add fallback markup! -->
      </video>
      {#if isHovering}
        <div
          transition:fade="{{ duration: transDur }}"
          class="absolute inset-0 rounded-sm opacity-[15%] bg-red"/>
      {/if}
    </div>
    <h2
      class="font-heading text-xl mb-2 hover-color-transition"
      class:text-red={isHovering}
      class:text-black={!isHovering}
    >
      {project.title}
    </h2>
    <p class="mb-3 text-base md:text-sm">{project.description}</p>
  </a>
</article>
