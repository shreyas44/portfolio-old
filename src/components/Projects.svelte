<script lang="ts">
  import Project from "./Project.svelte";
  import { crossfade, scale } from "svelte/transition"

  interface Project {
    name: string
    tags: string[]
    "short-description": string
    body?:string
    image: string
  }

  export let projects: Project[]

  const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

  
  let projectsToShow = projects

  $: getHandleClick = (direction: "forward" | "backward") => {
    if (direction == "forward") {
      return () => {
        const newProjectsToShow = projectsToShow
        const firstProject = newProjectsToShow.splice(0, 1)[0]
        newProjectsToShow.push(firstProject)
        projectsToShow = newProjectsToShow
      }
    }

    if (direction == "backward") {
      return () => {
        const newProjectsToShow = projectsToShow
        const lastProject = newProjectsToShow.pop()
        newProjectsToShow.unshift(lastProject)
        projectsToShow = newProjectsToShow
      }
    }
  }

  $: currentProjects = projectsToShow.slice(0,3)
</script>

<style>
  .projects {
    @apply p-7 mt-2;
  }

  .projects-container {
    @apply w-10/12 mx-auto mt-8;
    @apply flex justify-between items-center;
  }

  a {
    @apply no-underline;
  }
  
  h1 {
    @apply text-5xl font-bold text-center text-black;
  }
</style>

<div id="#projects" class="projects">
  <a href="#projects"><h1>My Projects</h1></a>
  <div class="projects-container">
    {#each currentProjects as project, i}
      <div in:receive={{key: project.name}} out:send={{key: project.name}}>
        <Project 
          isMiddle={i === 1} 
          description={project["short-description"]}
          handleClick={i === 0 ? getHandleClick("backward") : i === 1 ? undefined : getHandleClick("forward")}
          {...project} 
        />
      </div>
    {/each}
  </div>
</div>