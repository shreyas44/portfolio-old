<script lang="ts">
  import Github from "../../icons/Github.svelte";
  export let repository: string

  $: repositoryParts = repository?.split("/")
  $: repositoryText = repositoryParts?.slice(repositoryParts.length - 2).join("/")
</script>

<style>
  .repo-container {
    @apply flex items-center space-x-1.5;
  }
  
  .repo-icon-container {
    @apply h-5 w-5;
  }

  a {
    @apply text-black text-sm visited:text-black;
  }
</style>

<div class="repo-container">
  <div class="repo-icon-container">
    <Github />
  </div>
  <a href={repository}>{repositoryText}</a>
</div>