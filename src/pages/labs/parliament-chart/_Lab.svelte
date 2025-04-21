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

  function onSeatsChange(event: CustomEvent<{ id: string; value: string }>) {
    if (!(event.detail.id in seats)) return;

    seats = {
      ...seats,
      [event.detail.id]: parseInt(event.detail.value),
    };
  }
</script>

<main class="flex h-full w-full flex-col items-center">
  <div
    class="mx-4 flex w-full max-w-[1100px] flex-grow flex-col items-center justify-end
    gap-x-2 gap-y-2 pb-4 md:mx-0 lg:flex-row"
  >
    <div class="mx-8 w-full max-w-[720px] px-2 lg:px-0">
      {#key seats}
        <ParliamentChart {seats} colors={parties} />
      {/key}
    </div>

    <div
      class="w-full px-10 xs:max-w-[640px] lg:mr-12 lg:max-w-[340px] lg:px-0"
    >
      <SeatControls on:change={onSeatsChange} {parties} {seats} />
    </div>
  </div>
</main>
