<script lang="ts">
  export let title: string;
  export let heading: string;
  export let repoUrl: string;
  export let dropShadow = false;
</script>

<div class="container">
  <div class:show-shadow={dropShadow} class="inner-container">
    <h1>
      <strong>{title}</strong> — {heading}
    </h1>
    <div class="links-container">
      <a href="/labs"> Back to Labs </a>
      <a target="_blank" rel="noreferrer" href={repoUrl}> Source on GitHub </a>
    </div>
  </div>
</div>

<style>
  .container {
    width: 100%;
    container-type: inline-size;
  }

  .inner-container {
    width: 100%;

    padding: 24px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* TODO: how supported is column-gap adn row-gap ? */
    column-gap: 16px;
    row-gap: 24px;

    background-color: var(--white);

    @container (min-width: 896px) {
      flex-direction: row;
      align-items: center;
    }

    /* TODO: can we de-dupe these query sizes? (this is sm) */
    @media (min-width: 640px) {
      padding: 32px;
    }
  }

  .show-shadow {
    box-shadow: 0 0 3px 3px var(--white);
  }

  .links-container {
    display: flex;
    gap: 16px;
  }

  a {
    padding: 6px 24px;

    white-space: nowrap;

    border-radius: 4px;
    border-width: 2px;

    font-size: 0.875rem;
    line-height: 1.25rem;
  }
</style>
