<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	let { ...props }: HTMLTextareaAttributes = $props();
</script>

<textarea {...props}></textarea>

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;

	textarea {
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
