<script lang="ts">
	import { onMount } from 'svelte';
	import {
		GetUserPropertiesById,
		userPropertiesbyid,
		userPropertiesbytoken
	} from '../datas/userproperties';
	import { currentUser } from '../datas/user';
	import { FollowUser, UnFollowUser } from '../datas/followmanager';
	export let profileid: any;
	var userprops: any = [];

	onMount(async () => {
		await GetUserPropertiesById(profileid);
		userprops = userPropertiesbyid;
		console.log('Currently visited profile:', userprops);
	});

	$: userName = userprops.userName;
	$: userid = userprops.userId;
	$: followers = userprops.followers;
	$: following = userprops.following;
	$: isFollowing = userprops.isFollowing;
</script>

<div>
	<div class="profile-prop">
		<div style="display: grid;grid-auto-flow: column;">
			<h4>Profile</h4>
			{#if $userPropertiesbytoken.userId != profileid && currentUser.isLoggedIn}
				{#if isFollowing === true}
					<button on:click={() => UnFollowUser(userid)}>Following</button>
				{:else}
					<button on:click={() => FollowUser(userid)}>Follow</button>
				{/if}
			{/if}
		</div>
		<div class="user-specific">
			<h1>{userName}</h1>
			<minidenticon-svg
				style="height:10px; width:10px;"
				username={userName}
				saturation="60"
				lightness="50"
			/>
			<p><a href="/follows/{encodeURIComponent(profileid)}">{'Followers: ' + followers}</a></p>
			<p><a href="/following/{encodeURIComponent(profileid)}">{'Following: ' + following}</a></p>
		</div>
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
		font-size: 20px;
	}

	.profile-prop h1 {
		font-size: 50px;
		text-align: center;
	}

	.profile-prop a {
		text-decoration: none;
		color: lightgray;
	}
	.user-specific {
		background-color: #44444411;
		width: 350px;
		white-space: nowrap;
		cursor: pointer;
		left: 100px;
	}
</style>
