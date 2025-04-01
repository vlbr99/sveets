<script lang="ts">
	let { children, className = null, ...props } = $props();
	export { className as class };
</script>

<div class="checkbox-wrapper {className}">
	<p>{@render children?.()}</p>
	<input {...props} type="checkbox" />
</div>

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;
	.checkbox-wrapper {
		@include flex-row;
		flex-direction: row-reverse;
		gap: $gap-normal;
		padding: 0 $padding-sm;
		input[type='checkbox'] {
			width: fit-content;
			accent-color: $blue;
		}
		p {
			@include flex-row;
			color: $sub-white;
			:global(a) {
				text-decoration: none;
				color: $blue;
				margin-left: 5px;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>
