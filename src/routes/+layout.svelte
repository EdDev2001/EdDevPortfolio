<script>
	import Header from '$lib/components/header.svelte';
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<Header />
{@render children()}

<Footer />
