<script lang="ts">
	import { base } from "$app/paths";
	import userTokenValue, { usertoken } from "../datas/user";
	import PlayLists from "./PlayLists.svelte";
const baseUrl = "http://localhost:5128/api";
let questions = [];
  let howgood = "";
  
  

  function GetToday() {
      var currentTime = new Date();
      var currentHour = currentTime.getHours();

      if (currentHour >= 0 && currentHour <= 11) {
          howgood = "Good Morning";
          console.log("Good Morning");
          console.log(userTokenValue)
      } else if (currentHour >= 12 && currentHour <= 18) {
          howgood = "Good Afternoon";
          console.log("Afternoon");
      } else if (currentHour >= 19 && currentHour <= 24) {
          howgood = "Good Evening";
          console.log("Evening");
          
      }
  }
  GetToday();

</script>

<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

<div class="fullbody">
  <button><i class='bx bx-left-arrow-alt'></i></button>
  <button><i class='bx bx-right-arrow-alt'></i></button>
  <p id="howgood">{howgood}</p>

  {#if userTokenValue===null||userTokenValue===undefined}
  <div class="logins">
      <button><a href="login">Login</a></button>
      <button><a href="register">Register</a></button>
  </div>
  {/if}
  <label style="color:gray;"><a> <i class='bx bx-home'></i>Home</a></label>
  <label style="color:gray;"><a><i class='bx bx-search'></i> Search</a></label>
  <label style="color:gray;"><a><i class='bx bx-library'></i>Your Library</a></label>
  <div>
      <button style="text-align:center;">Playlists</button>
      <button><i class='bx bx-plus'></i></button>
    </div>
  <button>Podcasts & Shows</button>
  <button>Albums</button>
  <button style="background-color:transparent; color:gray;"><i class='bx bx-search'></i></button>
  <input style="border-radius: 25px; background-color:gray; color:white;" id="searchpl" />
  <div class="playLists">
<PlayLists/>
  </div>
</div>

<style>
  .fullbody {
      text-align: center;
      background-color: #111;
      color: white;
      resize: both;
      overflow: auto;
      height: 100%;
      width: 300px;
      padding: 20px;
      border-radius: 10px;
      position: fixed;
      top: 0;
      left: 0;
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
      opacity: 0.8; /* Slight opacity on hover */
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