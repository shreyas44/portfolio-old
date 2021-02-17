<style>
  div {
    @apply h-8 w-8 cursor-pointer;
    fill: var(--icon-color);
  }

  div:hover {
    fill: var(--icon-hover-color);
  }
</style>

<div>
  <slot />
</div>