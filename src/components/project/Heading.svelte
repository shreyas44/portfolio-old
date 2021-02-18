<script lang="ts">
  import Link from "../../icons/Link.svelte"
  export let url: string
</script>

<style>
  a {
    @apply flex items-center space-x-2 text-black no-underline hover:underline;
  }

  .url-icon-container {
    @apply h-5 w-5 cursor-pointer;
  }

  h3 {
    @apply m-0 text-2xl font-bold;
  }
</style>

<div>
  {#if url}
    <a href={url}>
      <div class="url-icon-container">
        <Link />
      </div> 
      <h3>
        <slot />
      </h3>
    </a> 
  {:else}
    <h3><slot /></h3>
  {/if}
</div>