<script context="module" lang="ts">
	//@ts-ignore
	import bedav from "../../projects/bedav.md"
	//@ts-ignore
	import skooltalk from "../../projects/skooltalk.md"
	//@ts-ignore
	import kickstarter from "../../projects/kickstarter.md"
	import SimpleMarkdown from "simple-markdown"
	import { parseMarkdown } from "../../lib/markdown-parser";

	const { defaultBlockParse: mdParse } = SimpleMarkdown

	export async function preload(page, session) {
		const bedavData = parseMarkdown(bedav)
		const skooltalkData = parseMarkdown(skooltalk)
		const kickstarterData = parseMarkdown(kickstarter)

		return { projects: [bedavData.meta, skooltalkData.meta, kickstarterData.meta] }
	}
</script>

<script lang="ts">
import Type from "../components/Type.svelte"
import ScrollSection from "../components/ScrollSection.svelte"
import Projects from "../components/Projects.svelte"

const message = `Hi There!
I'm Shreyas, a 17 year old High School Student from Bangalore, India
A TypeScript, React, GraphQL, Python, Basketball and Tech Lover
Scroll down to see all my Project and Blog Posts
Have a Wonderful Day :)`

export let projects: any[]

// const message = `one
// two`
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
		<Projects projects={projects} />
	</ScrollSection>
</div>