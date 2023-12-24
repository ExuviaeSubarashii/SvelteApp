<script lang="ts">
	import { DeleteFromJustYourLibrary, DeletePlaylist } from '../datas/playlisthandler';
	import { currentUser } from '../datas/user';
	export let playlistId: any;
    export let playlistOwner:any;
</script>

<div>
    <div class="options">
        <div class="remove">
            <button on:click={() => DeleteFromJustYourLibrary(playlistId)}>Remove From Library</button>
        </div>
    </div>
</div>

<style>
	.options button {
		font-size: 20px;
		border-radius: 10px;
		background-color: lightgray;
	}
</style>
