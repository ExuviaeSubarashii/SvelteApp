<script lang="ts">
    import { onMount } from 'svelte';
  import GetSongs from '../components/PlayListPage.svelte';
  import { page } from '$app/stores';
  import {SetId} from '.././datas/songs'
import {GetPlaylistByTag} from '../datas/playlistTypes'
import {GetUserPlayLists, exportedplaylists} from '../datas/playlists'
var playlists: any[] = [];

async function onComponentMount() {
  await GetUserPlayLists();
  playlists = exportedplaylists;
}

onMount(onComponentMount);
  </script>

  {#each playlists as playlist (playlist.playListId)}
  <hr>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="playlistSummary" tabindex="0" role="button" aria-pressed="false" id="{playlist.playListId}">
    <h3>
      <a class="playlistTitle" href="/songs?id={encodeURIComponent(playlist.playListId)}" on:click={() => SetId(playlist.playListId)}>{playlist.playListTitle}</a>
    </h3>
    <h4 class="playlistOwner">{playlist.playListType} <i class='bx bxs-circle'></i> {playlist.playListOwner}</h4>
    <p class="playListCount">{playlist.playListCount} Songs</p>
  </div>
{/each}
<style>
  .playlistSummary a {
    --fallback-fonts: Helvetica Neue,helvetica,arial,Hiragino Kaku Gothic Pro,Meiryo,MS Gothic;
    --scrollbar-vertical-size: 16px;
    --scrollbar-horizontal-size: 16px;
    --top-bar-z-index: 1;
    --left-sidebar-width: 420px;
    color: #b3b3b3;
    text-transform: none;
    line-height: normal;
    font-family: CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif),sans-serif;
    -webkit-font-smoothing: antialiased;
    --content-max-width: 1955px;
    --content-spacing: clamp(16px,16px + (100vw - var(--left-sidebar-width,0px) - var(--panel-width,0px) - 600px)/424*8,24px);
    --background-base: #121212;
    --background-highlight: #1a1a1a;
    --background-press: #000;
    --background-elevated-base: #242424;
    --background-elevated-highlight: #2a2a2a;
    --background-elevated-press: #000;
    --background-tinted-base: hsla(0,0%,100%,.07);
    --background-tinted-highlight: hsla(0,0%,100%,.1);
    --background-tinted-press: hsla(0,0%,100%,.04);
    --background-unsafe-for-small-text-base: #121212;
    --background-unsafe-for-small-text-highlight: #121212;
    --background-unsafe-for-small-text-press: #121212;
    --text-base: #fff;
    --text-subdued: #a7a7a7;
    --text-bright-accent: #1ed760;
    --text-negative: #f15e6c;
    --text-warning: #ffa42b;
    --text-positive: #1ed760;
    --text-announcement: #3d91f4;
    --essential-base: #fff;
    --essential-subdued: #727272;
    --essential-bright-accent: #1ed760;
    --essential-negative: #e91429;
    --essential-warning: #ffa42b;
    --essential-positive: #1ed760;
    --essential-announcement: #0d72ea;
    --decorative-base: #fff;
    --decorative-subdued: #292929;
    --panel-gap: 8px;
    --left-sidebar-grid-area-z-index: 4;
    --above-everything-except-now-playing-bar-z-index: 5;
    --above-main-and-now-playing-view-grid-area: 6;
    --now-playing-bar-grid-area-z-index: calc(var(--above-everything-except-now-playing-bar-z-index) + 1);
    --parents-essential-base: #fff;
    --top-bar-opacity: 0.0;
    cursor: default;
    user-select: none;
    direction: inherit;
    visibility: visible;
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
    vertical-align: baseline;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-height: 100%;
    padding: 0 8px 8px;
  }
</style>

