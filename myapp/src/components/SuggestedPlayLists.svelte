<script lang="ts">
	import { onMount } from 'svelte';
	import { minidenticon } from 'minidenticons';

	import {
		GetUserSuggestedPlayLists,
		exportedsuggestedplaylist
	} from '../datas/suggestedplaylists';
	var playlist: any = [];
	onMount(async () => {
		await GetUserSuggestedPlayLists();
		const unsubscribe = exportedsuggestedplaylist.subscribe((value: any) => {
			playlist = value;
		});
		return unsubscribe;
	});
</script>

<div class="playlistSummary" role="button" aria-pressed="false" id={playlist.playListId}>
	{#each playlist as playlist (playlist.playListId)}
		<div class="separated">
			<minidenticon-svg username={playlist.title.trim()} />
			<a draggable="true" href="songs/{encodeURIComponent(playlist.playListId)}">
				{playlist.title}
			</a>
		</div>
	{/each}
</div>

<style>
	minidenticon-svg {
		width: 50px;
		height: 50px;
		background-color: transparent;
		margin: 5px;
	}
	.playlistSummary {
		color: #b3b3b3;
		font-family: sans-serif;
		border: 0;
		margin: 0;
		padding: 0;
		vertical-align: baseline;
		display: grid;
		grid-auto-rows: var(--item-height);
		grid-template: auto/repeat(auto-fill, minmax(max(var(--min-col-width), 25%), 1fr));
		grid-template-rows: var(--item-height);
		grid-template-columns: repeat(3, 1fr);
		--item-height: 64px;
		grid-gap: 12px;
		width:fit-content;
    position: relative;
	}
	.separated {
		align-items: center;
		display: flex;
		color: #b3b3b3;
		border: 0;
		margin: 0;
		padding: 0;
		background-color: #121212;
		border-radius: 25px;
		overflow: hidden;
		position: relative;
		transition: background-color 0.3s ease;
		width:fit-content;
	}
	.separated a {
		text-align: center;		
		color: #fff;
		text-decoration: none;
		border: 0;
		margin: 0;
		padding: 0;
		vertical-align: baseline;
		user-select: none;
		font-size: 20px;
	}
  
</style>
