<script lang="ts">
	import Nav from '../components/Nav.svelte';
</script>

<style global>
	/* main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	} */

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:root {
		--icon-color: white;
		--icon-hover-color: #ccc;
	}
</style>

<Nav />

<main>
	<slot></slot>
</main>