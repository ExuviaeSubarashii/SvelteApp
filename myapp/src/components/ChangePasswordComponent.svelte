<script lang="ts">
	import { userEmailValue } from '../datas/user';
	import { userPropertiesbytoken } from '../datas/userproperties';
	import { ChangePassword } from '../datas/useractivities';
	let newPassword: string = '';
	let newPasswordAgain: string = '';
</script>

<div class="fullbody">
	<h1 style="font-size: 50px;">Change your password</h1>
	<p style="color: white;">New Password</p>
	<input bind:value={newPassword} />
	<p style="color: white;">New Password Again</p>
	<input bind:value={newPasswordAgain} />
	<div class="button-div">
		<a type="button" class="cancel-button" href="/account/">Cancel</a>

		<button
			class="save-button"
			on:click={() => {
				if (newPassword === newPasswordAgain) {
					ChangePassword(newPassword);
				}
			}}>Set new password</button
		>
	</div>
</div>

<style>
	.fullbody {
		display: flex;
		flex-flow: column;
		-webkit-box-pack: start;
		margin: 250px auto;
		padding: 62px 800px;
		font-size: 15px;
	}
	.fullbody h1,
	input {
		color: white;
		font-size: large;
		height: 50px;
		margin-top: 5px;
	}
	.button-div{
		align-self: flex-end;
    padding-top: 14px;
    padding: 15px;
    font-weight: bold;
    align-content: center;
	text-align: end;
	font-weight: bolder;
	}

	.save-button {
		background-color: #22ce61;
		margin-top: 14px;
		width: 130px;
		height: 50px;
		border-radius: 20px;
	}
	.cancel-button {
		align-self: self-start;
		text-decoration: none;
		color: gray;
		font-size: 15px;
	}
</style>
