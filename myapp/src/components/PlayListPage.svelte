<script lang="ts">
        let songs:any = [];
        import { onMount } from 'svelte';
    export async function GetSongs(){
      var id="d7c7eb0e-034d-48b2-9a09-64ef57ffc940"
        const baseUrl = "http://localhost:5128/api";        
        const requestOptions = {
        method: 'POST',
        body: JSON.stringify(id),
        headers: { 'Content-Type': 'application/json' },
      };
      try {
        const response = await fetch(`${baseUrl}/Playlist/GetPlaylistContents`, requestOptions);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        songs = data;
        console.log(`main`,songs);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    onMount(GetSongs)
</script>
{#each songs as song (song.songId)}
    <div>
        <p class="songName">{song.songName}</p>
        <p class="songDateAdded">{song.dateAdded}</p>
        <p class="songDuration">{song.duration}</p>
    </div>
{/each}

