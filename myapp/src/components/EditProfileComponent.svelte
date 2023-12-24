<script lang="ts">
	import { currentUser } from "../datas/user";
import {ChangeEmail} from '../datas/useractivities';
let newEmail:string="";
</script>

<div>
<div>
    <h2 style="color:white;">Username</h2>
    <p style="color: white;">{currentUser.userEmail}</p>
    <input placeholder="{currentUser.userEmail}" bind:value={newEmail}>
    <br>
    <button on:click={(e)=>ChangeEmail(newEmail)}>Save Profile</button>
</div>
</div>
<style>

</style>