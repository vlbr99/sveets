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
		border: 1px solid black;
		@include shadow;
		padding: $padding-sm;
	}
</style>
