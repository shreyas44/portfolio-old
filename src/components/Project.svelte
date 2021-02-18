<script lang="ts">
  import Github from "../icons/Github.svelte"
  import Tag from "./Tag.svelte"
  import Link from "../icons/Link.svelte"

  export let image: string
  export let name: string
  export let tags: string[]
  export let description: string
  export let repository: string
  export let url: string

  export let isMiddle: boolean
  export let handleClick

  let repositoryText: string | string[] = repository?.split("/")
  repositoryText = repositoryText?.slice(repositoryText.length - 2).join("/")

</script>

<style>
  .project-container {
    @apply rounded-xl bg-white shadow-xl transition-all duration-300;
    @apply cursor-pointer hover:shadow-2xl;
    width: 20rem;
    height: 55vh;
  }

  .middle-project {
    @apply cursor-default hover:shadow-xl;
    width: 25rem; 
    height: 75vh;
  }

  .project-contents-container {
    @apply p-5 flex flex-col justify-between h-1/2;
  }

  h3 {
    @apply m-0 text-2xl font-bold;
  }

  .project-image-container {
    @apply h-full rounded-t-xl overflow-hidden;
    @apply flex justify-center;
    @apply shadow-lg;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
  }

  .project-image-shadow {
    @apply shadow-md h-1/2 rounded-t-xl;
  }

  .project-info-container {
    @apply space-y-2;
  }

  .project-tags-container {
    @apply flex flex-wrap gap-1.5;
  }

  .project-repository {
    @apply flex items-center space-x-1.5;
  }
  
  .project-repository a {
    @apply text-black text-sm visited:text-black;
  }

  .project-repository-icon {
    @apply h-5 w-5;
  }

  .project-heading a {
    @apply flex items-center space-x-2 text-black no-underline hover:underline;
  }

  .project-url-icon {
    @apply h-5 w-5 cursor-pointer;
  }

  p {
    @apply mt-1 text-base;
  }
</style>

<div 
  class="project-container" 
  class:middle-project={isMiddle} 
  on:click={handleClick}
>
  <div class="project-image-shadow">
    <div class="project-image-container">
      <img src={image} alt={`${name} image`} />
    </div>
  </div>
  <div class="project-contents-container">
    <div class="project-contents-text">
      <div class="project-heading">
        {#if url}
          <a href={url}>
            <div class="project-url-icon">
              <Link />
            </div> 
            <h3>
              {name}
            </h3>
          </a> 
        {:else}
          <h3>{name}</h3>
        {/if}
      </div>
      <p>{description}</p>
    </div>
    <div class="project-info-container">

      {#if repository}
        <div class="project-repository">
          <div class="project-repository-icon">
            <Github />
          </div>
          <a href={repository}>{repositoryText}</a>
        </div>
      {/if}
      
      {#if isMiddle}
        <div class="project-tags-container">
          {#each tags as tag}
            <Tag {tag} />
          {/each}
        </div>
      {/if}

    </div>
  </div>
</div>