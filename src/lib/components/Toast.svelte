<script lang="ts">
	import { slide } from 'svelte/transition';
	import { X, Info } from 'lucide-svelte';
	let { toastText, isOpen = $bindable() } = $props();

	const SECOND = $state(1000);

	//this might not be the best solution, but i could
	//not think of anything better.
	$effect(() => {
		if (isOpen) {
			const timeout = setTimeout(() => {
				isOpen = false;
			}, SECOND * 4);

			return () => clearTimeout(timeout);
		}
	});
</script>

{#if isOpen}
	<div class="toast" transition:slide={{ duration: 200 }}>
		<div class="toast-header">
			<p><Info size={16} /> Info</p>
			<X
				cursor="pointer"
				onclick={() => {
					isOpen = false;
				}}
			/>
		</div>
		<div class="toast-body">
			<p>{toastText}</p>
		</div>
	</div>
{/if}

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;

	.toast {
		@include blue-shadow;
		@include flex-col;
		gap: $gap-normal;
		align-items: flex-start;
		position: absolute;
		inset: auto 1rem 1rem auto;
		border-radius: $radius-sm;
		width: 300px;
		padding: $padding-sm;
		background-color: $blue;
		.toast-header {
			@include flex-row;
			justify-content: space-between;
			width: 100%;
			p {
				@include flex-row;
				gap: $gap-sm;
				font-weight: 700;
			}
		}
		.toast-body {
			p {
				font-weight: 300;
			}
		}
	}
</style>
