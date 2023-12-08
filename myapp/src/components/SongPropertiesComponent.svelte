<script lang="ts">
	import { UpdatePlayListContents } from '../datas/playlisthandler';
    import {exportedplaylists} from '../datas/playlists'
	import { userIdValue } from '../datas/user';
    let showprops=false;
    let popupplaylists=false;
    export let songId:string;
    var playlists:any= [];
function ShowProperties(){
    showprops=!showprops;
    if(popupplaylists){
    popupplaylists=!popupplaylists;
    }

}
function PopUpPlaylists(){
    popupplaylists=!popupplaylists;

    const unsubscribe = exportedplaylists.subscribe((value) => {
    playlists = value;
    });
    console.log(playlists);
    console.log(userIdValue);

    return unsubscribe;
}

</script>

<div class="propr">
    <button on:click={ShowProperties}>...</button>
    {#if showprops }
    <button on:click={PopUpPlaylists}>Add to Playlist <i class='bx bxs-right-arrow'></i></button>
    {/if}
    <div>
    </div>
{#if popupplaylists}
    {#each playlists as playlist}

    {#if playlist.playListOwnerId==userIdValue}

    <button on:click={()=>{UpdatePlayListContents(playlist.playListId,songId)}}>
        <p>{playlist.playListTitle}</p>
    </button>

    {/if}
    
    {/each}
{/if}

</div>
<style>
    .propr button{
        background-color: transparent;
        color:white;
        border: outset;
        border-color: #111111;
        font: bold;
    }
</style>