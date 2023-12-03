<script lang="ts">
	import { onMount } from "svelte";
import userTokenValue from "../datas/user";
import { GetUserPropertiesByToken, userPropertiesbytoken } from "../datas/userproperties";
import { LogOut } from "../datas/useractivities";
import { minidenticon } from 'minidenticons'
var userprops:any=[];
let isToggled: any=false;
function handleClick() {
    isToggled = !isToggled;
  }
async function onComponentMount() {
  await GetUserPropertiesByToken();
  userprops=userPropertiesbytoken;
}

onMount(onComponentMount);
</script>


<div class="top-right-user-component">
    <div class="dropdown" >
        <span>Hover me</span>
        <minidenticon-svg style="height:10px; width:10px;" username="{userPropertiesbytoken.userName}" saturation="60" lightness="50"></minidenticon-svg>
        <div class="dropdown-content">
            <a href="/account" target="_blank">Account <i class='bx bxs-right-top-arrow-circle'></i></a>
            <a href="/user/{encodeURIComponent(userprops.userId)}">Profile</a>
            <span>Private Session</span>
            <a href="/user/settings">Settings</a>
            <hr>
            <a href="/" on:click={LogOut}>Log out</a>
        </div>
    </div>
</div>


<style>
.top-right-user-component{
  border-style: outset;
  border-radius: 25px;
    position: fixed;
    top: 50px;
    right: 120px;
    color: white;
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #121212;
      border-style: ridge;
      border-radius: 25px;
      text-align: center;
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }
    .dropdown:hover .dropdown-content {
      display: block;
    }
    .dropdown-content a,span {
      color: lightgray;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: center;
    }
</style>