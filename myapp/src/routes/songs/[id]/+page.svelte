<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import SideBarContent from '../../../components/SideBarContent.svelte';
	import UserComponent from '../../../components/UserComponent.svelte';
	import PlayListPage from '../../../components/PlayListPage.svelte';
    console.log("playlistid:", data.props.playlistdata.id);
</script>
<SideBarContent />
{#key data.props.playlistdata.id }
<div class="centered-div">
	<PlayListPage exportedIdfromdata={data.props.playlistdata.id}/>
</div>
{/key}
<UserComponent />
