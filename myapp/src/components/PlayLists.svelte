<script lang="ts">
    import { onMount } from 'svelte';
  
    const baseUrl = "http://localhost:5128/api";
    let playlists:any = [];
  
    async function GetUserPlayLists() {
      var userToken = "BGNH32";
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(userToken),
        headers: { 'Content-Type': 'application/json' },
      };
  
      try {
        const response = await fetch(`${baseUrl}/Playlist/GetUserPlayLists`, requestOptions);
  
        if (!response.ok) {
          throw new Error(response.statusText);
        }
  
        const data = await response.json();
        playlists = data; // Assuming the API returns an array of playlists
        console.log(playlists);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    onMount(GetUserPlayLists);
  </script>
  
  <!-- Render your playlists data below -->
  {#each playlists as playlist (playlist.playListId)}
  <hr>
    <div class="playlistSummary">
      <p class="playlistId">PlayListId: {playlist.playListId}</p>
      <p class="playlistOwner">PlayListOwner: {playlist.playListOwner}</p>
      <p class="playlistType">PlayListType: {playlist.playListType}</p>
    </div>
  {/each}
  