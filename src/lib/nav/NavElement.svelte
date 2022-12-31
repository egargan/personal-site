<script lang="ts">
  import NavScribble from './NavScribble.svelte';

  export let text: string;
  export let path: string;
  export let isCurrentPage: boolean;

  // TODO: slight fade in + out for colour
</script>

<a class="no-underline {isCurrentPage ? 'text-red' : 'text-black'}" href={path}>
  {text}
</a>
{#if isCurrentPage}
  <div class="flex justify-center">
    <NavScribble scale={1.8}/>
  </div>
{/if}
