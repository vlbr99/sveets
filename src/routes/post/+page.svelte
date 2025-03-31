<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';

	import { enhance } from '$app/forms';
</script>

<div class="post-wrapper">
	<h1>post joke</h1>
	<form action="?/post" method="POST" enctype="multipart/form-data" use:enhance>
		<Input name="title" type="text" placeholder="title" />
		<Input type="file" accept="image/*" name="image" />
		<Button>post joke</Button>
	</form>
</div>

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;
	.post-wrapper {
		@include flex-col;
		gap: $gap-sm;
		margin-top: 100px;
		form {
			@include flex-col;
			gap: $gap-sm;
		}
	}
</style>
