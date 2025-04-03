<script lang="ts">
	import { PawPrint, Menu, X } from 'lucide-svelte';
	import Nav from './Nav.svelte';
	import { fly } from 'svelte/transition';

	let isOpen = $state(false);
</script>

<header>
	<div class="header-content">
		<a class="logo" href="/">WebPet <PawPrint /></a>
		<Nav flexNav />
		{#if isOpen}
			<X
				class="header-close"
				onclick={() => {
					isOpen = false;
				}}
			/>
		{:else}
			<Menu
				class="header-menu"
				onclick={() => {
					isOpen = true;
				}}
			/>
		{/if}
	</div>
</header>
{#if isOpen}
	<div class="header-responsive" transition:fly>
		<Nav flexNav />
	</div>
{/if}

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

		position: fixed;
		height: 61px;
		top: 0;
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
			:global(.header-menu) {
				display: none;
				color: $white;
				cursor: pointer;
			}
			:global(.header-close) {
				color: white;
				cursor: pointer;
			}
			@media (min-width: 550px) {
				:global(.header-menu) {
					display: none !important;
				}
				:global(.header-close) {
					display: none !important;
				}
			}
		}

		@media (max-width: 550px) {
			.header-content {
				:global(.header-menu) {
					display: block;
					color: $white;
				}
				:global(nav) {
					display: none;
				}
			}
		}
	}
	.header-responsive {
		@include flex-col;
		align-items: flex-start;
		text-align: left;
		padding: $padding-normal;
		position: fixed;
		width: 100%;
		inset: 61px auto auto 0;
		background-color: $sub-black;
		:global(nav) {
			align-items: flex-start;
		}
		@media (min-width: 550px) {
			display: none;
		}
	}
</style>
