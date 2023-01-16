<script lang="ts">
  import "../app.css";
</script>

<div
  class="flex flex-col items-stretch container:items-center font-noto-sans text-base"
>
  <div class="container:w-[840px] px-4 pb-16">
    <main class="pt-8 md:pt-20">
      <slot />
    </main>
  </div>
</div>
