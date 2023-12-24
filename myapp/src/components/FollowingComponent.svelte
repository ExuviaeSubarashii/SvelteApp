<script lang="ts">
	import { onMount } from 'svelte';
	import { minidenticon } from 'minidenticons';
	import { GetFollowings, following } from '../datas/followmanager';

	export var followid: any;
	console.log('following data:' + followid);
	onMount(() => GetFollowings(followid));
</script>

<div class="following-container">
	<h1 class="follow-header">{'Following'}</h1>
	<div class="following-content">
		{#await GetFollowings(followid) then}
			{#each following as follow}
				<div class="user-specific">
					<minidenticon-svg username={follow.userName.trim()} />
					<p><a href="/user/{follow.userId}">{follow.userName}</a></p>
				</div>
			{/each}
		{/await}
	</div>
</div>

<style>
	.following-container {
		position: absolute;
		top: 219px;
		left: 783px;
		width: 600px;
		height: 350px;
		display: flex;
		flex-direction: column;
		border-style: dashed;
		color: white;
	}

	.following-content {
		display: flex;
		align-items: center;
	}

	.follow-header,
	.following p,
	a {
		color: lightgray;
		font-size: 25px;
		text-decoration: none;
		padding-left: 15px;
	}

	.follow-header {
		color: white;
	}

	.user-specific {
		padding: 5px;
		border-style: solid;
		border-radius: 20px;
		background-color: #4b4a4a;
		width: 150px;
		white-space: nowrap;
		overflow: hidden;
		cursor: pointer;
		margin-left: 20px;
	}
</style>
