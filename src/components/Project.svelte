<script lang="ts">
  import Tag from "./Tag.svelte"

  export let image: string
  export let name: string
  export let tags: string[]
  export let description: string
</script>

<style>
  .project-container {
    width: 25rem;
    border-radius: 1rem;
    background-color: white;
    height: 70vh;
  }

  .project-contents-container {
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
  }

  h3 {
    font-weight: bold;
    font-size: 28px;
    margin: 0;
  }

  .project-image-container {
    height: 50%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
    text-align: center;
    overflow: hidden;
    display: flex;
    justify-content: center;
    border-bottom: 5px solid rgb(8, 86, 131);
  }

  .project-tags-container {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    gap: 5px;
  }

  img {
    height: 100%;
  }

  p {
    margin-top: 5px;
  }
</style>

<div class="project-container">
  <div class="project-image-container">
    <img src={image} alt={`${name} image`} />
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