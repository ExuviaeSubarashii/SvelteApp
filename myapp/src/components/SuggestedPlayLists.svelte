<script lang="ts">
	import { base } from "$app/paths";
	import { onMount } from "svelte";
  import { page } from '$app/stores';
  import {SetId} from '.././datas/songs'

    import {userTokenValue} from '../datas/user';
    import { baseUrl } from "../datas/store";

  var playlist:any = [];

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
<div class="playlistSummary" role="button" aria-pressed="false" id="{playlist.playListId}">

{#each playlist as playlist (playlist.playListId) }
    <div class="separated">
        <a draggable="false" href="songs/?id={encodeURIComponent(playlist.playListId)}" on:click={() => SetId(playlist.playListId)}>
          <p>
            {playlist.title}
          </p>
        </a>
    </div>
{/each}
</div>

<style>
.playlistSummary{
    color: #b3b3b3;
    text-transform: none;
    line-height: normal;
    font-family: CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif),sans-serif;
    -webkit-font-smoothing: antialiased;
    direction: inherit;
    visibility: visible;
    -webkit-box-direction: normal;
    --min-col-width: 270px;
    animation-delay: -1ms!important;
    animation-duration: 1ms!important;
    animation-iteration-count: 1!important;
    background-attachment: scroll!important;
    scroll-behavior: auto!important;
    transition-delay: 0s!important;
    transition-duration: 0s!important;
    box-sizing: border-box;
    border: 0;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    display: grid;
    grid-auto-rows: var(--item-height);
    grid-template: auto/repeat(auto-fill,minmax(max(var(--min-col-width),25%),1fr));
    grid-template-rows: var(--item-height);
    grid-template-columns: repeat(3,1fr);
    --item-height: 64px;
    grid-gap: 12px;
}
.separated{
    color: #b3b3b3;
    text-transform: none;
    line-height: normal;
    font-family: CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif),sans-serif;
    -webkit-font-smoothing: antialiased;
    direction: inherit;
    visibility: visible;
    -webkit-box-direction: normal;
    animation-delay: -1ms!important;
    animation-duration: 1ms!important;
    animation-iteration-count: 1!important;
    background-attachment: scroll!important;
    scroll-behavior: auto!important;
    transition-delay: 0s!important;
    transition-duration: 0s!important;
    box-sizing: border-box;
    border: 0;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    background-color: #121212;
    border-radius: 25px;
    align-content: center;
    height: var(--item-height);
    overflow: hidden;
    position: relative;
    transition: background-color .3s ease;
    width: 150px;
}
.separated a{
  text-align: center;
    text-transform: none;
    line-height: normal;
    font-family: CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif),sans-serif;
    -webkit-font-smoothing: antialiased;
    direction: inherit;
    visibility: visible;
    -webkit-box-direction: normal;
    -webkit-user-drag: none;
    animation-delay: -1ms!important;
    animation-duration: 1ms!important;
    animation-iteration-count: 1!important;
    background-attachment: scroll!important;
    scroll-behavior: auto!important;
    transition-delay: 0s!important;
    transition-duration: 0s!important;
    box-sizing: border-box;
    touch-action: manipulation;
    color: #fff;
    text-decoration: none;
    border: 0;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    user-select: none;
    font-size: 20px;
}
</style>
