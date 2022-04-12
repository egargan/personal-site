<script lang="ts">
  import { page } from '$app/stores';
  import NavElement from './NavElement.svelte';
</script>

<nav class="pt-10 pb-6">
  <ul class="flex justify-end">
    <li class="mr-10">
      <NavElement
        text="Home"
        path="/"
        isCurrentPage={$page.path === '/'}
      />
    </li>
    <li class="mr-10">
      <NavElement
        text="Blog"
        path="/blog"
        isCurrentPage={$page.path.startsWith('/blog')}
      />
    </li>
    <li class="mr-10">
      <NavElement
        text="Labs"
        path="/labs"
        isCurrentPage={$page.path.startsWith('/labs')}
      />
    </li>
    <li>
      <NavElement
        text="About"
        path="/about"
        isCurrentPage={$page.path.startsWith('/about')}
      />
    </li>
  </ul>
</nav>
