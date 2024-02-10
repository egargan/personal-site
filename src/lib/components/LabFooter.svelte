<script lang="ts">
  export let title: string;
  export let heading: string;
  export let repoUrl: string;
  export let dropShadow = false;
</script>

<div class="w-full @container">
  <div
    class="flex w-full flex-col justify-between gap-x-4 gap-y-6 bg-white p-6
    @4xl:flex-row @4xl:items-center sm:p-8 {dropShadow
      ? 'shadow-[0_0_3px_3px_white]'
      : ''}"
  >
    <h1>
      <strong>{title}</strong> — {heading}
    </h1>
    <div class="flex gap-x-4">
      <a
        class="whitespace-nowrap rounded border-2 border-grey px-6 py-1.5 text-sm text-grey"
        href="/labs"
      >
        Back to Labs
      </a>
      <a
        class="whitespace-nowrap rounded border-2 border-grey px-6 py-1.5 text-sm text-grey"
        target="_blank"
        rel="noreferrer"
        href={repoUrl}
      >
        Source on GitHub
      </a>
    </div>
  </div>
</div>
