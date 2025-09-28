<script>
  // fold-start
  import * as d3 from "d3";
  import { draw } from "svelte/transition";
  import transfers from "./transfers-top-spenders.json";
  import { whenVisible } from "./when-visible.svelte";
  // remove-start
  import { onMount, tick } from "svelte";
  // remove-end

  const margin = { right: 20, top: 10, left: 40, bottom: 20 };
  const width = 420 - margin.left - margin.right;
  const height = 280 - margin.top - margin.bottom;

  const seasons = [...new Set(transfers.map((d) => d.season))];

  const x = d3.scalePoint().domain(seasons).range([0, width]);
  const y = d3.scaleLinear().domain([0, 700]).range([height, 0]);
  // prettier-ignore
  const line = d3.line().x((d) => x(d.season)).y((d) => y(d.spend));
  // fold-end

  let showLines = $state(false);
  // remove-start
  onMount(() => {
    // @ts-ignore
    document.getElementById("redraw-chart").onclick = () => {
      showLines = false;
      tick().then(() => {
        showLines = true;
      });
    };
  });
  // remove-end
</script>

<svg
  width={width + margin.left + margin.right}
  height={height + margin.bottom + margin.top}
  {@attach whenVisible((visible) => (showLines = visible))}>
  <g transform={`translate(${margin.left},${margin.top})`}>
    {#each d3.group(transfers, (d) => d.team) as [team, series], i}
      {#if showLines}
        <path
          in:draw={{ delay: (i + 1) * 150 }}
          d={line(series)}
          data-team={team} />
      {/if}
    {/each}

    <!-- fold-start -->
    <line y2={height} class="domain" />
    {#each y.ticks() as tick}
      <g class="tick" transform={`translate(0,${y(tick)})`}>
        <line x2="-6" />
        <text x="-10" y="4" text-anchor="end">{tick}</text>
      </g>
    {/each}

    <g transform={`translate(0,${height})`}>
      <line x2={width} class="domain" />
      {#each x.domain() as tick}
        <g class="tick" transform={`translate(${x(tick)},0)`}>
          <line y2="6" />
          <text y="20" text-anchor="middle">{tick}</text>
        </g>
      {/each}
    </g>
  </g>
</svg>
<!-- fold-end -->
