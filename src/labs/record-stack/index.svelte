<script lang="ts">
  import RecordStack from "record-stack";
  import LabFooter from "$lib/components/LabFooter.svelte";
  import info from "./info.ts";
  import DemoRecord from "./DemoRecord.svelte";

  const components = Array(22).fill(DemoRecord);
</script>

<main
  class="flex h-full w-full flex-col items-center justify-center lg:flex-row"
>
  <div class="h-full w-full max-w-[1200px] lg:flex-[3_0_0] xl:pl-12">
    <RecordStack {components} />
  </div>
  <div class="z-20 flex w-full items-end lg:h-full lg:flex-[2_0_0]">
    <LabFooter
      title={info.title}
      heading={info.footerDesc}
      repoUrl="https://github.com/egargan/record-stack"
    />
  </div>
</main>
