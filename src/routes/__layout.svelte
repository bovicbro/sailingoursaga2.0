<script type="text/javascript">
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Nav />
<main>
	<div class="main">
		<slot />
	</div>
</main>
<Footer />

<style type="text/css" media="screen">
 .main {
	 min-height: 100vh;
 }
</style>
