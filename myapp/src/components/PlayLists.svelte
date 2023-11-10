<script lang="ts">
    import { onMount } from 'svelte';
	import {userTokenValue} from '../datas/user';
  import GetSongs from '../components/PlayListPage.svelte';
  import { page } from '$app/stores';
  import { exportedId } from '../datas/store';
  
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
    function SetId(id:any,url:any){
      exportedId.set(id);
      console.log(exportedId);
    }

    onMount(GetUserPlayLists);
  </script>
  
  <!-- Render your playlists data below -->
  {#each playlists as playlist (playlist.playListId)}
  <hr>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="playlistSummary" tabindex="0" role="button" aria-pressed="false" id="{playlist.playListId}">
    <h3>
      <a class="playlistTitle" href="songs/?id={encodeURIComponent(playlist.playListId)}" on:click={() => SetId(playlist.playListId, `songs/?id=${encodeURIComponent(playlist.playListId)}`)}>{playlist.playListTitle}</a>
    </h3>
    <h4 class="playlistOwner">{playlist.playListOwner}</h4>
    <p class="playlistType">{playlist.playListType}</p>
    <p class="playListCount">{playlist.playListCount} Songs</p>
  </div>
{/each}
<style>
  .playlistSummary {
   font-family: Arial, Helvetica, sans-serif;
  }
</style>

