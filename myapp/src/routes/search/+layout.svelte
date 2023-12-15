<script lang="ts">
	import { goto } from "$app/navigation";
    import { page } from '$app/stores';
	import { Search } from "../../datas/search";
let text='';
async function GotoThatPage(){
const route=`${$page.url}/${text}`
await goto(route);
}
</script>
<slot/>

<div class="fullbody">
    <div class="search">
        <input class="search-input" placeholder="What do you want to listen to?"
        bind:value={text}>
        <button on:click={GotoThatPage}>Search</button>
    </div>
    <div>
        Browse All
    </div>
</div>


<style>
.fullbody{
    color:white;
    left: 450px;
    position: fixed;
    display: grid;
    align-items: center;
}
.search-input{
    background-color: #333232;
    color:gray;
    border-radius: 20px;
    width: 270px;
    height: 40px;
    border-style: solid;
}
</style>