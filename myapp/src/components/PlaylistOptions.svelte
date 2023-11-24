<script lang="ts">
	import { DeletePlaylist } from '../datas/playlisthandler';
	import { userIdValue } from '../datas/user';
	export let playlistId: any;
    export let playlistOwner:any;
</script>
{#if playlistOwner==userIdValue}
    
<div class="options">
    <div class="delete">
        <button on:click={() => DeletePlaylist(playlistId)}>Delete</button>
	</div>
	<div class="edit">
        <button>Edit Properties</button>
	</div>
</div>
{:else}
<div>
    <div class="options">
        <div class="remove">
            <button>Remove From Library</button>
        </div>
    </div>
</div>
{/if}

<style>
	.options button {
		font-size: 20px;
		border-radius: 10px;
		background-color: lightgray;
	}
</style>
