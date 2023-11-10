<script lang="ts">
import GetSongs from '../../components/PlayListPage.svelte';
import SideBarContent from '../../components/SideBarContent.svelte';

import exportedId from '../../components/PlayLists.svelte'
</script>
<SideBarContent/>
<div class="centered-div">
    <GetSongs/>
</div>
<style>
    .centered-div {
        width:1080px;
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: lightblue;
            padding: 20px;
        }
</style>