<script lang="ts">
	import {afterUpdate, beforeUpdate, onDestroy, onMount} from 'svelte';
  import { GetSongs } from '../datas/songs';
  import { exportedId,songQueue } from '../datas/store';
  import { SetCurrentSong, songProperties } from '../datas/listening';
	import PlayBar from './PlayBar.svelte';
  import {showComponent} from '../datas/store'
  var songs: any = []; 
  var queueArray:any=[];
  export async function recreateComponent(songId:any) {
    $showComponent = !$showComponent;
    await SetCurrentSong(songId);
    $showComponent = !$showComponent;
  }

  const unsubscribe = exportedId.subscribe(async (id) => {
    try {
      const data = await GetSongs(id);
      songs = data;

      songQueue.subscribe((queue) => {
        queueArray = queue;
});
      songQueue.set(data);
      console.log(songs);
    } catch (error) {
      console.error('Error:', error);
    }
  });
  onDestroy(() => {
    unsubscribe();
  });

  </script>

<div class="song-list-container" role="row" aria-rowindex="1">
  {#if songs.length>0}
  {#each songs as song}
  <div class="song-container" id="{song.songId}">
    <button class="play-button" on:click={() => recreateComponent(song.songId)}>
      <i class='bx bx-play-circle'></i>
    </button>
    <div class="song-details">
      <div class="detail">
        <p class="label">Song Name:</p>
        <p class="data">{song.songName}</p>
      </div>
      
      <div class="detail">
        <p class="label">Duration:</p>
        <p class="data">{song.duration}</p>
      </div>
      
      <div class="detail">
        <p class="label">Song Artist:</p>
        <p class="data">{song.songArtist}</p>
      </div>

      <div class="detail">
        <p class="label">Album Name:</p>
        <p class="data">{song.albumName}</p>
      </div>
    </div>
  </div>
  {/each}
  {:else}
  <div class="song-container">
    <div class="song-details">
      <h1>It seems songs were in another playlist. Add Some!</h1>
    </div>
  </div>
  {/if}
</div>


  <style>
.song-list-container {
  max-height: 950px;
    overflow-y: auto;
  display: flex;
  flex-direction: column;
  color:white;

  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%);
  background-color: gray;
  border-radius: 25px;
  padding: 15px;
  align-items: center;
}
.song-list-container p{
  color:white;
}

.song-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: gray;
  
}

.play-button {
  background-color: transparent;
  color: black;
  border: none;
  outline: none;
  font-size: 35px;
}

.song-details {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.detail {
  margin-right: 20px;
}

.detail p {
  margin: 0;
  font-size: 16px;
}

.label {
  font-weight: bold;
  margin-bottom: 2px;
}

.data {
  color: #555;
}


  </style>