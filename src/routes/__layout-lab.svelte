<script lang="ts">
  import Nav from './_nav/Nav.svelte';

  // Import global styles, incl. Tailwind setup
  import '../app.css';
</script>

<div class="flex flex-col items-stretch container:items-center font-noto-sans text-base">
  <div class="container:w-[840px] px-4 pb-16">
    <Nav/>
    <main>
      <slot />
    </main>
  </div>
</div>
