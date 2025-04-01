<script lang="ts">
	let tech = $state([
		'https://ik.imagekit.io/pmq6ogtx8l/svelte.png?updatedAt=1743525501006',
		'https://ik.imagekit.io/pmq6ogtx8l/react.png?updatedAt=1743525590634',
		'https://ik.imagekit.io/pmq6ogtx8l/vue.png?updatedAt=1743525656959',
		'https://ik.imagekit.io/pmq6ogtx8l/svelte.png?updatedAt=1743525501006',
		'https://ik.imagekit.io/pmq6ogtx8l/react.png?updatedAt=1743525590634',
		'https://ik.imagekit.io/pmq6ogtx8l/vue.png?updatedAt=1743525656959',
		'https://ik.imagekit.io/pmq6ogtx8l/svelte.png?updatedAt=1743525501006',
		'https://ik.imagekit.io/pmq6ogtx8l/react.png?updatedAt=1743525590634',
		'https://ik.imagekit.io/pmq6ogtx8l/vue.png?updatedAt=1743525656959',
		'https://ik.imagekit.io/pmq6ogtx8l/svelte.png?updatedAt=1743525501006',
		'https://ik.imagekit.io/pmq6ogtx8l/react.png?updatedAt=1743525590634',
		'https://ik.imagekit.io/pmq6ogtx8l/vue.png?updatedAt=1743525656959',
		'https://ik.imagekit.io/pmq6ogtx8l/svelte.png?updatedAt=1743525501006',
		'https://ik.imagekit.io/pmq6ogtx8l/react.png?updatedAt=1743525590634',
		'https://ik.imagekit.io/pmq6ogtx8l/vue.png?updatedAt=1743525656959'
		//I FORGOT SOMETHING 100% BUT PLEASE WRITE DOWN IN THE COMMENT WHAT YOU WANT TO SEE.
		//example: add svelte logo
	]);
</script>

<p class="tech-label">Framework that you use:</p>

<div class="tech-wrapper">
	{#each tech as techToDisplay}
		<img src={techToDisplay} alt={techToDisplay} />
	{/each}
</div>

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;
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
		}
	}
	.tech-label {
		color: $white;
		padding: 0 $padding-sm;
		width: 100%;
	}
</style>
