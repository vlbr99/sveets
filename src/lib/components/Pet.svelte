<script lang="ts">
	let { petName, petDescription, by, image } = $props();
	import { Heart, MessageSquare } from 'lucide-svelte';
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
		<p><MessageSquare />4</p>
	</div>
</div>

<style lang="scss">
	@use '../styles/mixins' as *;
	@use '../styles/variables' as *;

	.pet {
		@include flex-col;
		@include shadow;
		align-items: flex-start;
		width: 95%;
		max-width: 500px;
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
			gap: $gap-normal;
			p {
				@include flex-row;
				color: $white;
				gap: $gap-sm;
				margin-top: 1rem;
			}
		}
	}
</style>
