<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Parties } from "./types";

  export let parties: Parties;
  export let seats: Record<string, number>;

  const dispatch = createEventDispatcher();

  function onSliderChange(id: string, value: string) {
    dispatch("change", { id, value });
  }
</script>

<div
  class="shadow-md grid gap-x-3 gap-y-4 grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 pl-3 pr-4 py-7
  lg:mr-12 w-full"
>
  {#each Object.entries(parties) as [id, { name, color }]}
    <div class="flex items-center justify-center mx-4">
      <div
        style={`background-color: ${color}`}
        class="mr-6 mb-1 w-[1.125rem] h-[1.125rem] rounded-full shrink-0"
      ></div>
      <div class="w-full">
        <div class="flex justify-between">
          <label for={`slider-${id}`} class="capitalize">{name}</label>
          <div class="text-lg">{seats[id]}</div>
        </div>
        <input
          id={`slider-${id}`}
          class="accent-red my-1 w-full"
          max="200"
          type="range"
          value={seats[id]}
          on:input={(event) => {
            onSliderChange(id, event.target.value);
          }}
        />
      </div>
    </div>
  {/each}
</div>
