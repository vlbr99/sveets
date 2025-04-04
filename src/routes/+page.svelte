<script lang="ts">
	import Pet from '$lib/components/Pet.svelte';
	let { data } = $props();
</script>

<!-- if i decide to add something in the future i made a page-wrapper div, please do not remove it -->

<div class="page-wrapper">
	<div class="pet-wrapper">
		{#each data.databaseData.documents as pet}
			<Pet image={pet.image} petDescription={pet.description} petName={pet.title} by={pet.by} />
		{/each}
	</div>
</div>

<style lang="scss">
	@use '../lib/styles/mixins' as *;
	@use '../lib/styles/variables' as *;
	.page-wrapper {
		@include flex-row;
		align-items: flex-start;
		margin-top: $super-small-spacing;
		padding: $padding-normal;
		width: 100%;
		.pet-wrapper {
			@include flex-col;
			gap: calc($gap-normal + 1rem);
			max-width: 600px;
			width: 95%;
			margin: auto;
		}
	}
</style>
