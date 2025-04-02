<script>
	import { page } from '$app/state';
</script>

<div class="error-wrapper">
	<h1>Wait... where are the pets?</h1>
	<p>Error: {page?.error?.message}</p>
	<a href="/">Go to pets</a>
</div>

<style lang="scss">
	@use '../lib/styles/mixins' as *;
	@use '../lib/styles/variables' as *;
	.error-wrapper {
		@include flex-col;
		gap: $gap-normal;
		margin-top: 10em;
		text-align: center;
		h1 {
			color: $white;
			font-weight: 500;
		}
		p {
			color: $sub-white;
		}
		a {
			gap: $gap-sm;
			padding: calc($padding-sm - 0.15rem);
			background-color: $blue;
			border-radius: $radius-sm;
			transition: $transition-short;
			text-decoration: none;
			color: $white;
			&:hover {
				@include blue-shadow;
			}
		}
	}
</style>
