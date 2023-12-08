<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    import FollowComponent from '../../../components/FollowComponent.svelte';
    import SideBarContent from '../../../components/SideBarContent.svelte';
    import UserComponent from '../../../components/UserComponent.svelte';
</script>

<FollowComponent followid={data.userdata.id}/>
<!-- <SideBarContent/> -->
<UserComponent/>