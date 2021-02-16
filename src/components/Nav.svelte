<script lang="ts">
import Github from "./Github.svelte";
import IconContainer from "./IconContainer.svelte";
import Medium from "./Medium.svelte";

	import Twitter from "./Twitter.svelte"
</script>

<style>
	nav {
		position: fixed;
		height: 80px;
		background-color: transparent;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
		padding: 0 30px;
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
