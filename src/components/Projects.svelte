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
</script>

<style>
  div {
    padding: 35px;
    margin-top: 30px;
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
  <Project {...projects[0]} description={projects[0]["short-description"]}/>
</div>