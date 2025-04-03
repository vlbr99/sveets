<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Textarea from '$lib/components/Textarea.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import { enhance } from '$app/forms';

	let isToastOpen = $state(false);
	let imageUrl = $state(null);

	//this code updates the image below the input file component
	let imageChange = (e) => {
		let file = e.target.files[0];

		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				imageUrl = e.target.result;
			};
			reader.readAsDataURL(file);
		}
	};

	//this line below is the form prop, this prop lets us extract the fail-s from +page.server.ts file
	let { form } = $props();
</script>

<div class="post-wrapper">
	<h1>Post pet</h1>
	<!-- THIS FORM SENDS DATA TO +PAGE.SERVER.TS, THE TOAST DISPLAYS THE ERROR THAT IS PRODUCED ON THE BACKEND -->
	<form action="?/post" method="POST" enctype="multipart/form-data" use:enhance>
		<Input name="title" type="text" placeholder="Title" />
		<Textarea name="description" placeholder="Describe your pet" class="post-pet-textarea" />
		<!-- label is connected to input file so there is no default input type file design -->
		<div class="pet-label-and-image-wrapper">
			<label for="image" class="select-pet-image">Select image</label>
			<img src={imageUrl} alt="Please upload your pet :)" />
		</div>
		<Input name="image" id="image" type="file" accept="image/*" onchange={imageChange} />
		<Button
			onclick={() => {
				isToastOpen = true;
			}}>Post pet</Button
		>
		<!-- we display the error or success message based on form prop-->
		{#if form?.message}
			<Toast bind:isOpen={isToastOpen} toastText={form?.message} />
		{:else}
			<Toast bind:isOpen={isToastOpen} toastText="Uploading pet..." />
		{/if}
	</form>
</div>

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;
	.post-wrapper {
		@include flex-col;
		margin-top: $small-spacing;
		gap: $gap-normal;
		padding: $padding-sm;
		user-select: none;
		h1 {
			color: $sub-white;
			font-weight: 400;
			font-size: $font-medium;
			text-align: center;
		}
		form {
			@include flex-col;
			width: min(95%, 500px);
			gap: $gap-normal;
			margin-top: 1rem;
			:global(.register-checkbox) {
				width: 100%;
				justify-content: flex-end;
			}
			:global(.post-pet-textarea) {
				height: 150px;
			}
			:global(input[type='file']) {
				display: none;
			}
			.pet-label-and-image-wrapper {
				@include flex-col;
				width: min(98%, 500px);
				border: 2px dashed $blue;
				padding: $padding-sm;
				border-radius: $radius-sm;
				.select-pet-image {
					@include shadow;
					color: $white;
					width: 100%;
					background-color: $sub-black;
					border-radius: $radius-sm;
					padding: $padding-sm;
					cursor: pointer;
				}
				img {
					margin-top: 0.5rem;
					width: 100%;
					max-height: 200px;
					object-fit: contain;
					object-position: center;
					color: $sub-white;
				}
			}
		}
	}
</style>
