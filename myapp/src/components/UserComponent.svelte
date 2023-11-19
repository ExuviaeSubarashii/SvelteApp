<script lang="ts">
import userTokenValue from "../datas/user";
let isToggled: any=false;
function handleClick() {
    isToggled = !isToggled;
  }
</script>

{#if userTokenValue}
<div class="top-right-user-component">
    <div class="dropdown" >
        <span>Hover me</span>
        <div class="dropdown-content">
            <a href="/user/account">Account</a>
            <a href="/user/profile">Profile</a>
            <span>Private Session</span>
            <a href="/user/settings">Settings</a>
            <hr>
            <a href="/">Log out</a>
        </div>
    </div>
</div>


{/if}
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