<script lang="ts">
  import Nav from './_nav/Nav.svelte';

  // Import global styles, incl. Tailwind setup
  import '../app.css';
</script>

<!-- Apply Noto Sans as default font -->
<div class="flex flex-col items-center font-noto-sans text-base">
  <div class="w-[800px] px-2">
    <Nav/>
    <main class="pt-16">
      <slot />
    </main>
  </div>
</div>
