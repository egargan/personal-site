<!--
  TODO:
  * present nicely
  * test on mobile
-->

<script lang="ts">
  import { onMount } from 'svelte';
  import SourceLink from '$lib/components/SourceLink.svelte';

  import run from 'handshake';

  let handshakeCanvas: HTMLElement;

  onMount(() =>
    // This path tells the handshake stuff where it should look for its assets, which have been
    // copied over from the package into SvelteKit's static dir
    run(handshakeCanvas, '/labs/handshake/package')
  );
</script>

<canvas class="mx-auto -mb-8" bind:this="{handshakeCanvas}"/>

<div class="w-full flex justify-end mb-8">
  <SourceLink href="https://github.com/egargan/handshake"/>
</div>

<div class="grid md:grid-cols-2 gap-x-16">
  <div>
    <p>
      An interactive authentication method using secret handshakes as passphrases, built with Matter.js.
    </p>
    <p>
      I can't remember where this idea came from, but I thought it might be a fun way of restricting
      certain parts of a site to only those who know the secret handshake.
    </p>
    <p>
      I've really tried to think of ways that this could be a legitimate method of authentication so
      I can take security Twitter by storm, but nothing so far.
    </p>
  </div>
  <div>
    <p>
      This project's still pretty work in progress. The next few todos are --
    </p>
    <ul class="list-disc">
      <li>
        Add contact feedback, i.e. top, bottom, or front. The bump detection logic's in place, but I just need e.g. 'top!' text to appear.
      </li>
      <li>
        Add a fourth 'sparkle' contact type, where the hands wiggle their fingers.
      </li>
      <li>
        An accept and deny response from the right hand (I'm thinking a thumbs up or a 'stop' hand), once a handshake is entered.
      </li>
    </ul>
  </div>
</div>
