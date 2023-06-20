<script lang="ts">
  import { onMount } from "svelte";
  import { TransitionComposer, Flipboard, Cycler } from "flipboard";

  export let size: "small" | "big" = "big";
  export let numCols: number;
  export let numRows: number;

  let className: string;
  export { className as class };

  let flipboardContainer: HTMLElement;

  const composer = new TransitionComposer({
    numCols,
    numRows,
    rowCoeff: 50,
    colCoeff: 50,
    maxVariation: 600,
  });

  function getFlipboardDimens(size: "small" | "big") {
    if (size === "small") {
      return { padSize: 50, gridGap: 3, cornerRadius: 4 };
    } else if (size === "big") {
      return { padSize: 80, gridGap: 4, cornerRadius: 6 };
    }
  }

  onMount(() => {
    const { padSize, gridGap, cornerRadius } = getFlipboardDimens(size);

    const flipboard = new Flipboard({
      numCols,
      numRows,
      padSize,
      gridGap,
      cornerRadius,
      composer,
    });

    const cycler = new Cycler(flipboard, 2.5, [
      "flipboard/arches.png",
      "flipboard/bronze.jpeg",
      "flipboard/girder.jpeg",
      "flipboard/house.jpeg",
      "flipboard/window.jpeg",
    ]);

    flipboardContainer.appendChild(flipboard.getElement());
    cycler.enableCycling();
  });
</script>

<div class={className} bind:this={flipboardContainer} />
