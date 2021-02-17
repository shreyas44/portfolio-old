<script lang="ts">
  export let image: string
  export let name: string
  export let tags: string[]
  export let description: string
</script>

<div>
  <img src={image} alt={`${name} image`} />
  <h3>{name}</h3>
  <p>{description}</p>
  <div>
    {#each tags as tag}
      <span>{tag}</span> 
    {/each}
  </div>
</div>