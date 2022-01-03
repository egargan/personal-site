<script lang="ts" context="module">
  export function load({ error, status }) {
    return {
      props: {
        status,
        error,
      }
    };
  }
</script>

<script lang="ts">
  export let status: string;
  export let error: Error;
</script>

<h1 class="font-heading text-4xl mb-4">{status}</h1>
<h2 class="text-2xl mb-4">{error.message}</h2>
<pre class="text-xl text-grey">TODO: make me look nice</pre>
