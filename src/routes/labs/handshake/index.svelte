<!--
  TODO:
  * disable mouse listeners when mouse not in canvas
  * present nicely
  * make demo bigger
  * test on mobile
-->

<script lang="ts">
  import { onMount } from 'svelte';
  import run from 'handshake';

  let handshakeCanvas: HTMLElement;

  onMount(() => {
    // This path tells the handshake stuff where it should look for its assets, which have been
    // copied over from the package into SvelteKit's static dir
    run(handshakeCanvas, '/labs/handshake/package');
  });
</script>

<canvas class="mx-auto" bind:this="{handshakeCanvas}"/>
<p>
  An interactive authentication method using secret handshakes as passphrases, built with Matter.js.
</p>
<p>
  I can't remember where this idea came from, but I thought it might be a fun way of restricting
  certain parts of a site to only those who know the secret handshake. I've really tried to think of
  ways that this could be a legitimate, innovative method of authentication so I can take security
  Twitter by storm, but I've got nothing so far.
</p>
<p>
This project's still very much work in progress. Some features that are still to add are:
</p>
<ul class="list-disc">
  <li>
    Some sort of feedback for which 'bump' you've just performed, i.e. top, bottom, or front. The bump detection logic's in place, but I just need e.g. 'top!' text to appear.
  </li>
  <li>
    A 'sparkle' state for the hands that triggers on-click. This will add a fourth contact type, increasing passphrase entropy and making this authentication method even more secure.
  </li>
  <li>
    An accept and deny response from the right hang (I'm thinking a thumbs up or a 'stop' hand), after a handshake has been entered.
  </li>
</ul>
