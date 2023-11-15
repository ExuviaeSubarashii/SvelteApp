<!-- CounterComponent.svelte -->

<script lang="ts">
    import { onMount } from 'svelte';
  
    export let initialSeconds = 0;
    export let targetDuration = 0;
  
    let elapsedSeconds = 0;
    let minutes = Math.floor(elapsedSeconds / 60);
    let remainingSeconds = elapsedSeconds % 60;
  
    function updateCounter() {
      if (elapsedSeconds < targetDuration) {
        elapsedSeconds += 1;
        minutes = Math.floor(elapsedSeconds / 60);
        remainingSeconds = elapsedSeconds % 60;
      }
    }
  
    onMount(() => {
      const interval = setInterval(updateCounter, 1000);
  
      return () => {
        clearInterval(interval);
      };
    });
    $: {
      targetDuration = initialSeconds;
    }
  </script>
  
  <main>
    <p>{minutes}:{remainingSeconds}</p>
  </main>
  