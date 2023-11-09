<script lang="ts">
	import { onMount } from 'svelte';
  import { GetSongs } from '../datas/songs';
  import { exportedId } from '../datas/store';

  let songs: any = []; 
  
  onMount(async () => {
  try {
    const id = $exportedId;
    const data = await GetSongs(id);
    songs = data;
    console.log(songs)
  } catch (error) {
    console.error('Error:', error);
  }
});
  </script>
  
  {#each songs as song (song.songId)}
    <div>
      <p class="songName">{song.songName}</p>
      <p class="songDateAdded">{song.dateAdded}</p>
      <p class="songDuration">{song.duration}</p>
    </div>
  {/each}
  