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
    padding: 35px;
    margin-top: 30px;
  }

  .projects-container {
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }
  
  h1 {
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    color: white;
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