<script lang="ts">
  import { fly } from "svelte/transition";

  import ProjectPreview from "./ProjectPreview.svelte";

  import flipboard from "./flipboard/project";
  import handshake from "./handshake/project";
  import recordStack from "./record-stack/project";

  //<li class="translate-y-[-8px] translate-x-[-4px]" in:fly={{ y: 15 }}>
</script>

<ul
  class="grid grid-cols-1 sm:grid-cols-[11fr_9fr] gap-x-10 gap-y-6 md:gap-y-4 px-4 pr-10 sm:px-6
  mt-8 md:mt-12"
>
  <div class="md:col-start-1 flex flex-col gap-y-3 sm:gap-y-3 items-end">
    <li class="sm:translate-y-[-8px]" in:fly={{ y: 15 }}>
      <ProjectPreview project={recordStack} />
    </li>
    <li class="sm:translate-x-[8px] sm:w-11/12" in:fly={{ y: 15, delay: 60 }}>
      <ProjectPreview project={handshake} />
    </li>
  </div>
  <div class="md:col-start-2 flex flex-col gap-y-12 sm:gap-y-3">
    <li
      class="sm:translate-x-[12px] sm:translate-y-4"
      in:fly={{ y: 15, delay: 30 }}
    >
      <ProjectPreview project={flipboard} />
    </li>
  </div>
</ul>
