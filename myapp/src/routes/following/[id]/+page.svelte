<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    import SideBarContent from '../../../components/SideBarContent.svelte';
    import UserComponent from '../../../components/UserComponent.svelte';
	import FollowingComponent from '../../../components/FollowingComponent.svelte';
</script>

<FollowingComponent followid={data.userdata.id}/>
<SideBarContent/>
<UserComponent/>