<script lang="ts">
import SideBarContent from "../../../components/SideBarContent.svelte";
import UserComponent from "../../../components/UserComponent.svelte";
import ProfileComponent from "../../../components/ProfileComponent.svelte";
export let data;

</script>
<div class="profile-component-part">
    <ProfileComponent profileid={data.userdata.id}/>
</div>
<SideBarContent/>
<UserComponent/>