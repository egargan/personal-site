<script lang="ts">
  export let value: number;
</script>

<input
  class="accent-red"
  type="range"
  bind:value
  on:change
  on:click
  on:keydown
  on:keypress
  on:keyup
/>
