<script lang="ts">
  import { onMount } from "svelte";
  import { readable, writable } from "svelte/store";
  import { fade } from "svelte/transition";

  import createPasswordStore from "./_createPasswordStore";
  import TickIcon from "./_TickIcon.svelte";
  import CrossIcon from "./_CrossIcon.svelte";
  import TokenIcon from "./_TokenIcon.svelte";

  import run, { type HandshakeController, type Token } from "handshake";
  import KeyboardKey from "$lib/components/icons/KeyboardKey.svelte";

  let container = $state<HTMLElement | null>();
  let enteredPassword = $state<string[]>([]);
  let submitState = $state("idle");

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
    const runItems = run(container, "/labs/handshake");

    controller = runItems[0];
    const cleanup = runItems[1];

    controller.setPassword(controlPassword);

    controller.onPasswordChanged((newPassword: string[]) => {
      enteredPassword = [...newPassword];
    });

    controller.console.log(
      "HINT: the password is: " + controlPassword.join(", "),
    );

    return cleanup;
  });

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Enter" && enteredPassword.length > 0) {
      if (controller.confirm()) {
        controller.pauseInput();
        submitState = "success";
      } else {
        controller.pauseInput();
        submitState = "fail";

        setTimeout(() => {
          submitState = "idle";
          controller.resumeInput();
          controller.reset();
        }, 1500);
      }
    } else if (event.key === "Backspace") {
      controller.reset();
      controller.resumeInput();
      submitState = "idle";
    } else if (event.key === "D" || event.key === "d") {
      controller.toggleDebugView();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<main>
  <div class="lab-container" bind:this={container}></div>

  <div class="lab-footer-inner">
    <ul
      class={[
        "lab-token-list",
        submitState === "success" && "lab-border-green",
        submitState === "fail" && "lab-border-red",
      ]}>
      {#each enteredPassword as token}
        <li
          class={[
            "lab-token-item",
            submitState !== "idle" && "lab-token-opacity",
          ]}
          out:fade={{ duration: 50 }}>
          <TokenIcon {token} />
        </li>
      {/each}
    </ul>

    <div class="lab-icon-box">
      {#if submitState === "success"}
        <div transition:fade={{ duration: 50 }}>
          <TickIcon />
        </div>
      {:else if submitState === "fail"}
        <div transition:fade={{ duration: 50 }}>
          <CrossIcon />
        </div>
      {/if}
    </div>
  </div>

  <div class="lab-controls">
    <div
      class={[
        "lab-control",
        !enteredPassword.length && "lab-control-disabled",
      ]}>
      <span class="lab-control-label">Confirm</span>
      <KeyboardKey text="Enter" />
    </div>
    <div class="lab-control">
      <span class="lab-control-label">Reset</span>
      <KeyboardKey text="Backspace" />
    </div>
    <div class="lab-control">
      <span class="lab-control-label">Debug</span>
      <KeyboardKey text="D" />
    </div>
  </div>
</main>

<style>
  :global(body) {
    --d: 2px;
    --c: var(--outline);
    --bg: var(--background);
    --s: 50px;

    background: radial-gradient(
        circle at var(--d) var(--d),
        var(--c) calc(var(--d) - 1px),
        var(--bg) var(--d)
      )
      0 0 / var(--s) var(--s);
  }

  main {
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .lab-container {
    min-width: 0;

    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 520px) {
    .lab-container {
      transform: scale(1);
    }
  }

  @media (min-width: 768px) {
    .lab-container {
      transform: scale(1.2);
    }
  }

  .lab-footer-inner {
    max-width: 512px;
    height: 32px;

    display: flex;
    align-items: center;
    gap: 16px;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;

    padding-left: 16px;
    padding-right: 16px;
  }

  .lab-token-list {
    display: flex;

    flex: 1 1 0%;
    flex-wrap: wrap;

    padding-left: 0;
    padding-right: 0;

    border-radius: 6px;
    border: 3px transparent solid;

    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;

    transition-duration: 50ms;
  }

  .lab-border-green {
    border-color: var(--green);
  }

  .lab-border-red {
    border-color: var(--pink);
  }

  .lab-token-item {
    margin-bottom: 0;

    font-size: 36px;
    font-weight: bold;
  }

  .lab-token-opacity {
    opacity: 0.7;
  }

  .lab-icon-box {
    height: 32px;
    width: 32px;
  }

  .lab-controls {
    width: fit-content;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;

    padding-left: 24px;
    padding-right: 24px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    column-gap: 32px;
    row-gap: 16px;
  }

  .lab-control {
    display: flex;
    align-items: center;

    column-gap: 12px;
  }

  .lab-control-disabled {
    opacity: 0.5;
  }

  .lab-control-label {
    font-weight: bold;
  }
</style>
