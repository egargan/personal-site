<script lang="ts">
  import type { Project } from '$lib/labs';

  import flipboard from './flipboard/project';
  import handshake from './handshake/project';
  import recordStack from './record-stack/project';

  const projects: Project[] = [
    recordStack,
    flipboard,
    handshake,
  ];
</script>

<ul class="project-grid">
  {#each projects as project}
    <div>
      <article>
        <video autoplay loop muted>
          <source src="{project.image}" type="video/webm">
          <!-- TODO: add fallback markup! -->
        </video>
        <h2 class="font-heading text-xl pb-3">
          <a class="text-black transition-colors duration-[50ms] hover:text-red"
            href="{`blog/${project.slug}`}">
            {project.title}
          </a>
        </h2>
        <p class="mb-3 text-sm">{project.description}</p>
      </article>
    </div>
  {/each}
</ul>

<style>
  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1em;
  }
</style>
