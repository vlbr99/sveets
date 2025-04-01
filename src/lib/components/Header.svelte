<script lang="ts">
	import { PawPrint, Plus } from 'lucide-svelte';
	let isLoggedIn = $state(false);
</script>

<header>
	<div class="header-content">
		<a class="logo" href="/">WebPet <PawPrint /></a>

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
	</div>
</header>

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;
	header {
		@include flex-row;
		justify-content: space-between;
		width: 100%;
		margin: auto;
		padding: $padding-sm;
		user-select: none;
		background-color: $sub-black;
		.header-content {
			@include flex-row;
			width: min(100%, 1000px);
			justify-content: space-between;
			margin: auto;
			padding: $padding-sm;
			.logo {
				@include flex-row;
				text-decoration: none;
				gap: $gap-sm;
				color: $blue;
				font-weight: 600;
			}

			nav {
				@include flex-row;
				gap: $gap-normal;
				a {
					all: unset;
					color: $white;
					cursor: pointer;
					font-size: $font-sm;
				}
				.post-pet {
					@include flex-row;
					gap: $gap-sm;
					padding: calc($padding-sm - 0.15rem);
					background-color: $blue;
					border-radius: $radius-sm;
					transition: $transition-short;
					&:hover {
						@include blue-shadow;
					}
				}
			}
		}
	}
</style>
