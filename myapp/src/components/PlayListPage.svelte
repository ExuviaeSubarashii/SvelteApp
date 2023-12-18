<script lang="ts">
	import { onMount } from 'svelte';
	import { GetSongs, exportedplaylistcontents, isFavorited } from '../datas/songs';
	import { SetCurrentSong } from '../datas/listening';
	import { showComponent } from '../datas/store';
	import { AddPlaylistToFavorite, RemovePlaylistContents, responseMessageStore } from '../datas/playlisthandler';
	import currentUser from '../datas/user';
	import { ReturnIfUserIsNotLoggedIn } from '../datas/responseMessage';
	var songs: any = [];
	export let exportedIdfromdata: any = '';
	export async function recreateComponent(songId: any) {
		if (currentUser.isLoggedIn) {
			$showComponent = !$showComponent;
			await SetCurrentSong(songId);
			$showComponent = !$showComponent;
		} else {
			await ReturnIfUserIsNotLoggedIn('Must be logged in');
		}
	}
	onMount(() => {
		GetSongs(exportedIdfromdata);
		const unsubscribe = exportedplaylistcontents.subscribe((value) => {
			songs = value;
		});
		return unsubscribe;
	});
</script>
<div class="song-list-container" role="row" aria-rowindex="1">
	{#if $isFavorited}
  <h1>Alread Favorited</h1>
{:else}
  <button on:click={() => AddPlaylistToFavorite(exportedIdfromdata)}>Add to favorites</button>
{/if}
	{#if songs.length > 0}
		{#each songs as song}
			<div class="song-container" id={song.songId}>
				<button class="play-button" on:click={() => recreateComponent(song.songId)}>
					<i class="bx bx-play-circle" />
				</button>
				<div class="song-details">
					<div class="detail">
						<p class="label">Song Name:</p>
						<p class="data">{song.songName}</p>
					</div>

					<div class="detail">
						<p class="label">Duration:</p>
						<p class="data">{song.duration}</p>
					</div>

					<div class="detail">
						<p class="label">Song Artist:</p>
						<p class="data">{song.songArtist}</p>
					</div>

					<div class="detail">
						<p class="label">Album Name:</p>
						<p class="data">{song.albumName}</p>
					</div>
					{#if currentUser.isLoggedIn}
						
					<button
					on:click={() => {
						RemovePlaylistContents(exportedIdfromdata, song.songId);
					}}><i class="bx bx-x" /></button
					>
					{/if}
				</div>
			</div>
		{/each}
	{:else}
		<div class="song-container">
			<div class="song-details">
				<h1>It seems songs were in another playlist. Add Some!</h1>
			</div>
		</div>
	{/if}
</div>

<style>
	.song-list-container {
		max-height: 950px;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		color: white;

		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%);
		background-color: gray;
		border-radius: 25px;
		padding: 15px;
		align-items: center;
	}
	.song-list-container p {
		color: white;
	}

	.song-container {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		background-color: gray;
	}

	.play-button {
		background-color: transparent;
		color: black;
		border: none;
		outline: none;
		font-size: 35px;
	}

	.song-details {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.detail {
		margin-right: 20px;
	}

	.detail p {
		margin: 0;
		font-size: 16px;
	}

	.label {
		font-weight: bold;
		margin-bottom: 2px;
	}

	.data {
		color: #555;
	}
</style>
