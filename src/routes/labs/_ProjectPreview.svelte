<script lang="ts">
  import type { Project } from '$lib/labs';
  export let project: Project;
</script>

<article>
  <video autoplay loop muted class="mb-4 rounded-sm">
    <source src="{project.image}" type="video/webm">
    <!-- TODO: add fallback markup! -->
  </video>
  <h2 class="font-heading text-xl mb-2">
    <a class="text-black transition-colors duration-[50ms] hover:text-red"
      href="{`blog/${project.slug}`}">
      {project.title}
    </a>
  </h2>
  <p class="mb-3 text-sm">{project.description}</p>
</article>
