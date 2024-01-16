<script lang="ts">
  import ParliamentChart from "./ParliamentChart.svelte";
  import LabFooter from "$lib/components/LabFooter.svelte";
  import project from "./project";
  import SeatControls from "./SeatControls.svelte";
  import type { Parties } from "./types";

  const parties: Parties = {
    red: { name: "Red Party", initialSeats: 80, color: "#FF3624" },
    blue: { name: "Blue Party", initialSeats: 80, color: "#0A99FF" },
    green: { name: "Green Party", initialSeats: 80, color: "#008A5E" },
    yellow: { name: "Yellow Party", initialSeats: 80, color: "#FFC830" },
  };

  let seats = Object.fromEntries(
    Object.entries(parties).map(([id, { initialSeats }]) => [id, initialSeats]),
  );

  function onSeatsChange(event: CustomEvent<{ id: string; value: string }>) {
    if (!(event.detail.id in seats)) return;

    seats = {
      ...seats,
      [event.detail.id]: parseInt(event.detail.value),
    };
  }

  // TODO: add tailwind class sorter to prettier
</script>

<section class="flex flex-col items-center h-full w-full">
  <div
    class="w-full flex-grow max-w-[1100px] flex gap-x-2 gap-y-2 flex-col lg:flex-row
    items-center justify-end pb-4 mx-4 md:mx-0"
  >
    <div class="px-2 lg:px-0 mx-8 w-full max-w-[720px]">
      {#key seats}
        <ParliamentChart {seats} colors={parties} />
      {/key}
    </div>

    <div
      class="lg:mr-12 px-10 lg:px-0 w-full xs:max-w-[640px] lg:max-w-[340px]"
    >
      <SeatControls on:change={onSeatsChange} {parties} {seats} />
    </div>
  </div>

  <div class="lg:absolute flex-grow-0 bottom-0 w-full z-20">
    <LabFooter
      title={project.title}
      heading={project.description}
      repoUrl="https://github.com/egargan/parliament-chart/"
    />
  </div>
</section>
