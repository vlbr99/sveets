<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	let { ...props }: HTMLInputAttributes = $props();
</script>

<input {...props} />

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;

	input {
		all: unset;
		@include shadow;
		border-top: 1px solid $sub-blue;
		color: $white;
		padding: $padding-sm;
		width: min(95%, 500px);
		border-radius: $radius-sm;
		background-color: $sub-black;
		&:focus {
			outline: 1px solid $blue;
		}
	}
</style>
