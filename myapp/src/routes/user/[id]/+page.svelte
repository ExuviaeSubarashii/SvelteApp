<script lang="ts">
import SideBarContent from "../../../components/SideBarContent.svelte";
import UserComponent from "../../../components/UserComponent.svelte";
import ProfileComponent from "../../../components/ProfileComponent.svelte";
export let data;
</script>
{#key data.props.userdata.id}
    
<div class="profile-component-part">
    <ProfileComponent profileid={data.props.userdata.id}/>
</div>
{/key}
<!-- <SideBarContent/> -->

