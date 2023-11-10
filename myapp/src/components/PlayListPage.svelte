<script lang="ts">
	import { onDestroy } from 'svelte';
  import { GetSongs } from '../datas/songs';
  import { exportedId } from '../datas/store';

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
  
  {#each songs as song (song.songId)}
  <div class="song-container">
    <p class="songName">{song.songName}</p>
    <p class="songDateAdded">{song.dateAdded}</p>
    <p class="songDuration">{song.duration}</p>
  </div>
{/each}

  
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