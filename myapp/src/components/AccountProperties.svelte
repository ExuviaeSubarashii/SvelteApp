<script lang="ts">
	import EditProfileComponent from "./EditProfileComponent.svelte";

</script>

<div class="fullbody">
	<div class="edit-profile" />
	<div class="update-card" />
	<div class="account">
		<h3>Account</h3>
		<div>
			<button><i class="bx bx-pencil" /> Edit Profile</button>
		</div>
		<div>
			<button><i class="bx bx-recycle" /> Recover Playlists</button>
		</div>
	</div>
	<div class="payment">
		<h3>Payment</h3>
		<div>
			<button><i class="bx bx-receipt" /> Order History</button>
		</div>
		<div>
			<button><i class="bx bx-credit-card" /> Saved payment cards</button>
		</div>
		<div>
			<button><i class="bx bx-purchase-tag-alt" /> Redeem</button>
		</div>
	</div>
	<div class="security">
		<h3>Security and privacy</h3>
		<div>
			<button><i class="bx bx-purchase-tag-alt" /> Change password</button>
		</div>
		<div>
			<button><i class="bx bx-shape-square" /> Manage apps</button>
		</div>
		<div>
			<button><i class="bx bx-bell" /> Notification Settings</button>
		</div>
		<div>
			<button><i class="bx bx-low-vision" /> Privacy settings</button>
		</div>
		<div>
			<button><i class="bx bx-list-ol" /> Edit login methods</button>
		</div>
		<div>
			<button><i class="bx bx-trash-alt" /> Close account</button>
		</div>
		<div>
			<button><i class="bx bx-right-arrow-alt" /> Sign out everywhere</button>
		</div>
	</div>
</div>

<style>
    .fullbody i{
        border-width: 25px;
        background-color: #535353;
    }
	.account,
	.payment,
	.security {
		align-items: center;
		padding-bottom: 12px;
		background-color: #535353;
		border-radius: 5px;
		width: 100%;
		margin-bottom: 24px;
		margin: 10px;
		padding: 30px;
	}
	.fullbody button {
		font-size: 20px;
		background-color: transparent;
		color: white;
		border: none;
		transition: 0.3s;
        margin:10px 20px;

	}
	.fullbody button:hover {
		background-color: black;
		border-width: 4px;
		border-radius: 10px;
	}
	.fullbody {
		font-size: 20px;
		display: flex;
		flex-flow: column;
		place-content: center flex-start;
		-webkit-box-pack: start;
		align-items: flex-start;
		max-width: 800px;
		min-height: 800px;
		margin: 0px auto;
		padding: 32px 8px;
	}
	.fullbody,
	h3{
		color: white;
        
	}
</style>
