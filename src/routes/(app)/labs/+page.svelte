<script lang="ts">
  import { fly } from "svelte/transition";

  import ProjectPreview from "./ProjectPreview.svelte";

  import flipboard from "./flipboard/project";
  import handshake from "./handshake/project";
  import recordStack from "./record-stack/project";
  import parliamentChart from "./parliament-chart/project";
</script>

<ul
  class="mt-8 grid grid-cols-1 gap-x-11 gap-y-6 px-4
  pb-20 pr-10 xs:pr-20 sm:grid-cols-[11fr_9fr] sm:px-6 md:mt-12 md:gap-y-4 lg:mx-[-120px] lg:grid-cols-[10fr_9fr_10fr] xl:mx-[-160px]"
>
  <div class="flex flex-col items-end gap-y-3 sm:gap-y-3 md:col-start-1">
    <li class="sm:translate-y-[-8px]" in:fly={{ y: 15 }}>
      <ProjectPreview project={recordStack} />
    </li>
    <li class="sm:w-11/12 sm:translate-y-[-10px]" in:fly={{ y: 15, delay: 60 }}>
      <ProjectPreview project={handshake} />
    </li>
  </div>

  <div class="flex flex-col gap-y-12 sm:gap-y-3 md:col-start-2">
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

  <div class="flex hidden flex-col gap-y-12 sm:gap-y-3 lg:col-start-3 lg:flex">
    <li class="sm:translate-x-1 sm:translate-y-4" in:fly={{ y: 15, delay: 30 }}>
      <ProjectPreview project={parliamentChart} />
    </li>
  </div>
</ul>
