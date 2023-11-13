<script lang="ts">
    import { onMount } from 'svelte';
  import GetSongs from '../components/PlayListPage.svelte';
  import { page } from '$app/stores';
  import {SetId} from '.././datas/songs'
import {GetPlaylistByTag} from '../datas/playlistTypes'
import {GetUserPlayLists, exportedplaylists} from '../datas/playlists'
let playlists: any[] = [];

async function onComponentMount() {
  await GetUserPlayLists();
  playlists = exportedplaylists;
}

onMount(onComponentMount);
  </script>
  <!-- Render your playlists data below -->
  {#each playlists as playlist (playlist.playListId)}
  <hr>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="playlistSummary" tabindex="0" role="button" aria-pressed="false" id="{playlist.playListId}">
    <h3>
      <a class="playlistTitle" href="songs?id={encodeURIComponent(playlist.playListId)}" on:click={() => SetId(playlist.playListId)}>{playlist.playListTitle}</a>
    </h3>
    <h4 class="playlistOwner">{playlist.playListOwner}</h4>
    <p class="playlistType">{playlist.playListType}</p>
    <p class="playListCount">{playlist.playListCount} Songs</p>
  </div>
{/each}
<style>
  .playlistSummary,a {
    text-decoration: none;
   font-family: Arial, Helvetica, sans-serif;
   background-color: transparent;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 17px;
      margin: 0 10px;
  }
  .playlistSummary p,h4{
    color:gray;
  }
</style>

