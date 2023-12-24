<script lang="ts">
	import { onMount } from 'svelte';
	import { GetUserPropertiesByToken, userPropertiesbytoken } from '../datas/userproperties';
	import { LogOut } from '../datas/useractivities';
	import { minidenticon } from 'minidenticons';
	let isToggled: any = false;
	function handleClick() {
		isToggled = !isToggled;
	}

	onMount(async ()=>{
		
		await GetUserPropertiesByToken();

	});
</script>

<div class="top-right-user-component">
	<div class="dropdown">
		<span>Hover me</span>
		<div class="dropdown-content">
			<a href="/account">Account <i class="bx bxs-right-top-arrow-circle" /></a>
			<minidenticon-svg username={$userPropertiesbytoken.userName} saturation="50" lightness="50" />
			<a href="/user/{encodeURIComponent($userPropertiesbytoken.userId)}">Profile</a>
			<span>Private Session</span>
			<a href="/user/settings">Settings</a>
			<hr />
			<a href="/" on:click={LogOut}>Log out</a>
		</div>
	</div>
</div>

<style>
	minidenticon-svg {
		width: 	50px;
		height: 50px;
		border-radius: 50%;
		background-color: transparent;
		margin: 5px;
	}
	.top-right-user-component {
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
	.dropdown-content a,
	span {
		color: lightgray;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		text-align: center;
	}
</style>
