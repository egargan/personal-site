<script lang="ts">
  import type { Project } from '$lib/labs';
  import { fade } from 'svelte/transition';

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
          transition:fade="{{ duration: 40 }}"
          class="absolute inset-0 rounded-sm opacity-[15%] bg-red"/>
      {/if}
    </div>
    <h2
      class="font-heading text-xl mb-2 transition-colors duration-[40ms]"
      class:text-red={isHovering}
      class:text-black={!isHovering}
    >
      {project.title}
    </h2>
    <p class="mb-3 text-sm">{project.description}</p>
  </a>
</article>
