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
  --fallback-fonts: Helvetica Neue,helvetica,arial,Hiragino Kaku Gothic Pro,Meiryo,MS Gothic;
    --background-noise: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=");
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
    direction: inherit;
    visibility: visible;
    -webkit-box-direction: normal;
    --min-col-width: 270px;
    --item-height: 64px;
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
    background-color: hsla(0,0%,100%,.1);
    border-radius: 4px;
    height: var(--item-height);
    overflow: hidden;
    position: relative;
    transition: background-color .3s ease;
}
.separated a{
  --fallback-fonts: Helvetica Neue,helvetica,arial,Hiragino Kaku Gothic Pro,Meiryo,MS Gothic;
    --background-noise: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=");
    --scrollbar-vertical-size: 16px;
    --scrollbar-horizontal-size: 16px;
    --top-bar-z-index: 1;
    --left-sidebar-width: 420px;
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
    direction: inherit;
    visibility: visible;
    --min-col-width: 270px;
    --item-height: 64px;
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
}
</style>
