<script lang="ts">
  import { onMount } from "svelte";

  import RockerNumberInput from "$components/RockerNumberInput.svelte";
  import debounce from "$lib/utils/debounce";
  import DemoFlipboard from "./DemoFlipboard.svelte";
  import RowIcon from "$lib/components/RowIcon.svelte";
  import ColumnIcon from "$lib/components/ColumnIcon.svelte";
  import LabFooter from "$lib/components/LabFooter.svelte";

  let numRows = 6;
  let numCols = 6;

  let windowIsSmall = true;

  function onWindowResize() {
    if (windowIsSmall && window.innerWidth > 700) {
      windowIsSmall = false;
    } else if (!windowIsSmall && window.innerWidth < 700) {
      windowIsSmall = true;
    }
  }

  onMount(() => {
    onWindowResize();
  });
</script>

<svelte:window on:resize={debounce(onWindowResize, 100)} />

<section class="flex h-full w-full items-center justify-center">
  {#key [windowIsSmall, numRows, numCols]}
    <DemoFlipboard
      class="pb-44 sm:pb-32"
      {numCols}
      {numRows}
      size={windowIsSmall ? "small" : "big"}
    />
  {/key}

  <div class="absolute bottom-0 z-20 w-full">
    <div
      class="mx-auto mb-2 flex w-min justify-center gap-x-8 bg-white px-6 py-4 shadow-lg sm:mb-8"
    >
      <div class="flex items-center gap-x-3">
        {#if windowIsSmall}
          <RowIcon class="w-8 fill-black" />
        {:else}
          <span>Rows</span>
        {/if}
        <RockerNumberInput max={8} bind:number={numRows} />
      </div>

      <div class="flex items-center gap-x-3">
        {#if windowIsSmall}
          <ColumnIcon class="w-8 fill-black" />
        {:else}
          <span>Columns</span>
        {/if}
        <RockerNumberInput max={8} bind:number={numCols} />
      </div>
    </div>

    <LabFooter
      dropShadow
      title="Flipboard"
      heading="animated image slideshow using SVG panels and CSS animation"
      repoUrl="https://github.com/egargan/flipboard"
    />
  </div>
</section>
