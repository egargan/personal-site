<script lang="ts">
  export let number = 0;
  export let min: number | null = null;
  export let max: number | null = null;

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

<div class="flex bg-red text-white w-24 rounded overflow-clip">
  <button
    disabled={min && number <= max}
    class="bg-red pl-3.5 pr-3 py-2 hover:brightness-95"
    on:click={decrement}>–</button
  >
  <input
    tabindex="-1"
    class="bg-red text-center w-full block focus:outline-0"
    type="number"
    readonly
    value={number}
  />
  <button
    disabled={max && number >= max}
    class="bg-red pr-3.5 pl-3 py-2 hover:brightness-95"
    on:click={increment}>+</button
  >
</div>
