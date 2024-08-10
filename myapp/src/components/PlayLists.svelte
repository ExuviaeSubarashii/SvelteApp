<script lang="ts">
	import { onMount } from 'svelte';
	import { GetUserPlayLists, exportedplaylists } from '../datas/playlists';
	import PlaylistOptions from './PlaylistOptions.svelte';
	let playlists: any = [];
	var userprops: any = [];
	var selectedPlaylist: any = null;

	export let propertyState = false;
	var selectedPlaylist: any = null;

	function ChangeState(playlist: any) {
		selectedPlaylist = playlist;
		propertyState = !propertyState;
		console.log('playlist options:',propertyState);
	}
	onMount(() => {
		const unsubscribe = exportedplaylists.subscribe((value) => {
			playlists = value;
		});
		GetUserPlayLists();
		return unsubscribe;
	});
</script>

<div class="scrollable-container">
	{#if playlists.length > 0}
		{#each $exportedplaylists as playlist (playlist.playListId)}
			<hr />
			<div
				class="playlistSummary"
				tabindex="0"
				role="button"
				aria-pressed="false"
				id={playlist.playListId}
			>
				<h3>
					<a
						class="playlistTitle"
						style="text-decoration: none;"
						href="/songs/{encodeURIComponent(playlist.playListId)}">{playlist.playListTitle}</a
					>
				</h3>
				<minidenticon-svg width="50px" height="50px" username={playlist.playListTitle} />
				<h4 class="playlistOwner" >
					{playlist.playListType}<i class="bx bxs-circle" />
					{playlist.playListOwner}
				</h4>

				<button on:click={() => ChangeState(playlist)} class="showproperties"
					><i class="bx bx-dots-horizontal-rounded" /></button
				>

				{#if propertyState && selectedPlaylist === playlist}
					<PlaylistOptions
						playlistId={playlist.playListId}
						playlistOwner={playlist.playListOwnerId}
					/>
				{/if}
			</div>
		{/each}
	{:else}
		<div class="playlistSummary">
			<h3>You Have No Playlist Created. Create Some by Clicking +.</h3>
		</div>
	{/if}
</div>

<style>
	minidenticon-svg {
		width:  90px;
		height: 90px;
		border-radius: 50%;
		background-color: transparent;
		display: inline-block;
		margin: 5px;
	}
	.showproperties :hover {
		color: gray;
	}
	.showproperties {
		left: 150px;
		font-size: 35px;
		border-radius: 20px;
		text-align: center;
		background-color: lightgray;
		color: black;
	}
	.scrollable-container {
		max-height: 550px;
		width: 100%;

		overflow-y: auto;
		text-decoration: none;
	}
	.playlistSummary {
		cursor: pointer;
		text-decoration: none;
		font-family: sans-serif;
		min-height: 100%;
		justify-content: center;
		flex-direction: column;
	}
	.playlistSummary a {
		color: #b3b3b3;
		text-transform: none;
		line-height: normal;
	}
</style>
