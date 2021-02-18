<script lang="ts">
	import Nav from '../components/Nav.svelte';
</script>

<style global>
	:root {
		/* --icon-color: white;
		--icon-hover-color: #ccc; */
		--icon-color: #444;
		--icon-hover-color: #111;
	}
</style>

<Nav />

<main>
	<slot></slot>
</main>