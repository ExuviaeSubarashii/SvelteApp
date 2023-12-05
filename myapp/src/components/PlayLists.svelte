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
		console.log(propertyState);
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
		{#each playlists as playlist (playlist.playListId)}
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
						href="/songs/{encodeURIComponent(playlist.playListId)}"
						>{playlist.playListTitle}</a
					>
				</h3>
				<h4 class="playlistOwner" id={playlist.playListOwnerId}>
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
		overflow-y: auto;
		text-decoration: none;

	}
	.playlistSummary{
		cursor: pointer;
		text-decoration: none;
	}
	.playlistSummary a {
		color: #b3b3b3;
		text-transform: none;
		line-height: normal;
		font-family: CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek,
			CircularSp-Deva, var(--fallback-fonts, sans-serif), sans-serif;
		-webkit-font-smoothing: antialiased;
		user-select: none;
		direction: inherit;
		visibility: visible;
		animation-delay: -1ms !important;
		animation-duration: 1ms !important;
		animation-iteration-count: 1 !important;
		background-attachment: scroll !important;
		scroll-behavior: auto !important;
		transition-delay: 0s !important;
		transition-duration: 0s !important;
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
