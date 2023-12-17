<script lang="ts">
	import { currentUser } from '../datas/user';
	import { howgood } from '../datas/gettoday';
	import PlayBar from '../components/PlayBar.svelte';
	import { showComponent } from '../datas/store';
	import CreatePlaylistComponent from './CreatePlaylistComponent.svelte';
	import PlayLists from './PlayLists.svelte';
	import {
		GetPodcasts,
		GetUserPlayLists,
		PlaylistSearch,
		exportedplaylists
	} from '../datas/playlists';
	let plname = '';
	let normalSize=false;
	console.log("Currently logged in as:",currentUser);
	function MinimizeLibrary() {
		const sidebarDiv = document.getElementById('fullbody');
		let normalWidth="300px";
		let minWidth="150px";
		if (sidebarDiv) {
			if(normalSize){
				sidebarDiv.style.width = normalWidth;
			}
			else{
				sidebarDiv.style.width = minWidth;
			}
			normalSize = !normalSize;
		}
		
	}
</script>

<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

<div class="fullbody" id="fullbody">
	{#if currentUser.userToken!=="undefined"}
		<div class="fixed-tops">
			<p id="howgood">{howgood}</p>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label style="color:gray;"><a href="/"> <i class="bx bx-home" />Home</a></label>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label style="color:gray;"><a href="/search"><i class="bx bx-search" /> Search</a></label>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label on:click={MinimizeLibrary} style="color:gray;"
			
				><a href="/"><i class="bx bx-library" />Your Library</a></label
			>
			
			<div style="display:flex;">
				<CreatePlaylistComponent />
				<button on:click={() => GetUserPlayLists()}><i class="bx bx-refresh" /></button>
			</div>
			<button on:click={() => GetPodcasts('Podcast')}>Podcasts & Shows</button>
			<button on:click={() => GetPodcasts('Albums')}>Albums</button>
			<button><a style="text-decoration: none; color:white" href="/findsong">Find Songs</a></button>
			<input
				style="border-radius: 25px; background-color:gray; color:white;"
				placeholder="Search Your Library"
				id="searchpl"
				type="text"
				bind:value={plname}
				on:input={() => PlaylistSearch(plname)}
			/>

			<div class="currentSong">
				{#if !$showComponent}
					<PlayBar />
				{/if}
			</div>
		</div>
		<div class="playLists">
			{#key exportedplaylists}
				<PlayLists />
			{/key}
		</div>
	{:else}
		<button><a href="login">Login</a></button>
		<button><a href="register">Register</a></button>
	{/if}
</div>

<style>
	::-webkit-scrollbar {
		width: 15px;
	}
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
	::-webkit-scrollbar-thumb {
		background: #888;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
	.currentSong {
		font-weight: bold;
		font-size: medium;
		background-color: #446277;
		border-radius: 20px;
	}
	.fullbody {
		margin-top: 50px;
		border-style: solid;
		text-align: center;
		background-color: #111;
		color: white;
		resize: horizontal;
		overflow: auto;
		border-radius: 25px;
		border-color: gray;
		height: 100%;
		min-width: 150px;
		max-width: 780px;
		width: 300px;
	}

	button {
		background-color: transparent;
		color: white;
		border: none;
		cursor: pointer;
		font-size: 24px;
		margin: 0 10px;
	}

	button:hover {
		opacity: 0.8;
	}

	#howgood {
		font-size: 18px;
		font-weight: bold;
		margin: 10px;
	}

	label a {
		text-decoration: none;
		color: gray;
		display: block;
		margin: 10px;
	}

	label a:hover {
		color: white;
	}

	button:active,
	label a:active {
		color: #0077cc; /* Change color when pressed */
	}

	input#searchpl {
		border-radius: 25px;
		background-color: gray;
		color: white;
		padding: 10px;
		margin: 10px;
		border: none;
	}

	input#searchpl::placeholder {
		color: white; /* Input placeholder text color */
	}
</style>
