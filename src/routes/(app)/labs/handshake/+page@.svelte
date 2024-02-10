<script lang="ts">
  import { onMount } from "svelte";
  import { readable, writable } from "svelte/store";
  import { fade } from "svelte/transition";

  import LabFooter from "$lib/components/LabFooter.svelte";
  import createPasswordStore from "./createPasswordStore";
  import TickIcon from "$lib/components/TickIcon.svelte";
  import CrossIcon from "$lib/components/CrossIcon.svelte";
  import TokenIcon from "./TokenIcon.svelte";
  import cx from "$lib/utils/cx";

  import run, { type HandshakeController, type Token } from "handshake";

  let container: HTMLElement;
  let enteredPassword = readable([]);
  let submitState = writable<"idle" | "success" | "fail">("idle");

  let controller: HandshakeController;

  const controlPassword: Token[] = [
    "TOP",
    "BOTTOM",
    "TOP",
    "BOTTOM",
    "FRONT",
    "FRONT",
  ];

  onMount(() => {
    // This path tells the handshake stuff where it should look for its assets, which have been
    // copied over from the package into SvelteKit's static dir
    const runItems = run(container, "/labs/handshake/package");

    controller = runItems[0];
    const cleanup = runItems[1];

    controller.setPassword(controlPassword);
    enteredPassword = createPasswordStore(controller);

    console.log("The password is: " + controlPassword.join(", "));

    return cleanup;
  });

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Enter" && $enteredPassword.length > 0) {
      if (controller.confirm()) {
        controller.pauseInput();
        $submitState = "success";
      } else {
        controller.pauseInput();
        $submitState = "fail";

        setTimeout(() => {
          $submitState = "idle";
          controller.resumeInput();
          controller.reset();
        }, 1500);
      }
    } else if (event.key === "Backspace") {
      controller.reset();
      controller.resumeInput();
      $submitState = "idle";
    } else if (event.key === "D" || event.key === "d") {
      controller.toggleDebugView();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="flex h-full w-full items-center justify-center overflow-hidden">
  <div
    class="mx-auto mb-52 scale-[75%] min-[520px]:scale-100 md:mb-36 md:scale-[120%]"
    bind:this={container}
  />

  <div class="absolute bottom-0 z-20 w-full">
    <div
      class="relative -top-12 mx-auto flex max-w-lg items-center gap-x-4 px-4"
    >
      <ul
        class="flex flex-1 flex-wrap rounded-md border-[3px] px-0 transition-colors duration-[50ms]
        {cx($submitState === 'idle', 'border-transparent')}
        {cx($submitState === 'success', 'border-green')}
        {cx($submitState === 'fail', 'border-red')}"
      >
        {#each $enteredPassword as token}
          <li
            class="mb-0 text-4xl font-bold
            {cx($submitState !== 'idle', 'opacity-70')}"
            out:fade={{ duration: 50 }}
          >
            <TokenIcon {token} />
          </li>
        {/each}
      </ul>

      <div class="h-8 w-8">
        {#if $submitState === "success"}
          <div transition:fade={{ duration: 50 }}>
            <TickIcon />
          </div>
        {:else if $submitState === "fail"}
          <div transition:fade={{ duration: 50 }}>
            <CrossIcon />
          </div>
        {/if}
      </div>
    </div>

    <div
      class="mx-auto mb-4 flex w-fit flex-wrap items-center justify-start gap-x-8 gap-y-4 px-6"
    >
      <div
        class="flex items-center gap-x-3 {cx(
          !$enteredPassword.length,
          'opacity-50',
        )}"
      >
        <span class="font-bold">Confirm</span>
        <img src="/labs/handshake/enter-key.svg" alt="Backspace key" />
      </div>
      <div class="flex items-center gap-x-3">
        <span class="font-bold">Reset</span>
        <!-- TODO: use a componenly icon for these? -->
        <img src="/labs/handshake/backspace-key.svg" alt="Backspace key" />
      </div>
      <div class="flex items-center gap-x-3">
        <span class="font-bold">Debug</span>
        <img src="/labs/handshake/d-key.svg" alt="D key" />
      </div>
    </div>

    <LabFooter
      title="Handshake"
      heading="a questionably useful interactive authentication method using secret handshakes as passphrases"
      repoUrl="https://github.com/egargan/handshake"
    />
  </div>
</section>
