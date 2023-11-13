<script lang="ts">
	import { base } from "$app/paths";
	import { onMount } from "svelte";
  import { page } from '$app/stores';
  import {SetId} from '.././datas/songs'

    import {userTokenValue} from '../datas/user';
  const baseUrl = "http://localhost:5128/api";
  let playlist:any = [];

  async function GetUserSuggestedPlayLists() {

const requestOptions = {
  method: 'POST',
  body: JSON.stringify(userTokenValue),
  headers: { 'Content-Type': 'application/json' },
};
try {
  const response = await fetch(`${baseUrl}/Playlist/GetSuggestedPlayLists`, requestOptions);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  playlist = data;
  console.log(`suggested`,playlist);
} catch (error) {
  console.error('Error:', error);
}
}
function GetPlaylistId(id:any){
console.log(id);
}
    onMount(GetUserSuggestedPlayLists);
</script>

{#each playlist as playlist (playlist.playListId) }

  <div class="playlistSummary" tabindex="1" role="button" aria-pressed="false" id="{playlist.playListId}">
    <h3>
      <button class="playlistTitle">
        <a  href="songs/?id={encodeURIComponent(playlist.playListId)}" on:click={() => SetId(playlist.playListId, `songs/?id=${encodeURIComponent(playlist.playListId)}`)}>{playlist.title}</a>
      </button>
    </h3>
  </div>
{/each}
<style>
  .playlistTitle{
    background-color: transparent;
    border-radius:10px ;
  }
  .playlistTitle a{
    text-decoration: none;
    background-color: transparent;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 24px;
      margin: 0 10px;
  }
</style>
