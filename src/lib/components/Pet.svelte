<script lang="ts">
	let { petName, petDescription, by, image } = $props();
	let areCommentsOpen = $state(false);
	import { Heart, Plus } from 'lucide-svelte';
	import Input from './Input.svelte';
	import Button from './Button.svelte';
	import { slide } from 'svelte/transition';
</script>

<!-- this is a pet component (the pet card that is displayed on the frontpage), nothing crazy -->
<div class="pet">
	<div class="pet-data">
		<p class="pet-by"><span>Posted by:</span> {by}</p>
		<p class="pet-name">{petName}</p>
		<p class="pet-description">{petDescription}</p>
	</div>
	<div class="pet-image">
		<img
			src="https://cloud.appwrite.io/v1/storage/buckets/67eab74a000065af9767/files/{image}/view?project=67eaa8b10009d8a195f3"
			alt=""
		/>
	</div>
	<div class="pet-likes-and-comments">
		<p><Heart /> 24</p>
		<Button
			onclick={() => {
				areCommentsOpen = !areCommentsOpen;
			}}
		>
			comments (4)
		</Button>
	</div>
	{#if areCommentsOpen}
		<div class="pet-comments-wrapper" transition:slide={{ duration: 200 }}>
			<div class="pet-post-comment-wrapper">
				<Input placeholder="Post comment" />
				<Button><Plus /></Button>
			</div>
			<div>
				<span>Miki</span>
				<p>Such a nice pet</p>
			</div>
			<div>
				<span>Miki</span>
				<p>Such a nice pet</p>
			</div>
			<div>
				<span>Miki</span>
				<p>Such a nice pet</p>
			</div>
			<div>
				<span>Miki</span>
				<p>Such a nice pet</p>
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	@use '../styles/mixins' as *;
	@use '../styles/variables' as *;

	.pet {
		@include flex-col;
		@include shadow;
		align-items: flex-start;
		width: 95%;
		padding: $padding-normal;
		background-color: $sub-black;
		border-radius: calc($radius-sm + 0.3rem);
		user-select: none;

		.pet-data {
			@include flex-col;
			align-items: flex-start;
			gap: $gap-sm;
			width: 100%;
			.pet-by {
				@include flex-row;
				justify-content: flex-start;
				gap: $gap-sm;
				color: $white;
				font-size: $font-sm;
				font-weight: 500;
				span {
					font-weight: 200;
				}
			}
			.pet-name {
				color: $white;
				font-size: calc($font-sm + 0.4rem);
				font-weight: 500;
			}

			.pet-description {
				color: $sub-white;
				font-size: $font-sm;
			}
		}
		.pet-image {
			height: fit-content;
			max-height: 515px;
			max-width: 100%;
			margin-top: 2rem;
			img {
				height: 100%;
				width: 100%;
				object-fit: contain;
				object-position: top left;
			}
		}
		.pet-likes-and-comments {
			@include flex-row;
			width: 100%;
			justify-content: space-between;
			p {
				@include flex-row;
				color: $white;
				gap: $gap-sm;
				margin-top: 1rem;
				cursor: pointer;
			}
			:global(button) {
				all: unset;
				color: $white;
				cursor: pointer;
			}
		}
		.pet-post-comment-wrapper {
			@include flex-row;
			gap: $gap-sm;
			box-shadow: none !important;
			padding: 0 !important;
			:global(button) {
				width: 50px;
				padding: 5px;
			}
		}
		.pet-comments-wrapper {
			@include flex-col;
			align-items: flex-start;
			gap: $gap-normal;
			width: 100%;
			margin-top: 0.5rem;
			div {
				@include shadow;
				width: 100%;
				padding: $padding-sm;
				border-radius: $radius-sm;
				span {
					font-size: $font-sm;
					color: $sub-white;
				}
				p {
					color: $white;
				}
			}
		}
	}
</style>
