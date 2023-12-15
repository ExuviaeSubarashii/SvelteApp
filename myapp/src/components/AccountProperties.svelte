<script lang="ts">
	import UserComponent from "./UserComponent.svelte";


</script>
<div class="fullbody">
	<div class="edit-profile" />
	<div class="update-card" />
	<div class="account">
		<h3>Account</h3>
		<div>
			<button>
				 <i class="bx bx-pencil" /> 
				<a href="/account/profile" >Edit Profile</a>
				</button>
		</div>
		<div>
			<button><i class="bx bx-recycle" /> <a href="/account/recover-playlists" >Recover Playlists</a></button>
		</div>
	</div>
	<div class="payment">
		<h3>Payment</h3>
		<div>
			<button><i class="bx bx-receipt" /> <a href="/account/order-history" >Order History</a></button>
		</div>
		<div>
			<button><i class="bx bx-credit-card" /> <a href="/account/cards" >Saved payment cards</a></button>
		</div>
		<div>
			<button><i class="bx bx-purchase-tag-alt" /> <a href="/account/redeem" >Redeem</a></button>
		</div>
	</div>
	<div class="security">
		<h3>Security and privacy</h3>
		<div>
			<button><i class="bx bx-purchase-tag-alt" /> <a href="/account/change-password">Change password</a></button>
		</div>
		<div>
			<button><i class="bx bx-shape-square" /> <a href="/account/manage-apps" >Manage apps</a></button>
		</div>
		<div>
			<button><i class="bx bx-bell" /> <a href="/account/notifications" >Notification Settings</a></button>
		</div>
		<div>
			<button><i class="bx bx-low-vision" /> <a href="/account/privacy" >Privacy settings</a></button>
		</div>
		<div>
			<button><i class="bx bx-list-ol" /> <a href="/account/login-methods" >Edit login methods</a></button>
		</div>
		<div>
			<button><i class="bx bx-trash-alt" /> <a href="/account/close-account" >Close account</a></button>
		</div>
		<div>
			<button><i class="bx bx-right-arrow-alt" /> <a href="/account/sign-out" >Sign out everywhere</a></button>
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
		background-color: #333333;
		border-radius: 5px;
		width: 100%;
		margin-bottom: 24px;
		margin: 10px;
		padding: 30px;
	}
	.fullbody i{
		background-color: gray;
	    border-radius: 15px;
		font-size: 40px;
		align-items: center;
	}
	.fullbody button,a {
		font-size: 20px;
		background-color: transparent;
		color: white;
		border: none;
		transition: 0.3s;
        margin:10px 20px;
		text-decoration: none;
		cursor: pointer;

	}
	.fullbody button:hover {
		background-color: black;
		border-width: 4px;
		border-radius: 10px;
		width: 100%;
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
