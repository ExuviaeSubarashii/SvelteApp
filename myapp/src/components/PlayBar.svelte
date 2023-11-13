<script lang="ts">
    import { songProperties } from '../datas/listening';
  </script>
  {#if !songProperties}
    <div>
      <h2>No Songs</h2>
      <h4>No Songs</h4>
    </div>
  {:else}
  {"Now Playing"}
    <div>
      <h2>{songProperties.songName}</h2>
      <h4>{songProperties.songArtist}</h4>
    </div>
  {/if}
  