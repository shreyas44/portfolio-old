<script lang="ts">
  import Tag from "./Tag.svelte"

  export let image: string
  export let name: string
  export let tags: string[]
  export let description: string
</script>

<style>
  .project-container {
    @apply rounded-xl bg-white;
    width: 25rem;
    height: 70vh;
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
    @apply shadow h-1/2;
  }

  .project-tags-container {
    @apply flex flex-wrap gap-1.5;
  }

  p {
    @apply mt-1 text-base;
  }
</style>

<div class="project-container">
  <div class="project-image-shadow">
    <div class="project-image-container">
      <img src={image} alt={`${name} image`} />
    </div>
  </div>
  <div class="project-contents-container">
    <div class="project-contents-text">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
    <div class="project-tags-container">
      {#each tags as tag}
        <Tag {tag} />
      {/each}
    </div>
  </div>
</div>