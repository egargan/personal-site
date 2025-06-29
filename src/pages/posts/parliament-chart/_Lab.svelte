<script lang="ts">
  import ParliamentChart from "./_ParliamentChart.svelte";
  import SeatControls from "./_SeatControls.svelte";
  import type { Parties } from "./_types";

  const parties: Parties = {
    red: { name: "Red Party", initialSeats: 80, color: "#FF3624" },
    blue: { name: "Blue Party", initialSeats: 80, color: "#0A99FF" },
    green: { name: "Green Party", initialSeats: 80, color: "#008A5E" },
    yellow: { name: "Yellow Party", initialSeats: 80, color: "#FFC830" },
  };

  let seats = $state(
    Object.fromEntries(
      Object.entries(parties).map(([id, { initialSeats }]) => [
        id,
        initialSeats,
      ]),
    ),
  );

  function onSeatsChange(id: string, value: string) {
    if (!(id in seats)) return;

    seats = {
      ...seats,
      [id]: parseInt(value),
    };
  }
</script>

<main>
  <div class="chart-wrapper">
    {#key seats}
      <ParliamentChart {seats} colors={parties} />
    {/key}
  </div>

  <div class="controls-wrapper">
    <SeatControls {onSeatsChange} {parties} {seats} />
  </div>
</main>

<style>
  :global(body) {
    --d: 2px;
    --c: var(--outline);
    --bg: var(--background);
    --s: 50px;

    background: radial-gradient(
        circle at var(--d) var(--d),
        var(--c) calc(var(--d) - 1px),
        var(--bg) var(--d)
      )
      0 0 / var(--s) var(--s);
  }

  main {
    width: 100vw;
    height: 100vh;

    max-width: 1100px;
    margin: auto;

    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 64px;

    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    row-gap: 8px;
  }

  @media (min-width: 768px) {
    main {
      padding-left: 0;
      padding-right: 0;
    }
  }
  @media (min-width: 960px) {
    main {
      flex-direction: row;
    }
  }

  .chart-wrapper {
    width: 100%;
    max-width: 720px;

    margin-left: 32px;
    margin-right: 32px;

    padding-left: 8px;
    padding-right: 8px;
  }

  @media (min-width: 960px) {
    .chart-wrapper {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .controls-wrapper {
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;

    background: var(--background);
  }

  @media (min-width: 480px) {
    .controls-wrapper {
      max-width: 640px;
    }
  }

  @media (min-width: 960px) {
    .controls-wrapper {
      max-width: 340px;

      margin-right: 48ox;
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>
