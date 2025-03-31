<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	let { children, ...props }: HTMLButtonAttributes = $props();
</script>

<button {...props}>{@render children?.()}</button>

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;

	button {
		all: unset;
		@include shadow;
		width: 100%;
		background-color: black;
		border: 1px solid black;
		padding: $padding-sm;
		color: white;
		text-align: center;
		cursor: pointer;
	}
</style>
