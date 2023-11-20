<script lang="ts">
import SideBarContent from "../../../components/SideBarContent.svelte";
import UserComponent from "../../../components/UserComponent.svelte";
import ProfileComponent from "../../../components/ProfileComponent.svelte";
	import { GetUserPropertiesById } from "../../../datas/userproperties";
export let data;
async function onComponentMount() {
    console.log(data.userdata);
  await GetUserPropertiesById(data.userdata.id);
}
</script>
<div class="profile-component-part">
    <ProfileComponent bobid={data.userdata.id}/>
</div>
<SideBarContent/>
<UserComponent/>