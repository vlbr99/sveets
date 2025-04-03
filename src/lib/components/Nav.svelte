<script>
	import { Plus } from 'lucide-svelte';
	let isLoggedIn = $state(false);

	let { flexNav = null, noNav = null } = $props();
</script>

{#if flexNav}
	<nav>
		<a href="/">Pets</a>
		<a href="/post" class="post-pet"><Plus size={18} /> Post pet</a>
		{#if isLoggedIn}
			<div class="header-profile-wrapper">
				<p>mina</p>
			</div>
		{:else}
			<a href="/login">Login</a>
			<a href="/register">Register</a>
		{/if}
	</nav>
{/if}

{#if noNav}
	<nav class="no-nav">
		<a href="/">Pets</a>
		<a href="/post" class="post-pet"><Plus size={18} /> Post pet</a>
		{#if isLoggedIn}
			<div class="header-profile-wrapper">
				<p>mina</p>
			</div>
		{:else}
			<a href="/login">Login</a>
			<a href="/register">Register</a>
		{/if}
	</nav>
{/if}

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;
	nav {
		@include flex-row;
		gap: $gap-normal;
		a {
			all: unset;
			color: $white;
			cursor: pointer;
			font-size: $font-sm;
			&:focus {
				outline: 2px solid $blue;
			}
		}
		.post-pet {
			@include link-button;
		}
		@media (max-width: 550px) {
			flex-direction: column;
		}
	}
	.no-nav {
		display: none;
	}
</style>
