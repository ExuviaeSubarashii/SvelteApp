<script lang="ts">
	import { onMount } from 'svelte';
	import { Search, playlistdata, songsdata, userdata } from '../datas/search';
	export let searchtext = '';
	onMount(async () => {
		await Search(searchtext);
		console.log('playlist:', $playlistdata);
		console.log('songs:', $songsdata);
		console.log('user:', $userdata);
	});
</script>

{#if $playlistdata && $songsdata && $userdata}
	<div class="fullbody">
		<!-- playlists -->
		<br />
		{#if $playlistdata.length > 0}
			<div class="playlists" style="border-color: lightgreen;">
				<h1>Playlists</h1>
				{#each $playlistdata as playlist}
					<div class="playlist">
						<minidenticon-svg username={playlist.playListTitle.trim()} />
						<p><a href="/songs/{playlist.playListId}">{playlist.playListTitle.trim()}</a></p>
					</div>
				{/each}
			</div>
		{/if}
		<!-- songs -->
		<br />
		{#if $songsdata.length > 0}
			<div class="songs" style="border-color: darkblue;">
				<h1>Songs</h1>
				<br />
				{#each $songsdata as song}
					<div class="song">
						<minidenticon-svg username={song.songName} />
						<p><a href="/">{song.songName.trim()}</a></p>
						<p>{song.songArtist}</p>
						<p>{song.albumName}</p>
					</div>
				{/each}
			</div>
		{/if}
		<!-- user -->
		<br />
		{#if $userdata.length > 0}
			<div class="users" style="border-color: purple;">
				<h1>Users</h1>
				<br />
				{#each $userdata as user}
					<div class="user">
						<minidenticon-svg username={user.userName} />
						<p><a href="/user/{user.id}">{user.userName.trim()}</a></p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
{:else}
	<div>
		<h1>Loading</h1>
	</div>
{/if}

<style>
	.fullbody {
		display: grid;
		grid-auto-flow: column;
		column-gap: 10px;
		color: white;
		position: fixed;
		top: 150px;
		left: 350px;
	}
	.users,
	.songs,
	.playlists {
		border-style: solid;
		display: flex;
		flex-direction: row;
		align-content: center;
		align-items: center;
		overflow: auto;
		max-height: 550px;
		overflow-x: auto;
	}
	.users::-webkit-scrollbar,
	.songs::-webkit-scrollbar,
	.playlists::-webkit-scrollbar {
		background-color:#121212;
		width: 20px;
	}
	.users::-webkit-scrollbar-thumb,
	.songs::-webkit-scrollbar-thumb,
	.playlists::-webkit-scrollbar-thumb {
		background-color: #888; /* Example thumb color */
	}

	.users::-webkit-scrollbar-thumb:hover,
	.songs::-webkit-scrollbar-thumb:hover,
	.playlists::-webkit-scrollbar-thumb:hover {
		background-color: #555; /* Example thumb color on hover */
	}

	.users::-webkit-scrollbar-track,
	.songs::-webkit-scrollbar-track,
	.playlists::-webkit-scrollbar-track {
		background-color: #f1f1f1; /* Example track color */
	}
	.user,
	.song,
	.playlist {
		align-content: center;
		text-align: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		width: 550px;
		background-color: #121212;
	}
	.user,
	.song,
	.playlist,
	a {
		text-decoration: none;
		color: white;
		border-color: purple;
		text-align: center;
		padding: 5px;
	}
	p,
	a {
		text-indent: 10px;
		font-family: sans-serif;
	}
	minidenticon-svg {
		width: 90px;
		height: 90px;
		border-radius: 50%;
		background-color: transparent;
		margin: 5px;
	}
</style>
