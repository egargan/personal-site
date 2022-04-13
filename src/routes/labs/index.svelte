<script lang="ts">
  import { fly } from 'svelte/transition';

  import ProjectPreview from './_ProjectPreview.svelte';

  import type { Project } from '$lib/labs';

  import flipboard from './flipboard/project';
  import handshake from './handshake/project';
  import recordStack from './record-stack/project';

  //<li class="translate-y-[-8px] translate-x-[-4px]" in:fly={{ y: 15 }}>
</script>

<ul class="grid grid-cols-1 md:grid-cols-[11fr_9fr] gap-x-10 gap-y-6 md:gap-y-4 px-4 sm:pr-32 md:px-0">
  <!-- TODO: make this responsive! we'll probably need a component -->
  <div class="md:col-start-1 flex flex-col gap-y-12 md:gap-y-6">
    <li in:fly={{ y: 15 }}>
      <ProjectPreview project={recordStack}/>
    </li>
  </div>
  <div class="md:col-start-2 flex flex-col gap-y-12 md:gap-y-6">
    <li in:fly={{ y: 15, delay: 30 }}>
      <ProjectPreview project={flipboard}/>
    </li>
    <li in:fly={{ y: 15, delay: 60 }}>
      <ProjectPreview project={handshake}/>
    </li>
  </div>
</ul>

