<script lang="ts">
	import { base } from "$app/paths";
	import userTokenValue from "../datas/user";
	import PlayLists from "./PlayLists.svelte";
	import { ThePlayListThing } from "../datas/playlistTypes";
    import { howgood } from "../datas/gettoday";
    import PlayBar from "../components/PlayBar.svelte";
    import {showComponent} from '../datas/store'
	import CreatePlaylistComponent from "./CreatePlaylistComponent.svelte";
    import { baseUrl } from "../datas/store";
</script>
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>


<div class="fullbody">
<div class="fixed-tops">
    <button><i class='bx bx-left-arrow-alt'></i></button>
    <button><i class='bx bx-right-arrow-alt'></i></button>
    <p id="howgood">{howgood}</p>
    {#if userTokenValue===null||userTokenValue===undefined}
    <div class="logins">
        <button><a href="login">Login</a></button>
        <button><a href="register">Register</a></button>
    </div>
    {/if}
    <label style="color:gray;"><a href="/"> <i class='bx bx-home'></i>Home</a></label>
    <label style="color:gray;"><a href="/"><i class='bx bx-search'></i> Search</a></label>
    <label style="color:gray;"><a href="/"><i class='bx bx-library'></i>Your Library</a></label>
  
    <div>
        <button style="text-align:center;" on:click={()=> ThePlayListThing("")}>Playlists</button>
        <CreatePlaylistComponent/>
      </div>
     
    <button on:click={()=> ThePlayListThing("Podcast")}>Podcasts & Shows</button>
    <button on:click={()=> ThePlayListThing("Albums")}>Albums</button>
    <button><a style="text-decoration: none; color:white" href="/findsong">Find Songs</a></button>
    <button style="background-color:transparent; color:gray;"><i class='bx bx-search'></i></button>
    <input style="border-radius: 25px; background-color:gray; color:white;" id="searchpl" />
    <div class="currentSong">
      {#if !$showComponent}
      <PlayBar />
      {/if}
  </div>
</div>
  <div class="playLists">
<PlayLists/>
  </div>
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
    .currentSong{
        font-weight: bold;
        font-size: medium;
        background-color: #446277;
        border-radius: 20px;
    }
  .fullbody {
      text-align: center;
      background-color: #111;
      color: white;
      resize: horizontal;
      overflow: auto;
      padding: 20px;
      border-radius: 25px;
      border-color: gray;
      top: 150;
      left: 150;
      height: 100%;
      width: 300px;
      min-width: 150px;
      max-width: 900px;
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
  
  button:active, label a:active {
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