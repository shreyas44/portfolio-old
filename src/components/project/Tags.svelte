<script lang="ts">
  import { scale } from "svelte/transition";
  import Tag from "./Tag.svelte";

  export let tags: string[]
</script>

<style>
  div {
    @apply flex flex-wrap gap-1;
  }
</style>

<div 
  transition:scale={{start: 0, duration: 600, opacity: 0}}
>
  {#each tags as tag}
    <Tag {tag} />
  {/each}
</div>