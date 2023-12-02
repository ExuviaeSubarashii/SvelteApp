<script lang="ts">
	import { onMount } from 'svelte';
	import { minidenticon } from 'minidenticons';
	import { GetFollowings, following } from '../datas/followmanager';

	export var followid: any;
	console.log('follower data:' + followid);
	onMount(() => GetFollowings(followid));
</script>

<div class="following">
	<h1>{'Following'}</h1>
	{#await GetFollowings(followid) then}
		{#each following as follow}
			<div class="user-specific">
				<minidenticon-svg username={follow.userName.trim()} />
				<p><a href="/user/{follow.userId}" target="_blank">{follow.userName}</a></p>
			</div>
		{/each}
	{/await}
</div>

<style>
	.following {
		border-style: dashed;
		position: absolute;
		color: white;
		top: 150px;
		left: 950px;
		width: 500px;
		height: 350px;
		font-size: medium;
	}
	.following p,
	a,
	h1 {
		font-size: 25px;
		text-decoration: none;
		left: 20px;
		padding-left: 15px;
	}
	.user-specific {
		background-color: #44444411;
		width: 150px;
		white-space: nowrap;
		overflow: hidden;
		cursor: pointer;
		left: 0;
	}
</style>
