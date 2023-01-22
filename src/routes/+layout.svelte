<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import "../app.css";
</script>

<div
  class="flex flex-col items-stretch container:items-center font-noto-sans text-base h-screen"
>
  <main class="container:w-[840px] h-full w-full px-4 sm:px-8">
    <slot />
  </main>
</div>
