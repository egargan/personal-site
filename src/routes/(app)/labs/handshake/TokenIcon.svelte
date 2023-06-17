<script lang="ts">
  import ArrowIcon from "$lib/components/ArrowIcon.svelte";
  export let token: "TOP" | "BOTTOM" | "FRONT";
</script>

{#if token === "TOP"}
  <ArrowIcon width={2.5} class="stroke-[#2274A5] w-10 h-10" points="down" />
{:else if token === "BOTTOM"}
  <ArrowIcon width={2.5} class="stroke-[#CC2936] w-10 h-10" points="up" />
{:else if token === "FRONT"}
  <ArrowIcon width={2.5} class="stroke-[#03B5AA] w-10 h-10" points="right" />
{/if}
