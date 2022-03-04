<script type="text/javascript">
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Nav />
<main>
	<slot />
</main>
<Footer />

<style type="text/css" media="screen">
	main {
		padding-top: 63px;
	}
</style>
