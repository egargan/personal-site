<script lang="ts">
  import ArrowIcon from "$lib/components/icons/ArrowIcon.svelte";

  interface Props {
    token: "TOP" | "BOTTOM" | "FRONT";
  }

  let { token }: Props = $props();
</script>

{#if token === "TOP"}
  <ArrowIcon width={2.5} class="h-10 w-10 stroke-[#2274A5]" points="down" />
{:else if token === "BOTTOM"}
  <ArrowIcon width={2.5} class="h-10 w-10 stroke-[#CC2936]" points="up" />
{:else if token === "FRONT"}
  <ArrowIcon width={2.5} class="h-10 w-10 stroke-[#03B5AA]" points="right" />
{/if}
