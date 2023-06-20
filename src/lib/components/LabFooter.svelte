<script lang="ts">
	export let title: string;
	export let heading: string;
	export let dropShadow = false;
</script>

<div class="w-full @container">
	<div
		class="flex flex-col @4xl:flex-row @4xl:items-center p-6 sm:p-8 w-full justify-between
    gap-x-4 gap-y-6 bg-white {dropShadow ? 'shadow-[0_0_3px_3px_white]' : ''}"
	>
		<h1>
			<strong>{title}</strong> — {heading}
		</h1>
		<div class="flex gap-x-4">
			<a
				class="whitespace-nowrap rounded border-grey border-2 px-6 py-1.5 text-grey text-sm"
				href="/labs"
			>
				Back to Labs
			</a>
			<a
				class="whitespace-nowrap rounded border-grey border-2 px-6 py-1.5 text-grey text-sm"
				target="_blank"
				rel="noreferrer"
				href="https://github.com/egargan/flipboard"
			>
				Source on GitHub
			</a>
		</div>
	</div>
</div>
