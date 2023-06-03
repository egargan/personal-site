<script lang="ts">
  import randomInt from "$lib/utils/randomInt";

  export const titles = [
    "Animating CSS Grid (How To + Examples)",
    "Some Cross-Browser DevTools Features You Might Not Know",
    "An Approach to Lazy Loading Custom Elements",
    "Creating a Clock with the New CSS sin() and cos() Trigonometry Functions",
    "Healthcare, Selling Lemons, and the Price of Developer Experience",
    "The truth about CSS selector performance",
    "Caching Data in SvelteKit",
  ];

  export function getRandomTitle(): string {
    return titles[randomInt(titles.length)];
  }

  export function getRandomColor(): string {
    switch (randomInt(4)) {
      case 0:
        return "forest";
      case 1:
        return "sage";
      case 2:
        return "grey";
      case 3:
        return "navy";
    }
  }

  function getRandomLineWidth(): string {
    switch (randomInt(4)) {
      case 0:
        return "w-1/2";
      case 1:
        return "w-3/4";
      case 2:
        return "w-1/4";
      case 3:
        return "w-full";
    }
  }
</script>

<div class={getRandomColor()}>
  <heading>
    <h1 class="m-0 py-8 px-4 font-bold" data-title>
      {getRandomTitle()}
    </h1>
    <p class="m-0 p-4" data-preview>
      {#each [...Array(randomInt(4, 2))] as _}
        <div class="line mb-3" />
      {/each}
    </p>
  </heading>
  <div class="p-4" data-body>
    {#each [...Array(randomInt(40, 25))] as _, i}
      {#if i % 5 == randomInt(5)}
        <div class="line mb-7 {getRandomLineWidth()}" />
      {:else}
        <div class="line mb-3" />
      {/if}
    {/each}
  </div>
</div>

<style>
  .line {
    @apply h-[11px];
  }
  .line:last-child {
    width: 50%;
  }

  .forest {
    background-color: #2e8a70;
  }
  .forest h1 {
    color: #d5f5ec;
  }
  .forest .line {
    background-color: #a0cabe;
  }

  .sage {
    background: #70b087;
  }
  .sage h1 {
    color: #e4f6eb;
  }
  .sage .line {
    background: #bbdec8;
  }

  .grey {
    background: #d2d7df;
  }
  .grey h1 {
    color: #384963;
  }
  .grey .line {
    background: #7e8ca0;
  }

  .navy {
    background: #3c4f76;
  }
  .navy h1 {
    color: #e4e8f1;
  }
  .navy .line {
    background: #acb7cf;
  }
</style>
