<script>
	import { page } from '$app/state';
</script>

<div class="error-wrapper">
	<h1>This page is like water in Africa... it doesn't exist</h1>
	<p>Error: {page?.error?.message}</p>
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
