<!--
  TODO:
  * add debug key
  * test on mobile, add 'doesnt work well! overlay
  * show success/fail message
  * stop password flickering
  * make arrows bigger
-->

<script lang="ts">
  import { onMount } from "svelte";

  import run from "handshake";
  import LabFooter from "$lib/components/LabFooter.svelte";

  let container: HTMLElement;
  let controller: { setPassword(): void; reset(): void; confirm(): boolean };

  onMount(() => {
    // This path tells the handshake stuff where it should look for its assets, which have been
    // copied over from the package into SvelteKit's static dir
    const runItems = run(container, "/labs/handshake/package");

    controller = runItems[0];
    const cleanup = runItems[1];

    controller.setPassword(["TOP", "TOP", "BOTTOM", "FRONT", "FRONT"]);

    return cleanup;
  });

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      if (controller.confirm()) {
        window.alert("Correct!");
      }
    } else if (event.key === "Backspace") {
      controller.reset();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="flex items-center justify-center h-full w-full">
  <div class="mx-auto mb-24 md:mb-32 scale-[120%]" bind:this={container} />

  <div class="absolute bottom-0 w-full z-20">
    <div class="flex gap-x-8 items-center justify-center mb-4">
      <div class="flex gap-x-3 items-center">
        <span class="font-bold">Confirm</span>
        <img src="/labs/handshake/enter-key.svg" alt="Backspace key" />
      </div>
      <div class="flex gap-x-3 items-center">
        <span class="font-bold">Reset</span>
        <img src="/labs/handshake/backspace-key.svg" alt="Backspace key" />
      </div>
    </div>

    <LabFooter
      title="Handshake"
      heading="a questionably useful interactive authentication method using secret handshakes as passphrases"
    />
  </div>
</section>
