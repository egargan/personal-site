<script lang="ts">
  import RecordStack from "record-stack";
  import LabFooter from "$lib/components/LabFooter.svelte";

  import DemoRecord from "./DemoRecord.svelte";

  const components = Array(22).fill(DemoRecord);
</script>

<section
  class="flex flex-col lg:flex-row items-center justify-center h-full w-full"
>
  <div class="xl:pl-12 h-full max-w-[1200px] w-full lg:flex-[3_0_0]">
    <RecordStack {components} />
  </div>
  <div class="lg:h-full flex items-end z-20 lg:flex-[2_0_0] w-full">
    <LabFooter
      title="Record Stack"
      heading="a list component that's interacted with like a box of records"
    />
  </div>
</section>
