<script lang="ts">
  import ArrowIcon from "$lib/components/icons/ArrowIcon.svelte";

  interface Props {
    token: "TOP" | "BOTTOM" | "FRONT";
  }

  let { token }: Props = $props();
</script>

{#if token === "TOP"}
  <ArrowIcon
    stroke-width={2.5}
    class="token-icon token-icon-top"
    points="down" />
{:else if token === "BOTTOM"}
  <ArrowIcon
    stroke-width={2.5}
    class="token-icon token-icon-bottom"
    points="up" />
{:else if token === "FRONT"}
  <ArrowIcon
    stroke-width={2.5}
    class="token-icon token-icon-front"
    points="right" />
{/if}

<style>
  :global(.token-icon) {
    height: 40px;
    width: 40px;
  }
  :global(.token-icon-top) {
    stroke: var(--blue);
  }
  :global(.token-icon-bottom) {
    stroke: var(--pink);
  }
  :global(.token-icon-front) {
    stroke: var(--green);
  }
</style>
