<script lang="ts">
  import { afterUpdate, beforeUpdate, onMount } from "svelte";

  export let text: string

  const lines = text.split("\n")
  
  let currentCharacter = 0
  let currentLine = 0
  let show = false
  $: isTypingComplete = currentLine + 1 == lines.length && currentCharacter + 1 == lines[currentLine].length

  let waitCounter = 0
  
  const initCursor = setInterval(() => { 
    if (currentCharacter == lines[currentLine].length - 1) {
      if (waitCounter == 10) {
        currentLine += 1
        currentCharacter = 0
        show = true
        waitCounter = 0
      } else {
        if (waitCounter % 4 === 0) show = !show
      }
      
      waitCounter += 1
    } else if (show) {
      currentCharacter += 1
    }
  }, 50)

  if (isTypingComplete) {
    setInterval(() => {
      show = !show
    }, 500)
  }

  onMount(() => {
    show = true
  })

  afterUpdate(() => {
    if (isTypingComplete) {
      clearInterval(initCursor)
    }
  })

  $: linesToShow = lines.slice(0, currentLine)
  $: textToShow = lines[currentLine].slice(0, currentCharacter + 1)
</script>

<style>
  .container {
    @apply flex flex-col items-center bg-transparent;
  }

  .cursor {
    width: 1px;
    @apply h-8 bg-black inline-block;
  }

  .whitespace {
    @apply h-4 w-2 bg-transparent inline-block;
  }

  span {
    @apply flex items-center text-2xl text-black;
  }
</style>

<div class="container">
  {#each linesToShow as line}
    <span>{line}</span>
  {/each}
  <span>
    {textToShow}

    {#if textToShow[textToShow.length - 1] === " "}
      <div class="whitespace"></div>
    {/if}
  
    {#if show}
      <div class="cursor"></div> 
    {/if}
  </span>
</div>