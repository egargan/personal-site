<script>
  import transfers from "./transfers-top-spenders.json";
  const teams = [...new Set(transfers.map((t) => t.team))];

  const nameMap = {
    mnu: "Manchester United",
    chl: "Chelsea",
    liv: "Liverpool",
    mnc: "Manchester United",
    ars: "Arsenal",
  };
</script>

<ul class="team-legend ignore-list-style">
  {#each teams as team}
    <li data-team={team}>
      {nameMap[team]}
    </li>
  {/each}
</ul>
