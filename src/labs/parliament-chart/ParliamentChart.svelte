<script lang="ts">
  import blueprintParliamentChart from "parliament-chart";

  export let seats: Record<string, number>;
  export let colors: Record<string, { color: string }>;

  const { groups, radius } = blueprintParliamentChart(50, seats);
</script>

<svg width="100%" viewBox="-100 -100 200 110">
  {#each groups as { label, seats }}
    <g>
      {#each seats as { x, y }}
        <circle cx={x} cy={y} r={radius} fill={colors[label].color} />
      {/each}
    </g>
  {/each}
</svg>
