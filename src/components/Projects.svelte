<script lang="ts">
  import Project from "./Project.svelte";

  interface Project {
    name: string
    tags: string[]
    "short-description": string
    body?:string
    image: string
  }

  export let projects: Project[]

  let currentProject = 0
</script>

<style>
  div {
    @apply p-10 mt-2;
  }

  .projects-container {
    @apply flex justify-between;
  }

  a {
    @apply no-underline;
  }
  
  h1 {
    @apply text-5xl font-bold text-center text-white;
  }
</style>

<div id="#projects">
  <a href="#projects"><h1>My Projects</h1></a>
  <div class="projects-container">
    {#each projects as project}
      <!-- {#if }
         -->
      <!-- {/if} -->
      <Project {...project} description={project["short-description"]}/>
    {/each}
  </div>
</div>