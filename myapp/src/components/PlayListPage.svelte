<script lang="ts">
	import {afterUpdate, beforeUpdate, onDestroy, onMount} from 'svelte';
  import { GetSongs } from '../datas/songs';
  import { exportedId,songQueue } from '../datas/store';
  import { SetCurrentSong, songProperties } from '../datas/listening';
	import PlayBar from './PlayBar.svelte';
  var songs: any = []; 
  import {showComponent} from '../datas/store'
  var compshow=showComponent;
  var queueArray:any=[];
  async function recreateComponent(songId:any) {
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
  {#each songs as song (song.songId)}
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

        <div class="detail">
          <p class="label">Date Added:</p>
          <p class="data">{song.dateAdded}</p>
        </div>
      </div>
    </div>
  {/each}
</div>


  <style>
.song-list-container {
  display: flex;
  flex-direction: column;
  color:white;
  width:1080px;
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #121212;
}
.song-list-container p{
  color:white;
}

.song-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
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