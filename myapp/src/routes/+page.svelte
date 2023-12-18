<script>
	import { onMount } from 'svelte';
	import SideBarContent from '../components/SideBarContent.svelte';
	import SuggestedPlayLists from '../components/SuggestedPlayLists.svelte';
	import UserComponent from '../components/UserComponent.svelte';
	import { currentUser } from '../datas/user';
	import { exportedsuggestedplaylist } from '../datas/suggestedplaylists';
	import ResponseMessageComponent from '../components/ResponseMessageComponent.svelte';
</script>
<!-- <SideBarContent/> -->

	<div class="centered-div">
		{#key exportedsuggestedplaylist}
			<SuggestedPlayLists />
		{/key}
	</div>

<style>
	.centered-div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: gray;
		padding: 20px;
		border-radius: 25px;
	}
</style>
