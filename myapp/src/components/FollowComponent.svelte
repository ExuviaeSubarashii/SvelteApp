<script lang="ts">
	import { onMount } from 'svelte';
import {GetFollowers,followers} from '../datas/followmanager';
export let followid:any;
async function onComponentMount() {
    console.log("follower data:"+followid);
   await (GetFollowers(followid));
    }
  
    onMount(onComponentMount);
</script>

<div class="followers">
    <h1>{followers.requestType}</h1>
    {#each followers as follow}
    <p><a href="/user/{follow.userId}">{follow.userName}</a></p>
    {/each}
</div>
<style>
.followers{
    border-style: dashed;
}
</style>
