<script lang="ts">
	import { onMount } from "svelte";
import { GetUserProperties,userProperties } from "../datas/userproperties";
let properties: any[] = [];
async function onComponentMount() {
  await GetUserProperties();
  properties = userProperties;
}

onMount(onComponentMount);
</script>
<div>

    <div class="profile-prop" role="row">
        <h4>Profile</h4>
        <h1 style="font-size: 25px;">{userProperties.userName}</h1>
        <p>{"Followers "+userProperties.followers}</p>
        <p>{"Following "+userProperties.following}</p>
    </div>
</div>
<style>
.profile-prop{
    position: absolute;
    color:white;
    top: 150px;
    left: 950px;
    background-color: gray;
    width: 500px;
    height: 350px;
}
.profile-prop p{
    font-size: 30px;
    text-align: center;
}
.profile-prop h4{
    font-size: 30px;
}
.profile-prop h1{
    font-size: 150px;
    text-align: center;
}
</style>