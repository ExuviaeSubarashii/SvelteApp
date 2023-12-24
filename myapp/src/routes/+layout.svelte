<script>
	import SideBarContent from '../components/SideBarContent.svelte';
	import UserComponent from '../components/UserComponent.svelte';
	import currentUser from '../datas/user';
</script>

<slot />
<aside>
	<SideBarContent />
</aside>
{#if currentUser.isLoggedIn}
<UserComponent />
{/if}
