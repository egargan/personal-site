<script>
  // fold-start
  import * as d3 from "d3";
  import transfers from "./transfers-top-spenders.json";

  const margin = { right: 20, top: 10, left: 40, bottom: 40 };
  const width = 420 - margin.left - margin.right;
  const height = 280 - margin.top - margin.bottom;

  const seasons = [...new Set(transfers.map((d) => d.season))];
  const x = d3.scalePoint().domain(seasons).range([0, width]);
  // fold-end

  let stat = $state("spend");
  let maxStat = $derived(Math.max(...transfers.map((d) => d[stat])));

  let [y, line] = $derived([
    d3.scaleLinear().domain([0, maxStat]).range([height, 0]),
    // prettier-ignore
    d3.line().x((d) => x(d.season)).y((d) => y(d[stat])),
  ]);
</script>

<!-- fold-start -->
<svg
  width={width + margin.left + margin.right}
  height={height + margin.bottom + margin.top}>
  <g transform={`translate(${margin.left},${margin.top})`}>
    {#each d3.group(transfers, (d) => d.team) as [team, series]}
      <path d={line(series)} data-team={team} />
    {/each}

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

<div class="controls">
  {#each ["spend", "income", "arrivals"] as option}
    <button aria-pressed={stat === option} onclick={() => (stat = option)}>
      {option}
    </button>
  {/each}
</div>

<!-- remove-start -->

<style>
  .controls {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;

    place-self: center;
  }

  button {
    text-transform: capitalize;

    box-shadow: 2px 2px 0 var(--shadow);

    transition-property: margin, box-shadow, backdrop-filter, border-color,
      background-color;
    transition-duration: var(--transition-short);
  }

  button:hover {
    backdrop-filter: brightness(1.1);
  }

  button:active {
    box-shadow: 0.5px 0.5px 0 var(--shadow);
    margin-left: 1.5px;
    margin-top: 1.5px;
    margin-right: -1.5px;
    margin-bottom: -1.5px;
  }

  button[aria-pressed="true"] {
    background-color: var(--blue-background);
    border-color: var(--blue);
    box-shadow: 2px 2px 0 var(--blue-weak);
  }
</style>
