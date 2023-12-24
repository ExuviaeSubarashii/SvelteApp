<script>
	import SuggestedPlayLists from '../components/SuggestedPlayLists.svelte';
	import { exportedsuggestedplaylist } from '../datas/suggestedplaylists';
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
