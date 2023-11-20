<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    import FollowComponent from '../../../../components/FollowComponent.svelte';
</script>

<FollowComponent followid={data.userdata.id}/>