<script lang="ts">
  import { onMount } from "svelte";

  import RockerNumberInput from "./_RockerNumberInput.svelte";
  import debounce from "$lib/utils/debounce";
  import DemoFlipboard from "./_DemoFlipboard.svelte";
  import RowIcon from "./_RowIcon.svelte";
  import ColumnIcon from "./_ColumnIcon.svelte";

  let numRows = $state(6);
  let numCols = $state(6);

  let windowIsSmall = $state(true);

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

<svelte:window onresize={debounce(onWindowResize, 100)} />

<main>
  <div class="flipboard-container">
    {#key [windowIsSmall, numRows, numCols]}
      <DemoFlipboard
        class="demo-flipboard"
        {numCols}
        {numRows}
        size={windowIsSmall ? "small" : "big"} />
    {/key}
  </div>

  <div class="controls-outer">
    <div class="controls-inner">
      <div class="control-group">
        {#if windowIsSmall}
          <RowIcon class="icon" />
        {:else}
          <span>Rows</span>
        {/if}
        <RockerNumberInput max={8} bind:number={numRows} />
      </div>

      <div class="control-group">
        {#if windowIsSmall}
          <ColumnIcon class="icon" />
        {:else}
          <span>Columns</span>
        {/if}
        <RockerNumberInput max={8} bind:number={numCols} />
      </div>
    </div>
  </div>
</main>

<style>
  :global(body) {
    --d: 2px;
    --c: var(--outline);
    --bg: var(--background);
    --s: 50px;

    background: radial-gradient(
        circle at var(--d) var(--d),
        var(--c) calc(var(--d) - 1px),
        var(--bg) var(--d)
      )
      0 0 / var(--s) var(--s);
  }

  main {
    width: 100vw;
    height: 100vh;

    display: flex;

    align-items: center;
    justify-content: center;
    position: relative;
  }

  :global(.demo-flipboard) {
    padding-bottom: 128px;
  }

  @media (min-width: 640px) {
    :global(.demo-flipboard) {
      padding-bottom: 84px;
    }
  }

  .controls-outer {
    width: 100%;

    position: absolute;
    bottom: 12%;

    z-index: 10;
  }

  .controls-inner {
    width: fit-content;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 8px;

    padding-left: 24px;
    padding-right: 24px;
    padding-top: 16px;
    padding-bottom: 16px;

    display: flex;
    justify-content: center;
    column-gap: 2rem;

    background: var(--background);
    border: 2px var(--outline) solid;
    border-radius: 6px;
  }

  @media (min-width: 640px) {
    .controls-inner {
      margin-bottom: 32px;
    }
  }

  .control-group {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }

  :global(.icon) {
    width: 32px;
    fill: var(--text);
  }
</style>
