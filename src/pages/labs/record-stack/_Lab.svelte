<script lang="ts">
  import RecordStack from "record-stack";
  import DemoRecord from "./_DemoRecord.svelte";

  const components = Array(22).fill(DemoRecord);
</script>

<main
  class="flex h-full w-full flex-col items-center justify-center lg:flex-row"
>
  <div class="h-full w-full max-w-[1200px] lg:flex-[3_0_0] xl:pl-12">
    <RecordStack {components} />
  </div>
</main>
