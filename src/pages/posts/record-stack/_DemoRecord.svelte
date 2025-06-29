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

  export function getRandomColor() {
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

  function getRandomLineWidth() {
    switch (randomInt(4)) {
      case 0:
        return "25%";
      case 1:
        return "50%";
      case 2:
        return "75%";
      case 3:
        return "100%";
    }
  }
</script>

<div class={getRandomColor()}>
  <heading>
    <h1 data-title>
      {getRandomTitle()}
    </h1>
    <div data-preview>
      {#each [...Array(randomInt(4, 2))] as _}
        <div class="line"></div>
      {/each}
    </div>
  </heading>
  <div data-body>
    {#each [...Array(randomInt(40, 25))] as _, i}
      {#if i % 5 == randomInt(5)}
        <div
          class="line break {getRandomLineWidth()}"
          style={`width: ${getRandomLineWidth()}`}>
        </div>
      {:else}
        <div class="line"></div>
      {/if}
    {/each}
  </div>
</div>

<style>
  h1 {
    margin: 0;
    padding: 24px 16px;

    font-size: 22px;
    line-height: 1.4em;
    font-weight: bold;
  }

  div[data-preview] {
    padding: 8px 16px;
  }

  div[data-body] {
    padding: 16px;
  }

  .line {
    height: 11px;
    margin-bottom: 12px;
  }

  .line.break {
    margin-bottom: 28px;
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
