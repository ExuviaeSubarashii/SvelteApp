<script lang="ts">
	import { userEmailValue } from "../datas/user";
import { userPropertiesbytoken } from "../datas/userproperties";
import {ChangeEmail} from '../datas/useractivities';
let newEmail:string="";
</script>

<div>
<div>
    <h2 style="color:white;">Username</h2>
    <p style="color: white;">{userPropertiesbytoken.userName}</p>
    <input placeholder="{userEmailValue}" bind:value={newEmail}>
    <br>
    <button on:click={(e)=>ChangeEmail(newEmail)}>Save Profile</button>
</div>
</div>
<style>

</style>