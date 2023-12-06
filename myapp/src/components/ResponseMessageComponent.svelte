<script lang="ts">
	import { onMount } from "svelte";
	import { responseMessageStore } from "../datas/playlisthandler";
	import { writable } from "svelte/store";

	let message: any = '';
	let isVisible=writable(true);
	onMount(()=>{
		const unsubscribe=responseMessageStore.subscribe((value)=>{
			message=value;
			isVisible.set(true);
			setTimeout(() => {
			isVisible.set(false)
		}, 1000);
		})
		return unsubscribe;
	})
</script>
{#key $responseMessageStore}
	
{#if $isVisible}
<div class="response-div">
	<h1>{message}</h1>
</div>
{/if}
{/key}

<style>
	.response-div {
		border-style: outset;
		border-radius: 25px;
		position: fixed;
		top: 50px;
		right: 15%;
		color: white;
		font-size: 10px;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
</style>
