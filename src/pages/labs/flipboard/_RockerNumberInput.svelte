<script lang="ts">
  interface Props {
    number?: number;
    min?: number | null;
    max?: number | null;
  }

  let { number = $bindable(0), min = null, max = null }: Props = $props();

  function increment() {
    if (!max || number < max) {
      number += 1;
    }
  }

  function decrement() {
    if (!min || number > min) {
      number -= 1;
    }
  }
</script>

<div class="rocker-container">
  <button
    disabled={!!min && number <= min}
    class="rocker-btn rocker-btn-left"
    onclick={decrement}>
    –
  </button>
  <input
    tabindex="-1"
    class="rocker-input"
    type="number"
    readonly
    value={number} />
  <button
    disabled={!!max && number >= max}
    class="rocker-btn rocker-btn-right"
    onclick={increment}>
    +
  </button>
</div>

<style>
  .rocker-container {
    width: 108px;
    overflow: clip;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    border-radius: 4px;
  }

  .rocker-btn {
    padding-top: 8px;
    padding-bottom: 8px;

    border: none;
    background-color: var(--blue);
    color: white;

    cursor: pointer;

    transition: filter 0.2s;
  }

  .rocker-btn-left {
    padding-left: 14px;
    padding-right: 12px;
  }

  .rocker-btn-right {
    padding-left: 12px;
    padding-right: 12px;
  }

  .rocker-btn:hover:enabled {
    filter: brightness(0.95);
  }

  .rocker-input {
    width: 100%;

    background-color: var(--blue);
    color: white;
    border: none;

    text-align: right;
  }

  .rocker-input:focus {
    outline: 0;
  }
</style>
