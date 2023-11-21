<script lang="ts">
    import { onMount } from "svelte";
    import { GetUserPropertiesById, userPropertiesbyid } from "../datas/userproperties";
	  export let profileid:any;
  
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
      {#await onComponentMount then}
      <div class="user-specific">
      <h1 style="font-size: 25px;">{userPropertiesbyid.userName}</h1>
      <minidenticon-svg style="height:10px; width:10px;" username="{userPropertiesbyid.userName}" saturation="60" lightness="50"></minidenticon-svg>
        <p><a href="/follows/{encodeURIComponent(profileid)}">{"Followers: " + userPropertiesbyid.followers}</a></p>
        <p><a href="/following/{encodeURIComponent(profileid)}">{"Following: " + userPropertiesbyid.following}</a></p>
      </div>
      {/await}
    </div>
  </div>
  
  <style>
    .profile-prop {
      position: absolute;
      color: white;
      top: 150px;
      left: 950px;
      background-color: gray;
      align-items: center;
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
    .user-specific{
    background-color: #44444411;
    width: 350px;
    white-space: nowrap;
    cursor: pointer;
    left: 100px;
}
  </style>
  