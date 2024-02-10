<script lang="ts">
  import RecordStack from "record-stack";
  import LabFooter from "$lib/components/LabFooter.svelte";

  import DemoRecord from "./DemoRecord.svelte";

  const components = Array(22).fill(DemoRecord);
</script>

<section
  class="flex h-full w-full flex-col items-center justify-center lg:flex-row"
>
  <div class="h-full w-full max-w-[1200px] lg:flex-[3_0_0] xl:pl-12">
    <RecordStack {components} />
  </div>
  <div class="z-20 flex w-full items-end lg:h-full lg:flex-[2_0_0]">
    <LabFooter
      title="Record Stack"
      heading="a list component that's interacted with like a box of records"
      repoUrl="https://github.com/egargan/record-stack"
    />
  </div>
</section>
