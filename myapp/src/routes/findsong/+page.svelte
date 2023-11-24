<script lang="ts">
	import { onMount } from "svelte";
    import { showComponent } from "../../datas/store";
	import { SetCurrentSong } from "../../datas/listening";
	import { FindSongs, songs } from "../../datas/findsongs";
	import UserComponent from "../../components/UserComponent.svelte";
	import SideBarContent from "../../components/SideBarContent.svelte";
	import FindSongsComponent from "../../components/FindSongsComponent.svelte";
    </script>
    <FindSongsComponent/>
<UserComponent/>
<SideBarContent/>
