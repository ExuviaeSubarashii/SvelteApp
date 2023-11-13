<script lang="ts">
	import {afterUpdate, beforeUpdate, onDestroy, onMount} from 'svelte';
  import { GetSongs } from '../datas/songs';
  import { exportedId } from '../datas/store';
  import { SetCurrentSong, songProperties } from '../datas/listening';
	import PlayBar from './PlayBar.svelte';
  let songs: any = []; 

  const unsubscribe = exportedId.subscribe(async (id) => {
    try {
      const data = await GetSongs(id);
      songs = data;
      console.log(songs);
    } catch (error) {
      console.error('Error:', error);
    }
  });
  onDestroy(() => {
    unsubscribe();
  });

  </script>
  
  {#each songs as song}
  <div class="song-container" id="{song.songId}">
    {"title"}
    <button on:click={()=>SetCurrentSong(song.songId)}>
      <p class="songName">{song.songName}</p>
    </button>
    {"Date Added"}
    <p class="songDateAdded">{song.dateAdded}</p>
    <p class="songDuration">{song.duration}</p>
    <p class="songArtist">{song.songArtist}</p>
    <p class="songAlbum">{song.albumName}</p>
  </div>
{/each}

<PlayBar/>

  
  <style>
/* YourComponent.svelte (style section) */
.song-container {
  display: flex;
  justify-content: space-between; /* You can adjust this as needed */
  margin-bottom: 10px; /* Optional margin between each set of elements */
}

.song-container p {
  flex: 1; /* Distributes space evenly between the paragraphs */
  margin: 0; /* Remove default paragraph margins */
}

  </style>