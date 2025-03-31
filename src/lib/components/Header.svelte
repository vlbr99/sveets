<script lang="ts">
	let isLoggedIn = $state(false);
	import { DoorOpen } from 'lucide-svelte';
</script>

<header>
	<p>skull 💀</p>

	<nav>
		<a href="/">Jokes</a>
		<a href="/post">Post</a>
		{#if isLoggedIn}
			<div class="header-profile-wrapper">
				<p>mina</p>
				<DoorOpen />
			</div>
		{:else}
			<a href="/login">Login</a>
			<a href="/register">Register</a>
		{/if}
	</nav>
</header>

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;
	header {
		@include flex-row;
		padding: $padding-sm;
		justify-content: space-between;
		nav {
			@include flex-row;
			gap: $gap-sm;
			a {
				all: unset;
				cursor: pointer;
			}
			.header-profile-wrapper {
				@include flex-row;
			}
		}
	}
</style>
