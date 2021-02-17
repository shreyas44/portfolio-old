<script lang="ts">
import Github from "./Github.svelte";
import IconContainer from "./IconContainer.svelte";
import Medium from "./Medium.svelte";

	import Twitter from "./Twitter.svelte"
</script>

<style>
	nav {
		@apply fixed h-20 bg-transparent top-0 right-0 px-8 space-x-4 space-x-reverse;
		@apply flex flex-row-reverse items-center;
	}

</style>

<nav>
	<a target="_blank" href="https://twitter.com/shreyas4_">
		<IconContainer>
			<Twitter />
		</IconContainer>
	</a>

	<a target="_blank" href="https://github.com/shreyas44">
		<IconContainer>
			<Github />
		</IconContainer>
	</a>

	<a target="_blank" href="https://shreyas-sreenivas.medium.com">
		<IconContainer>
			<Medium />
		</IconContainer>
	</a>
</nav>
	