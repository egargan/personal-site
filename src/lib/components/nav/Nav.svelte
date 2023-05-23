<script lang="ts">
  import { page } from "$app/stores";
  import NavElement from "./NavElement.svelte";
</script>

<nav class="pt-10 pb-6 pr-3 sm:pr-5">
  <ul class="flex justify-end gap-x-10">
    <li>
      <NavElement
        text="Home"
        path="/"
        isCurrentPage={$page.url.pathname === "/"}
      />
    </li>
    <li>
      <NavElement
        text="Blog"
        path="/blog"
        isCurrentPage={$page.url.pathname.startsWith("/blog")}
      />
    </li>
    <li>
      <NavElement
        text="Labs"
        path="/labs"
        isCurrentPage={$page.url.pathname.startsWith("/labs")}
      />
    </li>
  </ul>
</nav>
