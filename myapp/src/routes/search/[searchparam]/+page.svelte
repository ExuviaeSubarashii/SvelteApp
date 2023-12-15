<script lang="ts">
	import { Search, playlistdata, songsdata, userdata } from '../../../datas/search';
import { minidenticon } from 'minidenticons'

	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data.props.searchdata);
	Search(data.props.searchdata.param);
</script>

<div class="fullbody">
	<!-- playlists -->
	<br>
	<div class="playlists">
		<h1>Playlists</h1>
		{#each playlistdata as playlist}
			<div class="playlist">
				<minidenticon-svg username={playlist.playListTitle.trim()} />
				<p><a href="/">{playlist.playListTitle.trim()}</a></p>
			</div>
		{/each}
	</div>
	<!-- songs -->
	<br>
	<div class="songs">
		<h1>Songs</h1>
		{#each songsdata as song}
			<div class="song">
				<minidenticon-svg username={song.songName} />
				<p><a href="/">{song.songName.trim()}</a></p>
				<p>{song.songArtist}</p>
				<p>{song.albumName}</p>
			</div>
		{/each}
	</div>
	<!-- user -->
	<br>
	<div class="users">
		<h1>Users</h1>
		{#each userdata as user}
			<div class="user">
				<minidenticon-svg username={user.userName} />
				<p><a href="/">{user.userName.trim()}</a></p>
			</div>
		{/each}
	</div>
</div>
<style>
	.fullbody{
		display: grid;
		grid-auto-flow: row;
		column-gap: 10px;
		color:white;
	}
	.users,.songs,.playlists{
		display: flex;
	}
	.user,.song,.playlist{
		background-color: gray;
		isolation: isolate;
		padding: 16px;
		position: relative;
	}
	minidenticon-svg {
		width: 90px;
		height: 90px;
		border-radius: 50%;
		background-color: transparent;
		margin: 5px;
	}
</style>
