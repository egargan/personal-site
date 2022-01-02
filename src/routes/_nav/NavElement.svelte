<script lang="ts">
  export let text: string;
  export let path: string;
  export let isCurrentPage: boolean;
</script>

<a class="no-underline {isCurrentPage ? 'text-red' : 'text-black'}" href={path}>
  {text}
</a>
{#if isCurrentPage}
  <div class="w-0.5 h-0.5 bg-red rounded-full mx-auto"></div>
{/if}
