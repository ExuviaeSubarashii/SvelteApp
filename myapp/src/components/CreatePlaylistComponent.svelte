<script lang="ts">
import { CreatePlaylist } from "../datas/playlisthandler";

</script>
<div>
    <button on:click={CreatePlaylist}><i class='bx bx-plus'></i></button>
</div>
<style>
  button {
      background-color: transparent;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 24px;
      margin: 0 10px;
  }
  button:hover {
      opacity: 0.8;
  }
</style>