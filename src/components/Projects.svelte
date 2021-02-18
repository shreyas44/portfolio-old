<script lang="ts">
  import Project from "./project/Project.svelte";

  interface Project {
    name: string
    tags: string[]
    "short-description": string
    body?:string
    image: string
  }

  export let projects: Project[]

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
      <Project 
        isMiddle={i === 1} 
        description={project["short-description"]}
        handleClick={i === 0 ? getHandleClick("backward") : i === 1 ? undefined : getHandleClick("forward")}
        {...project} 
      />
    {/each}
  </div>
</div>