<script lang="ts">
  import RecordStack from "record-stack";
  import DemoRecord from "./_DemoRecord.svelte";

  const components = Array(22).fill(DemoRecord);
</script>

<main>
  <RecordStack {components} />
</main>

<style>
  main {
    height: 100vh;
    width: 100vw;

    max-width: 880px;
  }

  @media (min-width: 880px) {
    main {
      align-self: flex-end;
      padding-right: 4vw;
    }
  }

  @media (min-width: 1600px) {
    main {
      align-self: center;
      padding-right: 4vw;
      max-width: 1200px;
    }
  }
</style>
