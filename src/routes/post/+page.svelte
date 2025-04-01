<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Textarea from '$lib/components/Textarea.svelte';
	import { enhance } from '$app/forms';

	//this line below is the form prop, this prop lets us extract the fail-s from +page.server.ts file
	let { form } = $props();
</script>

<div class="post-wrapper">
	<h1>post joke</h1>
	<!-- THIS FORM SENDS DATA TO +PAGE.SERVER.TS, THE P TAG WITH ERROR CLASS DISPLAYS THE ERROR THAT IS PRODUCED ON THE BACKEND -->
	<form action="?/post" method="POST" enctype="multipart/form-data" use:enhance>
		<Input name="title" type="text" placeholder="title" />
		<Textarea name="description" placeholder="describe your pet" />
		<Input name="image" type="file" accept="image/*" />
		<Button>post joke</Button>
		<!-- we display the error or success message based on form prop-->
		<p class="error">
			{#if !form?.success}
				{form?.message}
			{:else if form?.success}
				Your pet is uploaded successfully.
			{/if}
		</p>
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
