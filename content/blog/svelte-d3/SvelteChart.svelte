<script>
  // fold-start
  import * as d3 from "d3";
  import transfers from "./transfers-top-spenders.json";

  const margin = { right: 20, top: 10, left: 40, bottom: 20 };
  const width = 400 - margin.left - margin.right;
  const height = 280 - margin.top - margin.bottom;

  const seasons = [...new Set(transfers.map((d) => d.season))];
  //fold-end
  const x = d3.scalePoint().domain(seasons).range([0, width]);
  const y = d3.scaleLinear().domain([0, 700]).range([height, 0]);
  // prettier-ignore
  const line = d3.line().x((d) => x(d.season)).y((d) => y(d.spend));
</script>

<svg
  height={height + margin.top + margin.bottom}
  width={width + margin.left + margin.right}>
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
