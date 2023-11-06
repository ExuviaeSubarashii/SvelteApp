<script lang="ts">
    import { onMount } from 'svelte';
	import {userTokenValue} from '../datas/user';
  
    const baseUrl = "http://localhost:5128/api";
    let playlists:any = [];

    async function GetUserPlayLists() {

      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(userTokenValue),
        headers: { 'Content-Type': 'application/json' },
      };
      try {
        const response = await fetch(`${baseUrl}/Playlist/GetUserPlayLists`, requestOptions);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        playlists = data;
        console.log(`sidebar`,playlists);


      } catch (error) {
        console.error('Error:', error);
      }
    }
    function GetPlaylistId(id:any){
      console.log(id);
    }
    onMount(GetUserPlayLists);
  </script>
  
  <!-- Render your playlists data below -->
  {#each playlists as playlist (playlist.playListId)}
  <hr>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="playlistSummary" tabindex="0" role="button" aria-pressed="false" id="{playlist.playListId}" on:click={() => GetPlaylistId(playlist.playListId)}>
      <p class="playlistTitle">{playlist.playListTitle}</p>
      <p class="playlistOwner">{playlist.playListOwner}</p>
      <p class="playlistType">{playlist.playListType}</p>
      <p class="playListCount">{playlist.playListCount} Songs</p>
    </div>
  {/each}