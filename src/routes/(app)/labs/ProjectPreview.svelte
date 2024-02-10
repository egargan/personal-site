<script lang="ts">
  import { fade } from "svelte/transition";

  import type { Project } from "$lib/labs";
  import { COLOR_TRANS_DURATION_MILLIS as transDur } from "$constants/ui";

  export let project: Project;

  let isHovering = false;
</script>

<article>
  <a
    on:mouseenter={() => {
      isHovering = true;
    }}
    on:mouseleave={() => {
      isHovering = false;
    }}
    href={`labs/${project.slug}`}
  >
    <div class="relative mb-4">
      <video autoplay loop muted class="rounded-sm">
        <source src={project.image} type="video/webm" />
        <!-- TODO: add fallback logic! -->
      </video>
      {#if isHovering}
        <div
          transition:fade={{ duration: transDur }}
          class="absolute inset-0 rounded-sm bg-red opacity-[15%]"
        />
      {/if}
    </div>
    <p class="mb-3 text-sm md:text-sm">{project.description}</p>
  </a>
</article>
