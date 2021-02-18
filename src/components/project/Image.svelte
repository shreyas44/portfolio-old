<script lang="ts">
  export let src: string
  export let alt: string
</script>

<style>
  figure {
    @apply h-full rounded-t-xl overflow-hidden m-0;
    @apply flex justify-center;
    @apply shadow-lg;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
  }

  div {
    @apply shadow-md h-1/2 rounded-t-xl;
  }
</style>

<div>
  <figure>
    <img {src} {alt} />
  </figure>
</div>