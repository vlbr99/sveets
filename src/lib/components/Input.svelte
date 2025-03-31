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
		border: 1px solid black;
		@include shadow;
		padding: $padding-sm;
	}
</style>
