<script lang="ts">
	import Nav from '../components/Nav.svelte';
</script>

<style global>
	:root {
		--icon-color: white;
		--icon-hover-color: #ccc;
	}
</style>

<Nav />

<main>
	<slot></slot>
</main>