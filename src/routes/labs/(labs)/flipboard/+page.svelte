<script lang="ts">
  import { onMount } from 'svelte';
  import SourceLink from '$lib/components/SourceLink.svelte';

  // @ts-ignore
  import { TransitionComposer, Flipboard, Cycler } from 'flipboard';

  const numCols = 6;
  const numRows = 4;

  let flipboardContainer: HTMLElement;

  onMount(() => {
    const composer = new TransitionComposer({
        numCols,
        numRows,
        rowCoeff: 50,
        colCoeff: 50,
        maxVariation: 600,
    });

    const flipboard = new Flipboard({
        numCols,
        numRows,
        padSize: 100,
        gridGap: 4,
        cornerRadius: 5,
        composer,
    });

    const cycler = new Cycler(
        flipboard,
        4,
        [
          'flipboard/paris1.jpg',
          'flipboard/paris2.jpg',
          'flipboard/paris3.jpg',
          'flipboard/paris4.jpg',
        ]
    );

    flipboardContainer.appendChild(flipboard.getElement());
    cycler.enableCycling();
  });
</script>

<div class="flex gap-x-14 mt-20 -mx-20">
  <div class="flex-1">
    <div bind:this={flipboardContainer}></div>
    <div class="w-full flex justify-end mt-6 pr-1">
      <SourceLink href="https://github.com/egargan/flipboard"/>
    </div>
  </div>

  <div>
    <p>
      This bit of JS builds a grid of SVG elements that displays and transitions between a series of images.
    </p>
    <p>
      The transition style was inspired by those old-time-y 'split-flap' displays you'd get at train stations.
    </p>
    <p>
      The thing that puzzles me about this thing is why it gets so choppy around the midpoint of the transition.
    </p>
    <p>
      It seems like I'm asking too much of CSS transitions, or rendering images onto SVGs like this?
      There's no bottleneck in the scripting, anyway.
    </p>
  </div>
</div>
