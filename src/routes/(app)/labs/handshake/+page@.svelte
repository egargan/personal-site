<!--
  TODO:
  * present nicely
  * test on mobile
-->

<script lang="ts">
  import { onMount } from "svelte";

  import run from "handshake";

  let handshakeCanvas: HTMLElement;

  onMount(() =>
    // This path tells the handshake stuff where it should look for its assets, which have been
    // copied over from the package into SvelteKit's static dir
    run(handshakeCanvas, "/labs/handshake/package")
  );
</script>

<canvas class="mx-auto -mb-8" bind:this={handshakeCanvas} />
