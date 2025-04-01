<script>
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import { ArrowUpRight } from 'lucide-svelte';
</script>

<div class="login-wrapper">
	<h1>Log in</h1>
	<form action="?/login">
		<Input name="username" type="text" placeholder="Username" />
		<Input name="password" type="text" placeholder="Password" />
		<Button>Log in</Button>
		<p>
			Don't have an account?
			<a href="/register">Create one <ArrowUpRight /></a>
		</p>
	</form>
</div>

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;
	.login-wrapper {
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
</style>
