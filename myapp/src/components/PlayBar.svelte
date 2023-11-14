<script lang="ts" module="data">
  let data:any;
    import { songProperties } from '../datas/listening';
  </script>
  {#if !songProperties}
    <div>
      <h2>No Songs</h2>
      <h4>No Songs</h4>
    </div>
  {:else}
    <div>
      <p>{"Now Playing"}</p>
      <h2>{songProperties.songName}</h2>
      <h4>{songProperties.songArtist}</h4>
    </div>
  {/if}