<script lang="ts">
	import { base } from "$app/paths";
	import { onMount } from "svelte";

    import {userTokenValue} from '../datas/user';
  const baseUrl = "http://localhost:5128/api";
  let playlists:any = [];

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
  playlists = data;
  console.log(`suggested`,playlists);
} catch (error) {
  console.error('Error:', error);
}
}
function GetPlaylistId(id:any){
console.log(id);
}
    onMount(GetUserSuggestedPlayLists);
</script>

{#each playlists as playlist (playlist.playListId) }
  <div class="playlistSummary" tabindex="1" role="button" aria-pressed="false" id="{playlist.playListId}" on:click={() => GetPlaylistId(playlist.playListId)}>
    <p class="playlistTitle">{playlist.title}</p>
  </div>
{/each}
