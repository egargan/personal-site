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

<div class="flex h-full flex-col justify-center pb-48">
  <h1 class="font-heading mb-4 text-4xl">{$page.status} 🙁</h1>
  <h2 class="mb-4 text-2xl">{errorMessage}</h2>
  <a
    href="/"
    class="mt-4 flex items-center gap-x-1 stroke-red text-lg font-medium text-red"
  >
    <ArrowIcon />
    Go Home
  </a>
</div>
