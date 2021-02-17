<script lang="ts">
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
  }

  h3 {
    font-weight: bold;
    font-size: 25px;
  }

  .project-image-container {
    height: 50%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
    text-align: center;
    overflow: hidden;
  }

  img {
    height: 100%;
  }
</style>

<div class="project-container">
  <div class="project-image-container">
    <img src={image} alt={`${name} image`} />
  </div>
  <div class="project-contents-container">
    <h3>{name}</h3>
    <p>{description}</p>
    <div>
      {#each tags as tag}
        <span>{tag}</span> 
      {/each}
    </div>
  </div>
</div>