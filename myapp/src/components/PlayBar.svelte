<script lang="ts">
	import { writable } from 'svelte/store';
    import { songProperties } from '../datas/listening';
	import { onMount } from 'svelte';
  import {duration} from '../datas/store'
  import CounterComponent from './CounterComponent.svelte';

    var minutes:any;
    var remainingSeconds:any;
    var remaining:any;
    var items:any;

    function convertSecondsToTime() {
   minutes = Math.floor(songProperties.duration / 60);
   remainingSeconds = songProperties.duration % 60;
   items = Array.from({ length: remainingSeconds }, (_, i) => i + 1);
   duration.set(items);
}
  </script>
{#if !songProperties}
<div class="playBar">
  <h2>No Songs Playing</h2>
</div>
{:else}
{#if !minutes && !remainingSeconds}
  {#await convertSecondsToTime() then}

  {/await}
{/if}

<div class="playBar">
  <br>
  <p>{"Now Playing"}</p>
  <h2>{songProperties.songName}</h2>
  <h4>{songProperties.songArtist}</h4>
  {#if minutes !== undefined && remainingSeconds !== undefined}
  <CounterComponent initialSeconds={songProperties.duration}/>
  <p>{`${minutes}:${remainingSeconds}`}</p>
  <br>
  {/if}
</div>
{/if}
<style>
  .playBar{
background-color: black;
border-radius: 20px;
  }
</style>