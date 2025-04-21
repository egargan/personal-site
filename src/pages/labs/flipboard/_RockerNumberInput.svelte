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

<div class="flex w-24 overflow-clip rounded bg-red text-white">
  <button
    disabled={!!min && number <= min}
    class="bg-red py-2 pl-3.5 pr-3 hover:brightness-95"
    onclick={decrement}>–</button
  >
  <input
    tabindex="-1"
    class="block w-full bg-red text-center focus:outline-0"
    type="number"
    readonly
    value={number}
  />
  <button
    disabled={!!max && number >= max}
    class="bg-red py-2 pl-3 pr-3.5 hover:brightness-95"
    onclick={increment}>+</button
  >
</div>
