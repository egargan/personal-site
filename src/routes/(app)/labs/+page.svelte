<script lang="ts">
  import { fly } from "svelte/transition";

  import ProjectPreview from "./ProjectPreview.svelte";

  import flipboard from "./flipboard/project";
  import handshake from "./handshake/project";
  import recordStack from "./record-stack/project";
  import parliamentChart from "./parliament-chart/project";
</script>

<ul
  class="grid grid-cols-1 sm:grid-cols-[11fr_9fr] lg:grid-cols-[10fr_9fr_10fr] gap-x-11 gap-y-6
  md:gap-y-4 px-4 pr-20 sm:px-6 mt-8 md:mt-12 lg:mx-[-120px] xl:mx-[-160px] pb-20"
>
  <div class="md:col-start-1 flex flex-col gap-y-3 sm:gap-y-3 items-end">
    <li class="sm:translate-y-[-8px]" in:fly={{ y: 15 }}>
      <ProjectPreview project={recordStack} />
    </li>
    <li class="sm:translate-y-[-10px] sm:w-11/12" in:fly={{ y: 15, delay: 60 }}>
      <ProjectPreview project={handshake} />
    </li>
  </div>

  <div class="md:col-start-2 flex flex-col gap-y-12 sm:gap-y-3">
    <li
      class="sm:translate-x-2 sm:translate-y-2 lg:translate-y-8"
      in:fly={{ y: 15, delay: 30 }}
    >
      <ProjectPreview project={flipboard} />
    </li>

    <li class="lg:hidden" in:fly={{ y: 15, delay: 30 }}>
      <ProjectPreview project={parliamentChart} />
    </li>
  </div>

  <div class="hidden lg:flex lg:col-start-3 flex flex-col gap-y-12 sm:gap-y-3">
    <li class="sm:translate-x-1 sm:translate-y-4" in:fly={{ y: 15, delay: 30 }}>
      <ProjectPreview project={parliamentChart} />
    </li>
  </div>
</ul>
