<script lang="ts">
	const tech = $state([
		'https://ik.imagekit.io/pmq6ogtx8l/svelte.png?updatedAt=1743525501006',
		'https://ik.imagekit.io/pmq6ogtx8l/react.png?updatedAt=1743525590634',
		'https://ik.imagekit.io/pmq6ogtx8l/vue.png?updatedAt=1743525656959',
		'https://ik.imagekit.io/pmq6ogtx8l/angular.png?updatedAt=1743602600242',
		'https://ik.imagekit.io/pmq6ogtx8l/solid.png?updatedAt=1743602702015',
		'https://ik.imagekit.io/pmq6ogtx8l/preact.png?updatedAt=1743602889254',
		'https://ik.imagekit.io/pmq6ogtx8l/Qwik.png?updatedAt=1743603147997',
		'https://ik.imagekit.io/pmq6ogtx8l/Alpine.js.png?updatedAt=1743603204646',
		'https://ik.imagekit.io/pmq6ogtx8l/js.png?updatedAt=1743763271532',
		'https://ik.imagekit.io/pmq6ogtx8l/ts.png?updatedAt=1743763315269'
		//I FORGOT SOMETHING 100% BUT PLEASE WRITE DOWN IN THE COMMENT WHAT YOU WANT TO SEE.
		//example: add svelte logo
	]);

	let { framework = $bindable() } = $props();
</script>

<p class="tech-label">Framework that you use:</p>

<div class="tech-wrapper">
	{#each tech as techToDisplay}
		<img
			src={techToDisplay}
			alt={techToDisplay}
			class={framework === techToDisplay ? "tech-border" : ""}
			onclick={(e) => {
				framework = techToDisplay;
			}}
		/>
	{/each}
</div>

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;

	.tech-border {
		@include blue-shadow;
		padding: 4px;
		border: 2px solid $blue;
		border-radius:$radius-sm;
	}
	.tech-wrapper {
		@include flex-row;
		width: 100%;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		gap: $gap-sm;
		padding: $padding-sm;
		img {
			width: 40px;
			aspect-ratio: 1;
			object-fit: contain;
			cursor:pointer;
		}
	}
	.tech-label {
		color: $white;
		padding: 0 $padding-sm;
		width: 100%;
	}
</style>
