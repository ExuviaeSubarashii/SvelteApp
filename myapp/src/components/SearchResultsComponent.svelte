<script lang="ts">
	import { onMount } from 'svelte';
	import { Search, playlistdata, songsdata,userdata}from '../datas/search';
	import { minidenticon } from 'minidenticons';
	export let searchtext='';
	onMount(async ()=>{
		await Search(searchtext);
		console.log('playlist:',$playlistdata)
		console.log('songs:',$songsdata)
		console.log('user:',$userdata)
	})
</script>

{#if $playlistdata && $songsdata && $userdata}
	<div class="fullbody">
		<!-- playlists -->
		<br>
		{#if $playlistdata.length>0}
			
		<div class="playlists">
			<h1>Playlists</h1>
			{#each $playlistdata as playlist}
				<div class="playlist">
					<minidenticon-svg username={playlist.playListTitle.trim()} />
					<p><a href="/">{playlist.playListTitle.trim()}</a></p>
				</div>
			{/each}
		</div>
		{/if}
		<!-- songs -->
		<br />
		{#if $songsdata.length>0}
			
		<div class="songs">
			<h1>Songs</h1>
			<br>
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
		{#if $userdata.length>0}
			
		<div class="users">
			<h1>Users</h1>
			<br>
			{#each $userdata as user}
			<div class="user">
				<minidenticon-svg username={user.userName} />
				<p><a href="/user/{user.id}" target="_blank">{user.userName.trim()}</a></p>
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
		display: flex;
		align-content: center;
		align-items: center;
		overflow: hidden;
	}
	.user,
	.song,
	.playlist,a  {
		background-color: gray;
		border-radius: 20px;
		border-style: solid;
		text-decoration: none;
		color:white;
		border-color: purple;
		text-align: center;
		padding: 5px;
	}
	p,a{
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
