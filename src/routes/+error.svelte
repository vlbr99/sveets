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
		margin-top: 100px;
		text-align: center;
	}
</style>
