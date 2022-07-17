<script lang="ts">
  import GithubIcon from '$lib/components/GithubIcon.svelte';

  export let href: string;
</script>

<a
  target="_blank"
  class="fill-black font-bold text-sm hover:fill-red hover:text-red flex items-center gap-x-2 mr-2"
  href="{href}">
  <span class="w-5 h-5"><GithubIcon/></span>
  Source
</a>
