<script lang="ts">
	import { userEmailValue } from '../datas/user';
	import { userPropertiesbytoken } from '../datas/userproperties';
	import { ChangePassword } from '../datas/useractivities';
	let newPassword: string = '';
	let newPasswordAgain: string = '';
</script>

<div class="fullbody">
	<input bind:value={newPassword} />
	<input bind:value={newPasswordAgain} />
	<button
		on:click={() => {
			if (newPassword === newPasswordAgain) {
				ChangePassword(newPassword);
			}
		}}>Save Password Changes</button
	>
</div>

<style>
	.fullbody {
		position: fixed;
		font-size: 20px;
		display: flex;
		flex-flow: column;
		-webkit-box-pack: start;
		max-width: 800px;
		min-height: 800px;
		margin: 250px auto;
		padding: 62px 800px;
        font-size: 15px;
	}
</style>
