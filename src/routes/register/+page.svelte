<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Tech from '$lib/components/Tech.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import { enhance } from '$app/forms';

	import { ArrowUpRight } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	let isToastOpen = $state(false);
	let framework = $state('https://ik.imagekit.io/pmq6ogtx8l/js.png?updatedAt=1743763271532');
	//this line below is the form prop, this prop lets us extract the fail-s from +page.server.ts file
	let { form } = $props();
</script>

<div class="register-wrapper">
	<h1>Create account</h1>
	<form action="?/register" method="POST" use:enhance>
		<Input name="username" type="text" placeholder="Username" />
		<Input name="password" type="password" placeholder="Password" />
		<Input name="repeat-password" type="password" placeholder="Repeat password" />
		<Tech bind:framework />
		<Input type="hidden" value={framework} name="selected-framework" />
		<p>By continuing you accept the <a href="/stuff">stuff</a></p>
		<Button
			onclick={() => {
				isToastOpen = true;
			}}>Create account</Button
		>

		<!-- we display the error or success message based on form prop-->

		<p>
			Got an account?
			<a href="/login">Log in <ArrowUpRight /></a>
		</p>
	</form>
</div>

{#if form?.message}
	<Toast bind:isOpen={isToastOpen} toastText={form?.message} />
{:else}
	<Toast bind:isOpen={isToastOpen} toastText="Creating account..." />
{/if}

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;
	.register-wrapper {
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
