<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Tech from '$lib/components/Tech.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import { enhance } from '$app/forms';

	import { ArrowUpRight } from 'lucide-svelte';

	//this line below is the form prop, this prop lets us extract the fail-s from +page.server.ts file
	let { form } = $props();
</script>

<div class="register-wrapper">
	<h1>Create account</h1>
	<form action="?/register" method="POST" use:enhance>
		<Input name="username" type="text" placeholder="Username" />
		<Input name="password" type="password" placeholder="Password" />
		<Input name="repeat-password" type="password" placeholder="Repeat password" />
		<Tech />
		<Checkbox labelFor="tech" name="tech" className="register-checkbox">
			I've read the <a href="/stuff">stuff</a>
		</Checkbox>
		<Button>Create account</Button>

		<!-- we display the error or success message based on form prop-->
		<!-- THIS HAS TO BE A TOAST -->
		<p>
			{#if form?.message}
				* {form?.message} *
			{:else if form?.success}
				Account created successfully
			{/if}
		</p>

		<p>
			Got an account?
			<a href="/login">Log in <ArrowUpRight /></a>
		</p>
	</form>
</div>

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;
	.register-wrapper {
		@include flex-col;
		margin-top: 10vh;
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

			p {
				@include flex-row;
				gap: $gap-sm;
				color: $white;
				a {
					@include flex-row;
					text-decoration: none;
					color: $blue;
					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}
</style>
