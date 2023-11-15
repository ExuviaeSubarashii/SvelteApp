<script lang="ts">
	import { writable } from 'svelte/store';
    import { songProperties } from '../datas/listening';
	import { onMount } from 'svelte';
  import {duration} from '../datas/store'
  import CounterComponent from './CounterComponent.svelte';
  import initialSeconds from './CounterComponent.svelte';

    var minutes:any;
    var remainingSeconds:any;
    var remaining:any;
    let items:any;

    function convertSecondsToTime() {
   minutes = Math.floor(songProperties.duration / 60);
   remainingSeconds = songProperties.duration % 60;
   items = Array.from({ length: remainingSeconds }, (_, i) => i + 1);
   duration.set(items);
}
  </script>
{#if !songProperties}
<div>
  <h2>No Songs</h2>
  <h4>No Songs</h4>
</div>
{:else}
{#if !minutes && !remainingSeconds}
  {#await convertSecondsToTime() then}

  {/await}
{/if}

<div >
  <p>{"Now Playing"}</p>
  <h2>{songProperties.songName}</h2>
  <h4>{songProperties.songArtist}</h4>
  {#if minutes !== undefined && remainingSeconds !== undefined}
  <CounterComponent initialSeconds={songProperties.duration}/>
  <p>{`${minutes}:${remainingSeconds}`}</p>
  {/if}
</div>
{/if}