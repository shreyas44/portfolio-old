<script lang="ts">
  import { onMount } from "svelte";

  export let text: string

  const lines = text.split("\n")
  
  let currentCharacter = 0
  let currentLine = 0
  let show = false

  let waitCounter = 0

  onMount(() => {
    show = true
  })

  setInterval(() => {
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

  $: linesToShow = lines.slice(0, currentLine)
  $: textToShow = lines[currentLine].slice(0, currentCharacter + 1)
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
  }

  .cursor {
    height: 1.5rem;
    width: 1px;
    background-color: white;
    display: inline-block;
  }

  .whitespace {
    height: 1rem;
    width: 1px;
    background-color: transparent;
    display: inline-block;
  }

  span {
    transition: all 500ms;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: white;
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