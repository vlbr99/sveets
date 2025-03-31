<script>
	import '@fontsource-variable/inter';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>

<Header />
{@render children()}

<style>
	:global(*) {
		font-family: 'Inter Variable', sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
