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
        isCurrentPage={$page.url.pathname === '/'}
      />
    </li>
    <li class="mr-10">
      <NavElement
        text="Blog"
        path="/blog"
        isCurrentPage={$page.url.pathname.startsWith('/blog')}
      />
    </li>
    <li class="mr-10">
      <NavElement
        text="Labs"
        path="/labs"
        isCurrentPage={$page.url.pathname.startsWith('/labs')}
      />
    </li>
    <li>
      <NavElement
        text="About"
        path="/about"
        isCurrentPage={$page.url.pathname.startsWith('/about')}
      />
    </li>
  </ul>
</nav>
