<script>
	let colors = $state(['#161e27', '#1b2430', '#fcfcfc', '#d8d8d8', '#557fff', '#1e2947']);
</script>

<div class="rules-wrapper">
	<div class="rules-block">
		<h1>Welcome!</h1>
		<p>Glad you're here! Most people skip the rules, but hey, at least you're checking them out.</p>
	</div>
	<div class="rules-block">
		<h3>Rules of the site</h3>
		<ul>
			<li>
				Be cool. No hate—everyone's welcome here, including their pets. Treat others with respect.
			</li>
			<li>
				Post pets only! No random stuff. If you don’t have a pet, a rubber duck, robo-pet, or
				something similar is fine.
			</li>
			<li>
				Just so you know, I’m not responsible for anything that happens on or outside this site.
			</li>
		</ul>
	</div>
	<div class="rules-block">
		<h3>Tech stuff</h3>
		<p>
			Built with <a target="_blank" href="https://svelte.dev/">SvelteKit</a>,
			<a target="_blank" href="https://appwrite.io/">Appwrite</a>, and
			<a target="_blank" href="https://sass-lang.com/">SCSS</a>.
		</p>
		<p>Icons from <a target="_blank" href="https://lucide.dev/">Lucide</a>.</p>
		<p>Font: Inter from <a target="_blank" href="https://fontsource.org/">Fontsource</a></p>
		<a target="_blank" href="https://github.com/vlbr99/web-pet">Check out the GitHub</a>
		<p>Website color palette:</p>
		<div class="colors-block">
			{#each colors as color}
				<div class="color" style="background-color: {color};"><p>{color}</p></div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../lib/styles/mixins' as *;
	@use '../../lib/styles/variables' as *;
	.rules-wrapper {
		@include flex-col;
		width: min(95%, 600px);
		margin: auto;
		padding: $padding-sm;
		gap: $gap-normal;
		align-items: flex-start;
		margin-top: $small-spacing;
		.rules-block {
			@include flex-col;
			align-items: flex-start;
			gap: $gap-sm;
			h1,
			h3 {
				color: $white;
			}
			p,
			li {
				color: $sub-white;
			}
			a {
				color: $blue;
				text-decoration: none;
				&:hover {
					text-decoration: underline;
				}
			}
			.colors-block {
				@include flex-row;
				justify-content: flex-start;
				gap: $gap-normal;
				flex-wrap: wrap;
				div {
					@include flex-row;
					@include shadow;
					border-radius: $radius-sm;
					width: 100px;
					height: 100px;
					p {
						color: rgb(0, 0, 0);
					}
				}
			}
		}
	}
</style>
