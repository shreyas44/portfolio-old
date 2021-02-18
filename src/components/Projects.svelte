<script lang="ts">
import { crossfade, fly, slide } from "svelte/transition";
  import { flip } from "svelte/animate"
  import Project from "./project/Project.svelte";

  interface Project {
    name: string
    tags: string[]
    "short-description": string
    image: string
    description?:string
    repository?: string
    url?: string
  }

  export let projects: Project[]
  projects = projects.map((project, id) => ({...project, id}))

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
    {#each currentProjects as project, i (project.name)}
      <div out:fly={{x: -100, duration: 600}} in:fly={{x: 100, duration: 600 }} animate:flip={{duration: 600}}>
        <Project 
          isMiddle={i === 1} 
          handleClick={i === 0 ? getHandleClick("backward") : i === 1 ? undefined : getHandleClick("forward")}
          {project} 
        />
      </div>
    {/each}
  </div>
</div>