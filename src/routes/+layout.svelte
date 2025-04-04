<script>
	import '@fontsource-variable/inter';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>WebPet - Share Your Pet with the World</title>
	<meta name="description" content="Upload and share pictures of your pet on WebPet. Whether it's a dog, cat, or even a rubber duck, every pet is welcome!" />
	
	<meta property="og:title" content="WebPet – Share Your Pet with the World" />
	<meta property="og:description" content="Join WebPet and show off your pet! Real or rubber duck, all pets are welcome here." />
	<meta property="og:image" content="https://ik.imagekit.io/pmq6ogtx8l/og.png?updatedAt=1743788188469" />
	<meta property="og:url" content="https://webpet.vercel.app" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="WebPet – Share Your Pet with the World" />
	<meta name="twitter:description" content="Upload and share pictures of your pet on WebPet. Whether it's a dog, cat, or even a rubber duck, every pet is welcome!" />
	<meta name="twitter:image" content="https://ik.imagekit.io/pmq6ogtx8l/og.png?updatedAt=1743788188469" />
</svelte:head>

<Header />
{@render children()}

<style lang="scss">
	@use '../lib/styles/variables' as *;
	:global(*) {
		font-family: 'Inter Variable', sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	:global(body) {
		background-color: $black;
	}
</style>
