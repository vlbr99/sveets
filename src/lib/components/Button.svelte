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
		@include sub-shadow;
		border-top: 1px solid $sub-blue;
		padding: $padding-sm;
		width: min(95%, 500px);
		border-radius: $radius-sm;
		background-color: $blue;
		text-align: center;
		cursor: pointer;
		user-select: none;
		&:focus {
			outline: 1px solid $white;
		}
	}
</style>
