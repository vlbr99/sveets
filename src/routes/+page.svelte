<script lang="ts">
	let { data } = $props();
</script>

{#each data.databaseData.documents as pet}
	<div class="pet">
		<p>title: {pet.title}</p>
		<p>description: {pet.description}</p>
		<p>by: {pet.by}</p>
		<img
			src="https://cloud.appwrite.io/v1/storage/buckets/67eab74a000065af9767/files/{pet.image}/view?project=67eaa8b10009d8a195f3"
			alt=""
		/>
	</div>
{/each}

<style lang="scss">
	.pet {
		background-color: rgb(206, 157, 255);
		margin-top: 20px;
	}
</style>
