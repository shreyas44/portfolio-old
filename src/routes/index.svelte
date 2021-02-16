<script>
import Type from "../components/Type.svelte"
import ScrollSection from "../components/ScrollSection.svelte"

const message = `Hi There!
I'm Shreyas, a 17 year old High School Student from Bangalore, India
A TypeScript, React, GraphQL, Python, Basketball and Tech Lover
Scroll down to see all my Project and Blog Posts
Have a Wonderful Day :)
`
</script>

<style>
	:global(body)	{
		background-color: #222;
	}

	div {
		scroll-snap-type: y mandatory;
		height: 100vh;
		overflow-y: scroll;
	}

	#first-section {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>

<svelte:head>
	<title>Shreyas - Home</title>
</svelte:head>

<div>
	<ScrollSection>
		<div id="first-section">
			<Type text={message} />
		</div>
	</ScrollSection>
	<ScrollSection>
		<div style="height: 100%; width: 100%; background: white;">Hello World</div>
	</ScrollSection>
</div>