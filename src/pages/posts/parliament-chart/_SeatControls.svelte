<script lang="ts">
  import type { Parties } from "./_types";

  interface Props {
    parties: Parties;
    seats: Record<string, number>;
    onSeatsChange: (id: string, value: string) => void;
  }

  let { parties, seats, onSeatsChange }: Props = $props();
</script>

<div class="seat-controls">
  {#each Object.entries(parties) as [id, { name, color }]}
    <div class="seat-row">
      <div style={`background-color: ${color}`} class="seat-dot"></div>
      <div class="seat-slider-container">
        <div class="seat-label-row">
          <label for={`slider-${id}`} class="seat-label">{name}</label>
          <div class="seat-value">{seats[id]}</div>
        </div>
        <input
          id={`slider-${id}`}
          class="seat-slider"
          max="200"
          type="range"
          value={seats[id]}
          oninput={(event) => {
            onSeatsChange(id, event.target.value);
          }} />
      </div>
    </div>
  {/each}
</div>

<style>
  .seat-controls {
    width: 100%;

    padding-top: 28px;
    padding-bottom: 28px;
    padding-left: 12px;
    padding-right: 16px;

    display: grid;
    grid-template-columns: 1fr;
    gap: 16px 12px;

    border: 1px var(--outline) solid;

    border-radius: 6px;
  }

  @media (min-width: 640px) {
    .seat-controls {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 960px) {
    .seat-controls {
      grid-template-columns: 1fr;
      margin-right: 48px;
    }
  }

  .seat-row {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 16px;
    margin-right: 16px;
  }

  .seat-dot {
    height: 18px;
    width: 18px;

    margin-bottom: 4px;
    margin-right: 24px;

    flex-shrink: 0;

    border-radius: 9999px;
  }

  .seat-slider-container {
    width: 100%;
  }

  .seat-label-row {
    display: flex;
    justify-content: space-between;
  }

  .seat-label {
    text-transform: capitalize;
  }

  .seat-value {
    font-size: 18px;
  }

  .seat-slider {
    width: 100%;
    margin: 4px 0;
  }
</style>
