<script lang="ts">
  import Image from "./Image.svelte"
  import Tags from "./Tags.svelte"
  import Repository from "./Repository.svelte"
  import Heading from "./Heading.svelte"

  export let image: string
  export let name: string
  export let tags: string[]
  export let description: string
  export let repository: string
  export let url: string

  export let isMiddle: boolean
  export let handleClick
</script>

<style>
  .project-container {
    @apply rounded-xl bg-white shadow-xl transition-all duration-300;
    @apply cursor-pointer hover:shadow-2xl box-border;
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

  .project-info-container {
    @apply flex flex-col gap-y-2;
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
  <Image src={image} alt={`${name}-image`} />
  <div class="project-contents-container">

    <div class="project-contents-text">
      <Heading url={url}>{name}</Heading> 
      <p>{description}</p>
    </div>

    <div class="project-info-container">
      {#if repository}
        <Repository repository={repository} />
      {/if}
      
      {#if isMiddle}
        <Tags tags={tags} /> 
      {/if}
    </div>

  </div>
</div>