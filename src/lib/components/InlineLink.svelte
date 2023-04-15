<script lang="ts">
  export let href: string;
  export let openInSameTab = false;
</script>

{#if !openInSameTab}
  <a class="text-red underline" target="_blank" rel="noreferrer" {href}>
    <slot />
  </a>
{:else}
  <a class="text-red underline" {href}>
    <slot />
  </a>
{/if}
