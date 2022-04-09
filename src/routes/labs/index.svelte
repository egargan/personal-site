<script lang="ts">
  import ProjectPreview from './_ProjectPreview.svelte';

  import type { Project } from '$lib/labs';

  import flipboard from './flipboard/project';
  import handshake from './handshake/project';
  import recordStack from './record-stack/project';
</script>

<ul class="project-grid">
  <!-- TODO: make this responsive! we'll probably need a component -->
  <div class="col-start-1 flex flex-col">
    <li>
      <ProjectPreview project={recordStack}/>
    </li>
  </div>
  <div class="col-start-2 flex flex-col gap-y-3">
    <li>
      <ProjectPreview project={flipboard}/>
    </li>
    <li>
      <ProjectPreview project={handshake}/>
    </li>
  </div>
</ul>

<style>
  .project-grid {
    display: grid;
    grid-template-columns: 55fr 45fr;
    grid-gap: 3em;
  }
</style>
