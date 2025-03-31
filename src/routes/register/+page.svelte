<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';

	import { enhance } from '$app/forms';
</script>

<div class="register-wrapper">
	<h1>Register</h1>
	<form action="?/register" method="POST" use:enhance>
		<Input name="username" type="text" placeholder="Username" />
		<Input name="password" type="password" placeholder="Password" />
		<Input name="repeat-password" type="password" placeholder="Repeat password" />
		<Button>register</Button>
	</form>
</div>

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;
	.register-wrapper {
		@include flex-col;
		gap: $gap-sm;
		margin-top: 100px;
		form {
			@include flex-col;
			gap: $gap-sm;
		}
	}
</style>
