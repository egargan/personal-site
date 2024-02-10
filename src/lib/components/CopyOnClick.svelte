<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";

  import ClipboardJS from "clipboard";

  export let text: string;

  let isTooltipVisible = false;
  let tooltipTimeout: ReturnType<typeof setTimeout>;

  onMount(() => {
    const linkButton = document.getElementById("link-button");
    new ClipboardJS(linkButton);
  });

  function emailClick(): void {
    isTooltipVisible = true;

    clearTimeout(tooltipTimeout);
    tooltipTimeout = setTimeout(() => {
      isTooltipVisible = false;
    }, 1200);
  }
</script>

<span class="relative inline-flex justify-center">
  <button
    id="link-button"
    class="underline-skip-ink text-red underline"
    data-clipboard-text={text}
    on:click={emailClick}
  >
    {#if $$slots.default}
      <slot />
    {:else}
      {text}
    {/if}
    <slot />
  </button>
  {#if isTooltipVisible}
    <span
      in:fly={{ y: 10, duration: 120, opacity: 0.3 }}
      out:fade={{ duration: 60 }}
      class="absolute bottom-[115%] select-none rounded bg-black px-5 py-1 text-center
      text-sm text-white"
    >
      Copied to clipboard!
    </span>
  {/if}
</span>
