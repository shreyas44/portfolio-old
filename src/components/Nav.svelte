<script lang="ts">
	import IconContainer from "./IconContainer.svelte";
	import Github from "../icons/Github.svelte";
	import Medium from "../icons/Medium.svelte";
	import Twitter from "../icons/Twitter.svelte"
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
			<Github style="bottom: 3px; transform: scale(1.1);"/>
		</IconContainer>
	</a>

	<a target="_blank" href="https://shreyas-sreenivas.medium.com">
		<IconContainer>
			<Medium style="top: 5px"/>
		</IconContainer>
	</a>
</nav>
	