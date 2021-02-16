<script lang="ts">
	import Nav from '../components/Nav.svelte';
</script>

<style>
	/* main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	} */

	* {
		box-sizing: border-box;
	}

	:root {
		--icon-color: white;
		--icon-hover-color: #ccc;
	}
</style>

<Nav />

<main>
	<slot></slot>
</main>