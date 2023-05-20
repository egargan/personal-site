<script lang="ts">
  import { page } from "$app/stores";
  import ArrowIcon from "$lib/components/ArrowIcon.svelte";

  let errorMessage: string;

  if ($page.status === 404) {
    errorMessage = "This page couldn't be found.";
  } else {
    errorMessage = "Something went wrong...";
  }
</script>

<div class="h-full flex flex-col justify-center pb-48">
  <h1 class="font-heading text-4xl mb-4">{$page.status} 🙁</h1>
  <h2 class="text-2xl mb-4">{errorMessage}</h2>
  <a
    href="/"
    class="text-red font-medium text-lg stroke-red flex gap-x-1 mt-4 items-center"
  >
    <ArrowIcon />
    Go Home
  </a>
</div>
