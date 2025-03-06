<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Parties } from "./types";

  interface Props {
    parties: Parties;
    seats: Record<string, number>;
  }

  let { parties, seats }: Props = $props();

  const dispatch = createEventDispatcher();

  function onSliderChange(id: string, value: string) {
    dispatch("change", { id, value });
  }
</script>

<div
  class="grid w-full grid-cols-1 gap-x-3 gap-y-4 py-7 pl-3 pr-4 shadow-md xs:grid-cols-2 lg:mr-12 lg:grid-cols-1"
>
  {#each Object.entries(parties) as [id, { name, color }]}
    <div class="mx-4 flex items-center justify-center">
      <div
        style={`background-color: ${color}`}
        class="mb-1 mr-6 h-[1.125rem] w-[1.125rem] shrink-0 rounded-full"
      ></div>
      <div class="w-full">
        <div class="flex justify-between">
          <label for={`slider-${id}`} class="capitalize">{name}</label>
          <div class="text-lg">{seats[id]}</div>
        </div>
        <input
          id={`slider-${id}`}
          class="my-1 w-full accent-red"
          max="200"
          type="range"
          value={seats[id]}
          oninput={(event) => {
            onSliderChange(id, event.target.value);
          }}
        />
      </div>
    </div>
  {/each}
</div>

