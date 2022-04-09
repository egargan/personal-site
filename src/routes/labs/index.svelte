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
    <li class="translate-y-[-8px] translate-x-[-4px]">
      <ProjectPreview project={recordStack}/>
    </li>
  </div>
  <div class="col-start-2 flex flex-col gap-y-3">
    <li class="translate-y-[-3px] translate-x-[3px]">
      <ProjectPreview project={flipboard}/>
    </li>
    <li class="translate-y-[4px] translate-x-[-12px]">
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
