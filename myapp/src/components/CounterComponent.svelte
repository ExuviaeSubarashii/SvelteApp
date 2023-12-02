<!-- CounterComponent.svelte -->

<script lang="ts">
    import { onMount } from 'svelte';
    import {songState,nextQueueSong} from '../datas/store'
    import { SetCurrentSong } from '../datas/listening';
    
    var currentState:any;
    var nextSong:any;
songState.subscribe((state) => {
  currentState = state;
});
nextQueueSong.subscribe((state)=>{
  nextSong=state;
})


export var initialSeconds = 0;
export var targetDuration = 0;

var elapsedSeconds = 0;
var minutes = Math.floor(elapsedSeconds / 60);
var remainingSeconds = elapsedSeconds % 60;
var isRunning = true;

function updateCounter() {
  if (isRunning && elapsedSeconds < targetDuration) {
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

function toggleTimer() {
  isRunning = !isRunning;
  
  songState.set(currentState);
}
  </script>
  <div class="controls">
    <button><i class='bx bx-shuffle' ></i></button>
    <button><i class='bx bx-left-arrow-alt' ></i></button>

    {#if !isRunning}
    <button on:click={toggleTimer}>
      <i class='bx bx-play-circle'></i>
    </button>
    {:else if isRunning}
    <button on:click={toggleTimer}><i class='bx bx-pause-circle' ></i></button>
    {/if}

    <button><i class='bx bx-right-arrow-alt' ></i></button>
    <button><a href="/queue"><i class='bx bx-repeat'></i></a></button>
  </div>
  
  <main>
    <p>{minutes}:{remainingSeconds}</p>
  </main>
  <style>
    .controls,button{
      background-color: transparent;
      color:lightgray;
      border:none;
      outline: none;
      font-size: 20px;
    }
  </style>