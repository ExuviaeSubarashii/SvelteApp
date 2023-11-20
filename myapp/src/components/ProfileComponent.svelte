<script lang="ts">
    import { onMount } from "svelte";
    import { GetUserPropertiesById, userPropertiesbyid } from "../datas/userproperties";
  
    export let profileid: any;
  
    async function onComponentMount() {
      await GetUserPropertiesById(profileid);
    }
  
    onMount(onComponentMount);
  
    $: userName = userPropertiesbyid.userName;
    $: followers = userPropertiesbyid.followers;
    $: following = userPropertiesbyid.following;
  </script>
  
  <div>
    <div class="profile-prop" role="row">
      <h4>Profile</h4>
      <h1 style="font-size: 25px;">{userName}</h1>
      <p><a href="/user/follows/{encodeURIComponent(profileid)}">{"Followers: " + followers}</a></p>
      <p><a href="/user/following/{encodeURIComponent(profileid)}">{"Following: " + following}</a></p>
    </div>
  </div>
  
  <style>
    .profile-prop {
      position: absolute;
      color: white;
      top: 150px;
      left: 950px;
      background-color: gray;
      width: 500px;
      height: 350px;
    }
  
    .profile-prop p {
      font-size: 30px;
      text-align: center;
    }
  
    .profile-prop h4 {
      font-size: 30px;
    }
  
    .profile-prop h1 {
      font-size: 150px;
      text-align: center;
    }
  
    .profile-prop a {
      text-decoration: none;
      color: lightgray;
    }
  </style>
  